import ProductList from "./ProductList";

const Drinks = () => {
  const drinks = [
    { name: "", image: "", description: "", price: "" },
    { name: "", image: "", description: "", price: "" },
    { name: "", image: "", description: "", price: "" },
  ];

  return (
    <section>
      <header>
        <h2>Agora, sua bebida</h2>
      </header>
      
      <ul>
        {drinks.map((drink) => {
          return <ProductList data={drink} />
        })}
      </ul>
    </section>
  );
}

export default Drinks;