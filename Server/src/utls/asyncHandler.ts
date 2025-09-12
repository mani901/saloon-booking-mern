import { Request, Response, NextFunction } from 'express';

// Type for async controller functions
type AsyncFunction = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<any>;

// Wrapper to catch errors and pass to Express error middleware
export const asyncHandler = (fn: AsyncFunction) => {
  return (req: Request, res: Response, next: NextFunction) =>
    Promise.resolve(fn(req, res, next)).catch(next);
};