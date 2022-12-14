import Link from "next/link";
import React from "react";

const Navbar = () => {
	return (
		<div className="flex items-center justify-between p-4 z-[100] w-full absolute">
			<Link href="/">
				<h1 className="text-red-600 text-4xl font-bold cursor-pointer">
					I Want TFC
				</h1>
			</Link>
			<div className="">
				<Link href="/login">
					<button className="text-white pr-4">Sign in</button>
				</Link>
				<Link href="/signup">
					<button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
						Sign up
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
