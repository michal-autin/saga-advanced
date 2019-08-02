import React from "react";

const FlightTicket = ticket => {
  return (
    <div>
      <pre>{JSON.stringify(ticket, null, 2)}</pre>
    </div>
  );
};

export default FlightTicket;
