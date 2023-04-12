import React from "react";

const Hero = () => {
    return (
        <div className="grid md:grid-cols-2 text-left">
            <div className="p-6 text-center">
                <h1 className="font-bold text-6xl">
                    One Step <br /> Closer To Your <br />
                    <span className="text-blue-400">Dream Job</span>
                </h1>
                <p className="text-gray-500 mt-6">
                    Explore thousands of job opportunities with all the
                    information you need. Its your future. Come find it. Manage
                    all your job application from start to finish.
                </p>
                <button className="btn btn-info mt-8 text-white">
                    Get Started
                </button>
            </div>
            <div>
                <img
                    src="https://i.ibb.co/fvf80pj/P3-OLGJ1-copy-1.png"
                    className="md:float-right"
                    alt="Banner"
                />
            </div>
        </div>
    );
};

export default Hero;
