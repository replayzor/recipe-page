const ingredientsData = [
	"2-3 large eggs",
	"Salt, to taste",
	"Pepper, to taste",
	"1 tablespoon of butter or oil",
	"Optional fillings: cheese, diced vegetables, cooked meats, herbs",
];

function Ingredients() {
	return (
		<section className="px-6 py-4 font-youngSerif">
			<h1 className="mb-4 text-3xl text-primary-nutmeg">Ingredients</h1>
			<ul className="px-4 space-y-3 list-disc text-neutral-wengeBrown">
				{ingredientsData.map((ingredient) => (
					<li key={ingredient}>{ingredient}</li>
				))}
			</ul>
		</section>
	);
}
export default Ingredients;
