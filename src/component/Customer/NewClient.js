import React from "react";
import "./NewClient.css";

export default function NewClient() {
  return (
    <div className="container">
    <form action="">
    <h1>Add new client</h1>
    <hr />
    <span className="close">X</span>
      <div className="content">
        <div className="input-box">
          <label for="name">First Name</label>
          <input type="text" placeholder="" />
        </div>
        <div className="input-box">
          <label for="name">Last Name</label>
          <input type="text" placeholder="" />
        </div>
        <div className="input-box">
          <label for="name">Phone</label>
          <input type="text" placeholder="" />
        </div>
        <div className="input-box">
          <label for="name">Email</label>
          <input type="text" placeholder="" />
        </div>
    
        <div className="input-box">
          <label for="name">Type</label>
          <select name="" id="">
          <option value="">Builder</option>
        </select>
        </div>
       
       
        
       
        
      </div>
     rt
      </form>
        </div>
   
    
  );
}
