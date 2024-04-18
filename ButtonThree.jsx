import React, { useState,Typography,Button } from 'react'

const ButtonThree = () => {
    var[data,setData]=useState()
    const dataHandling=()=>{
      setData("welcome to home")
  }
  const bataHandling=()=>{
    setData("welcome to Gallery")
}
const pataHandling=()=>{
  setData("contact us")
}
  return(
   

    <div style={{margin:'10%'}}>
      
      <Typography variant='h3'>{data}</Typography>
      <Button variant='contained' color='secondary' onClick={dataHandling}>Home</Button>
      <Button variant='contained' color='secondary' onClick={bataHandling}>Gallery</Button>
      <Button variant='contained' color='secondary' onClick={pataHandling}>Contact</Button>

    </div>
  )
}

export default ButtonThree
