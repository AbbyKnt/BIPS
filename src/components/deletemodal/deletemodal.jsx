import "./deletemodal.css";
import axios from "axios";
import { React, useState } from "react";

const deletemodal = (props) => {
  const userFullName = props.userFullName;
  const [deleteModal, setDeleteModal] = useState(false);

  const Finaldeleteresident = async (id) =>{
    try{
      await axios.delete('http://localhost:3000/residents/' + id);
      setDeleteModal(false);
      window.location.reload();
    }catch(error){throw error;}
  }

  return (
    <>
    <button className="dlt_mainbutton" onClick={() => setDeleteModal(true)}><img src={"/delete.svg"} alt="Delete Icon" /></button>

    {deleteModal &&(
      <div className="allmodal_overlay">
        <div className="dlt_mainwrapper">
          <div className="dlt_noticewrapper">
            <h1>Delete Confirmation</h1>
            <p>This will permanently delete this record.</p>
          </div>

          <div className="dlt_topinfo">
            <h2>{userFullName}</h2>
          </div>

          <div className="dlt_bottomoptions">
            <button onClick={() => setDeleteModal(false)} className="dlt_bottomcancel">Cancel</button>
            <button onClick={() => Finaldeleteresident(props.id)}className="dlt_bottomdelete">Delete</button>
          </div>  
        </div>
      </div>
    )}
    </>
  )
}

export default deletemodal;