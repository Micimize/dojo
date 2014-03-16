(ns dojo.multiplication-game
  (:require [clojure.browser.repl :as repl]
            [cljs.core.async :refer [chan put! take! <! >! pipe] :as async]
            [hiccups.runtime :as hiccupsrt]
            [jayq.core :refer [$] :as jq]
            [ajax.core :refer [GET POST]]
            [dojo.utils :as u])
  (:require-macros [cljs.core.async.macros :as m :refer [go alt!]]
                   [hiccups.core :as hiccups]))

(defn get-problem [digits]
  (let [a (u/random-number digits)
        b (u/random-number digits)]
        {:a a :b b :c (* a b)}))

(defn problem-set [digits rounds]
  (take rounds (repeatedly #(get-problem digits))))

(defn pose-problem [{:keys [a b c]}]
  (go (>! (u/html-chan :#multiplicand) a)
      (>! (u/html-chan :#multiplier) b)
      (>! (u/val-chan :#answer) "")
      (>! (u/select-chan :#answer) "")))

(defn answer-row [{:keys [a b c]} guess]
  (let [row-class (if (= c guess) "success" "error")]
    (hiccups/html [:tr {:class row-class}
       [:td a] [:td b] [:td c] [:td guess]])))

(defn log-answer [problem elapsed]
  (let [table-append (u/after-chan :#current-problem)
        guess (u/get-int-value :#answer)]
    (go (>! table-append (answer-row problem guess)))
    (merge problem {:guess guess} {:elapsed elapsed})))

(defn game [problem-set]
  (let [answer-click (u/click-chan :#enter)
        answer-enter (u/keypress-chan :#answer)]
    (go (loop [current-problem (first problem-set)
               coming-problems (rest problem-set)
               answers ()
               start-time (new js/Date)]
          (pose-problem current-problem)
          (pipe answer-enter answer-click)
          (<! answer-click)
          (when-not (empty? coming-problems)
            (recur
             (first coming-problems)
             (rest coming-problems)
             (concat answers [(log-answer current-problem (u/elapsed-interval start-time))])
             (new js/Date)))
          (concat answers [(log-answer current-problem (u/elapsed-interval start-time))])))))

(defn results [])
(defn save [round] (POST "/save" {:params {:username (.val ($ :#username))
                                           :round round}
                                  :handler (fn [response] (u/qlog response))}))

(defn play []
   (repl/connect "http://localhost:9000/repl")
     (.slideDown ($ :#multiplication-game))
     (.slideUp ($ :#multiplication))
     (take!
      (game (problem-set (u/get-int-value :#digits)
                         (u/get-int-value :#rounds)))
      (fn [round] (save round))))
