import { NextFunction, Request, Response } from "express";
import * as companyService from "../services/company";

export function getCompanies(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  try {
    const companies = companyService.getAllCompanies();
    res.status(200).json(companies);
  } catch (error) {
    next(error);
  }
}

export function getAssets(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const companyId = req.params.companyId;
  const companies = companyService.getAssets(companyId);
  res.status(200).json(companies);

  try {
    const companies = companyService.getAssets(companyId);
    res.status(200).json(companies);
  } catch (error) {
    next(error);
  }
}

export function getLocations(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const companyId = req.params.companyId;

  try {
    const companies = companyService.getLocations(companyId);
    res.status(200).json(companies);
  } catch (error) {
    next(error);
  }
}
