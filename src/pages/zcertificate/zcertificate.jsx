import "./zcertificate.css";
import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Navbar from "/src/components/navbar/navbar.jsx";

const zcertificate = () => {
    const [search, setSearch] = useState("");
    const [error, setError] = useState(false);
    const [residents, setResidents] = useState([]);

    useEffect(()=>{
        const getData = async () =>{
        try{
            const response = await axios.get('http://localhost:3000/residents');
            setResidents(response.data)
        }catch(error){throw error;}
    }
    getData();
    }, []);

  return (
    <>
    <Navbar />
    <section className="all_sections">
        <div className="zc_maincontentwrapper">
            <div>
                <h1>Generate Document</h1>
                <div className="zc_maintypewrapper">
                    <h4>Document Type</h4>
                    <div className="zc_typewrapper"><h4>Certificate</h4></div>
                </div>
            </div>

            <div className="zc_rightmainwrapper">
                <div className="zc_righttopwrapper">
                    <h4>Residents</h4>
                    <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Search Residents"/>
                </div>
                <div className="zc_tablemainwrapper">
                    <div className="zc_tablesubwrapper">
                        { error ? (
                            <>
                                <h1>Records Not Found</h1>
                                <h4>Database Connection Error</h4>
                            </>
                        ):(
                            <>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Sex</th>
                                        <th>Full Name</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {residents.filter((e) =>{
                                        if(search === ""){
                                            return e;
                                        }return e.user_fullname.toLocaleLowerCase().includes(search);
                                    }).map((e) =>{
                                        return(
                                            <tr>
                                                <td>{e.sex}</td>
                                                <td>{e.user_fullname}</td>
                                                <td><Link className="zc_tablegeneratebutton" to={`/printcertificate/${e.id}`}>Generate</Link></td>
                                            </tr>
                                        )
                                    })}
                                    <tr>
                                        <td>M</td>
                                        <td>Abby Kont L. Boldino</td>
                                        <td><Link className="zc_tablegeneratebutton" to={`/printcertificate/1`}>Generate</Link></td>
                                    </tr>
                                </tbody>
                            </table>
                            </>
                        )}

                    </div>
                </div>
            </div>

        </div>
    </section>
    </>
  )
}

export default zcertificate;