import express from "express";
import pkg from "pg";
import cors from "cors";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

dotenv.config();
const { Pool } = pkg;

const app = express();

// ================= MIDDLEWARE =================
app.use(cors());
app.use(express.json());

// ================= DB CONNECTION =================
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "zerodha",
  password: "854300",
  port: 5432,
});

// ================= JWT SECRET =================
const JWT_SECRET = "secret123";

// ================= TEST ROUTE =================
app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

// ================= SIGNUP =================
app.post("/signup", async (req, res) => {
  const { name, email, phone, password } = req.body;

  if (!name || !email || !phone || !password) {
    return res.status(400).json({ error: "All fields required ❌" });
  }

  try {
    // 🔍 check duplicate email
    const existingUser = await pool.query(
      "SELECT * FROM users WHERE email=$1",
      [email]
    );

    if (existingUser.rows.length > 0) {
      return res.status(400).json({ error: "Email already exists ❌" });
    }

    // 🔐 hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    await pool.query(
      "INSERT INTO users(name, email, phone, password) VALUES($1,$2,$3,$4)",
      [name, email, phone, hashedPassword]
    );

    res.status(201).json({ message: "Signup successful ✅" });

  } catch (err) {
    console.error("Signup Error:", err);
    res.status(500).json({ error: "Signup error ❌" });
  }
});

// ================= LOGIN =================
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email & password required ❌" });
  }

  try {
    const result = await pool.query(
      "SELECT * FROM users WHERE email=$1",
      [email]
    );

    if (result.rows.length === 0) {
      return res.status(400).json({ error: "User not found ❌" });
    }

    const user = result.rows[0];

    // 🔐 password compare
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ error: "Wrong password ❌" });
    }

    // 🔐 token
    const token = jwt.sign(
      { id: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({
      message: "Login successful ✅",
      token,
    });

  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ error: "Login error ❌" });
  }
});

// ================= HOLDINGS API =================
app.get("/allHoldings", (req, res) => {
  res.json([
    { name: "INFY", qty: 10, avg: 1000, price: 1200 },
    { name: "TCS", qty: 5, avg: 3000, price: 3200 }
  ]);
});

// ================= SERVER =================
app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});