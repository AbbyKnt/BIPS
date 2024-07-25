import "./dashboard.css";
import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Navbar from '/src/components/navbar/navbar.jsx';

const dashboard = () => {
  const [numberofResident, setnumberofResident] = useState([]);

  useEffect(()=>{
    const NumberofResident = async () =>{
      try{
        const response = await axios.get('http://localhost:3000/residents');
        setnumberofResident(response.data);
      }catch(error){
        throw error;
      }
    }
    NumberofResident();
  }, []);

  return (
    <>
    <Navbar/>
    <section className='all_sections'>

      <div className="hp_maincontentwrapper">
        <h1>Admin Dashboard</h1>

        {/******Dashboard Options Main Wrapper*******/}
        <div className="hp_dbmainwrapper">

          {/******Dashboard Left Options Wrapper*******/}
          <div className="hp_dbleftwrapper">
            <h4>Actions</h4>
            <Link className="hp_dbleftactions" to="/documents">
              <img src={"/document.svg"} alt="Document Icon" />
              <p>Generate Document</p>
            </Link>

            <Link className="hp_dbleftactions" to="/residents">
              <img src={"/resident.svg"} alt="Resident Icon" />
              <p>Manage Residents</p>
            </Link>

            <Link className="hp_dbleftactions" to="/about">
              <img src={"/house.svg"} alt="House Icon" />
              <p>Modify Barangay Details</p>
            </Link>
          </div> 

          {/******Dashboard Right Options Wrapper*******/}
          <div className="hp_dbrightwrapper">
            <div className="hp_dbrighttop">

              <div className="hp_dbrightpopulation">
                <img src="/resident.svg" alt="Resident Icon" />
                <div className="hp_dbrightpopulationtexts">
                  <h3>Population</h3>
                  <p>Base in the database.</p>
                  <h1>{numberofResident.length}</h1>
                </div>
              </div>

              <div className="hp_dbleftpresident">
                <img src={"/sampleavatar.jpg"} alt="Barangay President Profile" />
                <div className="hp_dbrightpopulationtexts">
                  <h3>Gian E. Cordero</h3>
                  <p>Barangay President</p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
    </>
  )
}

export default dashboard;