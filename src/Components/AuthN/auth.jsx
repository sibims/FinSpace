import React from 'react'
import './auth.css'

import { UilUser, UilEnvelopeAlt, UilPadlock } from '@iconscout/react-unicons'


const AuthPage = () => {
  return (
    <div className='container'>
        <div className="header">
            <div className="text">Sign Up</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="input">
                <UilUser style={{margin:"0px 30px"}}/>
                <input type="text" placeholder="Name"></input>
            </div>
            <div className="input">
                <UilEnvelopeAlt style={{margin:"0px 30px"}}/>
                <input type="email" placeholder="Email"></input>
            </div>
            <div className="input">
                <UilPadlock style={{margin:"0px 30px"}}/>
                <input type="password" placeholder='Password'></input>
            </div>
            <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
            <button className='continue'>Continue</button>
            <div className="submit-container">
                <div className="submit">Sign Up</div>
                <div className="submit">Login</div>
            </div>
        </div>
    </div>
  )
}

export default AuthPage