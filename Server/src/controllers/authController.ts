import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/userModel";
import { registerSchema, loginSchema } from "../schemas/userSchema";
import { asyncHandler } from "../utls/asyncHandler";

const JWT_SECRET = process.env.JWT_SECRET || "changeme";

const generateToken = (id: string) =>
  jwt.sign({ id }, JWT_SECRET, { expiresIn: "1d" });


export const register = asyncHandler(async (req, res) => {
  const data = registerSchema.parse(req.body);

  const existing = await UserModel.findOne({ email: data.email });
  if (existing) return res.status(400).json({ success: false , message : "Email Already Exists!" });

  const hashedPassword = await bcrypt.hash(data.password, 10);

  const user = await UserModel.create({
    email: data.email,
    password: hashedPassword,
    role: data.role || "user",
  });

  const token = generateToken(user._id.toString());
  res.status(201).json({ success: true , message : "User Registered Successfully",token, user: { email: user.email, role: user.role } });
});

// ✅ Login
export const login = asyncHandler(async (req: Request, res: Response) => {
  const data = loginSchema.parse(req.body);

  const user = await UserModel.findOne({ email: data.email });
  if (!user || !user.password) {
    return res.status(400).json({ success : false , message: "Invalid credentials" });
  }

  const valid = await bcrypt.compare(data.password, user.password);
  if (!valid) return res.status(400).json({ success : false , message: "Invalid credentials" });

  const token = generateToken(user._id.toString());
  res.status(200).json({success : true , message: "Login Successful",  token, user: { email: user.email, role: user.role } });
});



/**
 * @desc Google OAuth Callback
 * This is called after passport authenticates user with Google
 */
export const googleCallback = asyncHandler(async (req: Request, res: Response) => {
  const user = (req as any).user;

  const token = jwt.sign(
    { id: user._id, email: user.email, role: user.role },
    process.env.JWT_SECRET!,
    { expiresIn: "1h" }
  );

  // Redirect back to frontend with JWT
  res.redirect(`${process.env.CLIENT_URL}/login/success?token=${token}`);
});