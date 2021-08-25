import ProductList from "./ProductList";

const Drinks = () => {
  const drinks = [
    { name: "Coquinha gelada", image: "./img/coquinha_gelada.jpg", description: "Lata 350ml", price: "R$ 4,90" },
    { name: "Coquinha gelada", image: "./img/coquinha_gelada.jpg", description: "Lata 350ml", price: "R$ 4,90" },
    { name: "Coquinha gelada", image: "./img/coquinha_gelada.jpg", description: "Lata 350ml", price: "R$ 4,90" },
  ];

  return (
    <section className="products" >
      <header>
        <h2>Agora, sua bebida</h2>
      </header>

      <ul className="flex">
        {drinks.map((drink) => {
          return <ProductList data={drink} />
        })}
      </ul>
    </section>
  );
}

export default Drinks;