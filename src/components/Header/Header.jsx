import React from "react";

const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <a>Home</a>
                    </li>
                    <li>
                        <a>Statistics</a>
                    </li>
                    <li>
                        <a>Applied Jobs</a>
                    </li>
                    <li>
                        <a>Blog</a>
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
