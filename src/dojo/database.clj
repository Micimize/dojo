(ns dojo.database
  (:require [datomic.api :as d :refer [db q]]))
(def uri "datomic:mem://dojo")

(defn create-or-replace-db [{:keys [uri schema]}]
  (d/delete-database uri)
  (d/create-database uri)
  @(d/transact (d/connect uri) (load-file schema)))

(create-or-replace-db {:uri uri :schema "resources/schema.edn"})

(defn get-conn []
  (d/connect uri))

(defn get-db []
  (d/db (get-conn)))

(defn create-user [username]
  (d/transact (get-conn) [{:db/id (d/tempid :db.part/user)
                     :user/name username}])
  "success")

(defn qe
  "Returns the single entity returned from a query"
  [query db & args]
  (let [result (apply d/q query db args)]
    (d/entity db (ffirst result))))

(defn find-e-by
  "Returns the unique entity identified by attr and val.
   Ex: (find-by :user/uid 42)"
  [attr val]
  (qe '[:find ?e
        :in $ ?attr ?val
        :where [?e ?attr ?val]]
      (get-db) attr val))

(defn find-eid-by [attr val]
  (:db/id (find-e-by attr val)))

(defn find-user-e [username]
  (ffirst (d/q `[:find ?e
                 :where [?e :user/name ~username]]
               (get-db))))

(defn get-summary [username]
  (.touch (find-e-by :user/name username))
  )

(defn save-question [{:keys [a b guess]}]
  {:round/question {:question/multiplicand (biginteger a)
   :question/multiplier (biginteger b)
   :question/guess (biginteger guess)}})

(defn save-round [{:keys [username round]}]
    @(d/transact (get-conn) [{:db/id (find-eid-by :user/name username)
                       :user/round (vec (map save-question round))}])
  "(find-user username)")
