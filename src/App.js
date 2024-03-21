import React, { useState } from 'react';
import './App.css';
import Login from './components/Login'; 
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');

    const handleLogin = (user) => {
        setIsLoggedIn(true);
        setUsername(user);
    };

    return (
        <Router>
            <div className="app-container">
                <h1 className=''></h1>
                {!isLoggedIn ? (
                    <Login onLogin={handleLogin} />
                ) : (
                    <Dashboard />
                )}
            </div>
        </Router>
    );
};

export default App;
