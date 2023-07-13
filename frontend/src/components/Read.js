import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Read = () => {
    
   const[name,setName]=useState()
    const[email,setEmail]=useState()
    const[phone,setPhone]=useState()
  
    const {id}=useParams()

    useEffect(()=>{
      axios.get('http://localhost:3001/getUser/'+id)
      .then((result)=>{console.log(result)
      setName(result.data.name)
      setEmail(result.data.email)
      setPhone(result.data.phone)
      })
      .catch((err)=>{console.log(err)})
      
    },[])
  return (
    <div className='d-flex text-white vh-100 bg-secondary justify-content-center align-items-center '>
    <div className='w-50 text-white bg-dark rounded p-3' >
        <div className='p-2'>
        <h2>User Details</h2>
        <h4>{name}</h4>
        <h4>{email}</h4>
        <h4>{phone}</h4>
        </div>
        <Link to='/' className='btn btn-primary me-2'>Back</Link>
      </div>
    </div>
  )
}

export default Read
