import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../nabar/Home";
import Student from "../nabar/Student";
import Contact from "../nabar/Contact";
import Navbar from "../nabar/Navbar";
import Store from "../store/Store";

const Routing = () => {
  const [data, setData] = useState([
    { name: "Ayush", age: 22, batch: "November", course: "MERN" },
    { name: "Ayush", age: 22, batch: "November", course: "MERN" },
    { name: "Ayush", age: 22, batch: "November", course: "MERN" },
    { name: "Ayush", age: 22, batch: "November", course: "MERN" },
    { name: "Ayush", age: 22, batch: "November", course: "MERN" },
  ]);
  
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={"/home"} element={<Home />} />
          <Route
            path={"/"}
            element={
              <Store.Provider value={{ DATA: data, DATAFUNCTION: setData }}>
                <Student />
              </Store.Provider>
            }
          />
          <Route path={"/contact"} element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
