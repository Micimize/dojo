(ns dojo.database-test
  (:require [datomic.api :as d]
            [expectations :refer :all]
            [dojo.database :refer :all]))

(def testuser "micimize")
(def test-uri "datomic:mem://dojo-test")

(create-or-replace-db {:uri test-uri :schema "resources/schema.edn"})

(defn load-test-data {:expectations-options :before-run} []
  (with-redefs [uri test-uri]
    (create-user testuser)))

(expect testuser
        (with-redefs [uri test-uri]
          (:user/name (.touch (find-e-by :user/name testuser)))))
