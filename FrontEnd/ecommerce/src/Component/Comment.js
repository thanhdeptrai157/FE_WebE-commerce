import React from "react";
import '../Style/Comment.css'
const Comment = (e) => {
    return (
        <div className="Comment">
            <div className="starProduct">
                <img src="Image/Star.png" alt='' />
                <img src="Image/Star.png" alt='' />
                <img src="Image/Star.png" alt='' />
                <img src="Image/Star.png" alt='' />
                <img src="Image/Star.png" alt='' />
            </div>
            <div className="header">
                <div className="nameCustomer">{e.nameCustomer} </div>
                <span style={{display: "flex", alignItems: "center"}}><img src="Image/tick.png" alt="" /></span>
            </div>

            <div className="content">{e.content}</div>
            <div className="timeComment">Post on {e.timeComment}</div>
        </div>
    )
}

export default Comment;