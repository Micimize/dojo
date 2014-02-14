(ns composed.handler
  (:use [compojure core]
        [composed views]
        [composed core])
  (:require [compojure.handler :as handler]
            [compojure.route :as route]
            [hiccup.bootstrap.middleware :as bootstrap]))

(defroutes app-routes
  (GET "/" [] (index))
  (POST "/save" [round-list] (save-game round-list))
  (route/resources "/")
  (route/not-found "Not Found"))

(def app
  (bootstrap/wrap-bootstrap-resources (handler/site app-routes)))


