import styled from "styled-components";

export const Section = styled.section`
  margin-bottom: 40px;
  border: 1px solid ${({ theme }) => theme.text};
  padding: 40px 50px;
  box-sizing: border-box; ;
`;
export const Title = styled.h2`
  margin: 0;
  font-size: 28px;
  text-transform: uppercase;
  max-width: 300px;
  @media (min-width: 768px) {
  font-size: 48px;
  }
`;
export const Container = styled.div`
  text-align:center;
`;
