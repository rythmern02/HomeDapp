import React, { useEffect, useState } from "react";
import {
  useAddress,
  useConnectionStatus,
  useContract,
  useContractWrite,
  useSigner,
} from "@thirdweb-dev/react";
import Link from "next/link";
import { BigNumber, ethers } from "ethers";
import { formatUnits } from "ethers/lib/utils";

const SellHome = ({ contract }) => {
  const walletAddress = useAddress();
  const connectionStatus = useConnectionStatus();
  const signer = useSigner();
  const [homeDetails, setHomeDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [price, setPrice] = useState("");

  // Initialize the contract
  const initializeContract = async () => {
    if (connectionStatus === "connected") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contra = new ethers.Contract(
        "0xC44C8304AEe01dA370542BE6Bc5f45977e7Bdd8D",
        contract.abi,
        signer
      );
      setContr(contra);
    }
  };

  useEffect(() => {
    initializeContract();
  }, [connectionStatus]);

  const [contr, setContr] = useState(null);

  const { contractT } = useContract("0xC44C8304AEe01dA370542BE6Bc5f45977e7Bdd8D");

  useEffect(() => {
    fetchMultipleData();
  }, []);

  const priceOnChangeHandler = (e) => {
    setPrice(e.target.value);
  };

  const fetchMultipleData = async () => {
    try {
      const totalSupply = await contract.call("totalSupply", []);
      const newData = Number(formatUnits(totalSupply, 0));
      console.log("Total Supply:", newData);

      const numbersToFetch = Array.from({ length: newData }, (_, i) => i + 1);
      const dataArray = [];

      for (const number of numbersToFetch) {
        const data = await contract.call("getHomeDetails", [number]);
        dataArray.push(data);
      }

      console.log("Fetched data for multiple numbers:", dataArray);

      const matchedHomes = dataArray.filter((data) => data[0] === walletAddress);

      if (matchedHomes.length > 0) {
        setHomeDetails(matchedHomes);
      } else {
        console.log("No matching homes found for the wallet address.");
      }

      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const onClickSaleHandler = async (homeId) => {
    if (!price || isNaN(price)) {
      alert("Please enter a valid amount");
      return;
    }

    if (!contr) {
      console.error("Contract not initialized");
      return;
    }

    try {
      const tokenId = 5; // Replace with the desired token ID
      const priceInWei = ethers.utils.parseEther(price); // Convert price to Wei
      const data = await contr.listHomeForSale(tokenId, priceInWei);
      console.log("Listing result:", data);
    } catch (e) {
      console.error("Error listing home for sale:", e);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Sell Home</h1>
      {isLoading ? (
        <p className="text-gray-600">Loading...</p>
      ) : homeDetails.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {homeDetails.map((home, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-4">
              <h2 className="text-xl font-semibold mb-2">Home ID: {home[1]}</h2>
              <p className="text-gray-600">Home Description: {home[2]}</p>
              <p className="text-gray-600">
                img:{" "}
                <img
                  src={`https://ipfs.io/ipfs/${home[5]}`}
                  alt="Home"
                  height="100px"
                />
              </p>
              <p className="text-gray-600">Home Info: {home[6]}</p>
              <div className="flex items-center mt-3">
                <input
                  type="number"
                  placeholder="Enter Price Here..."
                  onChange={priceOnChangeHandler}
                  // value={price}
                  className="mr-3 border rounded-lg p-2"
                />
                <button
                  className="bg-blue-700 text-white rounded-lg px-4 py-2"
                  onClick={() => onClickSaleHandler(home[1])}
                >
                  List This Home For Sale
                </button>
              </div>
              <Link href={"/homes/" + home[1]}>
                <button className="bg-blue-700 text-white rounded-lg px-4 py-2 mt-2">
                  Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-4 text-gray-600">
          No homes found for your wallet address.
        </p>
      )}
    </div>
  );
};

export default SellHome;

