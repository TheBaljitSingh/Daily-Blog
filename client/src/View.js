import React from 'react'
import Nav from './Nav'
import { useState, useEffect, useLocation } from 'react';
import axios from "axios";

function View() {
    let { state } = useLocation();
    console.log(state);


    return(
        <div>
            <h1>View Component</h1>
        </div>


    )

 
}

export default View