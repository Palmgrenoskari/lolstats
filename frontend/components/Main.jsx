import { useState, useEffect } from "react";
import summonerService from "../src/services/summoners";

const Main = () => {
  const [summonerData, setSummonerData] = useState(null);

  // Let's just do this initially, always load the preset summoner data when we get to main view.
  useEffect(() => {
    const fetchData = async () => {
      const response = await summonerService.getSummonerData();
      console.log(response);
      setSummonerData(response);
    };
    fetchData();
  }, []);

  if (!summonerData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Main Page</h1>
      {summonerData && (
        <div>
          <h2>Name: {summonerData.name}</h2>
          <p>Level: {summonerData.summonerLevel}</p>
        </div>
      )}
    </div>
  );
};

export default Main;
