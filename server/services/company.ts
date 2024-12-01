import jsonData from "../data/api-data.json";
import { CompaniesData, Company, CompanyData, Location } from "../data/types";
import { NotFoundError } from "../errors/NotFoundError";

const data = jsonData as CompaniesData;

export function getAllCompanies(): Company[] {
  return data.companies;
}

export function getLocations(companyId: string): Location[] {
  const company = data[companyId] as CompanyData;

  if (!company) {
    throw new NotFoundError(`Company with id "${companyId}" not found.`);
  }

  return company.locations;
}

export function getAssets(companyId: string): Location[] {
  const company = data[companyId] as CompanyData;

  if (!company) {
    throw new NotFoundError(`Company with id "${companyId}" not found.`);
  }

  return company.assets;
}
