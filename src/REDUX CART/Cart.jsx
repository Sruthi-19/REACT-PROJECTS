import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, clearCart } from "./slice";
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

const Cart = () => {
  const cartItems1 = useSelector((state) => state.cart.cartItems);
  const itemCount1 = useSelector((state) => state.cart.itemCount);
  const price1 = useSelector((state) => state.cart.price);
  const subTotal1 = useSelector((state) => state.cart.subTotal);

  const wishItems1 = useSelector((state) => state.wish.wishItems);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  console.log("wish", wishItems1);

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

      {cartItems1.length > 0 ? (
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

            {cartItems1.map((item, index) => {
              return (
                <TableBody>
                  <TableRow>
                    <TableCell>{item.title}</TableCell>
                    <TableCell sx={{ display: "flex", alignItems: "center" }}>
                      <IconButton onClick={() => dispatch(addItem(item))}>
                        <AddIcon />
                      </IconButton>
                      {itemCount1[item.title]}
                      <IconButton onClick={() => dispatch(removeItem(item))}>
                        <RemoveIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell>{item.price}</TableCell>
                    <TableCell>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        {subTotal1[item.title]}
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
                <h3>TOTAL PRICE Rs.{price1}</h3>
              </TableCell>
            </TableFooter>
          </Table>
        </TableContainer>
      ) : (
        <></>
      )}

      {/* MODAL FOR WISHLIST */}
      <Dialog open={modalOpen}>
        {wishItems1.length > 0 ? (
          <>
            <DialogTitle>Wish List Items</DialogTitle>
            {wishItems1.map((item) => {
              return (
                <>
                  <DialogContent>{item}</DialogContent>
                </>
              );
            })}
            <Button onClick={() => setModalOpen(false)}>CLOSE</Button>
          </>
        ) : (
          <>
            <h1>HI</h1>
          </>
        )}
      </Dialog>
      {/* CART CLEAR DIALOG */}
      <Dialog open={open}>
        {cartItems1.length > 0 ? (
          <>
            <DialogTitle>Do you want to clear the cart?</DialogTitle>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                paddingBottom: "10px",
              }}
            >
              <Button
                variant="contained"
                onClick={() => {
                  dispatch(clearCart());
                  setOpen(false);
                }}
              >
                Yes
              </Button>
              <Button variant="contained" onClick={() => setOpen(false)}>
                No
              </Button>
            </Box>
          </>
        ) : (
          <Box sx={{ padding: "10px", textAlign: "center" }}>
            <DialogTitle>No items in cart</DialogTitle>
            <Button variant="contained" onClick={() => setOpen(false)}>
              Add
            </Button>
          </Box>
        )}
      </Dialog>

      {/* REMOVE DIALOG */}
      <Dialog open={open1}>
        <DialogTitle>Do you want to remove the item entirely</DialogTitle>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            paddingBottom: "10px",
          }}
        >
          <Button variant="contained">Yes</Button>
          <Button variant="contained" onClick={() => setOpen1(false)}>
            No
          </Button>
        </Box>
      </Dialog>
    </>
  );
};

export default Cart;
