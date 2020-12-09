import styled from "styled-components";

export const Section = styled.section`
  width: 80%;
  margin: 0 auto;
  margin-top: 180px;
  margin-bottom: 120px;
  display:flex;
  justify-content:space-between;
  flex-wrap:wrap;
  
`;
export const Pagination = styled.section`
  margin: 0 auto;
  margin-top: 70px;
  /* border: 1px solid red; */
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  border: 2px solid white;
  color: black;
  cursor: pointer;
  display: flex;
  align-self: center;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  padding: 1.2em 2.8em;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: sans-serif;
  font-weight: 700;
  border-color: white;
  box-shadow: 0 0 40px 40px white inset, 0 0 0 0 white;
  transition: all 150ms ease-in-out;
  &:hover,
  &:focus {
    color: #fff;
    outline: 0;
    box-shadow: 0 0 10px 0 white inset, 0 0 10px 4px white;
  }

`;
