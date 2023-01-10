function StudentDetails()
{
    let detailsArray=[{sid:1,sname:"Scott",course:"React",age:"22",total:"10000"},
    {sid:2,sname:"Jacob",course:"Angular",age:"28",total:"20000"},
    {sid:3,sname:"Aaron",course:"Node",age:"24",total:"30000"},
    {sid:4,sname:"Jesus",course:"HTML",age:"21",total:"40000"},];
    
    let result=detailsArray.map(item=>
    <tr>
        <td>{item.sid}</td>
        <td>{item.sname}</td>
        <td>{item.course}</td>
        <td>{item.age}</td>
        <td>{item.total}</td>
    </tr>);

    return(
        <>
        <table border="2" cellspacing="0" cellpadding="20">
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
    )
}
export default StudentDetails;