import React from "react";
import { useState } from "react";
import '../Style/ProductDetail.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
const ProductsDetail = () => {


    const images = [
        { id: 1, source: 'Image/13.png' },
        { id: 2, source: 'Image/13.png' },
        { id: 3, source: 'Image/13.png' },
    ];


    const [selectedImage, setSelectedImage] = useState(images[0].source);

    const handleThumbnailClick = (largeImage) => {
        setSelectedImage(largeImage);
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
                                    className="ImageThumbnail"
                                    onClick={() => handleThumbnailClick(image.large)}
                                />
                            ))}

                        </div>
                    </div>
                    <div className="contentProduct">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsDetail;