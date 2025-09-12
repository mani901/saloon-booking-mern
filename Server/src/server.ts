import dotenv from 'dotenv';
dotenv.config();
import express, { Request, Response } from 'express';
import errorHandler from "./middlewares/errorHandler"
import passport from "./config/passport";
import authRoutes from "./routes/authRoutes";
import cors from 'cors';
import connectDB from "./config/db"
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));




connectDB();



// Middleware to parse JSON
app.use(express.json());
app.use(passport.initialize());
// Root route

app.use("/api/auth", authRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from TypeScript + Express!');
});


app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});