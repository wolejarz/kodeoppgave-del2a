import { render, screen } from "@testing-library/react";
import DataGrid from "./DataGrid";

test("Renders table name and header", async () => {
  render(<DataGrid />);
  const linkElement = screen.getByText(/OSLOBYSYKKEL/i);
  expect(linkElement).toBeInTheDocument();
  const headerElement = screen.getByText(/Navn/i);
  expect(headerElement).toBeInTheDocument();
});
