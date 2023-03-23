import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "@mui/system";
import {
  Button,
  CardContent,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

import { addItem,removeItem } from "./Products.Slice";

const Cart = () => {
  const cartState = useSelector((state) => state.products.cartArray);
  const countState = useSelector((state) => state.products.itemCount);
  const priceState = useSelector((state) => state.products.price);
  const subTotalState = useSelector((state) => state.products.subTotal);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

 

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          columnGap: "30px",
          marginBottom: "20px",
        }}
      >
        <h1 style={{ margin: "0%" }}>Cart</h1>
        <Button variant="contained" onClick={() => setOpen(true)}>
          CLEAR CART
        </Button>
        <Button variant="contained" onClick={() => setModalOpen(true)}>
          WISHLIST
        </Button>
      </div>

      {cartState.length > 0 ? (
        <TableContainer sx={{ backgroundColor: "whitesmoke" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Item Name</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Sub Total</TableCell>
              </TableRow>
            </TableHead>

            {cartState.map((item, index) => {
              return (
                <TableBody>
                  <TableRow>
                    <TableCell>{item.title}</TableCell>
                    <TableCell sx={{ display: "flex", alignItems: "center" }}>
                      <IconButton onClick={() => dispatch(addItem(item))}>
                        <AddIcon />
                      </IconButton>
                      {countState[item.title]}
                      <IconButton onClick={() => dispatch(removeItem(item))}>
                        <RemoveIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell>{item.price}</TableCell>
                    <TableCell>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        {subTotalState[item.title]}
                        <IconButton onClick={() => setOpen1(true)}>
                          <RemoveShoppingCartIcon />
                        </IconButton>
                      </Box>
                    </TableCell>
                  </TableRow>
                </TableBody>
              );
            })}
            <TableFooter>
              <TableCell>
                <h3>TOTAL PRICE Rs.{priceState}</h3>
              </TableCell>
            </TableFooter>
          </Table>
        </TableContainer>
      ) : (
        <></>
      )}
    </>
  );
};

export default Cart;
