import React, { useState } from "react";
import App from './App';
import { Link } from 'react-router-dom';


const Dashboard = (props) =>{

    return(
        <div className="container">
        <h1 className = "text-center">Welcome to Admit Kard</h1>
        <center><Link to="/"> Home </Link></center>
        </div>

    )
}

export default Dashboard;
