import React from "react";
import { render, screen } from "@testing-library/react";
import ShareTheStribe from "./ShareTheStribe";

describe("ShareTheStribe", () => {
  it("should render without errors", () => {
    render(<ShareTheStribe />);
    const element = screen.getByText("ShareTheStribe");
    expect(element).toBeInTheDocument();
  });
});
