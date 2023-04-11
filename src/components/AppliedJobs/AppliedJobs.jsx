import React from "react";
import { getBookmarks } from "../../utils/fakeDB";
import AppliedJobsCard from "../AppliedJobsCard/AppliedJobsCard";

const AppliedJobs = () => {
    const appliedJobs = getBookmarks();
    console.log(appliedJobs);
    return (
        <div className="mt-8">
            <section className="h-[280px] bg-gray-400 flex justify-center items-center">
                <h1>Applied Jobs</h1>
            </section>

            <section className="float-right mt-5">
                <button className="btn btn-primary">Filter</button>
            </section>

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
