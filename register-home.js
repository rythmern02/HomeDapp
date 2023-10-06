import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import LocationPicker from "./regMap";
import { Web3Storage } from "web3.storage";
import {
  useAddress,
  useConnectionStatus,
  useContract,
  useContractWrite,
  useSigner,
} from "@thirdweb-dev/react";
import { Contract, ethers, providers } from "ethers"; // Import ethers
import { Router, useRouter } from "next/router";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDczM0NDMGY1MWE0RmI2MTAzOGU0MmZkMDc2NjU0QTJhZGU5ODFhN0QiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2OTMyMzY0NjA2ODksIm5hbWUiOiJhc3BzIn0.eaDAzQl6fcgDRnZhqtkj-DUM6ZMXeferFhe-X6S5RhU"; // Replace with your Web3.Storage token
const client = new Web3Storage({ token });

const HomeToken = ({ contract }) => {
  const [propertyName, setPropertyName] = useState("");
  const [propertyDescription, setPropertyDescription] = useState("");
  const [propertySize, setPropertySize] = useState("");
  const [selectedLegalDocuments, setSelectedLegalDocuments] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [legalDocuments, setLegalDocuments] = useState([]);
  const [ipfsImageHashes, setIpfsImageHashes] = useState([]);
  const [isLocationPickerOpen, setLocationPickerOpen] = useState(false);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const legalDocumentInputRef = useRef(null);
  const imageInputRef = useRef(null);
  const [contr, setContr] = useState();
  const connectionStatus = useConnectionStatus();

  // Initialize the contract
  const signer = useSigner();
  const initializeContract = async () => {
    if (connectionStatus === "connected") {
      const provider = await new providers.Web3Provider(window.ethereum);
      const contra = new Contract(
        "0xC44C8304AEe01dA370542BE6Bc5f45977e7Bdd8D",
        await contract.abi,
        signer
      );
      console.log(contra);
      setContr(await contra);
    }
  };

  useEffect(() => {
    initializeContract();
    console.log("The contract is : ", contr);
  }, []);

  const handleLegalDocumentChange = (e) => {
    setSelectedLegalDocuments([
      ...selectedLegalDocuments,
      ...Array.from(e.target.files),
    ]);
  };
  const router = useRouter();
  const handleImageChange = (e) => {
    setSelectedImages([...selectedImages, ...Array.from(e.target.files)]);
  };

  const handleRegisterHome = async () => {
    // Check if required fields are empty

    if (
      !propertyName ||
      !propertyDescription ||
      !propertySize ||
      !latitude ||
      !longitude
    ) {
      alert("Please fill out all required fields.");
      return;
    }

    if (!connectionStatus === "connected") {
      alert("Please connect your wallet to interact.");
      return;
    }

    // Check if legal documents or images are empty
    if (selectedLegalDocuments.length === 0 || selectedImages.length === 0) {
      alert(
        "Please select at least one Legal Document and one Image to upload."
      );
      return;
    }

    // Upload legal documents to IPFS
    const legalDocsHashes = await uploadFilesToIpfs(selectedLegalDocuments);

    // Upload images to IPFS
    const imageHashes = await uploadFilesToIpfs(selectedImages);

    // Update state with the hashes
    setLegalDocuments(legalDocsHashes);
    setIpfsImageHashes(imageHashes);

    try {
      const data = await contr.registerHome(
        propertyName,
        propertyDescription,
        propertySize,
        legalDocsHashes,
        String(latitude),
        String(longitude),
        ipfsImageHashes
      );
      console.info(
        "contract call successs",
        data,
        "Latitude longitude are: ",
        typeof longitude,
        latitude
      );
      if(await data){
        alert('Successfully registered home');
        router.push('/dashboard');
      }
    } catch (err) {
      console.error("contract call failure", err);
      console.error(
        "contract call failure",
        contr,
        "Latitude ,longitude",
        latitude,
        typeof longitude
      );
    }

    // Rest of your code...
  };

  const uploadFilesToIpfs = async (files) => {
    const hashes = [];

    for (const file of files) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        if (!file) {
          alert("Upload a File");
        } else {
          const cid = await client.put([file]);
          const url = `https://ipfs.io/ipfs/${cid}/${file.name}`;
          const ipfsHash = `${cid}/${file.name}`;
          hashes.push(ipfsHash);
          console.info(
            "contract call successs",
            "Latitude longitude are: ",
            typeof longitude,
            latitude
          );
          console.log("Uploaded to IPFS:", ipfsHash);
        }
      } catch (error) {
        console.error("Error uploading file to IPFS:", error);
      }
    }

    return hashes;
  };

  const openLocationPicker = () => {
    setLocationPickerOpen(true);
  };

  const closeLocationPicker = () => {
    setLocationPickerOpen(false);
  };

  const displaySelectedLegalDocuments = () => {
    return selectedLegalDocuments.map((file, index) => (
      <li key={index}>{file.name}</li>
    ));
  };

  const displaySelectedImages = () => {
    return selectedImages.map((file, index) => (
      <li key={index}>{file.name}</li>
    ));
  };

  const handleAddLegalDocuments = () => {
    legalDocumentInputRef.current.click();
  };

  const handleAddImages = () => {
    imageInputRef.current.click();
  };

  return (
    <div className="bg-gradient-to-r from-yellow-400 via-blue-700 to-green-400 min-h-screen flex-col items-center justify-center px-4">
      <div>
        <div className="text-center md:mt-0 mt-3">
          <h1 className="text-4xl text-white mt- font-bold mb-8">
            Register Your Home as a Home Token
          </h1>
          <p className="text-gray-200 text-lg mb-8">
            Securely record your property details, ownership history, and legal
            documents on the blockchain.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 text-center flex-shrink">
          <div className="">
            <h2 className="text-xl font-semibold mb-2 mt-4 text-gray-800">
              Geolocation Data
            </h2>
            <div className="">
              <LocationPicker
                longitude={longitude}
                setLongitude={setLongitude}
                latitude={latitude}
                setLatitude={setLatitude}
              />
              <h1>
                The location is {longitude} {latitude}
              </h1>
            </div>
          </div>
          <div></div>
          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            Property Name
          </h2>
          <input
            type="text"
            value={propertyName}
            onChange={(e) => setPropertyName(e.target.value)}
            required
            placeholder="Enter property name"
            className="w-full p-2 border rounded-md mt-2"
          />
          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            Property Description
          </h2>
          <input
            type="text"
            value={propertyDescription}
            onChange={(e) => setPropertyDescription(e.target.value)}
            placeholder="Enter property description"
            required
            className="w-full p-2 border rounded-md mt-2"
          />
          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            Property Size
          </h2>
          <input
            type="number"
            value={propertySize}
            onChange={(e) => setPropertySize(e.target.value)}
            placeholder="Enter property size"
            required
            className="w-full p-2 border rounded-md mt-2"
          />
          <h2 className="text-xl font-semibold mb-2 mt-4 text-gray-800">
            Legal Documents (Upload as files)
          </h2>
          <button
            type="button"
            onClick={handleAddLegalDocuments}
            className="bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-700 transition duration-300"
          >
            Add Legal Documents
          </button>
          <input
            type="file"
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            multiple
            onChange={handleLegalDocumentChange}
            className="w-full p-2 border rounded-md mt-2 hidden"
            required
            ref={legalDocumentInputRef}
          />
          <h2 className="text-xl font-semibold mb-2 mt-4 text-gray-800">
            Upload Images
          </h2>
          <button
            type="button"
            onClick={handleAddImages}
            className="bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-700 transition duration-300"
          >
            Add Images
          </button>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            required
            className="w-full p-2 border rounded-md mt-2 hidden"
            ref={imageInputRef}
          />
          <h3 className="text-xl font-semibold mb-2 mt-4 text-gray-800">
            Selected Legal Documents
          </h3>
          <ul className="list-disc ml-4">{displaySelectedLegalDocuments()}</ul>
          <h3 className="text-xl font-semibold mb-2 mt-4 text-gray-800">
            Selected Images
          </h3>
          <ul className="list-disc ml-4">{displaySelectedImages()}</ul>
          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={handleRegisterHome}
              className="bg-green-500 text-white rounded-full px-4 py-2 hover:bg-green-700 transition duration-300"
            >
              Register Home
            </button>
          </div>
        </div>
      </div>

      <div className="text-center mt-6">
        <Link href="/dashboard" className="text-blue-600 underline">
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default HomeToken;
