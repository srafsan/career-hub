import React from "react";
import LocationIcon from "../../assets/Icons/Frame-4.png";
import MoneyIcon from "../../assets/Icons/Frame.png";

const FeaturedJobsCard = ({ fJob }) => {
    const { name, job, location, types, salary, logo } = fJob;

    return (
        <div className="border rounded-lg w-[450px] h-full p-10 text-left">
            <div className="h-10">
                <img className="w-[90px]" src={logo} alt="" />
            </div>
            <div className="mt-8">
                <h2 className="text-xl font-bold">{job}</h2>
                <p className="text-gray-500">{name}</p>
            </div>
            <div className="my-4 flex">
                {types.map((type, index) => {
                    return (
                        <p
                            key={index}
                            className="border border-blue-400 text-blue-600 text-center w-[91px] mr-4 p-1 rounded-md"
                        >
                            {type}
                        </p>
                    );
                })}
            </div>
            <div className="flex gap-6">
                <div className="flex gap-2">
                    <img src={LocationIcon} alt="" />
                    <p className="text-gray-500">{location}</p>
                </div>
                <div className="flex gap-2">
                    <img src={MoneyIcon} alt="" />
                    <p className="text-gray-500">Salary: {salary}</p>
                </div>
            </div>
            <button className="btn btn-info mt-6 text-white">
                View Details
            </button>
        </div>
    );
};

export default FeaturedJobsCard;
