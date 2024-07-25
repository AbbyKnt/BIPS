import "./login.css";
import React, { useState } from "react";

const login = () => {
  const [error, setError] = useState(false);

  return (
    <section className='lg_mainwrapper'>
        <div className='lg_formwrapper'>
            
            <h1>BIPS</h1>
            <p>Barangay Iglanot Profiling System</p>
            {error &&(
              <span className="lg_error">Invalid Credentials</span>
            )}

            <form> 
                <label htmlFor="usernamefilled">Admin Username</label>
                <input name="usernamefiled" type="text" placeholder="Enter Username: "/>

                <label htmlFor="userpasswordfield">Admin Password</label>
                <input name="userpasswordfield" type="password" placeholder="Enter Password: "/>

                <button type='button'>Login</button>
            </form>
        </div>
    </section>
  )
}

export default login;