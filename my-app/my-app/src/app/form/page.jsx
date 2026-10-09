"use client";

import { useEffect, useState } from "react";
import "../../Component/Form.css";
export default function Form() {
  const [formData, setFormData] = useState([]);

  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleSubmit = () => {
    const payload = {
      name: userForm.name,
      email: userForm.email,
      password: userForm.password,
      phone: userForm.phone,
    };
    localStorage.setItem("formDetails", JSON.stringify(payload));
  };

  const handlePutData = (e) => {
    console.log(e);
    setUserForm({ ...userForm, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <div className="form">
        <h2>Registration Form</h2>

        <input
          type="text"
          name="name"
          //   onChange={(e) => {
          //     setUserForm({ ...formData, name: e.target.value });
          //   }}
          onChange={(e) => {
            handlePutData(e);
          }}
          placeholder="Enter Name"
        />

        <input
          type="email"
          name="email"
          //   onChange={(e) => {
          //     setUserForm({ ...userForm, email: e.target.value });
          //   }}
          onChange={(e) => {
            handlePutData(e);
          }}
          placeholder="Enter Email"
        />

        <input
          type="password"
          name="password"
          //   onChange={(e) => {
          //     setUserForm({ ...userForm, password: e.target.value });
          //   }}
          onChange={(e) => {
            handlePutData(e);
          }}
          placeholder="Enter Password"
        />

        <input
          type="tel"
          name="phone"
          //   onChange={(e) => {
          //     setUserForm({ ...userForm, phone: e.target.value });
          //   }}
          onChange={(e) => {
            handlePutData(e);
          }}
          placeholder="Enter Phone"
        />

        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>
        <table border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Phone</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{userForm.name}</td>
              <td>{userForm.email}</td>
              <td>{userForm.password}</td>
              <td>{userForm.phone}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
