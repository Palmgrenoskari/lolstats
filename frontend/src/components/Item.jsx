// Implement builds into and builds from items

const Item = ({ item }) => {
  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{item.name}</h2>
      <p>{item.plaintext}</p>

      <p>
        <b>Need to figure out how to parse this:</b> {item.description}
      </p>
    </div>
  );
};

export default Item;
