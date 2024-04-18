import React, { useState } from 'react'

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Button, Typography } from '@mui/material';

const Counter = () => {
    var[Count,setCount]=useState(0)

    var add=()=>{
        setCount(Count+1)
    }
    var sub=()=>{
        setCount(Count-1)
    }
  return (
    <div style={{margin:'10%'}}>
    <Typography variant='h4'> {Count}</Typography>
     <Button variant='conatined' onClick={add}><AddIcon></AddIcon></Button>
     <Button variant='conatined' onClick={sub}><RemoveIcon></RemoveIcon></Button>
    </div>
  )
}

export default Counter
