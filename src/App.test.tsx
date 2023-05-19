import { render, screen } from "@testing-library/react";
import { setupServer } from "msw/node";
import { rest } from "msw";
import App from "./App";
const handlers = [
  rest.get("https://gbfs.urbansharing.com/oslobysykkel.no/station_information.json", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        last_updated: 1630512000,
        ttl: 10,
        data: {
          stations: [
            {
              station_id: "123",
              name: "Stasjon 1",
              address: "Adresse 1",
              lat: 59.9138688,
              lon: 10.7522454,
              capacity: 10
            },
            {
              station_id: "456",
              name: "Stasjon 2",
              address: "Adresse 2",
              lat: 59.9138688,
              lon: 10.7522454,
              capacity: 10
            },
            {
              station_id: "789",
              name: "Stasjon 3",
              address: "Adresse 3",
              lat: 59.9138688,
              lon: 10.7522454,
              capacity: 10
            },
            {
              station_id: "101112",
              name: "Stasjon 4",
              address: "Adresse 4",
              lat: 59.9138688,
              lon: 10.7522454,
              capacity: 10
            }
          ]
        }
      })
    );
  })
];
const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("Renders two stations with no available locks and two stations with no available bicycles", () => {
  render(<App />);
  //Static content test
  const linkElement = screen.getByText(/OSLOBYSYKKEL/i);
  expect(linkElement).toBeInTheDocument();
  //Dynamic content test
  const station1 = screen.getByText(/Stasjon 1/i);
  expect(station1).toBeInTheDocument();
});
