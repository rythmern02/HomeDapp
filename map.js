import { useState, useEffect } from 'react';
import Script from 'next/script';
import { useContract } from '@thirdweb-dev/react';

const hello = [];

export default function Home({ contract }) {
  const contractAddress = "0xC44C8304AEe01dA370542BE6Bc5f45977e7Bdd8D";

  useEffect(() => {
    if (window.Microsoft) {
      loadMapScenario();
    }
    const script = document.createElement("script");
    script.src =
      "https://www.bing.com/api/maps/mapcontrol?callback=initMapScenario";
    script.async = true;
    window.initMapScenario = loadMapScenario;
    document.body.appendChild(script);
  }, []);

  const { contractEther, isInitialized } = useContract(contractAddress);

  useEffect(() => {
    fetchMultipleData();
  }, []);

  const dataArray = [];

  const fetchMultipleData = async () => {
    const numbersToFetch = [2,3]; // Replace with your desired numbers

    for (const number of numbersToFetch) {
      const data = await contract.call("getHomeDetails", [number]);

      dataArray.push(data);
      hello.push(data);
    }

    // Now, dataArray contains the fetched data for each number
    console.log("Fetched data for multiple numbers:", dataArray);
    console.log("Hello Data for multiple numbers:", hello);
  };

  return (
    <div className='border-4'>
      <div id="myMap" style={{ position: 'relative', width: 'screen', height: '100vh' }}></div>
    </div>
  );
}

function loadMapScenario() {
  var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
    credentials: 'AniZLk-IngitwTRnythsGQZLudMvibIv7zg16lx3P7Q-mbSUFsxUj3676QxjCTDw',
    center: new Microsoft.Maps.Location(51.50632, -0.12714),
  });

  // Set the map view to aerial
  map.setView({
    mapTypeId: Microsoft.Maps.MapTypeId.aerial
  });

  // Iterate through the hello array and create pushpins for each location
  hello.forEach(function (data) {
    const latitude = (data[6]); // Assuming latitude is at index 6
    const longitude = (data[7]); // Assuming longitude is at index 7
    console.log("Latitude:", typeof(latitude), "Longitude:", longitude);

    // Create a pushpin for each location and add it to the map
    var location = new Microsoft.Maps.Location(latitude, longitude);
    var pin = new Microsoft.Maps.Pushpin(location);

    // Add a click event to the pushpin
    Microsoft.Maps.Events.addHandler(pin, 'click', pushpinClicked);

    map.entities.push(pin);
  });
}
function pushpinClicked(e) {
  // Navigate to instagram.com when the pushpin is clicked.
  window.location.href = 'https://www.instagram.com';
}
