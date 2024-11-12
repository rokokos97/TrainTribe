import React from "react";
import { render, screen } from "@testing-library/react";
import JoinTheTribe from "./JoinTheTribe";

describe("JoinTheTribe", () => {
  it("should render without errors", () => {
    render(<JoinTheTribe />);
    const element = screen.getByText("JoinTheTribe");
    expect(element).toBeInTheDocument();
  });
});
