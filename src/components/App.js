import Header from "./Header";
import Foods from "./Foods";
import Drinks from "./Drinks";
import Desserts from "./Desserts";
import CloseOrder from "./CloseOrder";

const App = () => {
	return (
		<>
			<Header />

			<main>
				<Foods />
				<Drinks />
				<Desserts />
			</main>

			<CloseOrder />
		</>
	);
}

export default App;