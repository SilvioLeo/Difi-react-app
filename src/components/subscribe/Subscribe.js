import React from 'react'
import './Subscribe.css'


const Subscribe = () => {
  return (
    <div className='subscribe'>
        <div className="content">
            <h2>Join Our DiFi Community</h2>
            <form action="https://getform.io/f/a5fefe68-c001-4574-a908-4fe10cfd2489" method='POST'>
                <div className="form-container display-col">
                    <input type="email" name='email' placeholder='Enter your email'/>
                    <button className="btn">Sing Up</button>
                </div>
                <div className="form-container">
                    <label >
                        <input type="checkbox"/>
                        <p className='not-selectable'>Yes, I agree to recive email communications from DiFi.</p>
                    </label>
                     
                </div>

            </form>
        </div>
    </div>
  )
}

export default Subscribe