import { render, screen } from "@testing-library/react";
import App from "./App";
import server from "./mocks/server";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("Renders two stations with no available locks and two stations with no available bicycles", () => {
  render(<App />);
  //Static content test
  const linkElement = screen.getByText(/OSLOBYSYKKEL/i);
  expect(linkElement).toBeInTheDocument();
  //Dynamic content test
  // const station1 = screen.getByRole("heading");
  // expect(station1).toHaveTextContent("Aker Brygge 3 mot Fergene");
});
