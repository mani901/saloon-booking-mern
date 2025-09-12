import { ErrorRequestHandler } from "express";
import { ZodError } from "zod";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.error("Error:", err.stack);

  const status = res.statusCode === 200 ? 500 : res.statusCode;
  const message = err.message || "Internal Server Error";

  // Handle Mongoose validation errors
  if (err.name === "ValidationError") {
    return res.status(400).json({
      success: false,
      error: "Validation Error",
      details: err.message,
    });
  }

  // Handle Zod validation errors
  if (err instanceof ZodError) {
    return res.status(400).json({
      success: false,
      message: "Validation error",
      errors: err.issues.map((e) => ({
        path: e.path.join("."), 
        message: e.message,    
      })),
    });
  }

  // Fallback for all other errors
  res.status(status).json({
    success: false,
    error: message,
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
};

export default errorHandler;
