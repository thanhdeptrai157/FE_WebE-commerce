import React from "react";
import { useNavigate } from 'react-router-dom';
import '../Style/Home.css'
import Item from "./Item";
import DisplayItem from "./DisplayItem";
import Comment from "./Comment";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
    const title = ["NEW ARRIVALS", "TOP SELLING"]
    const items = [
        {   
            id:1,
            nameItem: "Checkered Shirt",
            source: "Image/1.png",
            price: "$120",
            isDiscount: false,
        },
        {
            id:2,
            nameItem: "Sleeve Striped T-Shirt",
            source: "Image/2.png",
            price: "$240",
            isDiscount: true,
        },
        {
            id:3,
            nameItem: "T-shirt with Tape Detail",
            source: "Image/3.png",
            price: "$180",
            isDiscount: false,
        }, 
        {
            id:4,
            nameItem: "Skinny Fit Jean",
            source: "Image/4.png",
            price: "$130",
            isDiscount: true,
        },
    ]

    const topSelling = [
        {
            id:5,
            nameItem: "Vertical Striped Shirt",
            source: "Image/5.png",
            price: "$212",
            isDiscount: true,
        },
        {
            id:6,
            nameItem: "Courage Graphic T-Shirt",
            source: "Image/6.png",
            price: "$145",
            isDiscount: false,
        },
        {
            id:7,
            nameItem: "Loose Fit Bermuda Shorts",
            source: "Image/7.png",
            price: "$80",
            isDiscount: false,
        },
        {
            id:8,
            nameItem: "Faded Skinny Jeans",
            source: "Image/8.png",
            price: "$210",
            isDiscount: false,
        },
    ]
    const comment = [
        {
            nameCustomer: "Samantha D.",
            content: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
            timeComment: "August 14, 2023",
        },
        {
            nameCustomer: "Alex K.",
            content: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
            timeComment: "August 15, 2023",
        },
        {
            nameCustomer: "Jame L.",
            content: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
            timeComment: "August 16, 2023",
        },
    ]
    const renderItem = (itemList, Component) => {
        const renderedItems = [];
        for (let i = 0; i < itemList.length; ++i) {
            renderedItems.push(<Component key={itemList[i].id} {...itemList[i]} />);
        }
        return renderedItems;
    }
    // const renderItem = (itemList, Component) => {
    //     return itemList.map((item) => <Component key={item.id} e={item} />);
    // };
    
    return (
        <div >
             <div className="infor-Banner paddingCus">
                <h1 className="sologan">FIND CLOTHES<br></br>
                    THAT MATCHES<br></br>
                    YOUR STYLE</h1>
                <p1 className="scriptNote">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p1>
                <br></br>
                <button class="btn">Shop Now</button>
                <div class="block-mount" style={{ display: "flex", gap: "20px", marginTop: "40px" }}>
                    <div class="block"><span className="mount">200+</span><br></br><p1 className="scriptNote">International Brands</p1></div>
                    <div class="block"><span className="mount">2,000+</span><br></br><p1 className="scriptNote">Hight-Quality Products</p1></div>
                    <div class="block"><span className="mount">30,000+</span><br></br><p1 className="scriptNote">Happy Customers</p1></div>
                </div>
            </div>
            <div className="mainWeb">
                <img src="Image/banner.png" width={"100%"} style={{ display: "block" }} alt="" />
            </div>
            <div className="brand">
                <div className="brand-name" style={{ fontFamily: "Radiant RR Bold" }}>VERSACE</div>
                <div className="brand-name" style={{ fontFamily: "Linotype Didot Pro Bold" }}>ZARA</div>
                <div className="brand-name" style={{ fontFamily: "Gucci" }}>GUCCI</div>
                <div className="brand-name" style={{ fontFamily: "Rosan", fontWeight: "bold" }}>PRADA</div>
                <div className="brand-name" style={{ fontFamily: "Futura" }}>Calvin Klein</div>
            </div>

            <DisplayItem title = {title[0]} func={renderItem(items, Item)}  />
            <DisplayItem title = {title[1]} func={renderItem(topSelling, Item)} />

            <div className="styleBrowse ">
                <div className="displayStyleZone style paddingCus" >
                    <h1 className="nameTopic heading">BROWSE BY DRESS STYLE</h1>
                    <div className="allStyle">
                        <div className="flexBox">
                            <div className="causual">
                                <p className="nameStyle">Casual</p>
                                <img src="Image/9.png" alt="" />
                            </div>
                            <div className="formal">
                                <p className="nameStyle">Formal</p>
                                <img src="Image/11.png" alt="" />
                            </div>
                        </div>
                        <div className="flexBox">
                            <div className="party">
                                <p className="nameStyle">Party</p>
                                <img src="Image/10.png" alt="" />
                            </div>
                            <div className="gym">
                                <p className="nameStyle">Gym</p>
                                <img src="Image/12.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="comment-custommer paddingCus ">
                <div className="headerTopic">
                    <h1 className="nameTopic">OUT HAPPY CUSTOMERS</h1>
                    <div className="arrow">
                        <button><FontAwesomeIcon icon={faArrowLeft} /></button>
                        <button><FontAwesomeIcon icon={faArrowRight} /></button>
                    </div>
                </div>
                <div className="commentZone">
                    {renderItem(comment, Comment)}
                </div>
            </div>
        </div>
    )
}

export default Home;