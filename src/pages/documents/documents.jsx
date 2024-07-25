import "./documents.css";
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "/src/components/navbar/navbar.jsx";

const documents = () => {
  return (
    <>
    <Navbar/>
    <section className="all_sections">
        <div className="dc_maincontentwrapper">
            <div>
                <h1>Barangay Documents</h1>
                <h4>Select document to generate.</h4>
            </div>
            
            <div className="dc_documenttypewrapper">

                <Link to="/bg-certificate" className="dc_doctype">
                    <img src="/adddotted.svg" alt="Add Icon."/>
                    <p>Certificate</p>
                </Link>

                <Link className="dc_doctype">
                    <img src="/adddotted.svg" alt="Add Icon."/>
                    <p>Indigency</p>
                </Link>
                
            </div>
        </div>
    </section>
    </>
  )
}

export default documents;