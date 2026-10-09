"use client";

import { useState } from "react";
import "./Form.css";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = () => {
    localStorage.setItem("userName", name);
  };

  const checkName = localStorage.getItem("userName");
  console.log("userNmae cheking: ", checkName);

  return (
    <div className="container">
      <div className="form">
        <h2>Registration Form</h2>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => {
            console.log(e.target.value);
            setName(e.target.value);
          }}
          //   value={formData.name}
          //   onChange={handleChange}
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => {
            console.log(e.target.value);
            setEmail(e.target.value);
          }}
          //   value={formData.email}
          //   onChange={handleChange}
        />

        <input
          type="password"
          placeholder="Enter Password"
          //   value={formData.password}
          //   onChange={handleChange}
        />

        <input
          type="tel"
          placeholder="Enter Phone"
          //   value={formData.phone}
          //   onChange={handleChange}
        />

        {/* <button onClick={handleSubmit}>Submit</button> */}
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}
