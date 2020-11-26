import styled from "styled-components";

export const Section = styled.section`
  width: 80%;
  margin: 0 auto;
  margin-top: 60px;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const Btn = styled.a`
  width: 48%;
  margin-bottom: 40px;
  border:1px solid white;
  text-align:center;
  padding:20px 0;
  text-transform:capitalize;
  cursor:pointer;
  transition: .5s ease;
  &:hover{
    background-color:white;
    transition: .5s ease;
    color:black;
  }
`;
