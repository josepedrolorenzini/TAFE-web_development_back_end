import React, { useState, useEffect } from 'react';
import axios from 'axios';

let  ApiExpenses= () => {

     function getDataExpenses() {
        axios.get('http://localhost:3000/expenses' , {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':"*",
            },
 
        })
        .then((response) => {console.log(response)})
        .catch((error) => {console.log(error)})
    }
    useEffect(() => {getDataExpenses()}, [])


  return (
    <div>ApiExpenses</div>
   
  )
}

export default ApiExpenses