import Link from "next/link";
import React from "react";

const Dashboard = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-400 via-blue-700 to-green-400 min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center md:mt-0 mt-3">
        <h1 className="text-4xl text-white font-bold mb-8">
          Welcome to Your Dashboard
        </h1>
        <p className="text-gray-200 text-lg mb-8">
          Explore the possibilities with Home Token and manage your property
          efficiently.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1: Register Your Home */}
        <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 text-center">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            Register Your Home as a Home Token
          </h2>
          <p className="text-gray-600">
            Securely record your property details, ownership history, and legal
            documents on the blockchain.
          </p>
          <Link
            href="/register-home"
            className="bg-blue-600 text-white rounded-full px-4 py-2 mt-4 inline-block hover:bg-blue-700 transition duration-300"
          >
            Get Started
          </Link>
        </div>

        {/* Card 2: Surf Homes Registered with Us on Map */}
        <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 text-center">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            Explore Homes Registered with Us on the Map
          </h2>
          <p className="text-gray-600">
            Discover properties registered on the blockchain and view them on an
            interactive map.
          </p>
          <Link
            href="/map"
            className="bg-blue-600 text-white rounded-full px-4 py-2 mt-4 inline-block hover:bg-blue-700 transition duration-300"
          >
            Explore Map
          </Link>
        </div>

        {/* Card 3: Transfer Home Tokens Directly */}
        <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 text-center">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            Transfer Home Tokens Directly
          </h2>
          <p className="text-gray-600">
            Seamlessly transfer property ownership with the security of
            blockchain smart contracts.
          </p>
          <Link
            href="/transfer-token"
            className="bg-blue-600 text-white rounded-full px-4 py-2 mt-4 inline-block hover:bg-blue-700 transition duration-300"
          >
            Start Transfer
          </Link>
        </div>

        {/* Card 4: List Home for Sale, Buy Home, and More */}
        <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 text-center">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            Buy Homes
          </h2>
          <p className="text-gray-600">
            Access a range of options, including listing your property for sale
            and buying homes securely.
          </p>
          <Link
            href="/buyHome"
            className="bg-blue-600 text-white rounded-full px-4 py-2 mt-4 inline-block hover:bg-blue-700 transition duration-300"
          >
            Explore Options
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 text-center">
          <Link href={'/sellHome'}>
          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            Sell Homes
          </h2>
          <p className="text-gray-600">
            Access a range of options, including listing your property for sale
            and buying homes securely.
          </p>
          <Link
            href="/sellHome"
            className="bg-blue-600 text-white rounded-full px-4 py-2 mt-4 inline-block hover:bg-blue-700 transition duration-300"
          >
            Explore Options
          </Link>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
