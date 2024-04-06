import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./src/App";

describe("App Component", () => {
  it("renders magnificent monkeys", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
  it("Renders radical rhinos after button click", async () => {
    const user = userEvent.setup();
    render(<App />);
    const button = screen.getByRole("button", { name: "Click me" });
    await user.click(button);
    expect(screen.getByRole("heading").textContent).toMatch(/radical rhinos/i);
  });
});
