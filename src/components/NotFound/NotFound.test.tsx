import "@testing-library/jest-dom";

import React from "react";
import { render, screen } from "@testing-library/react";
import NotFound from "./NotFound";

describe("NotFound Component", () => {
  it("should render the '404 Page Not Found' message", () => {
    render(<NotFound />);

    const heading = screen.getByText("404 - Page Not Found");
    const paragraph = screen.getByText(
      "O endereço que você está tentando acessar não existe.",
    );

    expect(heading).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
  });

  it("should render the error component with a custom message", () => {
    render(<NotFound message="Erro específico." />);

    const heading = screen.getByText("404 - Page Not Found");
    const paragraph = screen.getByText("Erro específico.");

    expect(heading).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
  });
});
