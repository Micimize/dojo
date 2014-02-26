(ns dojo.core
  (:require [clojure.tools.logging :as log]
            [datomic.api :as d]))

(defn create-db []
  (let [uri "datomic:mem://localhost:4334/dojo"]
    (d/delete-database uri)
    (d/create-database uri)
    (d/transact (d/connect uri) (load-file "resources/schema.edn"))))

(create-db)
(def conn (d/connect "datomic:mem://localhost:4334/dojo"))

(defn save-question [{:keys [a b guess]}]
  (let [question-id (d/tempid :db.part/user)]
    (d/transact conn [{:db/id question-id
                       :question/multiplicand (biginteger a)
                       :question/multiplier (biginteger b)
                       :question/guess (biginteger guess)}])
    question-id))

(defn save-round [round]
  (let [round-id (d/tempid :db.part/user)]
    (loop [questions round]
      (d/transact conn [{:db/id round-id
                         :round/question (save-question (first questions))}])
      (when-not (empty? (rest questions))
        (recur (rest questions))))))

(save-round '({:a 1 :b 2 :guess 3}))

;experimenting with datalog. It's wierd
(d/q '[:find ?multiplicand ?multiplier ?guess
       :where [_ :question/guess ?guess]
              [_ :question/multiplier ?multiplier]
              [_ :question/multiplicand ?multiplicand]]
     (d/db conn))
