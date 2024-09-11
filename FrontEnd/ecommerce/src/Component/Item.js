
import '../Style/Item.css'

const Item = (e) => {

    // const [isDiscount, getRenderPrice] = useState(e.isDiscount);
    // getRenderPrice = () => {
    //     return isDiscount;
    // }
    return (
        <div>
            <div className="imageItemDisplay">
                <img src={e.source} alt="item" className="imageItem" />
            </div>
            <h4 style={{ fontFamily: "satoshi, sans-serif", marginBlockEnd: "5px", marginBlockStart: "10px" }}>{e.nameItem}</h4>
            <div className="star">
                <img src="Image/Star.png" alt=''/>
                <img src="Image/Star.png" alt=''/>
                <img src="Image/Star.png" alt=''/>
                <img src="Image/Star.png" alt=''/>
                <img src="Image/Star.png" alt=''/>
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