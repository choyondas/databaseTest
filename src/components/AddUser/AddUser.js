import React from 'react';
import { useRef } from 'react';
const AddUser = () => {
const nameRef = useRef();
const emailRef = useRef();



const addHandleUser=e=>{
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const newUser ={name, email}

   fetch('http://localhost:5000/users', {
       method:'POST',
       headers:{
           'content-type':'application/json' 
       },
       body:JSON.stringify(newUser)
   })
   .then(res=>res.json())
   .then(data=>{
       if(data.insertedId){
           alert('user added successfully')
           e.target.reset();
       }
   })
    



console.log(newUser)
e.preventDefault();

}

    return (
        <div>
            <h2>This is Add User</h2>

          

<form onSubmit={addHandleUser} >



    <input type="text" placeholder='Your Name' ref={nameRef} /><br />
    <input type="text" placeholder='Your Email'ref={emailRef}/> <br />
    <input type="submit" value="submit" />
</form>

        </div>
    );
};

export default AddUser;