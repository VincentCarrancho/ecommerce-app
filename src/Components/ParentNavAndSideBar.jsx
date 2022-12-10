import Navbar from "./Navbar";
import SubNavbar from "./SubNavbar";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { useEffect } from "react";

export default function ParentNavAndSideBar() {
  // Testing function. This is how you fetch data in React! Use this as a reference just in case we need to fetch products

  return (
    <div>
      <Navbar />
      <SubNavbar />
      <Sidebar />
    </div>
  );
}
