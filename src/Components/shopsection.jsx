import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";

function ApplicationSection() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const intermediate = [];
    // On page load, the app will fetch the data.
    fetch("http://localhost:8080/products/allProducts", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((obj) => {
        console.log(obj["products"]);
        setData(obj["products"]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <ul>
        {data.map((product, index) => {
          return <li key={index}>{product["name"]}</li>;
        })}
      </ul>
    </Box>
  );
}

export default ApplicationSection;
