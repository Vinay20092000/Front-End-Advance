import ProductList from './components/ProductList';
import { useState } from 'react';
import './App.css';

function App() {

  const [category, setCategory] = useState("");
  
  const handleChange = (e) =>{
    setCategory(e.target.value);
  }

  return (
    <div style={{ fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif"}}>
      <label>Select:</label>
      <select onChange={handleChange}>
        <option value="">All Products</option>
        <option value="Laptop">Laptop</option>  
        <option value="Mobile">Mobile</option>  
      </select>
      <ProductList category={category}/>
    </div>
  );
}

export default App;