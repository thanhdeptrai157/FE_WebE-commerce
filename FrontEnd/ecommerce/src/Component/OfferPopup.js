import React from "react";
import '../Style/OfferPopup.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const OfferPopup = ()=>{
    return (
        <div style={{padding: "0px 70px", height: "fit-content"}}>
            <div className="Offer">
                <div className="offerContent">
                    STAY UPTO DATE ABOUT OUR LATEST OFFERS
                </div>
                <div className="requestOffer">
                    <div className="inputMailZone">
                        <FontAwesomeIcon icon={faEnvelope}/>
                        <input placeholder="Enter your mail address"/>
                    </div>
                    <button class = "btnSubmit">Subcribe to Newletter</button>
                </div>
            </div>
        </div>    
    );
}

export default OfferPopup;