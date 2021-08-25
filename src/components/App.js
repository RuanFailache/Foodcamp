import Header from "./Header";
import Foods from "./Foods";
import Drinks from "./Drinks";
import Desserts from "./Desserts";
import CheckOrder from "./CheckOrder";
import CloseOrder from "./CloseOrder";

const App = () => {
	return (
		<>
			<Header />

			<main>
				{/* <Foods />
				<Drinks />
				<Desserts /> */}
				<CheckOrder />
			</main>

			{/* <CloseOrder /> */}
		</>
	);
}

export default App;