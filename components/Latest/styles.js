import styled from "styled-components";

export const Section = styled.section`
  width: 80%;
  margin: 0 auto;
  margin-top: 60px;
  margin-bottom: 40px;
  border: 1px solid ${({ theme }) => theme.text};
`;
export const Title = styled.div`
  background-color: ${({ theme }) => theme.text};
  text-align: center;
  padding: 15px;
  & h2 {
    color: ${({ theme }) => theme.body};
    text-transform: uppercase;
    font-size: 36px;
    margin: 0;
  }
`;
export const Main = styled.div`
  padding: 30px;
  align-items: center;
  display: flex;
  flex-wrap:wrap;
  justify-content:center;
  @media (min-width: 992px) {
  justify-content:unset;
   
  }
`;

export const Image = styled.div`
  width: 100%;
  & figure {
    width: 150px;
    height: 150px;
    margin:0 auto;
    margin-bottom:50px;
  }
  & img {
    height: 100%;
    object-fit: contain;
  }
  @media (min-width: 992px) {
  width: 25%;
    & figure {
      width: 200px;
      height: 200px;
    }
  }
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 15px;
  text-align: center;
  & h3 {
    font-size: 24px;
    text-transform: uppercase;
    margin: 0;
    padding-bottom: 20px;
  }
  & p {
    font-size: 14px;
    margin: 0;
    box-sizing: content-box;
  }
  @media (min-width: 992px) {
    border-right: 1px solid ${({ theme }) => theme.text};
    width: 45%;
    text-align: left;
    & p {
      padding-right: 60px;
    }
  }
`;
export const Bullets = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;

  & p {
    font-size: 14px;
    margin: 0;
    padding-left: 0px;
    padding-bottom: 10px;
    text-transform: capitalize;
    text-align:center;
  }
  @media (min-width: 992px) {
    width: 25%;
    padding-top: 0px;
    justify-content: center;
    & p {
    text-align:left;
      padding-left: 40px;
    }
  }
`;
