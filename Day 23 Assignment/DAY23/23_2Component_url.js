import axios from 'axios';
import { useState } from 'react';

function Products() { 

    const [productsArray, setproducts] = useState([]);

    function  getProducts_click()
    {
        let url = "https://fakestoreapi.com/products";

        axios.get(url).then( resData => 
        {
           setproducts(resData.data);
        });
    }


    let result =  productsArray.map(item =>
        <tr>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>$ {item.price}</td>
            <td>{item.description}</td>
            <td style={{textAlign:"center"}}>{item.category}</td>
            <td><img style={{height:"150px",width:"100px"}} src={item.image}/></td>
            <td>{item.rating.rate} / 5</td>
        </tr>);
  
  return (    
      <> 
        <h3>Making Server Calls uisng AXIOS in React</h3>
        <hr/>
        <input type="button" className="btn btn-primary" value="Get Products" onClick={getProducts_click} />
        <br/><br/>
        <table className="table" border="2"> 
             <thead>
                <tr>
                  <th>ID</th>
                  <th width="100px">Title</th>
                  <th>Price</th>
                  <th width="250px">Description</th>
                  <th style={{textAlign:"center"}}>Category</th>
                  <th>Image</th>
                  <th>Rate</th>
              </tr>
              </thead>

              <tbody>
                {result}  
              </tbody>               
            </table> 
      
      </>   
  );
}

export default Products;