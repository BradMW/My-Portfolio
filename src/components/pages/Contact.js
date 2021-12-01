import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';

const styles = {
  email: {
      padding: "10px"
  }
}

export default function Contact() {
   const [email, setEmail] = useState(''); 
   const [txtBox, setTxtBox] = useState(''); 
   const [errorMessage, setErrorMessage] = useState('');
   
    const handleFormChange=(e) => {
      const inputType = e.target.name;
      const inputValue = e.target.value;
        if (inputType === 'email') {
          setEmail(inputValue);
        } else if (inputType === 'txtBox'){
          setTxtBox(inputValue);
        }
       
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setErrorMessage('Email is invalid');
            return;
        }
    //     if (txtBox === ''){
    //       setErrorMessage('Box cannot be empty')
    //     }
    //    setEmail(''); 
    //    setTxtBox('');
    }

    

    return(
        <div style={{"position": "relative", "padding": "50px", "backgroundColor": "#ADD5F7"}}>
    <div class="mb-3">
  <label htmlFor="exampleFormControlInput1" class="form-label">Email address</label>
  <input value={email} name="email" onChange={handleFormChange} type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required/>
</div>
<div class="mb-3">
  <label htmlFor="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea name="txtBox" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
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

