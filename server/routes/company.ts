import { Router } from "express";
import * as companyController from "../controllers/company";

const router = Router();

router.get("/", companyController.getCompanies);

router.get("/:companyId/assets", companyController.getAssets);

router.get("/:companyId/locations", companyController.getLocations);

export default router;
