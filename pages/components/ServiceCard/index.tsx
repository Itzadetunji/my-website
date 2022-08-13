import { NextPage } from "next";
import React from "react";

interface cardProps {
	iconPath: string;
	title: string;
	description: string;
}

const ServiceCard: React.FC<cardProps> = ({ iconPath, title, description }) => {
	return (
		<div className="grey xs:w-[300px] sm:w-[367px] lg:w-[290px] xl:w-[367px] rounded-[10px] mx-auto custom-shadow duration-[300ms] ease-in delay-[10ms]">
			<div className="flex flex-col">
				<img
					src={`/icons/service-icons/${iconPath}`}
					alt=""
					className="w-[90px] h-[90px] items-center justify-center mx-auto mt-[47px]"
				/>
				<p className="text-center text-white pt-[35px] font-bold light-blue-text text-[23px]">
					{title}
				</p>
				<p className="text-center text-white mx-[27px] pt-[35px] pb-[37px] text-[17px] leading-[35px]">
					{description}
				</p>
			</div>
		</div>
	);
};

export default ServiceCard;
