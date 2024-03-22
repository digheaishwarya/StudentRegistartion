import React,{useEffect} from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
const PUpdate = () => {
  const navigate=useNavigate()
  let id=useParams().id;
  useEffect(()=>{
    axios.delete(`http://localhost:3000/Student/${id}`)
      .then(res=>{
        alert("Record Deleted..")
       
        navigate('/')
        // console.log(res)
      })
      .catch(error=>{
        console.log(error);
      })
  })
 
}

export default PUpdate
