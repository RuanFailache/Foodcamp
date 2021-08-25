const ProductList = (props) => {

  const {
    image,
    description,
    name,
    price
  } = props.data;

  return (
    <li className="product">
      <img src={image} alt={description} />
      <strong>{name}</strong>
      <p>{description}</p>
      <strong>{price}</strong>
    </li>
  );
}

export default ProductList;