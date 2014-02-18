(ns dojo.handler
  (:use [compojure core]
        [dojo views]
        [dojo core])
  (:require [compojure.handler :as handler]
            [compojure.route :as route]
            [compojure.response :as response]
            [ring.middleware.edn :as middle]
            [hiccup.bootstrap.middleware :as bootstrap]))

(defroutes app-routes
  (GET "/" [] (index))
  (POST "/save" [result-set] {:status 200 :body (save-game result-set)})
  (route/resources "/")
  (route/not-found "Not Found"))

(def app
  (-> app-routes
      handler/site
      bootstrap/wrap-bootstrap-resources
      middle/wrap-edn-params))


