import React, { useContext } from "react";
import Store from "../store/Store";
import { Link } from "react-router-dom";

const Student = () => {
  const contextData = useContext(Store);
  console.log(contextData);
  return (
    <>
      <div className="studentContainer">
        <div className="flexOne">
          <h2 className="studentDetails">Student Details</h2>
          <Link to={"/addStudent"}>
            <button className="addStudent">+ Add Student</button>
          </Link>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Course</th>
              <th>Batch</th>
              <th>Change</th>
            </tr>
          </thead>
          <tbody>
            {contextData.value.map((item, index) => {
              return (
                <>
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.course}</td>
                    <td>{item.batch}</td>
                    <td>
                      <Link to={`/editStudent/${index}`}>Edit</Link>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Student;
