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
      {/* Include a filter here to only show purchasable items */}
      {Object.values(items)
        .filter((item) => item.gold.purchasable === true)
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
