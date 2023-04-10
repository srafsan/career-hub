import React from "react";
import Hero from "../Hero/Hero";
import JobCategory from "../JobCategory/JobCategory";
import { useLoaderData } from "react-router-dom";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
    const jobCategoryData = useLoaderData();

    return (
        <div className="mt-5">
            <Hero />
            <JobCategory jobCategoryData={jobCategoryData} />
            <FeaturedJobs />
        </div>
    );
};

export default Home;
