import "./navbar.css";
import React from 'react';
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <div className='nv_mainwrapper'>
        <Link to="/dashboard"><h3>BPIS</h3></Link>
        <div className="nv_optionswrapper">
            <ul>
                <li><Link to='/dashboard'>Dashboard</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/residents'>Residents</Link></li>
                <li><Link to='/requests'>Requests</Link></li>
            </ul>
            <Link to='/account'>
                <img className="nv_image" src={"/sampleavatar.jpg"} alt="Admin profile picture."/>
            </Link>
        </div>
    </div>
  )
}

export default navbar;