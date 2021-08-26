import React, { useState } from "react";

const Product = (props) => {

  // States

  const [active, setActive] = useState("");

  // Variables

  const { type: productType } = props;

  const {
    image,
    description,
    name,
    price,
    type,
  } = props.data;

  // Methods

  const selectProduct = () => {
    if (active === "active") {
      setActive("");
    } else {
      setActive("active");
    }
  };

  // render

  return (type === productType) ? (
    <li className={`product ${active}`} onClick={selectProduct} >
      <img src={image} alt={description} />
      <strong>{name}</strong>
      <p>{description}</p>
      <strong>{price}</strong>
    </li>
  ) : null;
}

export default Product;