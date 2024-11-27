import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Spinner from "./Spinner";
describe("Spinner Component", () => {
  it("should render the spinner element", () => {
    render(<Spinner />);

    const spinnerElement = screen.getByRole("status");
    expect(spinnerElement).toBeInTheDocument();
  });
});
