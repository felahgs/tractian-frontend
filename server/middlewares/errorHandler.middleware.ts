import { Request, Response, NextFunction } from "express";
import { NotFoundError, ValidationError } from "../errors";

export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  _next: NextFunction,
): void {
  if (err instanceof NotFoundError) {
    res.status(404).json({ message: err.message });
  } else if (err instanceof ValidationError) {
    res.status(400).json({ message: err.message });
  } else {
    console.error("Unexpected error:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
