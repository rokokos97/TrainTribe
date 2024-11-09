import React from "react";
import { render, screen } from "@testing-library/react";
import SignUp from "./SignUp";

describe("SignUp", () => {
  it("should render without errors", () => {
    render(<SignUp />);
    const element = screen.getByText("SignUp");
    expect(element).toBeInTheDocument();
  });
});
