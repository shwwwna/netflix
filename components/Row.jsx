import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = ({ title, fetchURL, rowID }) => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		axios.get(fetchURL).then((response) => {
			setMovies(response.data.results);
		});
	}, [fetchURL]);

	const slideLeft = () => {
		var slider = document.getElementById("slider" + rowID);
		slider.scrollLeft = slider.scrollLeft - 500;
	};

	const slideRight = () => {
		var slider = document.getElementById("slider" + rowID);
		slider.scrollLeft = slider.scrollLeft + 500;
	};

	return (
		<>
			<h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
			<div className="relative flex items-center group">
				<MdChevronLeft
					onClick={slideLeft}
					className="left-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block transition-all duration-700"
					size={100}
					color="white"
				/>
				<div
					className=" w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
					id={"slider" + rowID}>
					{movies.map((item, id) => (
						<Movie item={item} id={id} />
					))}
				</div>
				<MdChevronRight
					onClick={slideRight}
					className="right-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block transition-all duration-700"
					size={100}
					color="white"
				/>
			</div>
		</>
	);
};

export default Row;
