const SurveyForm = () => {
	return (
		<>
			{/* Survey Form Page */}

			<article className="">
				<fieldset className="border-2 border-sky-500">
					<legend className="text-center">Survey Form</legend>

					<form action="">
						{/* Personal Details Section */}
						<section aria-description="personal-details">
							<label htmlFor="userName">
								Full Names
								<input
									className="border-2 "
									type="text"
									name="username"
									id="username"
									required
								/>
							</label>

							<label htmlFor="userName">
								Email
								<input
									className="border-2 "
									type="email"
									name="userEmail"
									id="userEmail"
									required
								/>
							</label>

							<label htmlFor="birthday">
								Date of Birth
								<input
									className="border-2"
									type="date"
									name="birthday"
									id="birthday"
									required
								/>
							</label>

							<label htmlFor="phone">
								Contact Number
								<input
									className="border-2"
									type="tel"
									name="phone"
									id="phone"
									required
								/>
							</label>
						</section>

						{/* Favorite Food Section */}

						<section aria-description="favorite-food">
							<p>What is your favorite food?</p>
							<label htmlFor="favFood1">
								<input
									type="checkbox"
									id="favFood1"
									name="favFood"
									value="pizza"
								/>
								Pizza
							</label>

							<label htmlFor="favFood2">
								<input
									type="checkbox"
									id="favFood2"
									name="favFood"
									value="Pasta"
								/>
								Pasta
							</label>

							<label htmlFor="favFood3">
								<input
									type="checkbox"
									id="favFood3"
									name="favFood"
									value="papWors"
								/>
								Pap and Wors
							</label>

							<label htmlFor="favFood4">
								<input
									type="checkbox"
									id="favFood4"
									name="favFood"
									value="other"
								/>
								Other
							</label>
						</section>

						{/* Ratings Section */}

						<section aria-description="hobbies-ratings">
							<p>
								Please rate your level of agreement on a scale from 1 to 5, with
								1 being &quot;strongly agree&quot; and 5 being &quot;strongly
								disagree&quot;.
							</p>

							<table>
								<tr className="">
									<th></th>
									<th>Strongly Agree</th>
									<th>Agree</th>
									<th>Neutral</th>
									<th>Disagree</th>
									<th>Strongly Agree</th>
								</tr>
								<tr>
									<td>I like to watch movies</td>
									<td>
										<input
											id="movieRate"
											name="movieRate"
											type="radio"
											required
										/>
									</td>
									<td>
										<input id="movieRate" name="movieRate" type="radio" />
									</td>
									<td>
										<input id="movieRate" name="movieRate" type="radio" />
									</td>
									<td>
										<input id="movieRate" name="movieRate" type="radio" />
									</td>
									<td>
										<input id="movieRate" name="movieRate" type="radio" />
									</td>
								</tr>
								<tr>
									<td>I like to listen to radio</td>
									<td>
										<input
											id="radioRate"
											name="radioRate"
											type="radio"
											required
										/>
									</td>
									<td>
										<input id="radioRate" name="radioRate" type="radio" />
									</td>
									<td>
										<input id="radioRate" name="radioRate" type="radio" />
									</td>
									<td>
										<input id="radioRate" name="radioRate" type="radio" />
									</td>
									<td>
										<input id="radioRate" name="radioRate" type="radio" />
									</td>
								</tr>
								<tr>
									<td>I like to eat out</td>
									<td>
										<input
											id="eatOutRate"
											name="eatOutRate"
											type="radio"
											required
										/>
									</td>
									<td>
										<input id="eatOutRate" name="eatOutRate" type="radio" />
									</td>
									<td>
										<input id="eatOutRate" name="eatOutRate" type="radio" />
									</td>
									<td>
										<input id="eatOutRate" name="eatOutRate" type="radio" />
									</td>
									<td>
										<input id="eatOutRate" name="eatOutRate" type="radio" />
									</td>
								</tr>

								<tr>
									<td>I like to watch TV</td>
									<td>
										<input id="tvRate" name="tvRate" type="radio" required />
									</td>
									<td>
										<input id="tvRate" name="tvRate" type="radio" />
									</td>
									<td>
										<input id="tvRate" name="tvRate" type="radio" />
									</td>
									<td>
										<input id="tvRate" name="tvRate" type="radio" />
									</td>
									<td>
										<input id="tvRate" name="tvRate" type="radio" />
									</td>
								</tr>
							</table>
						</section>

						<button type="submit" id="formSubmitBtn">
							SUBMIT
						</button>
						<button type="reset">RESET</button>
					</form>
				</fieldset>
			</article>
		</>
	);
};

export default SurveyForm;
