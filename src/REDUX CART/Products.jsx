import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Box } from "@mui/system";
import {
  Button,
  CardContent,
  Dialog,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

import { fetchProducts, addItem } from "./Products.Slice";

const Products = () => {
  const [wishToggle, setWishToggle] = useState({});
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.products.productArray);
  const cartState = useSelector((state) => state.products.cartArray);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  // console.log("productsArray", productsState);
  // console.log("cartArray", cartState);

  return (
    <>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Products</h1>
      <div style={{ display: "flex", flexDirection: "column", rowGap: "15px" }}>
        {productsState.map((item, index) => {
          return (
            <div key={index}>
              <Card>
                <Box
                  sx={{
                    width: 500,
                    height: 200,
                    display: "flex",
                  }}
                >
                  <CardMedia
                    sx={{
                      objectFit: "contain",
                      width: 170,
                      height: 170,
                      margin: "auto",
                    }}
                    component="img"
                    image={item.image}
                  ></CardMedia>
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography>{item.title}</Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        columnGap: "30px",
                      }}
                    >
                      <Typography>Price: Rs.{item.price}</Typography>
                      <IconButton
                        title="Add to cart"
                        onClick={() => dispatch(addItem(item))}
                      >
                        <AddShoppingCartIcon></AddShoppingCartIcon>
                      </IconButton>
                      <IconButton
                        title="Add to wishlist"
                        // onClick={() => {
                        //   setWishToggle((prev) => {
                        //     return {
                        //       ...prev,
                        //       [item.title]: !wishToggle[item.title],
                        //     };
                        //   });
                        //   dispatch(addWish(item.title));
                        // }}
                      >
                        {wishToggle[item.title] ? (
                          <BookmarkIcon />
                        ) : (
                          <BookmarkBorderIcon />
                        )}
                        {/* <BookmarkBorderIcon /> */}
                      </IconButton>
                    </Box>
                  </CardContent>
                </Box>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
