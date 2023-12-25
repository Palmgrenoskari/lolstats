import { useState, useEffect } from "react";
import summonerService from "../services/summoners";

const Main = () => {
  const [summonerData, setSummonerData] = useState(null);
  const [summoner, setSummoner] = useState("");

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
      <h2>Search Summoner (Not working yet..)</h2>
      <form>
        <input
          type="text"
          name="summoner"
          value={summoner}
          placeholder="Insert Summoner Name"
          onChange={({ target }) => setSummoner(target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        {summonerData && (
          <div>
            <h3>Name: {summonerData.name}</h3>
            <p>Level: {summonerData.summonerLevel}</p>
            <img
              src={`https://ddragon.leagueoflegends.com/cdn/13.24.1/img/profileicon/${summonerData.profileIconId}.png`}
              alt="Profile icon"
              width="300"
              height="300"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
