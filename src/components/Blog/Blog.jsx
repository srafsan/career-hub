import React from "react";

const Blog = () => {
    return (
        <div className="max-w-screen-lg">
            <h1 className="my-10 text-center">This is blog</h1>
            <section className="text-left">
                <div className="sm:mt-10">
                    <h2 className="font-bold text-lg md:text-3xl sm:text-lg">
                        When should you use context API?
                    </h2>
                    <p className="mt-5">
                        One should use the Context API in React when you need to
                        pass data from a parent component to multiple levels of
                        nested child components without manually passing it
                        through each intermediate component as props.
                    </p>
                </div>
                <div className="sm:mt-10">
                    <h2 className="font-bold text-lg md:text-3xl sm:text-lg">
                        What is a custom hook?
                    </h2>
                    <p className="mt-5">
                        A custom hook is a reusable function in React that lets
                        you share logic between components..
                    </p>
                </div>
                <div className="sm:mt-10">
                    <h2 className="font-bold text-lg md:text-3xl sm:text-lg">
                        What is useRef?
                    </h2>
                    <p className="mt-5">
                        useRef is a React hook that returns a mutable ref object
                        that can be used to hold a reference to a DOM element or
                        to persist a value between renders.
                    </p>
                </div>
                <div className="sm:mt-10">
                    <h2 className="font-bold text-lg md:text-3xl sm:text-lg">
                        What is useMemo?
                    </h2>
                    <p className="mt-5">
                        useMemo is a React hook that memoizes a value and only
                        recomputes it when its dependencies have changed.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Blog;
