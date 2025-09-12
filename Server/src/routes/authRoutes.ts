import { Router } from "express";
import passport from "passport";
import { register, login, googleCallback } from "../controllers/authController";
import { requireAuth, requireRole } from "../middlewares/auth";

const router = Router();

// Local Auth
router.post("/register", register);
router.post("/login", login);

// Google OAuth
router.get("/google",passport.authenticate("google", { scope: ["profile", "email"] }));

router.get("/google/callback",passport.authenticate("google", { session: false }),googleCallback);

// Protected Routes
router.get("/profile", requireAuth, (req, res) => {
  res.json({ message: "Your profile", user: req.user });
});
router.get("/admin", requireAuth, requireRole(["admin"]), (req, res) => {
  res.json({ message: "Welcome Admin!" });
});

export default router;
