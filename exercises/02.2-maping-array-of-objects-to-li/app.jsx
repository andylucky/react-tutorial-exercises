import React from "react";
import ReactDOM from "react-dom";

const planets = ["Mars", "Venus", "Jupiter", "Earth", "Saturn", "Neptune"];

/**
 * 1) Create the mapping function and use it to generate a new array of
 * planets in html called planetsInHTML
 */
const funcionMapeo = (item, index) => {
	return (
		<li key={index} className="list-group-item">
			{item}
		</li>
	);
};

// 2) Add the array planetsInHTML inside the innerHTML of this <ul>
const content = <ul className="list-group m-5">{planets.map(funcionMapeo)}</ul>;

ReactDOM.render(content, document.querySelector("#myDiv"));
