import React from "react";
import { Link } from "react-router-dom";

import JobDetails from "../JobDetails/JobDetails";

const AppliedJobsCard = ({ appliedJob }) => {
    const { id, logo, job, name, location, types, salary } = appliedJob;

    const handleButtonClick = () => {
        localStorage.setItem("unique-feature-job", JSON.stringify(appliedJob));
        return <JobDetails />;
    };

    return (
        <div className="flex flex-col md:flex-row justify-between border p-8 mb-6 rounded-lg">
            <section className="bg-slate-200 rounded-lg px-11 py-24">
                <img className="mx-auto" src={logo} alt={name} />
            </section>
            <section className="text-left">
                <h2 className="text-5xl md:text-2xl mt-4">{job}</h2>
                <h2 className="text-3xl md:text-xl mt-4">{name}</h2>

                <div className="my-4 flex mt-4">
                    {types.map((type, index) => {
                        return (
                            <p
                                key={index}
                                className="border border-blue-400 text-blue-600 text-center w-[150px] md:w-[91px] mr-4 p-1 rounded-md text-3xl md:text-base"
                            >
                                {type}
                            </p>
                        );
                    })}
                </div>

                <div className="flex gap-6">
                    <div className="flex gap-2">
                        <img
                            src="https://i.ibb.co/Xj7xbv8/Frame-4.png"
                            alt=""
                        />
                        <p className="text-gray-500 text-3xl md:text-base">
                            {location}
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <img src="https://i.ibb.co/g3t0LCT/Frame.png" alt="" />
                        <p className="text-gray-500 text-3xl md:text-base">
                            Salary: {salary}
                        </p>
                    </div>
                </div>
            </section>
            <section className="flex items-center">
                <Link to={`/jobs/${id}`}>
                    <button
                        onClick={handleButtonClick}
                        className="btn btn-info mt-6 text-white text-3xl md:text-base"
                    >
                        Details
                    </button>
                </Link>
            </section>
        </div>
    );
};

export default AppliedJobsCard;
