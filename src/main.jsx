import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App'
// import Navbar from './Components/Navbar'
import CssBaseline from "@mui/material/CssBaseline";
// import SubNavbar from './Components/SubNavbar'
// import Sidebar from './Components/Sidebar'
import ParentNavandSideBar from "./Components/ParentNavAndSideBar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <CssBaseline />
    {/* <Navbar/>
    <SubNavbar/>
    <Sidebar/> */}
    <ParentNavandSideBar />
  </React.StrictMode>
);
