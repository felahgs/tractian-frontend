import {
  getCompanies,
  getLocations,
  getAssets,
  CompanyData,
  LocationData,
  AssetData,
} from "../companies";
import apiClient from "@/services/api";

jest.mock("@/services/api");

describe("Companies Service", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    (console.log as jest.Mock).mockRestore();
  });

  beforeAll(() => {
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  it("should fetch companies successfully", async () => {
    const mockCompanies: CompanyData[] = [
      { id: "1", name: "Company A" },
      { id: "2", name: "Company B" },
    ];

    (apiClient.get as jest.Mock).mockResolvedValueOnce({ data: mockCompanies });

    const companies = await getCompanies();

    expect(companies).toEqual(mockCompanies);
    expect(apiClient.get).toHaveBeenCalledWith("/companies");
  });

  it("should handle error while fetching companies", async () => {
    const mockError = new Error("API Error");

    (apiClient.get as jest.Mock).mockRejectedValueOnce(mockError);

    try {
      await getCompanies();
    } catch (error) {
      expect(error).toEqual(new Error("Failed to fetch companies", mockError));
    }
  });

  it("should fetch locations for a given company", async () => {
    const companyId = "1";
    const mockLocations: LocationData[] = [
      { id: "101", name: "Location 1", parentId: null },
      { id: "102", name: "Location 2", parentId: "101" },
    ];

    (apiClient.get as jest.Mock).mockResolvedValueOnce({ data: mockLocations });

    const locations = await getLocations(companyId);

    expect(locations).toEqual(mockLocations);
    expect(apiClient.get).toHaveBeenCalledWith(
      `/companies/${companyId}/locations`,
    );
  });

  it("should handle error while fetching locations", async () => {
    const companyId = "1";
    const mockError = new Error("API Error");

    (apiClient.get as jest.Mock).mockRejectedValueOnce(mockError);

    try {
      await getLocations(companyId);
    } catch (error) {
      expect(error).toEqual(
        new Error("Failed to fetch company locations", mockError),
      );
    }
  });

  it("should fetch assets for a given company", async () => {
    const companyId = "1";
    const mockAssets: AssetData[] = [
      {
        id: "a1",
        locationId: "101",
        name: "Asset 1",
        parentId: null,
        sensorType: "vibration",
        status: "operating",
        gatewayId: "g1",
        sensorId: "s1",
      },
      {
        id: "a2",
        locationId: "102",
        name: "Asset 2",
        parentId: "a1",
        sensorType: "energy",
        status: "alert",
        gatewayId: "g2",
        sensorId: "s2",
      },
    ];

    (apiClient.get as jest.Mock).mockResolvedValueOnce({ data: mockAssets });

    const assets = await getAssets(companyId);

    expect(assets).toEqual(mockAssets);
    expect(apiClient.get).toHaveBeenCalledWith(
      `/companies/${companyId}/assets`,
    );
  });

  it("should handle error while fetching assets", async () => {
    const companyId = "1";
    const mockError = new Error("API Error");

    (apiClient.get as jest.Mock).mockRejectedValueOnce(mockError);

    try {
      await getAssets(companyId);
    } catch (error) {
      expect(error).toEqual(
        new Error("Failed to fetch company assets", mockError),
      );
    }
  });
});
