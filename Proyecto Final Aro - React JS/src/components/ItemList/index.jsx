import Item from "../Item";

const ItemList = ({ items }) => {
  if (!items.length) {
    return <p>No hay productos disponibles.</p>; // Mensaje si no hay items
  }

  return (
    <section className="items-container">
      {items.map(item => (
        <Item key={item.id} {...item} />
      ))}
    </section>
  );
};

export default ItemList;
