import { useState} from "react";

function StudsCrud()
{
    const[studArray,setStudArray]=useState([]);
    const[sid,setSid]=useState("");
    const[sname,setSname]=useState("");
    const[course,setCourse]=useState("");
    const[age,setAge]=useState("");
    const[total,setTotal]=useState("");

    function getStud_click()
    {
        let tempArray=[{sid:"1",sname:"Scott",course:"React",age:"22",total:"10000"},
        {sid:"2",sname:"Jacob",course:"Angular",age:"28",total:"20000"},
        {sid:"3",sname:"Aaron",course:"Node",age:"24",total:"30000"},
        {sid:"4",sname:"Jesus",course:"HTML",age:"21",total:"40000"}];

        setStudArray(tempArray);
    }
    
    function addStud_click()
    {
        let studObj={};
        studObj.sid=sid;
        studObj.sname=sname;
        studObj.course=course;
        studObj.age=age;
        studObj.total=total;

        let tempArray=[...studArray];
        tempArray.push(studObj);
        setStudArray(tempArray);
    }

    function deleteStud_click(sid)
    {
        let tempArray=[...studArray];
        let index =tempArray.findIndex(item=>item.sid==sid);
        tempArray.splice(index,1);
        setStudArray(tempArray);
    }

    function selectStud_click(sid)
    {
        let studObj=studArray.find(item=>item.sid==sid);
        setSid(studObj.sid);
        setSname(studObj.sname);
        setCourse(studObj.course);
        setAge(studObj.age);
        setTotal(studObj.total);
    }

    function updateStud_click()
    {
        let tempArray=[...studArray];
        let index=tempArray.findIndex(item=>item.sid==sid);
        
        tempArray[index].sname=sname;
        tempArray[index].course=course;
        tempArray[index].age=age;
        tempArray[index].total=total;

        setStudArray(tempArray);
    }

      let result=studArray.map(item=>
        <tr>
            <td>{item.sid}</td>
            <td>{item.sname}</td>
            <td>{item.course}</td>
            <td>{item.age}</td>
            <td>{item.total}</td>
            <td><a href="javascript:void(0);"  onClick={()=>
                 deleteStud_click(item.sid)}>Delete</a> |
                <a href="javascript:void(0);"  onClick={() => selectStud_click(item.sid)}>Select</a>
            </td>
        </tr>);
    
    return(
        <>  
            <h3>Dynamic Operations (CRUD) on Array of Object</h3>
            <hr/>

            <input type="text" placeholder="ID" value={sid} onChange={e=>setSid(e.target.value)}/>
            <input type="text" placeholder="Name" value={sname} onChange={e=>setSname(e.target.value)}/>
            <input type="text" placeholder="Course" value={course} onChange={e=>setCourse(e.target.value)}/>
            <input type="text" placeholder="Age" value={age} onChange={e=>setAge(e.target.value)}/>
            <input type="text" placeholder="Total" value={total} onChange={e=>setTotal(e.target.value)}/>
            <br/><br/>

            <input type="button" value="Get Data" onClick={getStud_click}/>
            <input type="button" value="Add Data" onClick={addStud_click}/>
            <input type="button" value="Update Data" onClick={updateStud_click}/><br/><br/>

            <table border="2" cellSpacing="0" cellPadding="10">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Age</th>
                    <th>Total</th>
                </tr>
                 {result}
            </table>
        </>
    );
}
export default StudsCrud;