import React from "react";
import { render, screen } from "@testing-library/react";
import LoginLayout from "./LoginLayout";

describe("LoginLayout", () => {
  it("should render without errors", () => {
    render(<LoginLayout />);
    const element = screen.getByText("LoginLayout");
    expect(element).toBeInTheDocument();
  });
});
