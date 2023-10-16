import React, { useContext } from "react";
import Store from "../store/Store";

const Student = () => {
  const getData = useContext(Store);
  console.log(getData);
  return <div>Student</div>;
};

export default Student;
