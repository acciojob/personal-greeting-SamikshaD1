import React, { useState }  from "react";

 const Greeting = () =>{
    const [name,setname] = useState("hello");
    const handleNameChange =(e) =>{
       setname(e.target.value)
    }
    return(
        <div>
            <h1>Enter Your Name</h1>
           <input type="text" placeholder="Enter Your Name" onChange={handleNameChange}/>
           <p>{name}</p>
        </div>
    )
 }
 export default Greeting