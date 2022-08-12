import { NextPage } from "next";
import React from "react";

interface cardProps {
	imagePath: string;
	name: string;
	role: string;
	description: string;
}

const TestimonialCard: React.FC<cardProps> = ({
	imagePath,
	name,
	role,
	description,
}) => {
	return (
		<div className="grey w-[280px] sm:w-[334px] md:w-[300px] lg:w-[300px] rounded-[30px] mx-auto custom-shadow duration-500 ease-in delay-[10ms] pb-[20px]">
			<div className="flex">
				<img
					src={`/images/${imagePath}`}
					alt=""
					width="76"
					height="76"
					className="ml-[30px] mt-[21px]"
				/>
				<div className="flex flex-col ml-[22px] mt-[21px] space-y-[3px]">
					<p className="text-white font-bold text-[18.2px]">{name}</p>
					<p className="light-blue-text font-bold text-[15.2px]">
						{role}
					</p>
				</div>
			</div>
			<div className="h-[160px]">
				<p className="text-white mt-[25px] text-center mx-[25px] leading-[27px] font-[400]">
					{description}
				</p>
			</div>
		</div>
	);
};

export default TestimonialCard;
