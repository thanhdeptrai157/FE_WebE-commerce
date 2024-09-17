import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useState } from "react";
const Popup = () => {
    const [isRender, setIsRender] = useState(true);

    const setRender = ()=>{
        setIsRender(false);
    }
    return (
        isRender &&
        <div className="Popup" style={{ 
            backgroundColor: "black", 
            display: "flex",
            padding: "0px 70px"
            }}>
            <div className="Noti" style={{ 
                width: "100%", 
                color: "white", 
                padding: "10px",
                display: "flex",
                justifyContent: "center",
                fontSize: "13px",
                alignItems: "center", gap:"1%"
                }}>
                Sign up and get 20% off to your first order. <a href="" style={{color: "white"}}> Sign Up Now</a>
                
            </div>
            <button style={{
                    backgroundColor: "transparent",
                    border: "None",
                }} id="buttonDel" onClick={setRender}><FontAwesomeIcon icon={faX} style={{color: "white"}} /></button>
        </div>
    )
};


export default Popup;