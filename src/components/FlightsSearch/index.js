import React from "react";
import PropTypes from "prop-types";
import FlightTicket from "../FlightTicket";
import styled from "@emotion/styled/macro";

const FlightsSearchTypes = {
  best: "optimal",
  chepest: "price",
  shortest: "duration"
};

const TicketList = styled.ul`
  list-style: none;
  /* list-style-position:  */

  li:not(:last-child) {
    margin-bottom: 30px;
  }
`;

FlightsSearch.propTypes = {
  type: PropTypes.string.isRequired,
  tickets: PropTypes.array.isRequired
};

function FlightsSearch({ type, tickets }) {
  console.log("Typ", type, "tickets", tickets);
  return (
    <div>
      <h3>{type}</h3>
      <TicketList>
        {tickets.map(ticket => (
          <li key={ticket.id}>
            <FlightTicket ticket={ticket} />
          </li>
        ))}
      </TicketList>
    </div>
  );
}

export default FlightsSearch;
export { FlightsSearchTypes };
