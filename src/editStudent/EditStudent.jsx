import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Store from "../store/Store";

const EditStudent = () => {
  const contextData = useContext(Store);
  const param = useParams().id;
  const navigate = useNavigate();

  const updateObject = {
    name: contextData.value[param].name,
    age: contextData.value[param].age,
    course: contextData.value[param].course,
    batch: contextData.value[param].batch,
  };

  const handleChange = (e) => {
    updateObject[e.target.name] = e.target.value;
  };

  const handleSubmit = () => {
    contextData.value[param] = updateObject;
    navigate("/student");
  };

  return (
    <>
      <form className="editContainer">
        <h1 className="editHeading">Edit Component</h1>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" onChange={handleChange} />{" "}
        <br />
        <label htmlFor="age">Age</label>
        <input type="number" name="age" id="age" onChange={handleChange} />{" "}
        <br />
        <label htmlFor="course">Course</label>
        <input
          type="text"
          name="course"
          id="course"
          onChange={handleChange}
        />{" "}
        <br />
        <label htmlFor="batch">Batch</label>
        <input
          type="text"
          name="batch"
          id="batch"
          onChange={handleChange}
        />{" "}
        <br />
        <br />
        <div className="btnContainer">
          <button type="button" onClick={handleSubmit}>Update</button>
          <button type="button" onClick={() => navigate("/student")}>Back</button>
        </div>
      </form>
    </>
  );
};

export default EditStudent;
