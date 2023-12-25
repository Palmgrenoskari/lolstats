// Need to figure out how to filter out some strange duplicates in the json
// Need to implement a search bar and radio button etc for choosing map

import { Link } from "react-router-dom";

const Items = ({ items }) => {
  if (!items) {
    return <div>Loading...</div>;
  }

  console.log("Items", items);

  const imgPadding = {
    paddingRight: 2,
  };

  return (
    <div>
      <h2>Items</h2>
      {/* Include a filter here to only show purchasable items */}
      {Object.values(items)
        // Only purchasable items
        .filter((item) => item.gold.purchasable === true)
        // 11 stands for Summoner's Rift which is the main mode of the game
        .filter((item) => item.maps["11"] === true)
        .map((item) => (
          <Link key={item.image.full} to={`/items/${item.name}`}>
            <img
              style={imgPadding}
              src={`https://ddragon.leagueoflegends.com/cdn/13.23.1/img/item/${item.image.full}`}
              alt={item.name}
              width={40}
              height={40}
            />
          </Link>
        ))}
    </div>
  );
};

export default Items;
