// components
import Footer from "./components/Footer";
import Ingredients from "./components/Ingredients";
import Instructions from "./components/Instructions";
import Nutrition from "./components/Nutrition";
import PreparationTime from "./components/PreparationTime";

function App() {
	return (
		<main className="flex flex-col items-center justify-center min-h-screen md:mt-20">
			<section className="w-full max-w-[1000px] md:rounded-xl md:px-3 md:w-[740px] md:bg-white">
				<header className="md:p-8">
					<img
						src="./images/image-omelette.jpeg"
						alt=""
						className="md:rounded-xl"
					/>
				</header>
				<div className="px-6 pt-10 pb-4">
					<h1 className="text-4xl text-neutral-darkCharcoal text-start font-youngSerif">
						Simple Omelette Recipe
					</h1>
					<p className="mt-6 text-[16px] font-outfit text-neutral-wengeBrown">
						An easy and quick dish, perfect for any meal. This classic omelette
						combines beaten eggs cooked to perfection, optionally filled with
						your choice of cheese, vegetables, or meats.
					</p>
				</div>
				<PreparationTime />
				<Ingredients />
				<div className="w-[90%] pt-4 text-center m-auto border-b-2"></div>
				<Instructions />
				<div className="w-[90%] pt-4 text-center m-auto border-b-2"></div>
				<Nutrition />
			</section>
			<Footer />
		</main>
	);
}

export default App;
