"use client";

import { useEffect, useState } from "react";
import "../../Component/Form.css";

export default function Form() {
  const [formData, setFormData] = useState([]);
  const [editRoll, setEditRoll] = useState(null);

  const [form, setForm] = useState({
    roll: "",
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

    if (data) {
      setFormData(JSON.parse(data));
    } else {
      setFormData([]);
    }
  };

  const handleSubmit = () => {
    if (
      !form.roll ||
      !form.name ||
      !form.email ||
      !form.password ||
      !form.phone
    ) {
      alert("All fields are required");
      return;
    }

    let data = JSON.parse(localStorage.getItem("formValue")) || [];

    if (editRoll === null) {
      // Check if roll number already exists
      const exists = data.find((item) => item.roll === form.roll);

      if (exists) {
        alert("Roll Number already exists");
        return;
      }

      // CREATE
      data.push(form);
    } else {
      // UPDATE
      data = data.map((item) => (item.roll === editRoll ? form : item));
    }

    localStorage.setItem("formValue", JSON.stringify(data));

    getDataFromLocalStorage();

    setForm({
      roll: "",
      name: "",
      email: "",
      password: "",
      phone: "",
    });

    setEditRoll(null);
  };

  const handleDelete = (roll) => {
    const data = formData.filter((item) => item.roll !== roll);

    localStorage.setItem("formValue", JSON.stringify(data));

    getDataFromLocalStorage();

    // If deleting the record currently being edited
    if (editRoll === roll) {
      setForm({
        roll: "",
        name: "",
        email: "",
        password: "",
        phone: "",
      });

      setEditRoll(null);
    }
  };

  const handleEdit = (roll) => {
    const student = formData.find((item) => item.roll === roll);

    if (student) {
      setForm(student);
      setEditRoll(roll);
    }
  };

  return (
    <div className="container">
      <div className="form">
        <h2>Registration Form</h2>

        <input
          type="text"
          placeholder="Enter Roll Number"
          value={form.roll}
          onChange={(e) => setForm({ ...form, roll: e.target.value })}
          disabled={editRoll !== null}
        />

        <input
          type="text"
          placeholder="Enter Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <input
          type="tel"
          placeholder="Enter Phone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        <button onClick={handleSubmit}>
          {editRoll === null ? "Submit" : "Update"}
        </button>
      </div>

      <div>
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Roll No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {formData.length > 0 ? (
              formData.map((item) => (
                <tr key={item.roll}>
                  <td>{item.roll}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>
                  <td>{item.phone}</td>

                  <td>
                    <button onClick={() => handleEdit(item.roll)}>Edit</button>

                    <button
                      onClick={() => handleDelete(item.roll)}
                      style={{ marginLeft: "10px" }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No Data Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
