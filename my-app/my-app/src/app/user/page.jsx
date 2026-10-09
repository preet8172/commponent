"use client";

import { useEffect, useState } from "react";
import "../../Component/Form.css";
export default function Form() {
  const [formData, setFormData] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  useEffect(() => {
    getDataFromLocalStorage();
  }, []);

  const getDataFromLocalStorage = () => {
    const data = localStorage.getItem("formValue");
    console.log(data);
    if (data) {
      setFormData(JSON.parse(data));
    }
  };

  const handleSubmit = () => {
    try {
      const payload = {
        name: form.name,
        email: form.email,
        password: form.password,
        phone: form.phone,
      };
      if (!form.name || !form.email || !form.password || !form.phone) {
        alert("All field are required");
      } else {
        localStorage.setItem("formValue", JSON.stringify(payload));
        setForm({
          name: "",
          email: "",
          password: "",
          phone: "",
        });
      }
      getDataFromLocalStorage();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="form">
        <h2>Registration Form</h2>

        <input
          type="text"
          value={form.name}
          onChange={(e) => {
            setForm({ ...form, name: e.target.value });
          }}
          placeholder="Enter Name"
        />

        <input
          type="email"
          value={form.email}
          onChange={(e) => {
            setForm({ ...form, email: e.target.value });
          }}
          placeholder="Enter Email"
        />

        <input
          type="password"
          value={form.password}
          onChange={(e) => {
            setForm({ ...form, password: e.target.value });
          }}
          placeholder="Enter Password"
        />

        <input
          type="tel"
          value={form.phone}
          onChange={(e) => {
            setForm({ ...form, phone: e.target.value });
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
              <td>{formData.name}</td>
              <td>{formData.email}</td>
              <td>{formData.password}</td>
              <td>{formData.phone}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
