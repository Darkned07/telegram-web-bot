import { totalPrice } from "../../units/total-price";
import Button from "../button/Button";
import "./cart.css";

function Cart({ cartItems, onCheckout }) {
  return (
    <div className="cart__container">
      <p>
        Umumiy narx:
        {totalPrice(cartItems).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </p>

      <Button
        type={"checkout"}
        onClick={onCheckout}
        title={`${cartItems.length === 0 ? "Buyurtma berish" : "To'lov"}`}
        disable={cartItems.length === 0 ? true : false}
      />
    </div>
  );
}

export default Cart;
