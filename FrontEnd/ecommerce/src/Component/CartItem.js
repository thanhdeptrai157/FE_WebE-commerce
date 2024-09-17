import React from "react";
import '../Style/CartItem.css'
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const CartItem = (e) => {
    return (
        <div className="cardProductContainer">
            <div className="imageProductCart">
                <img src="/Image/14.png" width={"100%"} height={"100%"} style={{display:"block", objectFit:"cover",borderRadius: "20px"}} />
            </div>
            <div className="productCardInfor">
                <div className="bold" style={{fontSize:"20px"}}> Gradient Graphic T-Shirts</div>
                <div>Size: Large;</div>
                <div>Color: Brown</div>
                <div className="price priceCart">$180</div>
            </div>
            <div className="changeValue">
                <div><img src="/Image/Bin.svg"/></div>
                
                <div className="amount flex">
                    <div className="quantity flex">
                        <button ><FontAwesomeIcon icon={faMinus} /></button>
                        <input type="number" className="no-spinners flex" value={"1"}></input>
                        <button><FontAwesomeIcon icon={faPlus} /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem;