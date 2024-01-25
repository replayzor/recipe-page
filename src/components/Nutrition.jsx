const nutritions = [
	{
		id: 1,
		name: "Calories",
		value: "277kcal",
	},
	{
		id: 2,
		name: "Carbs",
		value: "0g",
	},
	{
		id: 3,
		name: "Protein",
		value: "20g",
	},
	{
		id: 4,
		name: "Fat",
		value: "22g",
	},
];

function Nutrition() {
	return (
		<section className="px-8 pt-8 pb-6 font-youngSerif">
			<h1 className="mb-4 text-3xl text-primary-nutmeg">Nutrition</h1>
			<p className="pb-6 text-sm text-neutral-wengeBrown">
				The table below shows nutritional values per serving without the
				additional fillings.
			</p>
			{nutritions.map((nutrition) => {
				const { id, name, value } = nutrition;
				return (
					<>
						<div
							key={id}
							className="w-[60%] space-y-4  items-baseline ml-10 flex justify-between"
						>
							<h2 className="pb-2 text-center text-neutral-wengeBrown">
								{name}
							</h2>
							<p className="font-semibold text-center text-primary-nutmeg">
								{value}
							</p>
						</div>
						<div className="border-t-2"></div>
					</>
				);
			})}
		</section>
	);
}
export default Nutrition;
