import React from "react";
import { useState } from "react";
import '../Style/ProductDetail.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { faMinus } from "@fortawesome/free-solid-svg-icons/faMinus";
const ProductsDetail = () => {


    const images = [
        { id: 1, source: 'Image/13.png' },
        { id: 2, source: 'Image/14.png' },
        { id: 3, source: 'Image/15.png' },
    ];


    const [selectedImage, setSelectedImage] = useState(images[0].source);
    const [selectedImageid, setSelectedImageId] = useState(images[0].id);
    const [fadeClass, setFadeClass] = useState("fade-in");


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
                    <p>Home<FontAwesomeIcon icon={faChevronRight} />
                        Shop <FontAwesomeIcon icon={faChevronRight} />
                        Men <FontAwesomeIcon icon={faChevronRight} />
                        T-Shirt
                    </p>
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
                        <div className="star-Product">
                            <div className="star">
                                <img src="Image/Star.png" alt='' />
                                <img src="Image/Star.png" alt='' />
                                <img src="Image/Star.png" alt='' />
                                <img src="Image/Star.png" alt='' />
                                <img src="Image/Star.png" alt='' />
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
                            <p>Select Colors</p>
                            <div className="colorZone">
                                <div className="color color1">

                                </div>
                                <div className="color color2">

                                </div>
                                <div className="color color3">

                                </div>
                            </div>
                        </div>
                        <div className="selectSize mainContent">
                            <p>Choose Size</p>
                            <div className="sizeZone">
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
                        <div className="amount mainContent">
                            <div className="quantity">
                                <button ><FontAwesomeIcon icon={faMinus}/></button>
                                <input type="number" className="no-spinners" value={"1"}></input>
                                <button><FontAwesomeIcon icon={faPlus}/></button>
                            </div>
                            <button className="addBtn btn">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsDetail;