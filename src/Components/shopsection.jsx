import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import ActionAreaCard from "./PrimaryCard";

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
        paddingTop: "25px",
        width: "100%",
        display: "grid",
        gridGap: "25px",
        gridTemplateColumns: "repeat(auto-fill, 345px)",
      }}
    >
      {data.map((product, index) => {
        return (
          <ActionAreaCard
            name={product["name"]}
            image={product["image"]}
            price={product["price"]}
            rating={product["rating"]}
          />
        );
      })}
      {data.map((product, index) => {
        return (
          <ActionAreaCard
            name={product["name"]}
            image={product["image"]}
            price={product["price"]}
            rating={product["rating"]}
          />
        );
      })}
    </Box>
  );
}

export default ApplicationSection;
