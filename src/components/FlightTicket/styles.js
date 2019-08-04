import styled from "@emotion/styled/macro";
import css from "@emotion/css/macro";

const boxWidth = "40%";
const boxHeight = "200px";
const boxMargin = "20px";
const boxColor = "rgba(255,255,255,5)";
const shadowColor = "rgba(0, 0, 70, 0.25)";
const radius = "4px";

const box = css`
  position: relative;
  background-color: ${boxColor};
  margin: ${boxMargin};
  border-radius: ${radius};
  &:before,
  &:after {
    content: "";
    z-index: -1;
    position: absolute;
  }
`;
const boxShadow8 = css`
  ${box}
  &:before,
  &:after {
    box-shadow: 0 0 10px 10px ${shadowColor};
    background: ${shadowColor};
    top: 14px;
    bottom: 14px;
  }
  &:before {
    transform: perspective(1000px) rotateY(20deg);
    transform-origin: right;
    left: 6%;
    right: 50%;
  }
  &:after {
    transform: perspective(2000px) scaleX(1.1) scaleY(1.02);
    /* transform: perspective(1000px) rotateY(-20deg); */
    transform-origin: left;
    left: 50%;
    right: 6%;
  }
`;

let Ticket = {};

Ticket.Wrapper = styled.div`
  ${boxShadow8}
  display: grid;
  grid-template-areas:
    "header aside"
    "body aside"
    "footer aside";
  grid-template-columns: 70% 30%;
  grid-template-rows: auto 140px 45px;

  background-color: #fefefe;
  border: 1px solid lightgray;
  padding: 15px 20px;
`;
Ticket.Header = styled.div`
  z-index: 10;
  grid-area: header;
`;
Ticket.Body = styled.div`
  z-index: 10;
  grid-area: body;
`;
Ticket.Footer = styled.div`
  z-index: 10;
  grid-area: footer;
`;
Ticket.Aside = styled.div`
  z-index: 10;
  grid-area: aside;
  border-left-width: 1px;
  border-left-style: dashed;
  margin: 0;
  padding: 0 0 0 20px;

  @media (max-width: 800px) {
    display: none;
  }
`;

Ticket.Dot = styled.div`
  width: 6px;
  text-align: left;
  height: 6px;
  background-color: rgb(255, 255, 255);
  z-index: 10;
  vertical-align: middle;
  display: inline-block;
  border-radius: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(19, 60, 85);
  border-image: initial;
`;

Ticket.Line = styled.div`
  text-align: center;
  width: ${props => `${80 / (1 + props.stops)}`}%;
  height: 1px;
  background-color: rgb(155, 155, 155);
  display: inline-block;
  vertical-align: middle;
`;

Ticket.FlightLine = styled.div`
  max-width: 45%;
`;

export { Ticket };
