import React from "react";
import Counter from "./Counter";

//create your first component
const Home = () => {
	return (
		<>
		<div className="container mt-5 mb-5">
			<Counter/>
		</div>
		</>
	);
};

export default Home;