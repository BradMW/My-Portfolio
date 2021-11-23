import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';



export default function Contact() {
   const [email, setEmail] = useState(''); 
   const [errorMessage, setErrorMessage] = useState('');
   
    const handleFormChange=(e) => {
        if(!validateEmail(email)){
            return true;
        }else {
            return;
        }
        // if(e.target.type === "email") {
        //    let regex = /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/;
        //    return regex.test(String(e.target.value).toLowerCase());
        // }else {
        //     console.log("err");
        // }
        
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setErrorMessage('Email is invalid');
            return;
        }
       setEmail(''); 
    }

    

    return(
        <div>
    <div class="mb-3">
  <label htmlFor="exampleFormControlInput1" class="form-label">Email address</label>
  <input value={email} name="email" onChange={handleFormChange} type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
</div>
<div class="mb-3">
  <label htmlFor="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<button type="button" onClick={handleFormSubmit}>Submit</button>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
</div>
)
}; 

