import apiClient from "@/services/api";

export type CompanyData = {
  name: string;
  id: string;
};

export type LocationData = {
  id: string;
  name: string;
  parentId: string;
};

export type AssetData = {
  id: string;
  locationId: string;
  name: string;
  parentId: string;
  sensorType: "vibration" | "energy";
  status: string;
  gatewayId: string;
  sensorId: string;
};

export async function getCompanies(): Promise<CompanyData[]> {
  try {
    const response = await apiClient.get("/companies");
    return response.data;
  } catch (error) {
    console.log("error", error);
    throw new Error("Failed to fetch companies", error as Error);
  }
}

export async function getLocations(id: string): Promise<LocationData[]> {
  try {
    const response = await apiClient.get(`/companies/${id}/locations`);
    return response.data;
  } catch (error) {
    console.log("error", error);
    throw new Error("Failed to fetch company locations", error as Error);
  }
}

export async function getAssets(id: string): Promise<AssetData[]> {
  try {
    const response = await apiClient.get(`/companies/${id}/assets`);
    return response.data;
  } catch (error) {
    console.log("error", error);
    throw new Error("Failed to fetch company assets", error as Error);
  }
}
