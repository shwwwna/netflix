import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Movie = ({ item, id }) => {
	const [like, setLike] = useState(false);
	return (
		<div
			className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 hover:scale-110 transition-all"
			key={id}>
			<img
				className="w-full h-auto block"
				src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
				alt={item?.title}
			/>
			<div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 hover:bg-black/80  text-white">
				<p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center break-all w-full max-w-xs h-full text-center flex-wrap">
					{item?.title}
				</p>
				<p className="">
					{like ? (
						<FaHeart className="absolute top-4 left-4 text-gray-300" />
					) : (
						<FaRegHeart className="absolute top-4 left-4 text-gray-300" />
					)}
				</p>
			</div>
		</div>
	);
};

export default Movie;
