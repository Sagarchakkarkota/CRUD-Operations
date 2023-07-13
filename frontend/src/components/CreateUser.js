import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const CreateUser = () => {
       const navigate =useNavigate()
    const[name,setName]=useState()
    const[email,setEmail]=useState()
    const[phone,setPhone]=useState()

    const submit=(e)=>{
        e.preventDefault()
axios.post("http://localhost:3001/createUser",{name,email,phone})
.then((res)=>{console.log(res)
   navigate('/')})
.catch((err)=>{console.log(err)})
}


  return (
    <div className='d-flex vh-100 text-white bg-secondary justify-content-center align-items-center '>  
    <div className='w-50 bg-dark text-white rounded p-3'>
      <form onSubmit={submit}>
        <fieldset>
<legend>Add User</legend>      
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" name='name'  onChange={(e)=>{setName(e.target.value)}} aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" name='email'  onChange={(e)=>{setEmail(e.target.value)}} aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="phone" className="form-label">Phone No</label>
    <input type="tel" className="form-control" name='phone'  onChange={(e)=>{setPhone(e.target.value)}} id="phone"/>
  </div>

  <button type="submit"  className="btn btn-primary">Submit</button>
  </fieldset>
</form>
    </div>
    </div>
  )
}

export default CreateUser
