import React from "react";



export default function Contact() {
    const handleFormChange(e) => {
        if(e.target.type === "email") {
           let regex = /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/,
           return regex.test(String(e.target.value).toLowerCase());
        }
        
    }

    return(
        <div>
    <div class="mb-3">
  <label htmlFor="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
</div>
<div class="mb-3">
  <label htmlFor="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
</div>
) 
}
