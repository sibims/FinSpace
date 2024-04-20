import React, { useState } from 'react'
import './auth.css'

import { UilUser, UilEnvelopeAlt, UilPadlock } from '@iconscout/react-unicons'


const AuthPage = () => {

    const [action,setAction] = useState("Sign Up");
  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
        {action==="Login"?<div></div>:<div className="input">
                <UilUser style={{margin:"0px 30px"}}/>
                <input type="text" placeholder="Name"></input>
            </div>}
            
            <div className="input">
                <UilEnvelopeAlt style={{margin:"0px 30px"}}/>
                <input type="email" placeholder="Email"></input>
            </div>
            <div className="input">
                <UilPadlock style={{margin:"0px 30px"}}/>
                <input type="password" placeholder='Password'></input>
            </div>
            {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
            <button className='continue'>Continue</button>
            <div className="submit-container">
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
            </div>
        </div>
    </div>
  )
}

export default AuthPage