import React from "react";
import { useState } from "react";
import '../Style/Category.css'
import { faArrowLeft, faArrowRight, faChevronDown, faChevronRight, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Item from "./Item";
import { useScrollTop } from "../Utils/Function";
const Category = () => {
    useScrollTop();
    const [minValue, setMinValue] = useState(20);
    const [maxValue, setMaxValue] = useState(80);

    const handleMinChange = (event) => {
        const value = Math.min(event.target.value, maxValue - 1);
        setMinValue(value);
    };


    const colors = [
        '#FF5733', 
        '#33FF57', 
        '#3357FF', 
        '#F1C40F', 
        '#FF33F6', 
        '#8E44AD', 
        '#E67E22', 
        '#1ABC9C', 
        '#3498DB', 
        '#9B59B6',
    ];
    const sizes = [
        'XX-Small',
        'X-Small',
        'Small',
        'Medium',
        'XX-Large',
        '3X-Large',
        '4X-Large'
    ];
    const categorys = [
        'T-Shirts',
        'Shorts',
        'Shirts',
        'Hoodie',
        'Jeans'
    ];
    const styles = [
        'Causual',
        'Formal',
        'Party',
        'Gym',
    ];
    const items = [
        {   
            id:1,
            nameItem: "Checkered Shirt",
            source: "/Image/1.png",
            price: "$120",
            isDiscount: false,
        },
        {
            id:2,
            nameItem: "Sleeve Striped T-Shirt",
            source: "/Image/2.png",
            price: "$240",
            isDiscount: true,
        },
        {
            id:3,
            nameItem: "T-shirt with Tape Detail",
            source: "/Image/3.png",
            price: "$180",
            isDiscount: false,
        }, 
        {
            id:4,
            nameItem: "Skinny Fit Jean",
            source: "/Image/4.png",
            price: "$130",
            isDiscount: true,
        },
        {
            id:5,
            nameItem: "Polo with Contrast Trims",
            source: "/Image/16.png",
            price: "$120",
            isDiscount: false,
        },
        {
            id:6,
            nameItem: "Gradient Graphic T-shirt",
            source: "/Image/17.png",
            price: "$240",
            isDiscount: true,
        },
        {
            id:7,
            nameItem: "Polo with Tipping Details",
            source: "/Image/18.png",
            price: "$180",
            isDiscount: false,
        }, 
        {
            id:8,
            nameItem: "Black Striped T-shirt",
            source: "/Image/19.png",
            price: "$130",
            isDiscount: true,
        },
        {
            id:9,
            nameItem: "Faded Skinny Jeans",
            source: "/Image/8.png",
            price: "$210",
            isDiscount: false,
        },
    ]
    const pageNumbers = [
        '1',
        '2',
        '3',
        '...',
        '8',
        '9',
        '10'
    ]
    const handleMaxChange = (event) => {
        const value = Math.max(event.target.value, minValue + 1);
        setMaxValue(value);
    };
    const renderItem = (itemList, Component, addClass) => {
        const renderedItems = [];
        for (let i = 0; i < itemList.length; ++i) {
            renderedItems.push(<Component key={itemList[i].id} {...itemList[i]} className={addClass} />);
        }
        return renderedItems;
    }
    return (
        <div className="Category">
            <div className="marginForm">
                <div className="navigate">
                    <p>Home</p>
                    <FontAwesomeIcon icon={faChevronRight} />
                    <p>Causual </p>
                </div>
                <div className="CategoryContent">
                    <div className="filterCategory">
                        <div style={{
                            display: "flex", alignItems: "center",
                            justifyContent: "space-between",
                            borderBottom: "1px solid #f0f0f0",
                            paddingBottom: "10px"
                        }}>
                            <span>Filters</span>
                            <span><img src="/Image/Filter.svg" /></span>
                        </div>
                        <div className="categoryContainner container">
                            {categorys.map((category, key) => (
                                <div className="categoryHeader">
                                    <span>{category}</span>
                                    <span><FontAwesomeIcon icon={faChevronRight} /></span>
                                </div>
                            ))}
                        </div>
                        <div className="category_price container">
                            <div className="category_price-header categoryHeader">
                                <span>Price</span>
                                <FontAwesomeIcon icon={faChevronUp} />
                            </div>
                            <div className="slider-container">
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={minValue}
                                    onChange={handleMinChange}
                                    className="slider"

                                />
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={maxValue}
                                    onChange={handleMaxChange}
                                    className="slider"
                                />
                                <div className = "values">
                                    <span>Min: {minValue}</span>
                                    <span>Max: {maxValue}</span>
                                </div>
                            </div>
                        </div>
                        <div className="category_color container">
                            <div className="category_color-header categoryHeader">
                                <span>Color</span>
                                <FontAwesomeIcon icon={faChevronUp} />
                            </div>
                            <div className="color_container"  >
                                {colors.map((color, index) => (
                                    <div key={index} className="colorOption" style={{
                                        backgroundColor: color,
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: "100%",
                                    }}>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="category_size container">
                            <div className="category_size-header categoryHeader">
                                <span>Size</span>
                                <FontAwesomeIcon icon={faChevronUp} />
                            </div>
                            <div className="color_container"  >
                                {sizes.map((size, index) => (
                                    <div key={index} className="sizeOption" style={{}}>
                                        {size}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="category_style ">
                            <div className="category_size-header categoryHeader">
                                <span>Dress Styles</span>
                                <FontAwesomeIcon icon={faChevronUp} />
                            </div>
                            <div className="style_container"  >
                                {styles.map((style, key) => (
                                    <div>
                                        <div className="categoryHeader">
                                            <span>{style}</span>
                                            <span><FontAwesomeIcon icon={faChevronRight} /></span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div style={{textAlign: "center"}}>
                            <button className="btn">Apply Filter</button>
                        </div>
                    </div>
                    <div className="displayProducts ">
                        <div className="values">
                            <span style={{fontSize: "25px", fontWeight: "bold"}}>Casual</span>
                            <p style={{margin: 0}}>Showing 1-10 of 100 Products  Sort by <span style={{fontWeight: "bold"}}>Most Popular<FontAwesomeIcon icon={faChevronDown} /></span></p>
                        </div>
                        <div className="productDisplay container">
                            {renderItem(items, Item)}
                        </div>
                        <div className="pagination ">
                            <button><FontAwesomeIcon icon={faArrowLeft}/>Privious</button>

                            <div className="pageNumber">
                                {pageNumbers.map((pageNumm, key)=>(
                                    <button className="Number">{pageNumm}</button>
                                ))}
                            </div>
                            <button>Next<FontAwesomeIcon icon={faArrowRight}/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Category;