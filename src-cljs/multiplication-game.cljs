(ns multiplication-game
  (:require [clojure.string :as string]
            [clojure.browser.repl :as repl]
            [cljs.core.async :refer [chan put! take! <! >! pipe] :as async]
            [jayq.core :refer [$] :as jq]
            [hiccups.runtime :as hiccupsrt]
            [cljs-time.core :refer [interval in-seconds] :as tim]
            [ajax.core :refer [GET POST]])
  (:require-macros [cljs.core.async.macros :as m :refer [go alt!]]
                   [hiccups.core :as hiccups]))

(defn get-int-value [selector]
  (js/parseInt (.val ($ selector))))

(defn data-from-event [event]
  (-> event .-currentTarget $ .data (js->clj :keywordize-keys true)))

(defn click-chan [selector msg-name]
  (let [rc (chan)]
    (.click ($ selector)
        (fn [e]
          (jq/prevent e)
          (put! rc [msg-name (data-from-event e)])))
    rc))

(defn keypress-chan [selector msg-name]
  (let [rc (chan)]
    (.keypress ($ selector)
            (fn [e]
              (if (= (. e -keyCode) 13)
                (do (jq/prevent e)
                  (put! rc [msg-name (data-from-event e)])))))
    rc))

(defn html-chan [selector msg-name]
  (let [rc (chan)]
    (go (.html ($ selector)
          (<! rc)))
    rc))

(defn val-chan [selector msg-name]
  (let [rc (chan)]
    (go (.val ($ selector)
          (<! rc)))
    rc))

(defn select-chan [selector msg-name]
  (let [rc (chan)]
    (.select ($ selector))
    rc))

(defn after-chan [selector msg-name]
  (let [rc (chan)]
    (go (.after ($ selector)
          (<! rc)))
    rc))

(defn random-number [length]
   (js/parseInt (string/join (take length (repeatedly #(rand-int 9))))))

(defn time-seconds [start end]
  (double (/ (- end start) 1000)))

(defn get-problem [digits]
  (let [a (random-number digits)
        b (random-number digits)]
        {:a a :b b :c (* a b)}))

(defn problem-set [digits rounds]
  (take rounds (repeatedly #(get-problem digits))))

(defn pose-problem [{:keys [a b c]}]
  (go (let [multiplicand-html (html-chan :#multiplicand "new problem")
            multiplier-html (html-chan :#multiplier "new problem")
            answer-val (val-chan :#answer "new problem")
            select-answer (select-chan :#answer "new problem")]
        (>! multiplicand-html a)
        (>! multiplier-html b)
        (>! answer-val "")
        (>! select-answer ""))))

(defn answer-row [{:keys [a b c]} guess]
  (let [row-class (if (= c guess) "success" "error")]
    (hiccups/html [:tr {:class row-class}
       [:td a] [:td b] [:td c] [:td guess]])))

(defn log-answer [problem elapsed]
  (let [table-append (after-chan :#current-problem "answered problem")
            guess (get-int-value :#answer)]
        (go (>! table-append (answer-row problem guess)))
    (merge problem {:guess guess} {:elapsed elapsed})))

(defn elapsed-interval [start]
  (interval start (new js/Date)))

(defn game [problem-set]
  (let [answer-click  (click-chan :#enter "enter")
        answer-enter  (keypress-chan :#answer "enter")
        result-chan (chan)]
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
             (concat answers [(log-answer current-problem (elapsed-seconds start-time))])
             (new js/Date)))
          (>! result-chan (concat answers [(log-answer current-problem (elapsed-seconds start-time))]))))
    result-chan))

(defn play []
   (repl/connect "http://localhost:9000/repl")
     (.slideDown ($ :#multiplication-game))
     (.slideUp ($ :#multiplication))
     (let [result-chan (game (problem-set (get-int-value :#digits)
                        (get-int-value :#rounds)))]
     (go (.log js/console (pr-str (POST "/save" {:params (<! result-chan)}))))))
