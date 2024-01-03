// Implement builds into and builds from items

const Item = ({ item }) => {
  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{item.name}</h2>

      <img
        src={`https://ddragon.leagueoflegends.com/cdn/13.24.1/img/item/${item.image.full}`}
        alt={item.name}
        width={150}
        height={150}
      />

      <p>{item.plaintext}</p>
      {/* Not quite sure how safe this solution is in the longterm but at least */}
      <div dangerouslySetInnerHTML={{ __html: item.description }} />
    </div>
  );
};

export default Item;
