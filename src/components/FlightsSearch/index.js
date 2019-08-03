import React from "react";
import PropTypes from "prop-types";
import FlightTicket from "../FlightTicket";

const FlightsSearchTypes = {
  best: "optimal",
  chepest: "price",
  shortest: "duration"
};

FlightsSearch.propTypes = {
  type: PropTypes.string.isRequired,
  tickets: PropTypes.array.isRequired
};

function FlightsSearch({ type, tickets }) {
  console.log("Typ", type, "tickets", tickets);
  return (
    <div>
      <h3>{type}</h3>
      <ul>
        {tickets.map(ticket => (
          <li>
            <FlightTicket ticket={ticket} key={ticket.id} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FlightsSearch;
export { FlightsSearchTypes };
