import React, { useState } from "react";
import App from './App';
import { Link, Redirect } from 'react-router-dom';

const OTPBox = (props) => {
    const [otp, setOtp] = useState(new Array(4).fill(""));
    const [vr, setVr] = React.useState(false);
    const home = () =>{
        setVr(true)
    }
    if(vr)
    {
        return <Redirect to= "/dashboard" />;
    }
    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        //Focus next input
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    return (



            <div className="text-center">
                <div className="col text-center">
                    <h2>Please verify Mobile number</h2>

                    <p>OTP Hint- 1234</p>
                    {otp.map((data, index) => {
                        return (
                            <input
                                className="otp-field"
                                type="text"
                                name="otp"
                                maxLength="1"
                                key={index}
                                value={data}
                                onChange={e => handleChange(e.target, index)}
                                onFocus={e => e.target.select()}
                            />
                        );
                    })}

                    <p>OTP Entered - {otp.join("")}</p>

                    <p>Didn't recieve the code? Resend</p>
                    <p>

                        <button
                            className="btn btn-secondary mr-2"
                            onClick={e => setOtp([...otp.map(v => "")])}
                        >
                            Clear
                        </button>
                        { otp.join("")== '1234' &&
                        <button
                            className="btn btn-primary"
                            onClick={home}
                        >
                            Verify OTP
                        </button>
                    }

                    </p>
                    <Link to="/"> Home </Link>
                </div>
            </div>

    );
};

export default OTPBox;
