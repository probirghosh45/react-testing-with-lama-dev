import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders list Items", () => {
  render(<App />);
  const listItems = screen.getAllByRole("listitem");
  // expect(listItems).toHaveLength(3);
  expect(listItems.length).toEqual(3); // both process works fine here
});

test("sum should be 15", () => {
  render(<App />);
  const sum = screen.getByTitle("sum");
  expect(sum.textContent).toBe("15");
});

test("Render Titles", () => {
  render(<App />);
  const titleContent = screen.getByTestId("title")
  expect(titleContent).toBeInTheDocument();
});
