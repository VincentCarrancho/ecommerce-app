import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


// hard coded card component

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$facebook$"
          alt="Sony PlayStation 5"
        />
        <CardContent style={{backgroundColor: "rgba(60, 134, 202, 1)"}}>
          <Typography gutterBottom variant="h5" component="div" color="white" fontWeight="bold">
            Sony PlayStation 5
          </Typography>
          <Typography variant="h6" color="white">
          ★ 4.8
          </Typography>
          <Typography variant="h5" color="white" fontWeight="bold">
            $499.99
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}