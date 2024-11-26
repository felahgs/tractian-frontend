import apiClient from "@/services/api";

export type AssetType = "location" | "asset" | "component";
export type SensorType = "vibration" | "energy";
export type StatusType = "operating" | "alert";

export type CompanyData = {
  name: string;
  id: string;
};

export type LocationData = {
  id: string;
  name: string;
  parentId: string | null;
};

export type AssetData = {
  id: string;
  locationId: string | null;
  name: string;
  parentId: string | null;
  sensorType: SensorType | null;
  status: StatusType | null;
  gatewayId: string | null;
  sensorId: string | null;
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
