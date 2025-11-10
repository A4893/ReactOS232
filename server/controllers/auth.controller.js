import jwt from "jsonwebtoken";
import User from "../models/user.model.js"; // Your user model
import config from "../../config/config.js"; // Should contain jwtSecret
import bcrypt from "bcryptjs"; // For password hashing if used
import { ObjectId } from "mongodb";

// Signin controller
export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user)
      return res.status(401).json({ error: "User not found" });

    // Assuming user.password is hashed, use bcrypt to compare
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch)
      return res.status(401).json({ error: "Email and password don't match." });

    const token = jwt.sign({ _id: user._id }, config.jwtSecret, { expiresIn: "1h" });

    res.cookie("t", token, { expire: new Date() + 9999 });
    res.json({
      token,
      user: { _id: user._id, name: user.name, email: user.email },
    });
  } catch (err) {
    return res.status(401).json({ error: "Could not sign in" });
  }
};

// Signout controller
export const signout = (req, res) => {
  res.clearCookie("t");
  res.json({ message: "Signout success" });
};

// Middleware to protect routes
export const requireSignin = (req, res, next) => {
  const authHeader = req.headers.authorization || "";
  const token = authHeader.split(" ")[1]; // Expect "Bearer <token>"
  if (!token) return res.status(401).json({ error: "Authentication token required" });

  jwt.verify(token, config.jwtSecret, (err, decoded) => {
    if (err) return res.status(401).json({ error: "Invalid token" });
    req.auth = decoded; // user info from token
    next();
  });
};

// Optional authorization check
export const hasAuthorization = (req, res, next) => {
  const authorized = req.profile && req.auth && req.profile._id.toString() === req.auth._id;
  if (!authorized) return res.status(403).json({ error: "User is not authorized" });
  next();
};

export default { signin, signout, requireSignin, hasAuthorization };
