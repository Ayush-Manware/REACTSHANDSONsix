import React from 'react'
import { useParams } from 'react-router-dom'
import Store from '../store/Store';

const EditStudent = () => {
    const contextData = useCOntext(Store)
    const param = useParams().id;
    console.log(contextData)
    console.log(param)
    console.log(contextData.data[param]);
  return (
    <>
     <h1>Edit Component</h1>
     <label htmlFor="name">Name</label>
     <input type="text" name='name' id='name' onChange={handleChange} /> <br />
     <label htmlFor="age">Age</label>
     <input type="number" name='age' id='age' onChange={handleChange} /> <br />
     <label htmlFor="course">Course</label>
     <input type="text" name='course' id='course' onChange={handleChange} /> <br />
     <label htmlFor="batch">Batch</label>
     <input type="text" name='batch' id='batch' onChange={handleChange} /> <br />

     <br />

    <button>Update</button>
    <button>Back</button>

    </>

  )
}

export default EditStudent