import React, { useContext } from "react";
import Store from "../store/Store";

const Student = () => {
  const DATA = useContext(Store);
  console.log(DATA);
  return (
    <>
      <h1>student</h1>
      <p>{DATA.value.map((item,index)=>{
        return(
          <>
           
          </>
        )
      })}</p>
    </>
  );
};

export default Student;
