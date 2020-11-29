import styled from "styled-components";

export const Section = styled.section`
  height: 40vh;
  margin-top: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${props => props.backImage || "/images/rocket.jpg"});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 0;
  }
  & h1 {
    z-index: 1;
    font-size: 48px;
    text-transform: uppercase;
  }
`;
