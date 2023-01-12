import {useState} from "react";
import dataServiceObj from "./23_dataService";

function ProdCRUD()
{
    const[prodArray,setProductsArray]=useState([]);
    const[id,setId]      =useState("");
    const[name,setName]  =useState("");
    const[type,setType]  =useState("");
    const[image,setImage]=useState("");

    function getData_click()
    {
        dataServiceObj.getData().then(resData=>
            {
                setProductsArray(resData.data);
            });
    }
    function addData_click()
    {
        let productObj={};
        productObj.id=id;
        productObj.name=name;
        productObj.type=type;
        productObj.image=image;

        dataServiceObj.addData(productObj).then(resData=>
            {
                getData_click();
            });
    }
    function deleteData_click(id)
    {
        dataServiceObj.deleteData(id).then(resData=>
            {
                getData_click();
            });
    }
    function selectData_click(id)
    {
        dataServiceObj.getDatabyID(id).then(resData=>
            {
                let productObj=resData.data;
                setId(productObj.id);
                setName(productObj.name);
                setType(productObj.type);
                setImage(productObj.image);
            });
    }
    function updateData_click()
    {
        let productObj={};
        productObj.id=id;
        productObj.name=name;
        productObj.type=type;
        productObj.image=image;

        dataServiceObj.updateData(productObj).then(resData=>
            {
                getData_click();
            });
    }
    function getRecipeType(type)
    {
        if (type=="Vegetarian")
        {
            return(<img className="typeIcon" src="Rv.png"/>);
        }
        if (type=="Non-Vegetarian")
        {
            return(
            <img className="typeIcon" src="Rn.png"/>);
        }
        if (type=="Eggetarian")
        {
            return(<img className="typeIcon" src="Re.png"/>);
        }
    }

    let result=prodArray.map(item=>
        <div style={{float:"left",margin:"30px", borderRadius:"20px", border:"2px solid black"}}>
            <p><img style={{height:"200px",width:"200px"}} src={item.image}/></p>
            <span>{item.name}</span>
            <span>
                { getRecipeType(item.type) }
            </span><br/>
            
            <span >
                <a href="javascript:void(0);" onClick={ ()=>
                {
                    const confirmBox = window.confirm("Do you really want to delete this Crumb?")
                    if (confirmBox === true) 
                    {
                        deleteData_click(item.id)
                    }
                }}>Delete</a>|
                <a href="javascript:void(0);" onClick={()=>selectData_click(item.id)}>Select</a>
            </span>
        </div>
    );

    return(
        <>
            <h3>Dynamic Operations (CRUD) on Server Data using AXIOS</h3><hr/>

            {/* input area */}
            <div style={{backgroundImage:"url('productsBG.png')",backgroundRepeat:"no-repeat" ,width:"100%"}}>
            
            <label className="label">ID :</label><input className="input" placeholder="ID" value={id} onChange={e=>setId(e.target.value)}/><br/><br/>
            <label className="label">Name :</label><input className="input" placeholder="Name" value={name}   onChange={e=>setName(e.target.value)}/><br/><br/>
            <label className="label">Type :</label>
            <input type="radio" className="radio" name="radio" value="Vegetarian" onClick={e=>setType(e.target.value)}/>Vegetarian
            <input type="radio" className="radio" name="radio" value="Non-Vegetarian" onClick={e=>setType(e.target.value)}/>Non-Vegetarian
            <input type="radio" className="radio" name="radio" value="Eggetarian" onClick={e=>setType(e.target.value)}/>Eggetarian<br/><br/>
            <label className="label">Image Source :</label><textarea className="input" style={{width:"500px"}}  placeholder="Image Source" value={image} onChange={e=>setImage(e.target.value)}/>
            </div><br/><br/>

            <div className="btn-group">
            <input type="button" className="btn btn-primary" value="Get Data" onClick={getData_click}/>
            <input type="button" className="btn btn-success" value="Add Data" onClick={addData_click} />
            <input type="button" className="btn btn-warning" value="Update Data" onClick={updateData_click} />  
            </div>

            <br/><br/>
            
                {result}
             
        
        </>
    )
}

export default ProdCRUD;