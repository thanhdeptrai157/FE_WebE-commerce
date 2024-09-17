import React from "react";
import '../Style/Comment.css';

const Comment = ({ className, nameCustomer, content, timeComment }) => {
    return (
        <div className={`Comment ${className}`}>
            <div className="starProduct">
                {[...Array(5)].map((_, index) => (
                    <img key={index} src="/Image/Star.png" alt='star' />
                ))}
            </div>
            <div className="header">
                <div className="nameCustomer">{nameCustomer}</div>
                <span style={{ display: "flex", alignItems: "center" }}>
                    <img src="/Image/tick.png" alt="tick" />
                </span>
            </div>
            <div className="content">{content}</div>
            <div className="timeComment">Post on {timeComment}</div>
        </div>
    );
};

export default Comment;
