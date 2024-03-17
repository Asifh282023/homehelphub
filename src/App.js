import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./Components/signupCompnnts/Register";
import Platform from "./Components/UserForm/Platform";
import Workerprofile from "./Components/Workerprofile";
import Maidlist from "./Components/Maidlist";
import HomeLayout from "./Components/HomeLayout";
import Myprofile from "./Components/UserProfile/Myprofile";
import { useEffect } from "react";
import Login from "./Components/Login";
import Loader from "./Components/Loader";


function App() {

  return (
  
      <Routes>
        <Route element={<HomeLayout />} path="/" />
        <Route element={<Workerprofile />} path="/workerprofile" />
        <Route element={<Maidlist />} path="/maidprofiles"></Route>
        <Route element={<Myprofile />} path="/myprofile"></Route>
        <Route element={<Platform />} path="/userform" />
        <Route element={<Register />} path="register"></Route>
        <Route element ={<Login />} path="login" ></Route>
        <Route element={<Loader />} path="/loader"></Route>
      </Routes>
  
  );
}

export default App;
