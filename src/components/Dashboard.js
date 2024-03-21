import React from 'react';
// import { useHistory } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
    // const history = useHistory();

    const handlePreview = () => {
        console.log("Preview clicked");
        // history.push('/login');
    };

    const handleNext = () => {
        console.log("Next clicked");
    };

    return (
        <div className="dashboard">
            <h2>Select the LOB to submit claims:</h2>
            <div className="action-buttons">
                <button className="action-button">AUTO</button>
                <button className="action-button">HOME</button>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div className="nav-buttons">
                <button className="nav-button" onClick={handlePreview}>Preview</button>
                <button className="nav-button" onClick={handleNext}>Next</button>
            </div>
        </div>
    );
};

export default Dashboard;
