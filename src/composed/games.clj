(ns composed.games
  (:require [clojure.string :as string]))

(defn random-number [length]
  (Long.
   (string/join (take length
                   (repeatedly #(rand-int 10))))))

(defn time-seconds [start end]
  (double (/ (- end start) 1000)))

(defn multiplication[digits rounds correct]
  (loop [rounds rounds
         correct correct]
    (if (<= rounds 0)
      correct
      (let [multiplicand (random-number digits)
            multiplier (random-number digits)
            correct-answer (* multiplicand multiplier)
            start-round (System/currentTimeMillis)]
        (println multiplicand " * " multiplier)
        (let [guess (Integer. (read-line))
              guess-time (time-seconds start-round (System/currentTimeMillis))]
          (println (if (= correct-answer guess)
                     "correct!"
                     (str "wrong! the correct answer is " correct-answer))
                   "that took you" guess-time "seconds")
          (if (= correct-answer guess)
            (recur (dec rounds) (inc correct))
            (recur (dec rounds) correct)))))))

(defn multiplication-runner [digits rounds]
  (let [start (System/currentTimeMillis)
        correct (multiplication digits rounds 0)
        game-time (time-seconds start (System/currentTimeMillis))]
    (println rounds "rounds,"
             correct "correct,"
             (/ game-time rounds) "average time,"
             game-time "total time")))

(defn -main [& args]
  (println "What is your level?")
  (multiplication-runner (Integer. (read-line)) 10))


(defn summation-zero-n-helper [n sum]
  (if (= n 0)
    sum
    (summation-zero-n-helper (- n 1) (+ sum n))))

(defn summation-zero-n [n]
  (summation-zero-n-helper n 0))

