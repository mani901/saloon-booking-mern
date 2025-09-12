// src/config/passport.ts
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import dotenv from "dotenv";
import {UserModel} from "../models/userModel"; // adjust path

dotenv.config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: process.env.GOOGLE_CALLBACK_URL!,
    },
    async (_accessToken, _refreshToken, profile, done) => {
      try {
        // Extract data from Google profile
        const email = profile.emails?.[0].value;
        const name = profile.displayName;

        if (!email) {
          return done(new Error("No email found in Google profile"), false);
        }

        // Find or create user
        let user = await UserModel.findOne({ email });

        if (!user) {
          user = await UserModel.create({
            name,
            email,
            password: "", // not needed for Google accounts
            role: "user",
            provider: "google",
            googleId: profile.id,
          });
        }

        return done(null, user);
      } catch (err) {
        return done(err as any, false);
      }
    }
  )
);

export default passport;
