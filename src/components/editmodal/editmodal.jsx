import "./editmodal.css";
import React, { useState } from "react";
import ResidentEdit from "../residentformedit/residentformedit.jsx";

const editmodal = (props) => {
  const [editModal, setEditModal] = useState(false);
  return (
    <>
    <button onClick={() => setEditModal(true)} className="edt_mainbutton"><img src={"/edit.svg"} alt="Edit Icon"/></button>

    {editModal &&(
      <div className="allmodal_overlay">
        <div className="edt_mainwrapper">

          <div className="edt_noticewrapper">

            <div>
                <h1>Edit Resident Record</h1>
                <p>You are editing <span className="edt_username">{props.userFullName}</span>'s record.</p>
            </div>
            <img onClick={() => setEditModal(false)} src={"/close.svg"}/>

          </div>

          <ResidentEdit id={props.id}/>
        </div>
      </div>
    )}
    </>
  )
}

export default editmodal;