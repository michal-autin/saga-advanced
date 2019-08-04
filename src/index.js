/** @jsx jsx */
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import Counter from "./components/Counter";
import reducer from "./reducers";
import flightResults from "./reducers/flightResult";
import rootSaga from "./sagas";

import FligthsSearch from "./components/FlightsSearch";

import { css, jsx } from "@emotion/core";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({ counter: reducer, searchResults: flightResults }),
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

const action = type => store.dispatch({ type });

function render() {
  console.log("store:", JSON.stringify(store.getState()));
  ReactDOM.render(
    <div
      css={css`
        /* background-color: aliceblue; */
      `}
    >
      <div>
        <Counter
          value={store.getState().counter}
          onIncrement={() => action("INCREMENT")}
          onDecrement={() => action("DECREMENT")}
          onIncrementIfOdd={() => action("INCREMENT_IF_ODD")}
          onIncrementAsync={() => action("INCREMENT_REQUEST")}
          onCancel={() => action("CANCEL")}
          onSearch={() => action("FLIGHT_SEARCH")}
        />
        <FligthsSearch
          type="quality"
          tickets2={[
            {
              id:
                "032d139247390000d564b9a6_0|13921aae473a0000a67edccf_0|1aae1884473a00003bfa82a6_0|18840372473b0000d67da350_0",
              countryFrom: {
                code: "GB",
                name: "United Kingdom"
              },
              countryTo: {
                code: "AU",
                name: "Australia"
              },
              bags_price: {
                "1": 130.07
              },
              baglimit: {
                hand_width: 20,
                hand_height: 38,
                hand_length: 54,
                hand_weight: 8,
                hold_width: 28,
                hold_height: 50,
                hold_length: 70,
                hold_dimensions_sum: 148,
                hold_weight: 20
              },
              dTime: 1575407400,
              aTime: 1575569400,
              dTimeUTC: 1575407400,
              p1: 1,
              p2: 1,
              p3: 1,
              aTimeUTC: 1575529800,
              price: 455,
              flyFrom: "STN",
              mapIdfrom: "london_gb",
              mapIdto: "sydney_ns_au",
              flyTo: "SYD",
              distance: 16974.81,
              cityFrom: "London",
              cityTo: "Sydney",
              route: [
                {
                  id: "032d139247390000d564b9a6_0",
                  combination_id: "032d139247390000d564b9a6",
                  return: 0,
                  original_return: 0,
                  source: "deprecated",
                  found_on: "deprecated",
                  price: 1,
                  aTime: 1575415500,
                  dTime: 1575407400,
                  aTimeUTC: 1575411900,
                  dTimeUTC: 1575407400,
                  mapIdfrom: "london_gb",
                  mapIdto: "cologne_de",
                  cityTo: "Cologne",
                  cityFrom: "London",
                  flyTo: "CGN",
                  airline: "FR",
                  operating_carrier: "",
                  equipment: null,
                  flyFrom: "STN",
                  latFrom: 51.885,
                  lngFrom: 0.235,
                  latTo: 50.865833,
                  lngTo: 7.142778,
                  flight_no: 2816,
                  vehicle_type: "aircraft",
                  refresh_timestamp: 1564862299,
                  bags_recheck_required: false,
                  guarantee: false,
                  fare_classes: "M",
                  fare_basis: "MZ1999DR",
                  fare_family: "",
                  fare_category: "M",
                  last_seen: 1564862299,
                  operating_flight_no: ""
                },
                {
                  id: "13921aae473a0000a67edccf_0",
                  combination_id: "13921aae473a0000a67edccf",
                  return: 0,
                  original_return: 0,
                  source: "deprecated",
                  found_on: "deprecated",
                  price: 1,
                  aTime: 1575444300,
                  dTime: 1575439800,
                  aTimeUTC: 1575440700,
                  dTimeUTC: 1575436200,
                  mapIdfrom: "cologne_de",
                  mapIdto: "berlin_de",
                  cityTo: "Berlin",
                  cityFrom: "Cologne",
                  flyTo: "TXL",
                  airline: "EW",
                  operating_carrier: "",
                  equipment: null,
                  flyFrom: "CGN",
                  latFrom: 50.865833,
                  lngFrom: 7.142778,
                  latTo: 52.559722,
                  lngTo: 13.287778,
                  flight_no: 12,
                  vehicle_type: "aircraft",
                  refresh_timestamp: 0,
                  bags_recheck_required: true,
                  guarantee: true,
                  fare_classes: "F",
                  fare_basis: "FBPROMO",
                  fare_family: "",
                  fare_category: "M",
                  last_seen: 1564720689,
                  operating_flight_no: ""
                },
                {
                  id: "1aae1884473a00003bfa82a6_0",
                  combination_id: "1aae1884473a00003bfa82a6",
                  return: 0,
                  original_return: 0,
                  source: "deprecated",
                  found_on: "deprecated",
                  price: 1,
                  aTime: 1575519900,
                  dTime: 1575451800,
                  aTimeUTC: 1575491100,
                  dTimeUTC: 1575448200,
                  mapIdfrom: "berlin_de",
                  mapIdto: "singapore_sg",
                  cityTo: "Singapore",
                  cityFrom: "Berlin",
                  flyTo: "SIN",
                  airline: "TR",
                  operating_carrier: "TR",
                  equipment: "788",
                  flyFrom: "TXL",
                  latFrom: 52.559722,
                  lngFrom: 13.287778,
                  latTo: 1.359167,
                  lngTo: 103.989444,
                  flight_no: 735,
                  vehicle_type: "aircraft",
                  refresh_timestamp: 1564846053,
                  bags_recheck_required: true,
                  guarantee: true,
                  fare_classes: "O",
                  fare_basis: "O1TRAPID",
                  fare_family: "",
                  fare_category: "M",
                  last_seen: 1564846053,
                  operating_flight_no: "735"
                },
                {
                  id: "18840372473b0000d67da350_0",
                  combination_id: "18840372473b0000d67da350",
                  return: 0,
                  original_return: 0,
                  source: "deprecated",
                  found_on: "deprecated",
                  price: 1,
                  aTime: 1575569400,
                  dTime: 1575530100,
                  aTimeUTC: 1575529800,
                  dTimeUTC: 1575501300,
                  mapIdfrom: "singapore_sg",
                  mapIdto: "sydney_ns_au",
                  cityTo: "Sydney",
                  cityFrom: "Singapore",
                  flyTo: "SYD",
                  airline: "TR",
                  operating_carrier: "TR",
                  equipment: "789",
                  flyFrom: "SIN",
                  latFrom: 1.359167,
                  lngFrom: 103.989444,
                  latTo: -33.946111,
                  lngTo: 151.177222,
                  flight_no: 12,
                  vehicle_type: "aircraft",
                  refresh_timestamp: 1564846053,
                  bags_recheck_required: true,
                  guarantee: true,
                  fare_classes: "O",
                  fare_basis: "O1TRAPID",
                  fare_family: "",
                  fare_category: "M",
                  last_seen: 1564846053,
                  operating_flight_no: "12"
                }
              ],
              routes: [["STN", "SYD"]],
              airlines: ["EW", "FR", "TR"],
              nightsInDest: null,
              pnr_count: 4,
              transfers: [],
              has_airport_change: false,
              virtual_interlining: true,
              fly_duration: "34h 0m",
              duration: {
                departure: 122400,
                return: 0,
                total: 122400
              },
              facilitated_booking_available: false,
              type_flights: ["lcc-FR", "lcc-EW", "lcc-TR"],
              found_on: ["deprecated"],
              conversion: {
                EUR: 455
              },
              booking_token:
                "xlfCK4DnW9vdUZ+D9I2V7oeCzQomDQeVxMNtOeojJHCepvAJOToxpgcHOu8NspDcVZQgbsA87Qad4i9qxtWat1+1HVEn2VGQgMCG40xaLR3oeBFCcf4NKA/Ka88lcJZGGRKlHZP1gdW+vBnpBvALpeaOo/rfpyOc5JmkKxAzj6BCAv2R2jr0fwgt7YieOkQSMmUx9RJA7hToDzPOfPSMQzPvdIRfPz4aCjTiYQFaT4XXPJvAeHg/gm/T7gq7I2vSG1YJ1jzFNUyfTzlAHxolnAcNwDY0yT41wxFtF7YrIjwyByJcNb5mgCJEf3vHy5TMMTVWMDoUm995qEeSruvaQc12/p2+WJ04rdlMpP8z6Xk7Rx8HG/5vu3Ys7kkernh9qj/qIlhjfDn9rW4nnhOFkhjchBt9wTkqWF6PJQ3dQkVUnyjnRcV9KliQLtbyxFNAPIPFnYep8WRgjmxgDj86Ti8gb6qOPxqKbeficgbzRsUIL0HkkaJ0WNShys5WSMK6fDCCQi4FCxrJ8CGSp4FsoOGTdqyC1v/TR1tfsWeUTsskr7TLCdxsmXUquF7Dp3MGMGqWp8414ihuLBV/0xGdlXfCR1hppjmsHvIVzCtdnSVgyextcYFBr1TMZNtNT7hP0RJuJB6+0w7w35TkL7gcr0BHiy2QZvZXgfbabwLHg8ex+8rWH4/0mwz7WKFeay1E8h1OStVE8/Q0+n4FPk/+cu2shRxDJXqTHYtuqKsH0adxCKXdnOqMqoeEKq5xUKliNFA/v8DIUjwxuvtc8hZ+RC6UCnUFmWHtDZA5pDQGiMyDP9v2bN0z2nJJbSVnTPp5GRuNUJHiC/SNYHkf82+LI1bpmwlv7Y6Eu6imUjajLC8AOo3irZzgc+1rRu/8XQsalqQxrh6mV8eEvH9bkcq/CyYVbqiyZGrL8WnQvwFJoI1Ygstaq5N0gkxma9qTijuZbQ81e0P4M/47rr2nucXbZCEWI3L2zHgmlZXWO8/LSHuTe2i+e8gcZhHD0VlNQ8byYqSRDOlkR+ivFvxruHXRDV7qSJ9P0X485IUklHfHEijtZsfLPpk/621tqrl7k/4ghBgugPFxo47oumh3LuNk9SCKdv2+EbxoqNue8FcpUj+C4uoQlEtLpVdMO0EjicBopdPYh3Vz9kCdb5GEGGhYHJK8M76wDeSapFYBdvreYK+ktxkrTdWnx4szVE7fqRZy",
              quality: 738.99929,
              deep_link:
                "https://www.kiwi.com/deep?from=STN&to=SYD&departure=03-12-2019&flightsId=032d139247390000d564b9a6_0%7C13921aae473a0000a67edccf_0%7C1aae1884473a00003bfa82a6_0%7C18840372473b0000d67da350_0&price=455&passengers=1&affilid=picky&lang=en&currency=EUR&booking_token=xlfCK4DnW9vdUZ+D9I2V7oeCzQomDQeVxMNtOeojJHCepvAJOToxpgcHOu8NspDcVZQgbsA87Qad4i9qxtWat1+1HVEn2VGQgMCG40xaLR3oeBFCcf4NKA/Ka88lcJZGGRKlHZP1gdW+vBnpBvALpeaOo/rfpyOc5JmkKxAzj6BCAv2R2jr0fwgt7YieOkQSMmUx9RJA7hToDzPOfPSMQzPvdIRfPz4aCjTiYQFaT4XXPJvAeHg/gm/T7gq7I2vSG1YJ1jzFNUyfTzlAHxolnAcNwDY0yT41wxFtF7YrIjwyByJcNb5mgCJEf3vHy5TMMTVWMDoUm995qEeSruvaQc12/p2+WJ04rdlMpP8z6Xk7Rx8HG/5vu3Ys7kkernh9qj/qIlhjfDn9rW4nnhOFkhjchBt9wTkqWF6PJQ3dQkVUnyjnRcV9KliQLtbyxFNAPIPFnYep8WRgjmxgDj86Ti8gb6qOPxqKbeficgbzRsUIL0HkkaJ0WNShys5WSMK6fDCCQi4FCxrJ8CGSp4FsoOGTdqyC1v/TR1tfsWeUTsskr7TLCdxsmXUquF7Dp3MGMGqWp8414ihuLBV/0xGdlXfCR1hppjmsHvIVzCtdnSVgyextcYFBr1TMZNtNT7hP0RJuJB6+0w7w35TkL7gcr0BHiy2QZvZXgfbabwLHg8ex+8rWH4/0mwz7WKFeay1E8h1OStVE8/Q0+n4FPk/+cu2shRxDJXqTHYtuqKsH0adxCKXdnOqMqoeEKq5xUKliNFA/v8DIUjwxuvtc8hZ+RC6UCnUFmWHtDZA5pDQGiMyDP9v2bN0z2nJJbSVnTPp5GRuNUJHiC/SNYHkf82+LI1bpmwlv7Y6Eu6imUjajLC8AOo3irZzgc+1rRu/8XQsalqQxrh6mV8eEvH9bkcq/CyYVbqiyZGrL8WnQvwFJoI1Ygstaq5N0gkxma9qTijuZbQ81e0P4M/47rr2nucXbZCEWI3L2zHgmlZXWO8/LSHuTe2i+e8gcZhHD0VlNQ8byYqSRDOlkR+ivFvxruHXRDV7qSJ9P0X485IUklHfHEijtZsfLPpk/621tqrl7k/4ghBgugPFxo47oumh3LuNk9SCKdv2+EbxoqNue8FcpUj+C4uoQlEtLpVdMO0EjicBopdPYh3Vz9kCdb5GEGGhYHJK8M76wDeSapFYBdvreYK+ktxkrTdWnx4szVE7fqRZy"
            },
            {
              id: "0f640372473a00001f3e258e_0|0f640372473a00001f3e258e_1",
              countryFrom: {
                code: "GB",
                name: "United Kingdom"
              },
              countryTo: {
                code: "AU",
                name: "Australia"
              },
              bags_price: {
                "1": 0
              },
              baglimit: {
                hold_width: 38,
                hold_height: 50,
                hold_length: 70,
                hold_dimensions_sum: 158,
                hold_weight: 20,
                hand_width: 23,
                hand_height: 36,
                hand_length: 56,
                hand_weight: 7
              },
              dTime: 1575455100,
              aTime: 1575577800,
              dTimeUTC: 1575455100,
              p1: 1,
              p2: 1,
              p3: 1,
              aTimeUTC: 1575538200,
              price: 554,
              flyFrom: "LHR",
              mapIdfrom: "london_gb",
              mapIdto: "sydney_ns_au",
              flyTo: "SYD",
              distance: 17038.96,
              cityFrom: "London",
              cityTo: "Sydney",
              route: [
                {
                  id: "0f640372473a00001f3e258e_0",
                  combination_id: "0f640372473a00001f3e258e",
                  return: 0,
                  original_return: 0,
                  source: "deprecated",
                  found_on: "deprecated",
                  price: 1,
                  aTime: 1575530100,
                  dTime: 1575455100,
                  aTimeUTC: 1575501300,
                  dTimeUTC: 1575455100,
                  mapIdfrom: "london_gb",
                  mapIdto: "kuala-lumpur_my",
                  cityTo: "Kuala Lumpur",
                  cityFrom: "London",
                  flyTo: "KUL",
                  airline: "MH",
                  operating_carrier: "MH",
                  equipment: "359",
                  flyFrom: "LHR",
                  latFrom: 51.4775,
                  lngFrom: -0.461389,
                  latTo: 2.745556,
                  lngTo: 101.714722,
                  flight_no: 3,
                  vehicle_type: "aircraft",
                  refresh_timestamp: 1564866697,
                  bags_recheck_required: false,
                  guarantee: false,
                  fare_classes: "O",
                  fare_basis: "OGSOWGB",
                  fare_family: "",
                  fare_category: "M",
                  last_seen: 1564866697,
                  operating_flight_no: "3"
                },
                {
                  id: "0f640372473a00001f3e258e_1",
                  combination_id: "0f640372473a00001f3e258e",
                  return: 0,
                  original_return: 0,
                  source: "deprecated",
                  found_on: "deprecated",
                  price: 1,
                  aTime: 1575577800,
                  dTime: 1575537000,
                  aTimeUTC: 1575538200,
                  dTimeUTC: 1575508200,
                  mapIdfrom: "kuala-lumpur_my",
                  mapIdto: "sydney_ns_au",
                  cityTo: "Sydney",
                  cityFrom: "Kuala Lumpur",
                  flyTo: "SYD",
                  airline: "MH",
                  operating_carrier: "MH",
                  equipment: "333",
                  flyFrom: "KUL",
                  latFrom: 2.745556,
                  lngFrom: 101.714722,
                  latTo: -33.946111,
                  lngTo: 151.177222,
                  flight_no: 141,
                  vehicle_type: "aircraft",
                  refresh_timestamp: 1564866697,
                  bags_recheck_required: false,
                  guarantee: false,
                  fare_classes: "O",
                  fare_basis: "OGSOWGB",
                  fare_family: "",
                  fare_category: "M",
                  last_seen: 1564866697,
                  operating_flight_no: "141"
                }
              ],
              routes: [["LHR", "SYD"]],
              airlines: ["MH"],
              nightsInDest: null,
              pnr_count: 1,
              transfers: [],
              has_airport_change: false,
              virtual_interlining: false,
              fly_duration: "23h 5m",
              duration: {
                departure: 83100,
                return: 0,
                total: 83100
              },
              facilitated_booking_available: true,
              type_flights: ["GDS-r"],
              found_on: ["deprecated"],
              conversion: {
                EUR: 554
              },
              booking_token:
                "xlfCK4DnW9vdUZ+D9I2V7oeCzQomDQeVxMNtOeojJHCepvAJOToxpgcHOu8NspDcVZQgbsA87Qad4i9qxtWat1+1HVEn2VGQgMCG40xaLR3oeBFCcf4NKA/Ka88lcJZGMBHAaQBN8nA2jBdLgpV7nruyUCpK1RvSvgPgliA1KHjkyw0rtqZkuhOnrdumdgkaIv6kp6v488yRltVAv8JhAfxYnaQ8AujeiJhNfbfGNnQbq4Z63vego91Ac5uEXluM/G7dM9P0EEYcksQnuQvZxRED2pSLrX7y8/dHppe7EjbXb4WDq6YuGCijvGpe9MGgm9yn7yTPWLII/Sc3jLOxH2e4gQvbTkmXqbnL5JGltnnP1BIaNjr4NA/wolc3X5QXb6o74NQ6U7u2J24P9nFzv+043zHWsTAlxVnl6zVp4VCpHeWFTwRxPSPNB7/OeezNUd8ZrhpvXh9mqY4fmd6hZhzQBiIJWlNElf66Z7i9oN9Qaie8T7ooa5MX4yeUulx7aJkH/FDosGsLIUMJD/T2KiB2i0XlUpWrw0nmB/Tm8Non5lkA6jpTRVIPc82QASrloVFHhvWFnV4ynnaBfipUrNwXKSvBXr971pL9qvWDIp2H439u+B0nylgwtdVV4NsTxYmw7Atut/Nejj09bdfWVisbkF7KISbJ4purLHPtDarplnh4yW9LA0aiBSxrPraxjwr95+OVGxLT8Mz9ABvD7Ah73RP6msq5nWC7SplZLwjcvosq1Wh0ec9CTqMOZg0AuXU+eq1kuowZqlzK/wrT7ZU1yyAZsimRbCK1bQPo8p0yN+/oDMOEoudwxKfj1h/htfYkRa+RxF72AuES2ukfbh9lm09g6a2dst2I74p3zswZaIFg0WiMHlRUYc07pzPyNWliHcJNOwB3EIEiH2qCUKxJAtC9jjbtRWYi/og+PYqW9ZsZy6rlDeSW16/HbYScSclGsdpX8T3oAjTZKmpX4Oh2qAg6J6ZgT0xQvjFt/y4=",
              quality: 750.666175,
              deep_link:
                "https://www.kiwi.com/deep?from=LHR&to=SYD&departure=04-12-2019&flightsId=0f640372473a00001f3e258e_0%7C0f640372473a00001f3e258e_1&price=554&passengers=1&affilid=picky&lang=en&currency=EUR&booking_token=xlfCK4DnW9vdUZ+D9I2V7oeCzQomDQeVxMNtOeojJHCepvAJOToxpgcHOu8NspDcVZQgbsA87Qad4i9qxtWat1+1HVEn2VGQgMCG40xaLR3oeBFCcf4NKA/Ka88lcJZGMBHAaQBN8nA2jBdLgpV7nruyUCpK1RvSvgPgliA1KHjkyw0rtqZkuhOnrdumdgkaIv6kp6v488yRltVAv8JhAfxYnaQ8AujeiJhNfbfGNnQbq4Z63vego91Ac5uEXluM/G7dM9P0EEYcksQnuQvZxRED2pSLrX7y8/dHppe7EjbXb4WDq6YuGCijvGpe9MGgm9yn7yTPWLII/Sc3jLOxH2e4gQvbTkmXqbnL5JGltnnP1BIaNjr4NA/wolc3X5QXb6o74NQ6U7u2J24P9nFzv+043zHWsTAlxVnl6zVp4VCpHeWFTwRxPSPNB7/OeezNUd8ZrhpvXh9mqY4fmd6hZhzQBiIJWlNElf66Z7i9oN9Qaie8T7ooa5MX4yeUulx7aJkH/FDosGsLIUMJD/T2KiB2i0XlUpWrw0nmB/Tm8Non5lkA6jpTRVIPc82QASrloVFHhvWFnV4ynnaBfipUrNwXKSvBXr971pL9qvWDIp2H439u+B0nylgwtdVV4NsTxYmw7Atut/Nejj09bdfWVisbkF7KISbJ4purLHPtDarplnh4yW9LA0aiBSxrPraxjwr95+OVGxLT8Mz9ABvD7Ah73RP6msq5nWC7SplZLwjcvosq1Wh0ec9CTqMOZg0AuXU+eq1kuowZqlzK/wrT7ZU1yyAZsimRbCK1bQPo8p0yN+/oDMOEoudwxKfj1h/htfYkRa+RxF72AuES2ukfbh9lm09g6a2dst2I74p3zswZaIFg0WiMHlRUYc07pzPyNWliHcJNOwB3EIEiH2qCUKxJAtC9jjbtRWYi/og+PYqW9ZsZy6rlDeSW16/HbYScSclGsdpX8T3oAjTZKmpX4Oh2qAg6J6ZgT0xQvjFt/y4="
            }
          ]}
          tickets={store.getState().searchResults["quality"]}
        />
      </div>
    </div>,
    document.getElementById("root")
  );
}

render();
store.subscribe(render);
