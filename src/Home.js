import React from 'react';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

import {     Redirect } from 'react-router-dom';

function Home() {
    const [value, setValue] = React.useState();
    const [created, setCreated] = React.useState(false);

    const getTest = () =>{
        if(value.length >= 14)
        {
            alert("Please enter a valid phone number")
        }
        else {
            setCreated(true)
        }

    }
    if(created){
        return <Redirect to= "/home" />;
    }

        return(
            <div className = "text-center" marginLeft = "500000">

              <div className = "col center">
              <h1>Admit Kard </h1>
              <h3>Welcome Back</h3>
              <p>Please sign in to your account</p>
              <div className = "PhoneInput">

              <PhoneInput
              placeholder="Enter phone number"
              value={value}
              onChange={setValue}/>
              </div>
              <p>We will send you a one time SMS messgae.</p>
              <button
              className="btn btn-primary"
              onClick={getTest}
              >
              Submit
              </button>
</div>
              </div>

        );

}

export default Home;
