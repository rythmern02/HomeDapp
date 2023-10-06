// pages/Login.js
import { useAddress } from "@thirdweb-dev/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router"; // Import the useRouter hook

export default function Login() {
  const address = useAddress();
  const router = useRouter(); // Initialize the router

  const handleOnClick = async () => {
    if (address === undefined) {
      alert("Connect Your Wallet First");
    } else {
      // Redirect to the dashboard when the wallet is connected
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-yellow-400 via-blue-700 to-green-400">
      <main className="flex-grow flex flex-col items-center justify-center text-center">
        <section
          className="bg-white rounded-lg shadow-lg p-5 m-2 md:p-10 md:m-5"
          onClick={handleOnClick}
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl text-purple-600 font-bold mb-4"
          >
            Login to <span className="text-yellow-500">HomeDapp</span>
          </motion.h1>

          {/* Add your login form here */}

          <div className="mt-4 md:mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-3 py-2 md:px-5 md:py-3 bg-blue-700 rounded-lg shadow-lg text-white font-semibold uppercase tracking-wide hover:bg-blue-600"
            >
              Login
            </motion.button>
          </div>
        </section>

        <Link href="/signup" className="text-gray-600 mt-4 underline">
          Don't have an account? Signup here
        </Link>
      </main>
    </div>
  );
}
