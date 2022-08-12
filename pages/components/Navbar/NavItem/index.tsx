import { NextPage } from "next";
import Link from "next/link";
import React from "react";

interface NavProps {
	active: boolean;
	title: string;
}

const index: React.FC<NavProps> = ({ active, title }) => {
	return (
		<p
			className={`${
				active && "text-[#5CBEFF]"
			} hover:text-[#5CBEFF] transition-all duration-300`}
		>
			{title}
		</p>
	);
};

export default index;
