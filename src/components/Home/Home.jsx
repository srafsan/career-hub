import React from "react";
import Hero from "../Hero/Hero";
import JobCategory from "../JobCategory/JobCategory";
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const jobCategoryData = useLoaderData();

    return (
        <div className="mt-5">
            <Hero />
            <JobCategory jobCategoryData={jobCategoryData} />
        </div>
    );
};

export default Home;
