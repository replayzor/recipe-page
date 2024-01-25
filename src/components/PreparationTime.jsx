const preparationTimeData = [
	{
		id: 1,
		label: "Total",
		text: "Approximately 10 minutes",
	},
	{
		id: 2,
		label: "Preparation",
		text: "5 minutes",
	},
	{
		id: 3,
		label: "Cooking",
		text: "5 minutes",
	},
];

function PreparationTime() {
	return (
		<section className="px-6 m-4 rounded-xl font-outfit bg-neutral-roseWhite">
			<div className="py-4">
				<h2 className="text-xl font-bold text-primary-darkRaspberry">
					Preparation time
				</h2>
			</div>
			<ul className="list-disc pb-6 w-[85%] px-8 space-y-2">
				{preparationTimeData.map((item) => {
					const { id, label, text } = item;
					return (
						<li key={id} className="font-semibold text-neutral-wengeBrown">
							{label}:{" "}
							<span className="font-medium text-neutral-wengeBrown">
								{text}
							</span>
						</li>
					);
				})}
			</ul>
		</section>
	);
}
export default PreparationTime;
