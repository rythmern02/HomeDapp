import { motion } from "framer-motion";
import Link from "next/link";

export default function Signup() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-yellow-400 via-blue-700 to-green-400">
      <main className="flex-grow flex flex-col items-center justify-center text-center">
        <section className="bg-white rounded-lg shadow-lg p-5 m-2 md:p-10 md:m-5">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl text-purple-600 font-bold mb-4"
          >
            Signup for <span className="text-yellow-500">HomeDapp</span>
          </motion.h1>

          <form className="space-y-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-gray-600 ml-0 ">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="input-field"
                placeholder="Your Full Name"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-600">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="input-field"
                placeholder="you@example.com"
                required
              />
            </div>{" "}
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-gray-600">
              Phone
              </label>
              <input
                type="number"
                id="phone"
                name="phone"
                className="input-field"
                placeholder="84845363..."
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="address" className="text-gray-600">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className="input-field"
                placeholder="insert your address here"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="input-field"
                placeholder="Create a password"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="Cpassword" className="text-gray-600">
                Confirm Password
              </label>
              <input
                type="password"
                id="Cpassword"
                name="Cpassword"
                className="input-field"
                placeholder="Confirm password"
                required
              />
            </div>
            <div>
              <label className="flex items-center text-gray-900">
                <input
                  type="checkbox"
                  name="terms"
                  id="terms"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded mr-2"
                />
                I agree to the{" "}
                <a href="#" className="text-indigo-600 hover:underline">
                  Terms and Conditions
                </a>
              </label>
            </div>
            <div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="button-primary"
                type="submit"
              >
                Sign Up
              </motion.button>
            </div>
          </form>

        </section>
          <Link href="/login" className="text-gray-600 mt-4 underline">
            Already have an account? Login here
          </Link>
      </main>
    </div>
  );
}
