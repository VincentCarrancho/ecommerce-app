import Navbar from "./Navbar";
import SubNavbar from "./SubNavbar";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { useEffect } from "react";

export default function ParentNavAndSideBar() {
  // Testing function. This is how you fetch data in React! Use this as a reference just in case we need to fetch products
  const [data, setData] = useState();
  useEffect(() => {
    // On page load, the app will fetch the data.
    fetch("http://localhost:8080/products/allProducts", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((obj) => {
        setData(obj);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <SubNavbar />
      <Sidebar />
    </div>
  );
}
