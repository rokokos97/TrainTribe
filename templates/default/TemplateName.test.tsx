import React from "react";
import { render, screen } from "@testing-library/react";
import TemplateName from "./TemplateName";

describe("TemplateName", () => {
  it("should render without errors", () => {
    render(<TemplateName />);
    const element = screen.getByText("TemplateName");
    expect(element).toBeInTheDocument();
  });
});
