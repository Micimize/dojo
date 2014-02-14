(ns composed.views
  (:use [hiccup core page]
        [garden core])
  (:require [hiccup.bootstrap.page :as bootstrap]))

(def style [[:.container.well {:text-align "center"
                               :margin "5%"}
             [:div.lead {:line-height "333%"}
              [:input {:text-align "center"
                       :width "60%"
                       :margin-bottom "10%"
                       :padding "5%"}]
              [:button {:width "40%"
                        :margin "auto"
                        :padding "5%"}]]]
            [:#multiplication-game {:display "none"}
             [:table [:tr [:td {:line-height "inherit"}]
                      [:.fill-cell {:padding "0"}
                       [:input {:width "90%" :height "100%" :border-radius "0"}]
                       [:button {:width "100%" :height "122%"
                                 :border-bottom-left-radius "0"
                                 :border-top-left-radius "0" }]]]]]])


(defn input-field [id placeholder]
  [:input {:type "number" :id id
           :placeholder placeholder} ])

(defn multiplication-game []
  [:div {:id "multiplication-game" :class "table-responsive"}
   [:table {:class "lead table table-hover table-bordered" :id "answertable"}
    [:tr {:class "info" :id "current-problem"}
     [:th {:id "multiplicand"} 123]
     [:th {:id "multiplier"} 12]
     [:th {:class "fill-cell"} (input-field "answer" "answer")]
     [:th {:class "fill-cell"}
      [:button {:id "enter"
                :class "btn btn-primary"
                :type "button"} "enter"]]]]])

(defn index []
  (html5
   [:head
    [:title "MJR"]
    [:script {:src "http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"}]
    [:script {:src "/js/main.js"}]
    (bootstrap/include-bootstrap)
    [:meta {:name "viewport" :content "width=device-width, initial-scale=1"}]
    [:style (css style)]]
   [:body [:div {:class "container well"}
     [:div {:id "multiplication" :class "lead"}
      "Multiplication"
      (input-field "digits" "digits")
      (input-field "rounds" "rounds")
      [:button {:id "play" :class "lead btn btn-primary btn-lg btn-block"} "GO"]]
     (multiplication-game)]]))

