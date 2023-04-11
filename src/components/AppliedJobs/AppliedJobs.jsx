import React from "react";

import { getBookmarks } from "../../utils/fakeDB";
import AppliedJobsCard from "../AppliedJobsCard/AppliedJobsCard";

const AppliedJobs = () => {
    const appliedJobs = getBookmarks();

    const handleFilter = (id) => {
        console.log(id);
    };

    return (
        <div className="mt-8">
            <section className="h-[280px] bg-gray-400 flex justify-center items-center">
                <h1>Applied Jobs</h1>
            </section>
            <section className="float-right mt-5">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn m-1">
                        Filter By
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <a onClick={() => handleFilter("remote")}>Remote</a>
                        </li>
                        <li>
                            <a onClick={() => handleFilter("onsite")}>
                                On Site
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
            ''
            <section className="mt-32">
                {appliedJobs.map((appliedJob) => (
                    <AppliedJobsCard
                        key={appliedJob.id}
                        appliedJob={appliedJob}
                    />
                ))}
            </section>
        </div>
    );
};

export default AppliedJobs;
