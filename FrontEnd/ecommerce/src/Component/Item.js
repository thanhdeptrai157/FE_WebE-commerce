
import '../Style/Item.css'
import { useNavigate } from 'react-router-dom';
const Item = (e) => {
    const navigate = useNavigate();

    const handleClick = (id) => {
      navigate(`/product/id=${id}`);
    };
    return (
        <div style={{padding: "10px 0px"}}>
            <div className="imageItemDisplay" id = {`product-${e.id}`} onClick={()=>handleClick(e.id)}>
                <img src={e.source} alt="item" className="imageItem" id = {`image${e.id}`} />
            </div>
            <h5 style={{ fontFamily: "Satoshi, sans-serif", marginBlockEnd: "5px", marginBlockStart: "10px", fontSize:"18px" }}>{e.nameItem}</h5>
            <div className="star">
                <img src="/Image/Star.png" alt=''/>
                <img src="/Image/Star.png" alt=''/>
                <img src="/Image/Star.png" alt=''/>
                <img src="/Image/Star.png" alt=''/>
                <img src="/Image/Star.png" alt=''/>
            </div>
            <div className="priceInfor number">
                <div className="price">{e.price}</div>
                {e.isDiscount && (<div className = "discountInfor">
                    <div className = "priceBeforeDiscount price number" >$300</div>
                    <div className = "percentDiscount number">30%</div>
                </div>)}
            </div>
        </div>
    )
};


export default Item;