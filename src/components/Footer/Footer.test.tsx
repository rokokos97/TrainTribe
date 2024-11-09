import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  it("should render without errors", () => {
    render(<Footer />);
    const element = screen.getByText("Footer");
    expect(element).toBeInTheDocument();
  });
});
