import React, { useEffect, useState } from "react";
import JobDetailsCard from "../JobDetailsCard/JobDetailsCard";

const JobDetails = () => {
    let storedInfo = localStorage.getItem("unique-feature-job");
    storedInfo = JSON.parse(storedInfo);

    const id = storedInfo.id;
    const job = storedInfo.job;

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
