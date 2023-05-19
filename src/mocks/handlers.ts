import { rest } from "msw";

export const handlers = [
  rest.get("https://gbfs.urbansharing.com/oslobysykkel.no/station_information.json", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        last_updated: 1684504180,
        ttl: 10,
        version: "2.2",
        data: {
          stations: [
            {
              station_id: "2358",
              name: "Aker Brygge 3 mot Fergene",
              address: "Dokkveien 1, 0250 Oslo",
              rental_uris: {
                android: "oslobysykkel://stations/2358",
                ios: "oslobysykkel://stations/2358"
              },
              lat: 59.91087115068967,
              lon: 10.729828757277915,
              capacity: 15
            },
            {
              station_id: "2357",
              name: "Aker Brygge 2 mot Rådhusplassen",
              address: "Brynjulf Bulls plass 2, 0250 Oslo",
              rental_uris: {
                android: "oslobysykkel://stations/2357",
                ios: "oslobysykkel://stations/2357"
              },
              lat: 59.91111544486938,
              lon: 10.730396895054923,
              capacity: 24
            },
            {
              station_id: "2355",
              name: "Økern T-bane",
              address: "Økernveien 147",
              rental_uris: {
                android: "oslobysykkel://stations/2355",
                ios: "oslobysykkel://stations/2355"
              },
              lat: 59.928894918817605,
              lon: 10.806234776281599,
              capacity: 12
            },
            {
              station_id: "2351",
              name: "Sogn Studentby",
              address: "Jon P Erliens vei 1",
              rental_uris: {
                android: "oslobysykkel://stations/2351",
                ios: "oslobysykkel://stations/2351"
              },
              lat: 59.95208441268443,
              lon: 10.727852791011173,
              capacity: 18
            }
          ]
        }
      })
    );
  }),
  rest.get("https://gbfs.urbansharing.com/oslobysykkel.no/station_status.json", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        last_updated: 1684504089,
        ttl: 10,
        version: "2.2",
        data: {
          stations: [
            {
              station_id: "2358",
              is_installed: true,
              is_renting: true,
              is_returning: true,
              last_reported: 1684504089,
              num_bikes_available: 6,
              num_docks_available: 9,
              vehicle_types_available: [
                {
                  vehicle_type_id: "bike",
                  count: 6
                }
              ]
            },
            {
              station_id: "2357",
              is_installed: true,
              is_renting: true,
              is_returning: true,
              last_reported: 1684504089,
              num_bikes_available: 22,
              num_docks_available: 2,
              vehicle_types_available: [
                {
                  vehicle_type_id: "bike",
                  count: 22
                }
              ]
            },
            {
              station_id: "2355",
              is_installed: true,
              is_renting: true,
              is_returning: true,
              last_reported: 1684504089,
              num_bikes_available: 2,
              num_docks_available: 10,
              vehicle_types_available: [
                {
                  vehicle_type_id: "bike",
                  count: 2
                }
              ]
            },
            {
              station_id: "2351",
              is_installed: true,
              is_renting: true,
              is_returning: true,
              last_reported: 1684504089,
              num_bikes_available: 0,
              num_docks_available: 18,
              vehicle_types_available: [
                {
                  vehicle_type_id: "bike",
                  count: 0
                }
              ]
            }
          ]
        }
      })
    );
  })
];
