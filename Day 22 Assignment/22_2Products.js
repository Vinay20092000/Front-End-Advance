import { useState } from "react";

function Calculate()
{

    const[pname,setPname] = useState("");
    const[price,setPrice] = useState("");
    const[qty,setQty] = useState("");
    const[result,setResult] = useState("");

    function pnameChange(event)
    {
        setPname(event.target.value);
    }
    function priceChange(event)
    {
        setPrice(event.target.value);
    }
    function qtyChange(event)
    {
        setQty(event.target.value);
    }

    function TotalClick()
    {
        setResult(price*qty);
    }

    return(
        <div>
            <h3>Cost of Products</h3>

            Product Name : <input type="text" onChange={pnameChange}/><br></br><br></br>
            Unit Price : <input type="number" onChange={priceChange}/><br></br><br></br>
            Quantity : <input type="number" onChange={qtyChange}/><br></br><br></br>
            <input type="button" value="Total Price" onClick={TotalClick}/>
            <h2>The total amount of {pname} is {result} Rs.</h2>
        </div>
    );
}
export default Calculate;