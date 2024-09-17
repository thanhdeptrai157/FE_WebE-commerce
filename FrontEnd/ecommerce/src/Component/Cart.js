import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import '../Style/Cart.css'
import CartItem from "./CartItem";
const Cart = ()=>{
    return (
        <div className="Cart">
            <div className="marginForm">
                <div className="navigate">
                <p>Home</p>
                    <FontAwesomeIcon icon={faChevronRight} />
                    <p>Cart</p>
                </div>

                <div className="cartHeader">
                    <span id="logo">
                        YOUR CART
                    </span>
                </div>
                <div className="cartContainer">
                    <div className="product_cartContainer">
                        <CartItem />
                        <hr></hr>
                        <CartItem />
                        <hr></hr>
                        <CartItem />
                    </div>
                    <div className="orderSummary">
                        <span style={{fontSize: "24px", fontWeight: "bold"}}>
                            Order Summary
                        </span>
                        <div className="priceSummary container">
                            <div style={{display: "flex", justifyContent:"space-between"}}>
                                <span>Subtotal</span>
                                <span className="bold">$565</span>
                            </div>
                            <div style={{display: "flex", justifyContent:"space-between"}}>
                                <span>Discount (-20 %)</span>
                                <span style={{color:"red"}} className="bold">-$113</span>
                            </div>
                            <div style={{display: "flex", justifyContent:"space-between"}}>
                                <span>Delivery Fee</span>
                                <span className="bold">$15</span>
                            </div>
                        </div> 
                        <div className="totalPrice ">
                        <div style={{display: "flex", justifyContent:"space-between"}}>
                                <span className="bold">Total</span>
                                <span className="bold" style={{fontSize: "20px"}}>$467</span>
                            </div>
                        </div>
                        <div className="promoCodeContainer">
                            <div className="promoCode">
                                <img src="/Image/Vector.svg"/>
                                <input placeholder="Add Promo Code"/>
                            </div>
                            <button className="btn btnApply">Apply</button>
                        </div>
                        <button className="btn btnCheckout" >Go to Checkout <FontAwesomeIcon icon={faArrowRight}/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cart;