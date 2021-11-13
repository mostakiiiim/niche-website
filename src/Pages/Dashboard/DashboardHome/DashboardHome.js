import React from 'react';

const DashboardHome = () => {
    const pageContainer = {
        width: "100",
        overflow: "hidden",
        backgroundColor: "#F0F8FF"
    }

    return (
        <div className="container" style={pageContainer}>
            <h1 className="text-center mt-5 pt-5">This is Dashboard Home</h1>
        </div>
    );
};

export default DashboardHome;