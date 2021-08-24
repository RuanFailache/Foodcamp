const ProductList = (props) => {
  return (
    <li>
      <img src={props.data.image} alt={props.data.description} />
      <strong>{props.data.name}</strong>
      <p>{props.data.description}</p>
      <strong>{props.data.price}</strong>
    </li>
  );
}

export default ProductList;