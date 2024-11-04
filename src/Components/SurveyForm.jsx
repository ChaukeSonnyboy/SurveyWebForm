const SurveyForm = () => {
	const inputStyle = {
		marginLeft: "20px",
	};
	return (
		<>
			{/* Survey Form Page */}

			<article className="py-5">
				<fieldset className=" border border-sky-500 w-4/5 m-auto p-2">
					<legend className="text-center text-xl">Survey Form</legend>

					<form action="">
						{/* Personal Details Section */}
						<section
							aria-description="personal-details "
							className="flex flex-col gap-5 py-4 text-lg"
						>
							<label htmlFor="userName">
								Full Names
								<input
									className="border-2 "
									type="text"
									name="username"
									id="username"
									placeholder="Name Surname "
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
									placeholder="Example@gmail.com"
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
									placeholder="+27123456789"
									style={inputStyle}
									required
								/>
							</label>
						</section>

						{/* Favorite Food Section */}

						<section
							aria-description="favorite-food "
							className=" text-lg py-3  "
						>
							<h1 className="font-bold">What is your favorite food?</h1>
							<div className="flex flex-col pl-4">
								<label htmlFor="favFood1">
									<input
										type="checkbox"
										id="favFood1"
										name="favFood"
										value="pizza"
										className="mr-2"
									/>
									Pizza
								</label>

								<label htmlFor="favFood2">
									<input
										type="checkbox"
										id="favFood2"
										name="favFood"
										className="mr-2"
										value="Pasta"
									/>
									Pasta
								</label>

								<label htmlFor="favFood3">
									<input
										type="checkbox"
										id="favFood3"
										name="favFood"
										className="mr-2"
										value="papWors"
									/>
									Pap and Wors
								</label>

								<label htmlFor="favFood4">
									<input
										type="checkbox"
										id="favFood4"
										name="favFood"
										className="mr-2"
										value="other"
									/>
									Other
								</label>
							</div>
						</section>

						{/* Ratings Section */}

						<section
							aria-description="hobbies-ratings"
							className="border border-green-500 text-lg relative overflow-x-auto "
						>
							<p className="p-2 text-lg font-medium text-left">
								Please rate your level of agreement on a scale from 1 to 5, with
								1 being &quot;strongly agree&quot; and 5 being &quot;strongly
								disagree&quot;.
							</p>

							<table className="w-full text-left">
								<thead className="uppercase text-sm">
									<tr className="">
										<th></th>
										<th>Strongly Agree</th>
										<th>Agree</th>
										<th>Neutral</th>
										<th>Disagree</th>
										<th>Strongly Agree</th>
									</tr>
								</thead>
								<tbody>
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
								</tbody>
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
