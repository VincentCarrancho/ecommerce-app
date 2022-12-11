import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

// hard coded card component

export default function ActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "rgba(60, 134, 202, 1)" }}>
      <CardActionArea>
        <CardMedia component="img" height="200" image={props.image} />
        <CardContent style={{ backgroundColor: "rgba(60, 134, 202, 1)" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color="white"
            fontWeight="bold"
          >
            {props.name}
          </Typography>
          <Typography variant="h6" color="white">
            ★ {props.rating}
          </Typography>
          <Typography variant="h5" color="white" fontWeight="bold">
            {props.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
