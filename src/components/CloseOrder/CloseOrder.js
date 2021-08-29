import "./CloseOrder.css";

const CloseOrder = ({ activeProducts }) => {

  const checkCondition = () => {
    let hasFood = false;
    let hasDrink = false;
    let hasDessert = false;

    activeProducts.forEach((product) => {
      if (product.type === "food") hasFood = true;
      if (product.type === "drink") hasDrink = true;
      if (product.type === "dessert") hasDessert = true; 
    })

    return hasFood && hasDrink && hasDessert;
  }
    

  const sendMessage = () => {
    return;
  }

  return (
    <footer className="close-order fixed">
      <button className={(checkCondition()) ? "active" : ""} >
        <span>
          {(checkCondition()) ? "Fechar pedido" : "Selecione os 3 itens para fechar o pedido"}
        </span>
      </button>
    </footer>
  );
}

export default CloseOrder;