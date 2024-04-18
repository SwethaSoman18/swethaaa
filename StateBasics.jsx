import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var[name,setName]=useState("swetha");
    const changeName =()=>{
        console.log("btn clicked");
        setName("ritika")
    }
  return (
    <div>
      <Typography variant='h4'>My Name is {name}</Typography>
      <Button variant='contained' onClick={changeName}>change</Button>
    </div>
  )
}

export default StateBasics
