import ProductList from "./ProductList";

const Foods = () => {
  const foods = [
    { name: "Frango yin yang", image: "./img/frango_yin_yang.jpg", description: "Um pouco de batata, um pouco de salada", price: "R$ 14.90" },
    { name: "Frango yin yang", image: "./img/frango_yin_yang.jpg", description: "Um pouco de batata, um pouco de salada", price: "R$ 14.90" },
    { name: "Frango yin yang", image: "./img/frango_yin_yang.jpg", description: "Um pouco de batata, um pouco de salada", price: "R$ 14.90" },
  ];

  return (
    <section className="products" >
      <header>
        <h2>Primeiro, seu prato</h2>
      </header>

      <ul className="flex">
        {foods.map((food) => {
          return <ProductList data={food} />
        })}
      </ul>
    </section>

  );
}

export default Foods;