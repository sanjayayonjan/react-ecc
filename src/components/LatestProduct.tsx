"use client";

import { Card, CardActions, CardContent, CardMedia, Typography, Button } from "@mui/material";

export const LatestProduct = () => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="240"
                image="https://cdn.pixabay.com/photo/2016/11/23/18/12/bag-1854148_1280.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Leather Bag
                </Typography>
            </CardContent>
            <CardActions>
                <h4>Price: $24</h4>
                <Button size="small">Buy Now</Button>
            </CardActions>
        </Card>
    );
}