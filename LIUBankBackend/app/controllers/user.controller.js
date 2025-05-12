
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../models/db");
const User = db.user;

// ✅ Register a new user
exports.register = async (req, res) => {
  try {
    console.log("📥 Incoming signup request:", req.body);

    const {
      accountNumber,
      ssn,
      username,
      password,
      firstName,
      lastName,
      email,
      dateOfBirth,
    } = req.body;

    // ✅ Check for required fields
    if (!accountNumber || !ssn || !username || !password || !firstName || !lastName || !email || !dateOfBirth) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // ✅ Check if username or email already exists
    const existingUser = await User.findOne({
      where: {
        username,
      },
    });

    if (existingUser) {
      return res.status(409).json({ message: "Username already exists" });
    }

    // ✅ Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ Create user
    const newUser = await User.create({
      accountNumber,
      ssn,
      username,
      password: hashedPassword,
      firstName,
      lastName,
      email,
      dateOfBirth,
    });

    res.status(201).json({ message: "User registered successfully", user: newUser });
  } catch (err) {
    console.error("❌ Registration error:", err);
    res.status(500).json({ message: "Registration failed", error: err.message });
  }
};

// ✅ User login
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ where: { username } });
    if (!user) return res.status(401).json({ message: "Invalid username or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid username or password" });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.json({
      message: "Login successful",
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (err) {
    console.error("❌ Login error:", err);
    res.status(500).json({ message: "Login failed", error: err.message });
  }
};
