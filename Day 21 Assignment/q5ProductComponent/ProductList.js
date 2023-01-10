import '../styles/products.css'

function ProductList(props){

    const {category} = props;

    const products = [
        {name: "Samsung S22", category: "Mobile", price: 52999, img: "https://stuff.co.za/wp-content/uploads/2021/01/S21-2.jpg"},
        {name: "iPhone 13", category: "Mobile", price: 74999, img: "https://photos5.appleinsider.com/gallery/product_pages/211-hero.jpg?=1602858709"},
        {name: "iPhone 14 Pro", category: "Mobile", price: 174490, img: "https://bgr.com/wp-content/uploads/2022/03/iphone-14-pro-3d-renders-1.jpg?quality=82&strip=all"},
        {name: "Samsung S22 Ultra", category: "Mobile", price: 109990, img: "https://worldview.com.pk/wp-content/uploads/2021/03/Samsung-Galaxy-S22-Ultra-5G-2021.jpg"},
        {name: "Asus 14", category: "Laptop", price: 23990, img:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1663351352/Croma%20Assets/Computers%20Peripherals/Laptop/Images/250277_1_lqlydk.png/mxw_2048,s_webp,f_auto"},
        {name: "Apple MacBook Air 2020", category: "Laptop", price: 87900 , img:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1664423228/Croma%20Assets/Computers%20Peripherals/Laptop/Images/256711_5_jagzvd.png/mxw_2048,s_webp,f_auto"},
        {name: "HP Pavilion 15", category: "Laptop", price: 56700, img:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1663413385/Croma%20Assets/Computers%20Peripherals/Laptop/Images/248778_0_qy1kpo.png/mxw_2048,s_webp,f_auto"},
    ];

    let filteredArray = [];
    if(category==="Mobile"){
        filteredArray = products.filter( (item)=>item.category==="Mobile");
    }
    else if(category==="Laptop"){
        filteredArray = products.filter((item)=>item.category === "Laptop");
    }
    else if(category===""){
        filteredArray = products;
    }

    return(
        <div id="products">
            {filteredArray.map(item=>
                <div className="item">
                    <img src={item.img} alt="item"/>
                    <p>{item.name}</p>
                    <p className='price'>Rs {item.price}</p>
                </div>    
            )}
        </div>
    )
}

export default ProductList;