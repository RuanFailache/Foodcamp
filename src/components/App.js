import Header from "./Header";
import Products from "./Products";
// import CheckOrder from "./CheckOrder";
import CloseOrder from "./CloseOrder";

const App = () => {

	const products = [
		{ type: "food", title: "Primeiro, seu prato" },
		{ type: "drink", title: "Agora, sua bebida" },
		{ type: "dessert", title: "Por fim, sua sobremesa" },
	]

	return (
		<>
			<Header />

			<main>
				{products.map((product, key) => {
					return <Products key={key} type={product.type} title={product.title} />
				})}
			</main>

			{/* <CheckOrder /> */}

			<CloseOrder />
		</>
	);
}

export default App;