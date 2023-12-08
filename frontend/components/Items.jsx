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
      {Object.values(items).map((item) => (
        <Link key={item.name} to={`/items/${item.name}`}>
          <img
            style={imgPadding}
            src={`https://ddragon.leagueoflegends.com/cdn/13.23.1/img/item/${item.image.full}`}
            alt={item.name}
          />
        </Link>
      ))}
    </div>
  );
};

export default Items;
