const SurveyResults = () => {
	return (
		<>
			<article>
				<fieldset className="border-2 border-sky-500">
					<legend className="text-center"> Survey Results</legend>

					{/* Survey Stats  Section*/}
					<section>
						<table>
							<tr>
								<td>Total number of surveys:</td>
								<td> #Surveys</td>
							</tr>
							<tr>
								<td>Average Age:</td>
								<td>#avee</td>
							</tr>
							<tr>
								<td>Oldest person who participated in survey:</td>
								<td></td>
							</tr>
							<tr>
								<td>Youngest person who participated in survey:</td>
								<td>#avee</td>
							</tr>
						</table>
					</section>

					{/* Favorite Foods Stats Section*/}
					<section>
						<table>
							<tr>
								<td>Percentage ofpeople who like pizza:</td>
								<td></td>
							</tr>
							<tr>
								<td>Percentage of people who like Pasta</td>
								<td></td>
							</tr>
							<tr>
								<td>Percentage of people who like Pap and Wors:</td>
								<td></td>
							</tr>
						</table>
					</section>

					{/* Hobbies Stats Section*/}
					<section>
						<table>
							<tr>
								<td>People who like to watch Movies:</td>
								<td></td>
							</tr>
							<tr>
								<td>People who like to listen to Radio</td>
								<td></td>
							</tr>
							<tr>
								<td>People who like to eat out:</td>
								<td></td>
							</tr>
							<tr>
								<td>People who like to watch TV:</td>
								<td></td>
							</tr>
						</table>
					</section>
				</fieldset>
			</article>
		</>
	);
};

export default SurveyResults;
