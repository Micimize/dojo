(ns composed.interface
  (:require [multiplication-game :as multiplication-game]
            [clojure.browser.repl :as repl]
            [jayq.core :refer [$] :as jq]))


($ (fn []
   (repl/connect "http://localhost:9000/repl")
   (.click ($ :#play) multiplication-game/play)))
