import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../nabar/Home";
import Student from "../nabar/Student";
import Contact from "../nabar/Contact";
import Navbar from "../nabar/Navbar";
import Store from "../store/Store";
import EditStudent from "../editStudent/EditStudent";
import AddStudent from "../addStudent/AddStudent";

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
        <Store.Provider value={{ value: data, function: setData }}>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/student"} element={<Student />} />
            <Route path={"/contact"} element={<Contact />} />
            <Route path={'/editStudent/:id'} element={<EditStudent />} />
            <Route path={'/addStudent'} element={<AddStudent />} />
          </Routes>
        </Store.Provider>
      </BrowserRouter>
    </>
  );
};

export default Routing;
