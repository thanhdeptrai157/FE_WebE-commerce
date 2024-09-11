import React from "react";

const displayItem = ({e, func}) => {
    return (
        <div className="displayItemZone paddingCus">
            <div style={{ borderBottom: "1px solid #0000001A" }}>
                <div className="topic">
                    <h1 className="nameTopic">{e.title}</h1>
                </div>
                <div className="displayItems">
                    {func}
                </div>
                <div className="divBtn">
                    <button className="btn btnView">View All</button>
                </div>
            </div>
        </div>
    );
}
export default displayItem;