import React from "react";
import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

describe("Layout", () => {
  it("should render without errors", () => {
    render(<Layout />);
    const element = screen.getByText("Layout");
    expect(element).toBeInTheDocument();
  });
});
