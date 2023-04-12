import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    BanglaJobs
                </Link>
            </div>
            <div className="navbar-center flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/statistics">Statistics</Link>
                    </li>
                    <li>
                        <Link to="/jobs">Applied Jobs</Link>
                    </li>
                    <li>
                        <Link to="blog">Blog</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-info font-bold text-white">
                    Start Applying
                </a>
            </div>
        </div>
    );
};

export default Header;
