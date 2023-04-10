import React, { useEffect, useState } from "react";
import JobDetailsCard from "../JobDetailsCard/JobDetailsCard";

const JobDetails = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch("featuredJobs.json")
            .then((res) => res.json())
            .then((data) => setJobs([...jobs, ...data]));
    }, []);
    return (
        <div className="mt-8">
            <section className="h-[280px] bg-gray-400 flex justify-center items-center">
                <h1>Job Details</h1>
            </section>

            <section className="mt-32">
                {jobs.slice(0, 1).map((jb) => (
                    <JobDetailsCard key={jb.id} jobs={jb} />
                ))}
            </section>
        </div>
    );
};

export default JobDetails;
