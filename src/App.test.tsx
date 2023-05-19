import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import server from "./mocks/server";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("Renders table name and header", async () => {
  render(<App />);
  //Static content test
  const linkElement = screen.getByText(/OSLOBYSYKKEL/i);
  expect(linkElement).toBeInTheDocument();
  const headerElement = screen.getByText(/Navn/i);
  expect(headerElement).toBeInTheDocument();
});

test("Renders data from mocked request", async () => {
  render(<App />);
  //External data source content test
  await waitFor(() => {
    expect(screen.getByText(/Sogn Studentby/i)).toBeInTheDocument();
  });
  await waitFor(() => {
    const rows = screen.getAllByRole("row");
    expect(rows).toHaveLength(5);
  });
});
