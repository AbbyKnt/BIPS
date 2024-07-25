import "./residentform.css";
import axios from "axios";
import React, { useState } from "react";

const residentform = () => {
    const [errormessage, setErrorMessage] = useState(false);
    const [addValues, setAddValue] = useState({
        fullname: "",
        sex: "",
        age: 0,
        birthday: "",
        purok: 0,
        cstatus: ""
    });

    const AddResident = async (e) =>{
        e.preventDefault();
        try{
            await axios.post('http://localhost:3000/residentsadd', addValues);
            window.location.reload();
        }catch(error){
            setErrorMessage(true);
        }
    }

  return (
    <>
    <form className="ad_mainformwrapper">
        <div className="ad_formmainsubwrapper">

              <div className="ad_form1wrapper">
              {/*********** Resident Name, Sex, and Civil Status Field ***********/}
                <div className="ad_form1inputs">
                    <label htmlFor="fullnameinput">Resident Full Name</label>
                    <input name="fullnameinput" onChange={(d) => setAddValue({...addValues, fullname : d.target.value})} type="text" placeholder="Resident Full Name: "/>
                </div>
                
                <div className="ad_form1bottomwrapper">
                    <select name="Sex" id="sex" onChange={(d) => (setAddValue({...addValues, sex: d.target.value}))}>
                        <option value="" disabled hidden>Sex</option>
                        <option value="M">M</option>
                        <option value="F">F</option>
                    </select>

                    <select name="Civil_Status" id="civilstatus" onChange={(d) => (setAddValue({...addValues, cstatus: d.target.value}))}>
                        <option value="" disabled hidden>Civil Status</option>
                        <option value="Single">Single</option>
                        <option value="Married">Married</option>
                        <option value="Widowed">Widowed</option>
                    </select>
                </div>
              </div>

              <div className="ad_form2mainwrapper">
              {/*********** Resident Birthday, Age, and Purok Number Field ***********/}
                    <div className="ad_form2wrapper">
                        <label htmlFor="birthdayinput">Birthday</label>
                        <input name="birthdayinput" onChange={(d) => setAddValue({...addValues, birthday : d.target.value})} type="date" placeholder="Bithday: "/>

                        <div className="ad_form2bottomwrapper">
                            <div className="ad_form2botttominput">
                                <label htmlFor="ageinput">Age</label>
                                <input name="ageinput" onChange={(d) => setAddValue({...addValues, age : d.target.value})} type="number" placeholder="Age: "/>
                            </div>

                            <div className="ad_form2botttominput">
                                <label htmlFor="puroknumberinput">Purok</label>
                                <input name="puroknumberinput" onChange={(d) => setAddValue({...addValues, purok : d.target.value})} type="number" placeholder="Purok Number: "/>
                            </div>           
                        </div>
                    </div>    
              </div>
        </div>

        <div className="ad_optionswrapper">
            {errormessage &&(
                <><h1 className="ad_cerrormessage">Connection Error</h1></>
            )}
            <button className="ad_optioncancel" onClick={() => window.location.reload()}>Cancel</button>
            <button className="ad_optionsave" onClick={AddResident}>Save Record</button>
        </div>

    </form>
    </>
  )
}

export default residentform;