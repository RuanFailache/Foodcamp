import Product from "./Product";

const Products = (props) => {

  const products = [
    { name: "Frango yin yang", image: "./img/frango_yin_yang.jpg", description: "Um pouco de batata, um pouco de salada", price: "R$ 14.90", type: "food" },
    { name: "Frango yin yang", image: "./img/frango_yin_yang.jpg", description: "Um pouco de batata, um pouco de salada", price: "R$ 14.90", type: "food" },
    { name: "Frango yin yang", image: "./img/frango_yin_yang.jpg", description: "Um pouco de batata, um pouco de salada", price: "R$ 14.90", type: "food" },
    { name: "Coquinha gelada", image: "./img/coquinha_gelada.jpg", description: "Lata 350ml", price: "R$ 4,90", type: "drink" },
    { name: "Coquinha gelada", image: "./img/coquinha_gelada.jpg", description: "Lata 350ml", price: "R$ 4,90", type: "drink" },
    { name: "Coquinha gelada", image: "./img/coquinha_gelada.jpg", description: "Lata 350ml", price: "R$ 4,90", type: "drink" },
    { name: "Pudim", image: "./img/pudim.jpg", description: "Apenas pudim", price: "R$ 7,90", type: "dessert" },
    { name: "Pudim", image: "./img/pudim.jpg", description: "Apenas pudim", price: "R$ 7,90", type: "dessert" },
    { name: "Pudim", image: "./img/pudim.jpg", description: "Apenas pudim", price: "R$ 7,90", type: "dessert" },
  ];

  const {
    type,
    title
  } = props;

  return (
    <section className="products" >
      <header>
        <h2>{title}</h2>
      </header>

      <ul className="flex">
        {products.map((product, key) => {
          return <Product key={key} data={product} type={type} />
        })}
      </ul>
    </section>
  );
}

export default Products;