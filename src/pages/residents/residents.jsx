import "./residents.css";
import axios from "axios";
import { React, useState, useEffect } from "react";
import Navbar from "/src/components/navbar/navbar.jsx";
import AddModal from "/src/components/addmodal/addmodal.jsx";
import EditModal from "/src/components/editmodal/editmodal.jsx";
import DeleteModal from "/src/components/deletemodal/deletemodal.jsx";

const residents = () => {
    const [human, setHuman] = useState({});
    const [search, setSearch] = useState(""); 
    const [humanl, setHumanl] = useState(false);

    useEffect(()=>{
        const retriveAllData = async () =>{
            try{
                const response = await axios.get('http://localhost:3000/residents');
                setHuman(response.data);
                if(response.data.length > 0){
                    setHumanl(true);
                }
            }catch(error){throw error;}
        }
        retriveAllData();
    })

    return (
    <>
    <Navbar/>
    <section className='all_sections'>
            {/******Residents Content Main Wrapper******/}
        <div className="rs_contentmainwrapper">

            {/******Residents Top Content Wrapper******/}
            <div className="rs_topcontentwrapper">
                <h1>Barangay Residents</h1>

                <div className="rs_topcontentright">
                    <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search Resident"/>
                    <AddModal/>
                </div>
            </div>

            {/******Residents Table Content Wrapper******/}
            <div className="rs_bottomcontentwrapper">
                <div className="rs_bttablewrapper">
                    {humanl ?(
                        <>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Sex</th>
                                        <th>Full Name</th>
                                        <th>Age</th>
                                        <th>Birthday</th>
                                        <th>Purok</th>
                                        <th>Civil Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>

                                <tbody>    
                                    {human.filter((e) =>{
                                        if(search === ""){
                                            return e;
                                        }else return e.user_fullname.toLocaleLowerCase().includes(search);     
                                    }).map((e)=> {
                                        console.log()
                                        return(
                                            <tr key={e.id}>
                                                <td>{e.sex}</td>
                                                <td>{e.user_fullname}</td>
                                                <td>{e.age}</td>
                                                <td>{e.birthday}</td>
                                                <td>{e.purok}</td>
                                                <td>{e.civil_status}</td>
                                                <td className="rs_bttableactions">
                                                    <EditModal id={e.id} userFullName={e.user_fullname}/>
                                                    <DeleteModal id={e.id} userFullName={e.user_fullname}/>
                                                </td>
                                            </tr>
                                        )
                                    })}       
                                </tbody>
                            </table>
                        </>
                    ):(
                    <>
                        <h1 className="rs_bottomnorecordh1">Records Not Found</h1>
                        <h4 className="rs_bottomnorecordh2">Database Connection Error</h4>
                    </>)}        
                </div>
                
            </div>
        </div>
    </section>
    </>  
  )
}

export default residents;