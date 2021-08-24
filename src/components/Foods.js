import ProductList from "./ProductList";

const Foods = () => {
  const foods = [
    {name: "", image: "", description: "", price: ""},
    {name: "", image: "", description: "", price: ""},
    {name: "", image: "", description: "", price: ""},
  ];
  
  return (
    <section>
      <header>
        <h2>Primeiro, seu prato</h2>
      </header>
      
      <ul>
        {foods.map((food) => {
          return <ProductList data={food} />
        })}
      </ul>
    </section>

  );
}

export default Foods;