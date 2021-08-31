import {useState,useEffect} from 'react';
const App=()=>{
    const[records,setRecords]=useState([]);
    useEffect(()=>{
        fetch('https://reqres.in/api/users?page=2')
        .then(response => response.json())
        .then(data => {
            console.log(data.data)
            setRecords(data.data);
        });
    },[]);
    return(
        <>
            {records.map((record)=>{
                return(
                    <div key={record.id}> 
                        {record.first_name}<br />
                        {record.last_name} <br />
                        {record.email} <br />
                        <img src={record.avatar} alt={record.first_name} />
                        <hr />
                    </div>
                )
            })}
        </>
    );
}
export default App;