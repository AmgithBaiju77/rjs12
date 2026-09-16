import { render, screen } from "@testing-library/react";
import App from "./App";

test("displays shopping cart", () => {
  render(<App />);

  expect(screen.getByText("Shopping Cart")).toBeInTheDocument();
  expect(screen.getByText("Laptop")).toBeInTheDocument();
  expect(screen.getByText("Headphones")).toBeInTheDocument();
  expect(screen.getByText("Mouse")).toBeInTheDocument();
  expect(screen.getByText("Total: ₹52800")).toBeInTheDocument();
});
