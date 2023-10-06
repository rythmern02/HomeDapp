import { ChainId, ConnectWallet, ThirdwebProvider, ThirdwebSDK, useAddress, useConnectionStatus, useContractWrite } from "@thirdweb-dev/react";
import "../styles/globals.css";
import NavBar from "./components/Navbar";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [contract, setContract] = useState(null);
  const [loading, setLoading] = useState(true); // Initialize as true to show loading until contract is ready
  const [signer, setSigner] = useState(null); // Initialize signer state
  const [address, setAddress] = useState();
  const contractInitialization = async () => {
    try {

      const sdk = new ThirdwebSDK("mumbai", {
        clientId: "1ec6a31cc161816161de01f7856d07e0", // Replace with your client ID
      });
      
      const contr = await sdk.getContract(
        "0xC44C8304AEe01dA370542BE6Bc5f45977e7Bdd8D"
        ); // Replace with your contract address
  
        // Set the contract instance with the signer
        setContract(contr);
        setLoading(false); // Set loading to false after contract is initialized
        console.log("success", contr);
    
    } catch (error) {
      console.error("Error initializing contract:", error);
    }
  };

  useEffect(() => {
    // Check if contract is already initialized, and if not, initialize it.
    if (!contract) {
      contractInitialization();
    }
  }, [contract]);

  if (loading) {
    // You can render a loading indicator here until the contract is initialized
    return (
      <>
        <div className="🤚">
          <h2 className="text-3xl p-9 pt-32 font-extrabold text-orange-600">
            Loading....
          </h2>
          <div className="👉"></div>
          <div className="👉"></div>
          <div className="👉"></div>
          <div className="👉"></div>
          <div className="🌴"></div>
          <div className="👍"></div>
        </div>
      </>
    );
  }

  return (

    <ThirdwebProvider
      activeChain={ChainId.Mumbai}
      clientId="1ec6a31cc161816161de01f7856d07e0" // Replace with your client ID
    >
      <NavBar />
      <Component {...pageProps} contract={contract} setContract={setContract} />
    </ThirdwebProvider>
  );
}

export default MyApp;

// //Secret Key-  ;NoPt8NZBB_MFwQHGMmPA7SRPHlR9yvvBEcS5RamXpJ557hMfYhL45XjLvzJ4-qjHyW2AO8U8kuqUm4kNU-pq7w
