(ns dojo.startserver
  (:require [dojo.handler]
            [ring.server.standalone]))

(ring.server.standalone/serve dojo.handler/app {:port 3000})
