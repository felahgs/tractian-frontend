/* eslint-disable react/display-name */
import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import Header from "./Header";

import { usePathname } from "next/navigation";
import { CompanyData } from "@/services/companies";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));
jest.mock("@/icons/gold.svg", () => () => <div>Dot Icon</div>);

describe("Header Component", () => {
  const companies = [
    { id: "1", name: "Company One" },
    { id: "2", name: "Company Two" },
    { id: "3", name: "Company Three" },
  ] as CompanyData[];

  it("should render the header and displays company buttons", async () => {
    (usePathname as jest.Mock).mockReturnValue("/company/1");

    render(<Header companies={companies} />);

    const logo = screen.getByAltText("tractian logo");
    expect(logo).toBeInTheDocument();

    companies.forEach(async (company) => {
      const companyButton = await screen.findByText(company.name);
      expect(companyButton).toBeInTheDocument();
    });
  });

  it("should render with no company buttons if the companies prop is empty", () => {
    render(<Header companies={[]} />);

    const companyButtons = screen.queryAllByRole("link");
    expect(companyButtons).toHaveLength(0);
  });
});
