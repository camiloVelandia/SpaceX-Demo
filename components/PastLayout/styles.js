import styled from "styled-components";

export const Section = styled.section`
  width: 80%;
  margin: 0 auto;
  margin-top: 180px;
  margin-bottom: 70px;
  display:flex;
  justify-content:space-between;
  flex-wrap:wrap;
  
`;
export const BtnContainer = styled.section`
  width: 80%;
  margin: 0 auto;
  margin-bottom: 120px;
  display: flex;
  flex-direction:column;
  align-items:center;

`;
export const Pagination = styled.a`
  margin: 0 auto;
  margin-top: 70px;
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.text};
  border-radius: 0.6em;
  color: ${({ theme }) => theme.body};
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
  border-color: ${({ theme }) => theme.text};
  box-shadow: 0 0 40px 40px ${({ theme }) => theme.text} inset,
    0 0 0 0 ${({ theme }) => theme.text};
  transition: all 150ms ease-in-out;
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.text};
    outline: 0;
    box-shadow: 0 0 10px 0 white inset, 0 0 10px 4px white;
  }
`;
