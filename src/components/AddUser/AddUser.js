import React from 'react';
import { useRef } from 'react';
const AddUser = () => {

    const nameRef = useRef();
    const emailRef = useRef();
const handleAddUser =e=>{
    e.preventDefault()
const name = nameRef.current.value;
const email = emailRef.current.value;
const newUser = {name, email}

console.log(newUser)



fetch('http://localhost:5000/users', {
    method:'POST',
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(newUser)
})
.then(res=>res.json())
.then(data=>{
    if (data.insertedId){
        alert('User Added successfully')
        e.target.reset();
    }
})
    // console.log(nameRef);
    // console.log(emailRef)





}



    return (
        <div>
            <h2>This is Add User</h2>

            <form onSubmit={handleAddUser}>
                
                <input ref={nameRef} type="text" name="" id=""placeholder='your name' /> <br />
                <input ref={emailRef} type="text"  placeholder='your email' /> <br />
                <input type="submit" value="submit" />
                </form>
        </div>
    );
};

export default AddUser;