import React from "react";
import toast, { Toaster } from "react-hot-toast";

import { addToDb, getBookmarks } from "../../utils/fakeDB";

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

    const notifySuccess = () => toast.success("Successfully applied!!!");
    const notifyError = () => toast.error("You have already applied.");

    const handleAddToDb = (id) => {
        const bookmarks = getBookmarks();
        const exist = bookmarks.find((obj) => obj.id === id);

        if (!exist) {
            addToDb(id, jobs);
            notifySuccess();
        } else {
            notifyError();
        }
    };

    return (
        <div className="max-w-screen-lg">
            <div className="grid md:grid-cols-3 gap-4 text-start">
                <div className="md:col-span-2 text-gray-500">
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

                <div className="md:col-span-1 bg-gray-200 h-full p-7 rounded-lg">
                    {/* Job Details */}
                    <div>
                        <h4 className="text-lg font-bold border-b pb-6 border-gray-400">
                            Job Details
                        </h4>
                        <div className="flex gap-2 mt-6">
                            <img
                                src="https://i.ibb.co/g3t0LCT/Frame.png"
                                className="w-6 h-6"
                                alt="money"
                            />
                            <p className="text-gray-500">
                                <strong className="text-black">Salary: </strong>
                                {salary} (Per Month)
                            </p>
                        </div>
                        <div className="flex gap-2 mt-6">
                            <img
                                src="https://i.ibb.co/9cy8tZy/Frame-1.png"
                                className="w-6 h-6"
                                alt="calender"
                            />
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
                            <img
                                src="https://i.ibb.co/r0fkq6Q/Frame-2.png"
                                className="w-6 h-6"
                                alt="money"
                            />
                            <p className="text-gray-500">
                                <strong className="text-black">Phone: </strong>
                                {contact}
                            </p>
                        </div>
                        <div className="flex gap-2 mt-6">
                            <img
                                src="https://i.ibb.co/HV4Yc8R/Frame-3.png"
                                className="w-6 h-6"
                                alt="calender"
                            />
                            <p className="text-sm text-gray-500">
                                <strong className="text-black">Email: </strong>
                                {contact}
                            </p>
                        </div>
                        <div className="flex gap-2 mt-6">
                            <img
                                src="https://i.ibb.co/Xj7xbv8/Frame-4.png"
                                className="w-6 h-6"
                                alt="location"
                            />
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
            <Toaster />
        </div>
    );
};

export default JobDetailsCard;
