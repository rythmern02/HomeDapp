import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Hello = ({ contract }) => {
  const router = useRouter();
  const { slug } = router.query;
  const [homeDetails, setHomeDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    fetchMultipleData();
  }, []);

  const dataArray = [];

  const fetchMultipleData = async () => {
    const numbersToFetch = [1, 2, 3, 4, 5]; // Replace with your desired numbers

    for (const number of numbersToFetch) {
      const data = await contract.call("getHomeDetails", [number]);
      dataArray.push(data);
    }

    // Now, dataArray contains the fetched data for each number
    console.log("Fetched data for multiple numbers:", dataArray);

    const matchedHome = dataArray.find((data) => data[1] === slug);

    if (matchedHome) {
      // If a matching home is found, set the home details
      setHomeDetails(matchedHome);
    }

    setIsLoading(false); // Set loading to false when data is fetched
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : homeDetails ? (
        <div>
          <h2>{slug}</h2>
          <p>Home Name: {homeDetails[1]}</p>
          <p>Home IPFS Hashes: {homeDetails[2]}</p>
          {/* <p>Home IPFS Hashes: {homeDetails[3]}</p> */}
          {/* <p>Home IPFS Hashes: {homeDetails[4]}</p> */}
          <p>Home IPFS Hashes: {homeDetails[5]}</p>
          <p>Home IPFS Hashes: {homeDetails[6]}</p>
          <p>Home IPFS Hashes: {homeDetails[7]}</p>
          <p>Home IPFS Hashes: {homeDetails[8]}</p>
          <p>Home IPFS Hashes: {homeDetails[9]}</p>
          {/* Add more home details here */}
        </div>
      ) : (
        <p>No matching home found for {slug}</p>
      )}
    </div>
  );
};

export default Hello;
