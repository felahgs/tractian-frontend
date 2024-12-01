export interface CompaniesData {
  [companyId: string]: CompanyData | Company[];
  companies: Company[];
}

export interface Company {
  id: string;
  name: string;
}

export interface CompanyData {
  assets: Asset[];
  locations: Location[];
}

export interface Location {
  id: string;
  name: string;
  parentId: string | null;
}

export interface Asset {
  id: string;
  locationId: string | null;
  name: string;
  parentId: string | null;
  sensorType: string | null;
  status: string | null;
  gatewayId?: string;
  sensorId?: string;
}
