import React from "react";

import LocationIcon from "../../assets/Icons/Frame-4.png";
import MoneyIcon from "../../assets/Icons/Frame.png";
import { Link } from "react-router-dom";
import JobDetails from "../JobDetails/JobDetails";

const AppliedJobsCard = ({ appliedJob }) => {
    const { id, logo, job, name, location, types, salary } = appliedJob;

    const handleButtonClick = () => {
        localStorage.setItem("unique-feature-job", JSON.stringify(appliedJob));
        return <JobDetails />;
    };

    return (
        <div className="flex justify-between border p-8 mb-6 rounded-lg">
            <section className="bg-slate-200 rounded-lg px-11 py-24">
                <img src={logo} alt={name} />
            </section>
            <section className="text-left">
                <h2 className="text-2xl">{job}</h2>
                <h2 className="text-xl">{name}</h2>

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
            </section>
            <section className="flex items-center">
                <Link to={`/jobs/${id}`}>
                    <button
                        onClick={handleButtonClick}
                        className="btn btn-info mt-6 text-white"
                    >
                        Details
                    </button>
                </Link>
            </section>
        </div>
    );
};

export default AppliedJobsCard;
