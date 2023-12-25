const Item = ({ item }) => {
  if (!item) {
    return <div>Loading...</div>;
  }

  return <div>{item.name}</div>;
};

export default Item;
