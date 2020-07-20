import { Router, Link, navigate } from '@reach/router';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import obi from './obi.png';




const Error = props => {

    return(
        <>
            <div className="text-center text-danger mt-4">
                <h6>ERROR: These aren't the droids you're looking for!</h6>
                <div className="mt-4">
                    <img src={obi} width="270px" alt="error"></img>

                </div>
            
                
            </div>
        </>
    )
}








export default Error;