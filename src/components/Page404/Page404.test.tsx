import React from "react";
import { render, screen } from "@testing-library/react";
import Page404 from "./Page404";

describe("Page404", () => {
  it("should render without errors", () => {
    render(<Page404 />);
    const element = screen.getByText("Page404");
    expect(element).toBeInTheDocument();
  });
});
