import React from "react";

import MoneyLogo from "../../assets/Icons/Frame.png";
import CalenderLogo from "../../assets/Icons/Frame-1.png";
import PhoneLogo from "../../assets/Icons/Frame-2.png";
import EmailLogo from "../../assets/Icons/Frame-3.png";
import LocationLogo from "../../assets/Icons/Frame-4.png";
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
        <div>
            <div className="grid grid-cols-3 gap-4 text-start">
                <div className="col-span-2 text-gray-500">
                    <p>
                        <strong className="text-black">
                            Job Description:{" "}
                        </strong>{" "}
                        {description}
                    </p>
                    <p className="mt-6">
                        <strong className="text-black">
                            Job Responsibilities:{" "}
                        </strong>
                        {responsibility}
                    </p>
                    <p className="mt-6">
                        <strong className="text-black">
                            Educational Requirements: <br /> <br />
                        </strong>
                        {education}
                    </p>
                    <p className="mt-6">
                        <strong className="text-black">
                            Experience: <br /> <br />
                        </strong>
                        {experience}
                    </p>
                </div>

                <div className="col-span-1 bg-gray-200 h-full p-7 rounded-lg">
                    {/* Job Details */}
                    <div>
                        <h4 className="text-lg font-bold border-b pb-6 border-gray-400">
                            Job Details
                        </h4>
                        <div className="flex gap-2 mt-6">
                            <img src={MoneyLogo} alt="money" />
                            <p className="text-gray-500">
                                <strong className="text-black">Salary: </strong>
                                {salary} (Per Month)
                            </p>
                        </div>
                        <div className="flex gap-2 mt-6">
                            <img src={CalenderLogo} alt="calender" />
                            <p className="text-sm text-gray-500">
                                <strong className="text-black">
                                    Job Title:{" "}
                                </strong>
                                {job}
                            </p>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="mt-8">
                        <h4 className="text-lg font-bold border-b pb-6 border-gray-400">
                            Contact Information
                        </h4>
                        <div className="flex gap-2 mt-6">
                            <img src={PhoneLogo} alt="money" />
                            <p className="text-gray-500">
                                <strong className="text-black">Phone: </strong>
                                {contact}
                            </p>
                        </div>
                        <div className="flex gap-2 mt-6">
                            <img src={EmailLogo} alt="calender" />
                            <p className="text-sm text-gray-500">
                                <strong className="text-black">Email: </strong>
                                {contact}
                            </p>
                        </div>
                        <div className="flex gap-2 mt-6">
                            <img src={LocationLogo} alt="location" />
                            <p className="text-sm text-gray-500">
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
                className="btn btn-info float-right mt-6 w-[330px]"
                onClick={() => handleAddToDb(id)}
            >
                Apply Now
            </button>
        </div>
    );
};

export default JobDetailsCard;
