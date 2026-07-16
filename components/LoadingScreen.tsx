"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete?: () => void;
}

export default function LoadingScreen({
  onComplete,
}: LoadingScreenProps) {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {

      setLoading(false);

      onComplete?.();

    }, 2200);

    return () => clearTimeout(timer);

  }, [onComplete]);

  return (

    <AnimatePresence>

      {loading && (

        <motion.div

          initial={{ opacity: 1 }}

          exit={{
            opacity: 0,
            transition: {
              duration: .8
            }
          }}

          className="
          fixed
          inset-0
          z-[9999]
          flex
          items-center
          justify-center
          bg-white
          "

        >

          <motion.div

            initial={{
              opacity:0
            }}

            animate={{
              opacity:1
            }}

            transition={{
              duration:.6
            }}

            className="text-center"

          >

            <motion.div

              initial={{
                letterSpacing:"0.8em",
                opacity:0
              }}

              animate={{
                letterSpacing:"0.18em",
                opacity:1
              }}

              transition={{
                duration:1.4,
                ease:"easeOut"
              }}

              className="
              uppercase
              text-sm
              tracking-[0.35em]
              text-slate-500
              "

            >

              Managing Director

            </motion.div>

            <motion.h1

              initial={{
                y:40,
                opacity:0
              }}

              animate={{
                y:0,
                opacity:1
              }}

              transition={{
                delay:.3,
                duration:1
              }}

              className="
              mt-8
              text-6xl
              lg:text-8xl
              font-semibold
              tracking-tight
              "

            >

              Wilhelm Hitz

            </motion.h1>

            <motion.div

              initial={{
                width:0
              }}

              animate={{
                width:160
              }}

              transition={{
                delay:1.1,
                duration:.8
              }}

              className="
              h-[2px]
              bg-[#C8A96A]
              mx-auto
              mt-12
              "

            />

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>

  );

}