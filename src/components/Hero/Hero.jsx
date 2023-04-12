import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="mt-4 grid md:grid-cols-2 text-center md:text-left">
            <div className="p-6">
                <h1 className="font-bold md:text-6xl">
                    One Step <br /> Closer To Your <br />
                    <span className="text-blue-400">Dream Job</span>
                </h1>
                <p className="text-gray-500 mt-6">
                    Explore thousands of job opportunities with all the <br />
                    information you need. Its your future. Come find it. Manage{" "}
                    <br />
                    all your job application from start to finish.
                </p>
                <button className="btn btn-info mt-8 text-white">
                    <Link to="/jobs">Get Started</Link>
                </button>
            </div>
            <div>
                <img
                    src="https://i.ibb.co/fvf80pj/P3-OLGJ1-copy-1.png"
                    className="mx-auto md:float-right"
                    alt="Banner"
                />
            </div>
        </div>
    );
};

export default Hero;
