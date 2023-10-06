import { useConnectionStatus } from "@thirdweb-dev/react";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-yellow-400 via-blue-700 to-green-400">
      <Head>
        <title>HomeDapp - Revolutionizing Home Registration</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-grow flex flex-col items-center justify-center text-center">
        <section className="bg-white rounded-lg shadow-lg p-5 m-2 md:p-10 md:m-5">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl text-purple-600 font-bold mb-4"
          >
            Welcome to <span className="text-yellow-500">HomeDapp</span>!
          </motion.h1>

          <motion.p
            initial={{ y: -250 }}
            animate={{ y: -10 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
            className="text-lg md:text-2xl text-green-600 mb-4"
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

        <section className="bg-gray-300 rounded-lg shadow-lg p-5 m-2 md:p-10 md:m-5 text-left">
          <h2 className="text-3xl md:text-4xl text-yellow-500 font-bold mb-4">
            About <span className="text-green-600">HomeDapp</span>
          </h2>
          <p className="text-base md:text-lg text-gray-800 mb-4">
            HomeDapp is a revolutionary blockchain-powered platform that
            simplifies the process of registering and managing properties. By
            harnessing the power of Ethereums decentralized ledger, we bring
            enhanced security, transparency, and efficiency to real estate
            transactions.
          </p>
          <p className="text-base md:text-lg text-gray-800 mb-4">
            Homeowners can easily create digital representations of their
            properties as Home Tokens on the Ethereum blockchain. Each Home
            Token comes with detailed property information, ownership history,
            and legally binding documents, all securely recorded.
          </p>
          <p className="text-base md:text-lg text-gray-800 mb-4">
            Our smart contracts play a pivotal role, ensuring secure and
            automated property transfers while maintaining a tamper-proof record
            of ownership changes. For added security, we offer optional escrow
            functionality.
          </p>
          <p className="text-base md:text-lg text-gray-800 mb-4">
            HomeDapp offers transparent ownership history, seamless maps
            integration, and an intuitive user interface. Even non-registered
            homeowners can benefit from features like property history access
            and smart contract-enabled transactions.
          </p>
          <p className="text-base md:text-lg text-gray-800 mb-4">
            We prioritize security with robust measures, including data
            encryption and user-friendly private key management, to guarantee
            secure access and prevent unauthorized alterations.
          </p>
          <p className="text-base md:text-lg text-gray-800">
            Join us in modernizing property registration systems and promoting
            the adoption of decentralized technologies, setting new standards in
            the real estate industry!
          </p>
        </section>
      </main>
    </div>
  );
}
