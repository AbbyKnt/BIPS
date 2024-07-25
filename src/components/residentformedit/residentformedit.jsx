import "./residentformedit.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

const residentformedit = (props) => {
  const userID = props.id;
  const [page, setPage] = useState(0);
  const [psex, setPsex] = useState('');
  const [pname, setPname] = useState('');
  const [ppurok, setPpurok] = useState(0);
  const [pcstatus, setPcstatus] = useState('');
  const [pbirthday, setPbirthday] = useState('');
  const [errormessage, setErrorMessage] = useState(false);

  const uvalues = {uname: pname, usex: psex, uage: page, ubirthday: pbirthday, upurok: ppurok, ucstatus: pcstatus};

  useEffect(()=>{
    const getData = async () =>{
        try{
            const response = await axios.get('http://localhost:3000/getUser/' + userID);
            setPsex(response.data[0].sex);
            setPage(response.data[0].age);
            setPpurok(response.data[0].purok);
            setPbirthday(response.data[0].birthday);
            setPname(response.data[0].user_fullname);
            setPcstatus(response.data[0].civil_status);
        }catch(error){throw error;};
    }
    getData();
  }, []);

  const UpdateData = async () =>{
    try{
        await axios.put('http://localhost:3000/residentupdate/' + userID, uvalues);
        window.location.reload();
    }catch(error){
        setErrorMessage(true);
    }};

  return (
    <>
    <form className="ed_mainformwrapper">
        <div className="ed_formmainsubwrapper">

              <div className="ed_form1wrapper">
              {/*********** Resident Name, Sex, and Civil Status Field ***********/}

                <div className="ed_form1inputs">
                    <label htmlFor="fullnameinput">Resident Full Name</label>
                    <input value={pname} onChange={(e) => setPname(e.target.value)} name="fullnameinput" type="text" placeholder="Resident Full Name: "/>
                </div>

                <div className="ed_form1bottomwrapper">
                    <select value={psex} onChange={(e) => setPsex(e.target.value)} name="Sex" id="sex">
                        <option value="" disabled hidden>Sex</option>
                        <option value="M">M</option>
                        <option value="F">F</option>
                    </select>

                    <select value={pcstatus} onChange={(e) => setPcstatus(e.target.value)} name="Civil_Status" id="civilstatus">
                        <option value="" disabled hidden>Civil Status</option>
                        <option value="Single">Single</option>
                        <option value="Married">Married</option>
                        <option value="Widowed">Widowed</option>
                    </select>
                </div>

              </div>

              <div className="ed_form2mainwrapper">
              {/*********** Resident Birthday, Age, and Purok Number Field ***********/}
                    <div className="ed_form2wrapper">
                        <label htmlFor="birthdayinput">Birthday</label>
                        <input value={pbirthday} onChange={(e) => setPbirthday(e.target.value)} name="birthdayinput" type="date" placeholder="Bithday: "/>

                        <div className="ed_form2bottomwrapper">
                            <div className="ed_form2botttominput">
                                <label htmlFor="ageinput">Age</label>
                                <input value={page} onChange={(e) => setPage(e.target.value)} name="ageinput" type="number" placeholder="Age: "/>
                            </div>

                            <div className="ed_form2botttominput">
                                <label htmlFor="puroknumberinput">Purok</label>
                                <input value={ppurok} onChange={(e) => setPpurok(e.target.value)} name="puroknumberinput" type="number" placeholder="Purok Number: "/>
                            </div>           
                        </div>
                    </div>  

              </div>
        </div>

        <div className="ed_optionswrapper">
            {errormessage &&(
                <><h1 className="ed_cerrormessage">Connection Error</h1></>
            )}
            <button className="ed_optioncancel" onClick={() => window.location.reload()}>Cancel</button>
            <button className="ed_optionsave" onClick={UpdateData}>Save Record</button>
        </div>

    </form>
    </>
  )
}

export default residentformedit;