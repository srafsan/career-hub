import React from "react";
import JobCategoryCard from "../JobCategoryCard/JobCategoryCard";

const JobCategory = ({ jobCategoryData }) => {
    return (
        <div className="mt-32">
            <h1 className="text-5xl font-bold">Job Category List</h1>
            <p className="text-gray-500 mt-4">
                Explore thousands of job opportunities with all the information
                you need. Its your future
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center mt-8">
                {jobCategoryData.map((job) => (
                    <JobCategoryCard key={job.id} job={job} />
                ))}
            </div>
        </div>
    );
};

export default JobCategory;
