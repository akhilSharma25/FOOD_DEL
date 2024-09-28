

import { useState } from "react"
import "./LoginPopUP.css"
import { assets } from "../../assets/assets"
 
export const LoginPopUP=({setShowLogin})=>{

    const [currState,setCurrState]=useState("Sign Up")
    return(
        <div className="login-popup">
            <form action="" className="login-popup-container">

                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />

                </div>

                <div className="login-popup-inputs">
                    
                    {currState==="login"?<></>:                    <input type="text"placeholder="Your name" required/>
                    }
                    <input type="email" placeholder="Your email" required />
                    <input type="password" placeholder="Password" required name="" id="" />
                </div>
                <button>{currState==="Sign Up"?"Create account":"Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required/>
                    <p>By continuing,I agree to the term of use & privacy policy</p>
                </div>
                {currState==="Login"?
                <p>Create a new account? <span    onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
:               <p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
}

            </form>
        </div>
    )
}