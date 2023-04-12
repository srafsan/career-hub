import React from "react";

import { addToDb } from "../../utils/fakeDB";

const JobDetailsCard = ({ jobs }) => {
    const {
        id,
        description,
        responsibility,
        education,
        experience,
        salary,
        job,
        contact,
        location,
    } = jobs;

    const handleAddToDb = (id) => {
        addToDb(id, jobs);
    };

    return (
        <div className="sm:flex sm:flex-col">
            <div className="grid md:grid-cols-3 gap-4 text-start">
                <div className="col-span-2 text-gray-500">
                    <p className="text-4xl md:text-base">
                        <strong className="text-black">
                            Job Description:{" "}
                        </strong>{" "}
                        {description}
                    </p>
                    <p className="mt-6 text-4xl md:text-base">
                        <strong className="text-black">
                            Job Responsibilities:{" "}
                        </strong>
                        {responsibility}
                    </p>
                    <p className="mt-6 text-4xl md:text-base">
                        <strong className="text-black">
                            Educational Requirements: <br /> <br />
                        </strong>
                        {education}
                    </p>
                    <p className="mt-6 text-4xl md:text-base">
                        <strong className="text-black">
                            Experience: <br /> <br />
                        </strong>
                        {experience}
                    </p>
                </div>

                <div className="mt-5 md:mt-0 col-span-1 w-[1040px] md:w-[330px] bg-gray-200 h-full p-7 rounded-lg">
                    {/* Job Details */}
                    <div>
                        <h4 className="text-5xl md:text-lg font-bold border-b pb-6 border-gray-400">
                            Job Details
                        </h4>
                        <div className="flex gap-2 mt-6">
                            <img
                                src="https://i.ibb.co/g3t0LCT/Frame.png"
                                alt="money"
                            />
                            <p className="text-gray-500 text-3xl md:text-base">
                                <strong className="text-black">Salary: </strong>
                                {salary} (Per Month)
                            </p>
                        </div>
                        <div className="flex gap-2 mt-6">
                            <img
                                src="https://i.ibb.co/9cy8tZy/Frame-1.png"
                                alt="calender"
                            />
                            <p className="text-gray-500 text-3xl md:text-sm">
                                <strong className="text-black">
                                    Job Title:{" "}
                                </strong>
                                {job}
                            </p>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="mt-8">
                        <h4 className="text-5xl md:text-lg font-bold border-b pb-6 border-gray-400">
                            Contact Information
                        </h4>
                        <div className="flex gap-2 mt-6">
                            <img
                                src="https://i.ibb.co/r0fkq6Q/Frame-2.png"
                                alt="money"
                            />
                            <p className="text-gray-500 text-3xl md:text-base">
                                <strong className="text-black">Phone: </strong>
                                {contact}
                            </p>
                        </div>
                        <div className="flex gap-2 mt-6">
                            <img
                                src="https://i.ibb.co/HV4Yc8R/Frame-3.png"
                                alt="calender"
                            />
                            <p className="text-gray-500 text-3xl md:text-sm">
                                <strong className="text-black">Email: </strong>
                                {contact}
                            </p>
                        </div>
                        <div className="flex gap-2 mt-6">
                            <img
                                src="https://i.ibb.co/Xj7xbv8/Frame-4.png"
                                alt="location"
                            />
                            <p className="text-gray-500 text-3xl md:text-sm">
                                <strong className="text-black">
                                    Address:{" "}
                                </strong>
                                {location}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <button
                className="btn btn-info float-right mt-20 md:mt-6 w-full md:w-[330px] text-5xl md:text-base py-5 h-full md:py-0 md:h-0"
                onClick={() => handleAddToDb(id)}
            >
                Apply Now
            </button>
        </div>
    );
};

export default JobDetailsCard;
