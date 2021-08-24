import ProductList from "./ProductList";

const Desserts = () => {
  const desserts = [
    { name: "", image: "", description: "", price: "" },
    { name: "", image: "", description: "", price: "" },
    { name: "", image: "", description: "", price: "" },
  ];

  return (
    <section>
      <header>
        <h2>Por fim, sua sobremesa</h2>
      </header>

      <ul>
        {desserts.map((dessert) => {
          return <ProductList data={dessert} />
        })}
      </ul>
    </section>
  );
}

export default Desserts;