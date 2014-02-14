(defproject composed "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/tools.logging "0.2.6"]
                 [compojure "1.1.5"]
                 [hiccup "1.0.3"]
                 [garden "0.1.0-beta6"]
                 [hiccup-bootstrap "0.1.2"]
                 [lein-cljsbuild "1.0.2"]
                 [org.clojure/clojurescript "0.0-2156"]
                 [jayq "2.5.0"]
                 [hiccups "0.3.0"]
                 [org.clojure/core.async "0.1.256.0-1bf8cf-alpha"]
                 [cljs-ajax "0.2.3"]
                 [com.andrewmcveigh/cljs-time "0.1.1"]]
  :plugins [[lein-ring "0.8.5"]
            [lein-cljsbuild "1.0.2"]]
  :cljsbuild {:repl-listen-port 9000
              :builds [{:source-paths ["src-cljs"]
                        :compiler {:output-to "resources/public/js/main.js"
                                   :optimizations :whitespace
                                   :pretty-print true}}]}
  :ring {:handler composed.handler/app}
  :main composed.games
  :profiles
  {:dev {:dependencies [[ring-mock "0.1.5"]]}})
