import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./CartSideBar.css";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom"


Modal.setAppElement("#root"); // Ensures accessibility by linking the modal to your app's root div.

const CartModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  // Function to fetch the cart from localStorage
  const fetchCart = () => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  };

  // Effect to initialize cart and listen for storage changes
  useEffect(() => {
    fetchCart(); // Load initial cart state

    const handleStorageChange = () => {
      fetchCart(); // Refresh cart when localStorage changes
    };

    window.addEventListener("storage", handleStorageChange);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const removeItem = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1); // Remove the item at the given index
    setCart(updatedCart); // Update the state
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save changes to localStorage
  };

  return (
    <>
      <div className="cart-icon" onClick={toggleModal}>
        cart
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="Cart Modal"
        className="cart-modal"
        overlayClassName="cart-overlay"
      >
        <button className="close-button" onClick={toggleModal}>
          ✖
        </button>
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul className="cart_item_con">
            {cart.map((item, index) => (
              <div className="cart_item" key={index}>
                <img className="cart_img" src={item.image} alt={item.name} />
                <div className="item_details">
                  <p>{item.name}</p>
                  <div className="cart_sub">
                    <p>Quantity: {item.quantity}</p>
                  </div>
                </div>
                <div className="price_con">
                  <p>${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <div>
                  <FontAwesomeIcon
                    className="trash"
                    icon={faTrashCan}
                    onClick={() => removeItem(index)}
                  />
                </div>
              </div>
            ))}
          </ul>
        )}
        <p className="total-price">Total: ${calculateTotal()}</p>
        <button className="Proceed to Checkout" onClick={() => navigate("/checkout")}>Back to Shop</button>

      </Modal>
    </>
  );
};

export default CartModal;
