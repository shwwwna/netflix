import React from "react";
import Hero from "../components/Hero";
import Row from "../components/Row";
import requests from "../src/Requests";
import Navbar from "../components/Navbar";

const Main = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<Row rowID="1" title="Upcoming" fetchURL={requests.requestUpcoming} />
			<Row rowID="2" title="Popular" fetchURL={requests.requestPopular} />
			<Row rowID="3" title="Top Rated" fetchURL={requests.requestTopRated} />
			<Row rowID="4" title="Trending" fetchURL={requests.requestTrending} />
			<Row rowID="5" title="Romance" fetchURL={requests.requestRomance} />
		</>
	);
};

export default Main;
