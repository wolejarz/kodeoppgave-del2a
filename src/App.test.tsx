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
});

test("Renders two stations with no available locks and two stations with no available bicycles", async () => {
  render(<App />);
  //Dynamic content test
  const station1 = screen.getByRole("heading");
  expect(station1).toHaveTextContent("Aker Brygge 3 mot Fergene");
});
