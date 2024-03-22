import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'


function Read() {
    const {id}=useParams()
    const navigate=useNavigate()
    const[data,setData]=useState([])

    useEffect(()=>{
        axios.get(`http://localhost:3000/Student/${id}`)
        .then(res=>setData(res.data))
       
        .catch(err=>console.log(err))
      },[])

  return (
    <div className='container'>
    
            <p>{data.id}</p>
            <p>{data.name}</p>
            <p>{data.email}</p>
            <p>{data.MobNo}</p>
            <Link to="/">Home</Link>
            
              
    </div>
  )
}

export default Read
