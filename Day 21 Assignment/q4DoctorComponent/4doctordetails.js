function DoctorDetails()
{
    let empsArray=[
        {img:"D1.png", name:"Patey Cruiser", specialization:"Neurosurgeon", rate:1},
        {img:"D4.png", name:"Paul Moliv", specialization:"Cardiologist", rate:2},
        {img:"D2.png", name:"Mario Speedway", specialization:"Cardiologist", rate:3},
        {img:"D5.png", name:"Joe Root", specialization:"Dentist", rate:4},
        {img:"DP3.png", name:"Anna Maul", specialization:"Pediatrician", rate:5},
        {img:"D6.png", name:"Jos Buttler", specialization:"Urology", rate:5},
        {img:"D1.png", name:"Patey Cruiser", specialization:"Neurosurgeon", rate:4},
        {img:"D4.png", name:"Paul Moliv", specialization:"Cardiologist", rate:3},
        {img:"D2.png", name:"Mario Speedway", specialization:"Cardiologist", rate:2},
        {img:"D5.png", name:"Joe Root", specialization:"Dentist", rate:1},
    ]

    let result= empsArray.map((item,index)=>
    <div style={{float:"left",padding:"20px"}}>
        <div style={{backgroundColor:"whitesmoke",textAlign:"center",borderRadius:"10px"}}>
        
        <img style={{height:"100px",width:"100px",borderRadius:"100px",marginTop:"10px",marginRight:"40px",marginLeft:"40px"}} src={item.img}/><br/>
        
        <span style={{fontSize:"20px"}}>{item.name}</span><br/>
        
        <span style={{fontSize:"15px",color:"grey"}}>{item.specialization}</span><br/>

        {(new Array(item.rate).fill().map(item=> <img style={{height:"20px",width:"20px",marginTop:"10px",marginLeft:"4px"}} src="star.png"/> ))} <br/>
        
        <button style={{marginTop:"15px",marginBottom:"10px",backgroundColor:"white",borderRadius:"20px",border:"none",height:"30px"}}>BOOK APPOINTMENT</button>
        </div>
    </div>);

    return( 
        <div style={{marginLeft:"100px"}} >
            {result} 
        </div>
    )
}
export default DoctorDetails;