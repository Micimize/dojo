(ns dojo.interface
  (:require [dojo.multiplication-game :as multiplication-game]
            [clojure.browser.repl :as repl]
            [ajax.core :refer [PUT]]
            [jayq.core :refer [$] :as jq]))

(defn create-user [username]
  (PUT "/create-user" {:params {:username username}
                       #_:handler #_(fn [response] (u/qlog response))}))

($ (fn []
   (repl/connect "http://localhost:9000/repl")
     (.click ($ :#play) (fn [] (create-user (.val ($ :#username)))
                          (multiplication-game/play)))))
