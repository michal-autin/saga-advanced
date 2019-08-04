import React from "react";
import styled from "@emotion/styled/macro";
import css from "@emotion/css/macro";
import dayjs from "dayjs";
import { Ticket } from "./styles";

const Button = styled.button`
  padding: 10px 35px;
  background-color: #0faa22;
  border-radius: 3px;
  font-weight: bold;
  font-size: 28px;
  line-height: 35px;
  color: white;
  letter-spacing: 1px;
  font-family: "Archivo";
  margin: 0;
  width: 100%;
`;

const FlightTicket = ({
  ticket,
  ticket: { airlines, flyFrom, flyTo, dTimeUTC, aTimeUTC, route }
}) => {
  console.log("airlines", ticket);
  const stopsOut = route.filter(r => r.return === 0).length - 1;
  const stopsIn = route.filter(r => r.return === 1).length - 1;

  return (
    <div>
      <Ticket.Wrapper>
        <Ticket.Header>airlines{airlines.join(" ")}, FB</Ticket.Header>
        <Ticket.Body>
          flight details
          {flyFrom} - {flyTo}
          {dayjs(dTimeUTC * 1000).toString()} -{" "}
          {dayjs(aTimeUTC * 1000).toString()}
          <Ticket.FlightLine>
            <Ticket.Dot />
            {[...Array(stopsOut + 1)].map((e, i) => (
              <React.Fragment key={i}>
                <Ticket.Line stops={stopsOut} />
                <Ticket.Dot />
              </React.Fragment>
            ))}
          </Ticket.FlightLine>
          <div>Stops There: {stopsOut}</div>
          <div>Stops Back: {stopsIn}</div>
        </Ticket.Body>
        <Ticket.Aside>
          pricing, button
          <Button>Select</Button>
        </Ticket.Aside>
        <Ticket.Footer>expandable footer</Ticket.Footer>
      </Ticket.Wrapper>
      {/* <pre>{JSON.stringify(ticket, null, 2)}</pre> */}
    </div>
  );
};

export default FlightTicket;
