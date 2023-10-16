import React, { useContext } from "react";
import Store from "../store/Store";

const Student = () => {
  const getData = useContext(Store);
  console.log(getData);
  return(
    <>
     <h1>{getData.name}</h1>
    </>
  );
};

export default Student;
