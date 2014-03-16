(ns dojo.handler
  (:use [compojure core]
        [dojo views]
        [dojo core])
  (:require [compojure.handler :as handler]
            [compojure.route :as route]
            [compojure.response :as response]
            [ring.middleware.edn :as middle]
            [hiccup.bootstrap.middleware :as bootstrap]
            [dojo.database :as db]))

(defroutes app-routes
  (GET "/" [] (index))
  (POST "/save" {params :params} (do (prn params)
                                   {:status 200 :body (db/save-round params)}))
  (PUT "/create-user" [username] {:status 200 :body (db/create-user username)})
  (route/resources "/")
  (route/not-found "Not Found"))

(def app
  (-> app-routes
      middle/wrap-edn-params
      handler/site
      bootstrap/wrap-bootstrap-resources))
