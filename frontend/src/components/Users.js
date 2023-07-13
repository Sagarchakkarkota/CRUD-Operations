import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
import axios from 'axios'
const Users = () => {
    const[details,setDetails]=useState([])
    
    useEffect(()=>{
      axios.get('http://localhost:3001/get')
    .then((res)=>{setDetails(res.data)})
    .catch((err)=>{console.log(err)})
    },[])

    const handleDelete=(id)=>{
axios.delete('http://localhost:3001/delete/'+id)
.then((result)=>{console.log(result)
window.location.reload()
})
.catch((err)=>{console.log(err)})

    }
  return (
    <div className='d-flex vh-100 bg-secondary justify-content-center align-items-center '>
      <div className='w-50 bg-dark rounded p-3' >  
          <Link className="btn btn-primary" to="/create">Add+</Link>
        
      <table className="table table-dark table-striped">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">PhoneNo</th>
      <th scope="col">Edit/Delete</th>
    </tr>
  </thead>
  <tbody>
    {details.map((value)=>{
   return <tr key={value._id}>
   <td>{value.name}</td>
   <td>{value.email}</td>
   <td>{value.phone}</td>
   <td>
   <Link className="btn btn-light mx-2" to={`/update/${value._id}`}><i className="fa-regular fa-pen-to-square"></i></Link>

   <Link className="btn btn-light mx-2" to={`/read/${value._id}`}><i className="fa-regular fa-eye"></i></Link>

   <button type="button" onClick={(e)=>{handleDelete(value._id)}} className="btn btn-light mx-2"><i className="fa-regular fa-trash-can"></i></button>
</td>
   </tr>
    })  
 
}
  </tbody>
</table>
</div>
    </div>
  )
}

export default Users
