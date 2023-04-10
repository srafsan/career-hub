import React from "react";

const JobCategoryCard = ({ job }) => {
    const { title, jobs, img } = job;

    return (
        <div className="bg-gray-50 w-60 p-10 rounded-lg border">
            <img
                className="bg-gray-200 p-4 rounded-lg w-[60px]"
                src={img}
                alt="logo"
            />
            <div className="mt-8 text-start">
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-gray-500">{jobs} Jobs Available</p>
            </div>
        </div>
    );
};

export default JobCategoryCard;
