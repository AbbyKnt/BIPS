import "./addmodal.css";
import React from "react";
import { useState } from "react";
import ResidentForm from "../residentform/residentform.jsx";

const addmodal = () => {
  const [addModal, setAddModal] = useState(false);

  return (
    <>
    <button className="ad_modalbutton" onClick={() => setAddModal(true)}>Add Resident</button>

    {addModal &&(
        <div className='allmodal_overlay'>
          <div className="ad_mainwrapper">
            <div className="ad_noticewrapper">

              <div>
                <h1>Add Resident</h1>
                <p>Enter Correct Resident Information</p>
              </div>
              <img onClick={() => setAddModal(false)} src={"/close.svg"}/>

            </div>

            <ResidentForm/>
          </div>
        </div>
    )}
    </>
  )
}

export default addmodal;