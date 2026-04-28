import React, { useState } from "react";
import "./Signup.css";

function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ FINAL HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone || !form.password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      // 🔥 IMPORTANT FIX
      const data = await res.json();

      if (!res.ok) {
        // backend error handle
        alert(data.error || "Something went wrong ❌");
        return;
      }

      alert(data.message || "Signup successful ✅");

      // reset form
      setForm({
        name: "",
        email: "",
        phone: "",
        password: "",
      });

    } catch (err) {
      console.error("Fetch Error:", err);
      alert("Backend not running or CORS issue ❌");
    }
  };

  return (
    <div className="signup-container">

      {/* LEFT */}
      <div className="signup-left">
        <h1>Open a free demat account</h1>
        <p>Start investing brokerage free.</p>
        <img src="/media/images/signup.png" alt="signup" />
      </div>

      {/* RIGHT */}
      <div className="signup-right">
        <h2>Signup now</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />

          <button type="submit">Continue</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;