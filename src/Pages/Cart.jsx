import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getcartData } from "../Redux/Cart/action";


const Cart = () => {
  const { userid } = useParams();
  const cart = useSelector((store) => store.cartItemReducer.cart)
  const dispatch = useDispatch();
  const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
    width: "90%",
    margin: "auto"
  };

  useEffect(() => {
    dispatch((getcartData(userid)));
  })
  // const handleIncreaseQuantity = (item) => {
  //   const updatedQuantity = item.quantity + 1;
  //   dispatch(updateCartItemQuantityAction(item.id, updatedQuantity));
  // };

  // const handleDecreaseQuantity = (item) => {
  //   if (item.quantity > 1) {
  //     const updatedQuantity = item.quantity - 1;
  //     dispatch(updateCartItemQuantityAction(item.id, updatedQuantity));
  //   } else {
  //     dispatch(removeFromCartAction(item.id));
  //   }
  // };


  return (
    <div style={gridContainerStyle}>
      <h1>Cart </h1>
    </div>
  )
}
export { Cart }

