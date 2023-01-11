import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders portfolio name", () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  const portfolioName = screen.getByText("Britny Lain");
  expect(portfolioName).toBeInTheDocument();
});
