import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
import AdminUser from "../models/AdminSchema.js";
import StudentUser from "../models/StudentSchema.js";

export const adminsignup = async (req, res) => {
  const { email, password } = req.body;

  // Validate email and password
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required." });
  }

  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format." });
  }

  if (password.length < 6) {
    return res.status(400).json({ error: "Password must be at least 6 characters long." });
  }

  try {
    // Check if user already exists
    const existingUser = await AdminUser.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists." });
    }

    // Hash password and create new user
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new AdminUser({ email, password: hashedPassword });
    await newUser.save();
    res.status(201).json("User created successfully!");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};
export const adminsignin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await AdminUser.findOne({ email });
    if (!validUser) return next(errorHandler(404, "User not found!"));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "Wrong credentials!"));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validUser._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const stundetsignup = async (req, res) => {
  const { rollnumber, password } = req.body;
  if (rollnumber.length !== 12) {
    return res.status(400).json({ error: "Enter a valid roll number of length 12" });
  }

  // Validate password length
  if (password.length <= 8) {
    return res.status(400).json({ error: "Password must be more than 8 characters long" });
  }
  try {
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new StudentUser({ rollnumber, password: hashedPassword });
    await newUser.save();
    res.status(201).json("User created successfully!");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const studentsignin = async (req, res, next) => {
  const { rollnumber, password } = req.body;
  try {
    const validUser = await StudentUser.findOne({ rollnumber });
    if (!validUser) return next(errorHandler(404, "User not found!"));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "Wrong credentials!"));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: hashedPassword, ...rest } = validUser._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json({ ...rest, token });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getquestionset = async (req, res) => {
  const { roomId } = req.query;

  if (!roomId) {
    return res.status(400).send({ message: "Room ID is required" });
  }

  try {
    const exam = await Question.findOne({ roomId });

    if (!exam) {
      return res.status(404).send({ message: "Exam not found" });
    }

    res.status(200).send({ message: "Exam retrieved successfully", exam });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};
