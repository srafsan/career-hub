import React, { useEffect, useState } from "react";
import FeaturedJobsCard from "../FeaturedJobsCard/FeaturedJobsCard";

const FeaturedJobs = () => {
    const [featuredJobs, setFeaturedJobs] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch("featuredJobs.json")
            .then((res) => res.json())
            .then((data) => setFeaturedJobs([...featuredJobs, ...data]));
    }, []);

    const handleShowAllClick = () => {
        setShowAll(!showAll);
    };

    return (
        <div className="mt-32 mb-8">
            <h1 className="text-5xl font-bold">Featured Jobs</h1>
            <p className="text-gray-500 mt-4">
                Explore thousands of job opportunities with all the information
                you need. Its your future
            </p>
            <div className="mt-8 grid md:grid-cols-2 gap-6 justify-center">
                {showAll
                    ? featuredJobs.map((fJob) => (
                          <FeaturedJobsCard key={fJob.id} fJob={fJob} />
                      ))
                    : featuredJobs
                          .slice(0, 4)
                          .map((fJob) => (
                              <FeaturedJobsCard key={fJob.id} fJob={fJob} />
                          ))}
            </div>
            <button
                onClick={handleShowAllClick}
                className="btn btn-info mt-10 text-white"
            >
                {showAll ? "Show Less Jobs" : "See All Jobs"}
            </button>
        </div>
    );
};

export default FeaturedJobs;
