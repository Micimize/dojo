(ns dojo.utils
  (:require [clojure.string :as string]
            [cljs.core.async :refer [chan put! take! <! >! pipe] :as async]
            [jayq.core :refer [$] :as jq]
            [cljs-time.core :refer [interval] :as tim]
            [ajax.core :refer [GET POST]])
  (:require-macros [cljs.core.async.macros :as m :refer [go alt!]]
                   [hiccups.core :as hiccups]))

(defn random-number [length]
   (js/parseInt (string/join (take length (repeatedly #(rand-int 9))))))

(defn time-seconds [start end]
  (double (/ (- end start) 1000)))

(defn elapsed-interval [start]
  (interval start (new js/Date)))

(defn qlog [message] (.log js/console (pr-str message)))

(defn get-int-value [selector]
  (js/parseInt (.val ($ selector))))

(defn data-from-event [event]
  (-> event .-currentTarget $ .data (js->clj :keywordize-keys true)))

(defn click-chan [selector]
  (let [rc (chan)]
    (.click ($ selector)
        (fn [e]
          (jq/prevent e)
          (put! rc ["bullshit" (data-from-event e)])))
    rc))

(defn keypress-chan [selector]
  (let [rc (chan)]
    (.keypress ($ selector)
            (fn [e]
              (if (= (. e -keyCode) 13)
                (do (jq/prevent e)
                  (put! rc ["bullshit" (data-from-event e)])))))
    rc))

(defn html-chan [selector]
  (let [rc (chan)]
    (go (.html ($ selector)
          (<! rc)))
    rc))

(defn val-chan [selector]
  (let [rc (chan)]
    (go (.val ($ selector)
          (<! rc)))
    rc))

(defn after-chan [selector]
  (let [rc (chan)]
    (go (.after ($ selector)
          (<! rc)))
    rc))

(defn select-chan [selector]
  (let [rc (chan)]
    (.select ($ selector))
    rc))
