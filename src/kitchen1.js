import React from "react";
const Kitchen1=()=>{
    return(
        <>
        <div className="back-kitchen">
            <div>
                <ul>
                    <li><a>HOME</a></li>
                    <li><a>SHOP</a></li>
                    <li><a>CONTACT</a></li>
                </ul>
            </div>
            <div className="kitchen-text">
                MODULAR KITCHEN
            </div>
            <img className="kitchen1" alt="" src="kitchen3.png" />
            <img className="kitchen2" alt="" src="kitchen2.png"/>
            <img className="kitchen3" alt="" src="kitchen1.png" />
            <div className="kitchen1-info">
                <p>WHITE L SHAPED 
                   MODULAR KITCHEN
                </p>
                <p>RS.89,000.00</p>
            </div>
            <div className="kitchen2-info">
                <p>RED L SHAPED 
                    MODULAR KITCHEN
                </p>
                <p>RS.90,000.00</p>
            </div>
            <div className="kitchen3-info">
                <p>VENEER L SHAPED 
                    MODULAR KITCHEN
                </p>
                <p>RS.91,000.00</p>
            </div>
            <div>
                <button className="btn1">ENQUIRY</button>
                <button className="btn2">ENQUIRY</button>
                <button className="btn3">ENQUIRY</button>
            </div>
        </div>
        </>
    )
}

export default Kitchen1;