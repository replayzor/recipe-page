const instructionsData = [
	{
		id: 1,
		title: "Beat the eggs",
		description:
			"In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
	},
	{
		id: 2,
		title: "Heat the pan",
		description:
			"Place a non-stick frying pan over medium heat and add butter or oil.",
	},
	{
		id: 3,
		title: "Cook the omelette",
		description:
			"Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
	},
	{
		id: 4,
		title: "Add fillings (optional)",
		description:
			"When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
	},
	{
		id: 5,
		title: "Fold and serve",
		description:
			"As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
	},
	{
		id: 6,
		title: "Enjoy",
		description: "Serve hot, with additional salt and pepper if needed.",
	},
];

function Instructions() {
	return (
		<section className="px-8 pt-8 pb-6 font-youngSerif">
			<h1 className="mb-4 text-3xl text-primary-nutmeg">Instructions</h1>
			<ul className="space-y-2 list-decimal">
				{instructionsData.map((instructions) => {
					const { id, title, description } = instructions;
					return (
						<li key={id} className="font-semibold text-neutral-darkCharcoal">
							{title}:{" "}
							<span className="font-medium text-neutral-wengeBrown">
								{description}
							</span>{" "}
						</li>
					);
				})}
			</ul>
		</section>
	);
}
export default Instructions;
