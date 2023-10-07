import { useConnectionStatus } from "@thirdweb-dev/react";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center RNS">
      <Head>
        <title>HomeDapp - Revolutionizing Home Registration</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-grow flex flex-col items-start justify-start text-center relative">
        <section className="bg-transparent rounded-lg p-5 m-2 md:p-10 md:m-5 absolute left-0 top-1/2 transform -translate-y-1/2">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold mb-4 text-left"
          >
            Welcome to <span className="">HomeDapp</span>!
          </motion.h1>

          <motion.p
            initial={{ y: -250 }}
            animate={{ y: -10 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
            className="text-lg md:text-2xl text-green-600 mb-4 text-left"
          >
            Revolutionizing Home Registration with Ethereum DApp
          </motion.p>

          <div className="mt-4 md:mt-8">
            <Link href={"/login"}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-3 py-2 md:px-5 md:py-3 bg-blue-700 rounded-lg shadow-lg text-white font-semibold uppercase tracking-wide hover:bg-blue-600"
              >
                Get Started
              </motion.button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
