import React from "react";
import { useNavigate } from 'react-router-dom';
import Comment from "./Comment";
import Item from "./Item";
import DisplayItem from "./DisplayItem";
import { useState } from "react";
import '../Style/ProductDetail.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { faMinus } from "@fortawesome/free-solid-svg-icons/faMinus";
const ProductsDetail = () => {
    const items = [
        {
            nameItem: "Polo with Contrast Trims",
            source: "/Image/16.png",
            price: "$120",
            isDiscount: false,
        },
        {
            nameItem: "Gradient Graphic T-shirt",
            source: "/Image/17.png",
            price: "$240",
            isDiscount: true,
        },
        {
            nameItem: "Polo with Tipping Details",
            source: "/Image/18.png",
            price: "$180",
            isDiscount: false,
        }, {
            nameItem: "Black Striped T-shirt",
            source: "/Image/19.png",
            price: "$130",
            isDiscount: true,
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
    const images = [
        { id: 1, source: '/Image/13.png' },
        { id: 2, source: '/Image/14.png' },
        { id: 3, source: '/Image/15.png' },
    ];
    const navigate = useNavigate();
    const handleClick = (id) => {
        navigate(`/product/${id}`);
    };

    const renderItem = (itemList, Component, addClass) => {
        const renderedItems = [];
        for (let i = 0; i < itemList.length; ++i) {
            renderedItems.push(<Component key={itemList[i].id} {...itemList[i]} className={addClass} />);
        }
        return renderedItems;
    }
    const [selectedImage, setSelectedImage] = useState(images[0].source);
    const [selectedImageid, setSelectedImageId] = useState(images[0].id);
    const [fadeClass, setFadeClass] = useState("fade-in");
    const [selectedColor, setSelectedColor] = useState(null);

    const handleColorClick = (color) => {
        setSelectedColor("");
        setTimeout(() => {
            setSelectedColor(color);
        }, 30);
    };

    const handleThumbnailClick = (image) => {
        setFadeClass("");
        setTimeout(() => {
            setSelectedImage(image.source);
            setSelectedImageId(image.id);
            setFadeClass("fade-in");
        }, 300);
    };

    return (
        <div className="ProductDetail">
            <div className="marginForm">
                <div className="navigate">
                    <p>Home</p>
                    <FontAwesomeIcon icon={faChevronRight} />
                    <p>Shop</p>
                    <FontAwesomeIcon icon={faChevronRight} />
                    <p>Men</p>
                    <FontAwesomeIcon icon={faChevronRight} />
                    <p>T-Shirt </p>
                </div>
                <div className="inforProduct">
                    <div className="imageProduct">
                        <div className="thumbnail">
                            {images.map((image) => (
                                <img
                                    key={image.id}
                                    src={image.source}
                                    alt={`Thumbnail ${image.id}`}
                                    className={`ImageThumbnail ${selectedImageid === image.id ? 'isSelected' : ``}`}
                                    onClick={() => handleThumbnailClick(image)}
                                />
                            ))}
                        </div>
                        <div className="PreviewImage">
                            <img src={selectedImage} alt="Selected" className={`main-image ${fadeClass}`} />
                        </div>
                    </div>
                    <div className="contentProduct">
                        <div className="nameProduct">ONE LIFE GRAPHIC T-SHIRT</div>
                        <div className="star-Product flex">
                            <div className="star">
                                <img src="/Image/Star.png" alt='' />
                                <img src="/Image/Star.png" alt='' />
                                <img src="/Image/Star.png" alt='' />
                                <img src="/Image/Star.png" alt='' />
                                <img src="/Image/Star.png" alt='' />
                            </div>
                            <div className="point">
                                <span>5/5</span>
                            </div>
                        </div>
                        <div className="priceInfor number ">
                            <div className="price number detail">$180</div>
                            <div className="discountInfor">
                                <div className="priceBeforeDiscount price number detail" >$300</div>
                                <div className="percentDiscount number percentDetail">30%</div>
                            </div>
                        </div>
                        <div className="mainContent textColor">
                            This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
                        </div>
                        <div className="selectColor mainContent">
                            <p className="textColor">Select Colors</p>
                            <div className="colorZone flex">
                                <div className="color color1" onClick={() => handleColorClick("color1")}>
                                    {selectedColor === "color1" && (
                                        <FontAwesomeIcon icon={faCheck} style={{ color: "white" }} />
                                    )}
                                </div>
                                <div className="color color2" onClick={() => handleColorClick("color2")}>
                                    {selectedColor === "color2" && (
                                        <FontAwesomeIcon icon={faCheck} style={{ color: "white" }} />
                                    )}
                                </div>
                                <div className="color color3" onClick={() => handleColorClick("color3")}>
                                    {selectedColor === "color3" && (
                                        <FontAwesomeIcon icon={faCheck} style={{ color: "white" }} />
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="selectSize mainContent">
                            <p className="textColor">Choose Size</p>
                            <div className="sizeZone flex">
                                <div className="size textColor">
                                    Small
                                </div>
                                <div className="size textColor">
                                    Medium
                                </div>
                                <div className="size textColor">
                                    Large
                                </div>
                                <div className="size textColor">
                                    X-Large
                                </div>
                            </div>
                        </div>
                        <div className="amount mainContent flex">
                            <div className="quantity flex">
                                <button ><FontAwesomeIcon icon={faMinus} /></button>
                                <input type="number" className="no-spinners flex" value={"1"}></input>
                                <button><FontAwesomeIcon icon={faPlus} /></button>
                            </div>
                            <button className="addBtn btn">Add to Cart</button>
                        </div>

                    </div>
                </div>
                <div className="SideBar flex">
                    <a href="">Product Detail</a>
                    <a href="">Rating & Reviews</a>
                    <a href="">FAQs</a>
                </div>
                <div id="productDetail">
                    <div className="flex" style={{ alignItems: "center", justifyContent: "space-between" }}>
                        <h3>All Reviews <span className="textColor">(451)</span></h3>
                        <div className="filterOption">
                            <div className="filter flex">
                                <img src="/Image/Filter.svg" />
                                <select className="selectOption">
                                    <option>Latest</option>
                                </select>
                                <button className="btnWrite btn">Write a Review</button>
                            </div>
                        </div>
                    </div>
                    <div className="commentZoneProduct">
                        {renderItem(comment, Comment, 'commentProductFix')}
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <button className="btn btnView">Load More Reviews</button>
                    </div>

                </div>
                <div>
                    <DisplayItem title="YOU MAY ALSO LIKE" func={renderItem(items, Item)} />
                </div>
            </div>
        </div>
    )
}

export default ProductsDetail;