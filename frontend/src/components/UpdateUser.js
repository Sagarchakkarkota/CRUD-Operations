import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateUser = () => {

    const[name,setName]=useState()
    const[email,setEmail]=useState()
    const[phone,setPhone]=useState()
    const navigate=useNavigate()
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

    const onUpdate=(e)=>{
        e.preventDefault()
        axios.put('http://localhost:3001/update/'+id, {name,email,phone})
        .then((result)=>{console.log(result)
        navigate('/')
        })
        .catch((err)=>{console.log(err)})
    }


  return (
    <div className='d-flex text-white vh-100 bg-secondary justify-content-center align-items-center '>
       <div className='w-50 text-white bg-dark rounded p-3' >
      <form onSubmit={onUpdate}>
        <fieldset> 
          <legend>Update User</legend>
   <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" name='name' value={name} onChange={(e)=>setName(e.target.value)} aria-describedby="emailHelp"/>
  </div> 
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" name='email' value={email}  onChange={(e)=>setEmail(e.target.value)} aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="phone" className="form-label">Phone No</label>
    <input type="tel" className="form-control" name='phone' value={phone}  onChange={(e)=>setPhone(e.target.value)} id="phone"/>
  </div>

  <button type="submit"  className="btn btn-primary">Submit</button>
  </fieldset>
</form>
    </div>
    </div>
  )
}

export default UpdateUser
