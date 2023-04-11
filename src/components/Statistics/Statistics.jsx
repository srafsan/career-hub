import React from "react";

import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const Statistics = () => {
    const data = [
        {
            id: 1,
            name: "Assignment-1",
            marks: 60,
        },
        {
            id: 2,
            name: "Assignment-2",
            marks: 60,
        },
        {
            id: 3,
            name: "Assignment-3",
            marks: 60,
        },
        {
            id: 4,
            name: "Assignment-4",
            marks: 60,
        },
        {
            id: 5,
            name: "Assignment-5",
            marks: 60,
        },
        {
            id: 6,
            name: "Assignment-6",
            marks: 60,
        },
        {
            id: 7,
            name: "Assignment-7",
            marks: 60,
        },
        {
            id: 8,
            name: "Assignment-8",
            marks: 60,
        },
    ];

    return (
        <div className="flex flex-col items-center">
            <h1 className="my-20">This is Area Responsive Container</h1>

            <div style={{ width: "100%", height: 400 }}>
                <ResponsiveContainer>
                    <AreaChart
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area
                            type="monotone"
                            dataKey="marks"
                            stroke="#8884d8"
                            fill="#8884d8"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;
