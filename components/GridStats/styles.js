import styled from "styled-components";

export const Grid = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 60px;
  margin-bottom: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  & > section {
    width: 100%;
    @media (min-width: 768px) {
      width: 48%;
    }
  }
`;
