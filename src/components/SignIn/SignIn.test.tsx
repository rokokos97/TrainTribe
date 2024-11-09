import React from "react";
import { render, screen } from "@testing-library/react";
import SignIn from "./SignIn";

describe("SignIn", () => {
  it("should render without errors", () => {
    render(<SignIn />);
    const element = screen.getByText("SignIn");
    expect(element).toBeInTheDocument();
  });
});
