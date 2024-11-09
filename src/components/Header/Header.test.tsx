import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("should render without errors", () => {
    render(<Header />);
    const element = screen.getByText("Header");
    expect(element).toBeInTheDocument();
  });
});
