import ProductList from "./ProductList";

const Desserts = () => {
  const desserts = [
    { name: "Pudim", image: "./img/pudim.jpg", description: "Apenas pudim", price: "R$ 14,90" },
    { name: "Pudim", image: "./img/pudim.jpg", description: "Apenas pudim", price: "R$ 14,90" },
    { name: "Pudim", image: "./img/pudim.jpg", description: "Apenas pudim", price: "R$ 14,90" },
  ];

  return (
    <section className="products" >
      <header>
        <h2>Por fim, sua sobremesa</h2>
      </header>

      <ul className="flex">
        {desserts.map((dessert) => {
          return <ProductList data={dessert} />
        })}
      </ul>
    </section>
  );
}

export default Desserts;