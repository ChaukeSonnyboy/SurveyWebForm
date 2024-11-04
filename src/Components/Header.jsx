const Header = () => {
	return (
		<>
			<header className="border-b-2 flex justify-between p-4 md:px-20 md:py-6 shadow-md   ">
				<span className=" content-center text-3xl font-bold md:text-4xl ">
					<a href="/">_Survey</a>
				</span>

				<nav className="  flex flex-col text-lg md:flex-row md:gap-10 md:text-xl">
					<a href="Home.jsx">FILL OUT SURVEY</a>
					<a href="Results.jsx">VIEW SURVEY RESULTS</a>
				</nav>
			</header>
		</>
	);
};

export default Header;
