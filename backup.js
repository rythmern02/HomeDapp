import React, { useEffect, useState } from 'react';
import { useAddress } from '@thirdweb-dev/react';

const SellHome = ({ contract }) => {
  const walletAddress = useAddress();
  console.log(walletAddress);

  const [homeDetails, setHomeDetails] = useState([]);

  useEffect(() => {
    fetchMultipleData();
  }, []);

  const fetchMultipleData = async () => {
    const numbersToFetch = [1, 2, 3, 4, 5]; // Replace with your desired numbers

    const dataArray = [];

    for (const number of numbersToFetch) {
      const data = await contract.call('getHomeDetails', [number]);
      dataArray.push(data);
    }

    // Now, dataArray contains the fetched data for each number
    console.log('Fetched data for multiple numbers:', dataArray);

    const matchedHomes = dataArray.filter(data => data[0] === walletAddress);

    // If matching homes are found, set the home details
    if (matchedHomes.length > 0) {
      setHomeDetails(matchedHomes);
    } else {
      console.log("No matching homes found for the wallet address.");
    }
  };

  return (
    <div>
      <h1>Sell Home</h1>
      <h1 className="text-2xl font-semibold mb-4">Sell Home</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {homeDetails.map((home, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-xl font-semibold mb-2">Home ID: {home[1]}</h2>
            <p className="text-gray-600">Home Description: {home[2]}</p>
            <p className="text-gray-600">Home Info: {home[5]}</p>
            <p className="text-gray-600">Home IPFS Hash: {home[6]}</p>
            {/* Display other home details here */}
          </div>
        ))}
      </div>
      {homeDetails.length === 0 && (
        <p className="mt-4 text-gray-600">No homes found for your wallet address.</p>
      )}
    </div>
    
  );
};

export default SellHome;
