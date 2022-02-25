import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const StyledMenu = styled.div`
  position: relative;
  margin-top: 75px;
  background-color: rgb(255, 52, 45);
`;
const StyledUl = styled.ul`
  width: 100%;
`;
const StyledElem = styled.li`
  list-style-type: none;
  padding: 15px;
  margin-left: 10px;
  color: whitesmoke;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  transition: background-color 0.5s ease-out;
  a {
    color: whitesmoke;
    text-decoration: none;
  }
  &:hover {
    background-color: tomato;
  }
`;

function Menu() {
  const selec = useSelector((st: any) => st.account.value);
  return (
    <StyledMenu className="container">
      <StyledUl className="row">
        <StyledElem className="col">
          <Link to="/news">News</Link>
        </StyledElem>
        <StyledElem className="col">
          <Link to="/team">Team</Link>
        </StyledElem>
        <StyledElem className="col">
          <Link to="/standings">Standings</Link>
        </StyledElem>
        <StyledElem className="col">
          <Link to="/about">About</Link>
        </StyledElem>
        {selec.token !== null && selec.token.length < 10 ? (
          <StyledElem className="col">
            <Link to="/login">Login</Link>
          </StyledElem>
        ) : (
          <StyledElem className="col">
            <Link to="/logout">Logout</Link>
          </StyledElem>
        )}
      </StyledUl>
    </StyledMenu>
  );
}

export default Menu;
