import React, { useEffect, useState } from "react";
import JobDetailsCard from "../JobDetailsCard/JobDetailsCard";

const JobDetails = () => {
    let storedInfo = localStorage.getItem("unique-feature-job");
    storedInfo = JSON.parse(storedInfo);

    const id = storedInfo.id;
    // const [jobs, setJobs] = useState([]);
    // const job = jobs.find((job) => job.id === parseInt(id));
    const job = storedInfo.job;

    // useEffect(() => {
    //     const fetchJobs = async () => {
    //         try {
    //             const res = await fetch("featuredJobs.json");
    //             const data = await res.json();
    //             setJobs([...jobs, ...data]);
    //         } catch (err) {
    //             console.error(err);
    //         }
    //     };

    //     fetchJobs();
    // }, [jobs]);

    // useEffect(() => {
    //     console.log(job);
    // }, [job]);

    return (
        <div className="mt-8">
            <section className="h-[280px] bg-gray-400 flex justify-center items-center">
                <h1>Job Details: {id}</h1>
            </section>

            <section className="mt-32">
                {job && (
                    <JobDetailsCard key={storedInfo.id} jobs={storedInfo} />
                )}
            </section>
        </div>
    );
};

export default JobDetails;
