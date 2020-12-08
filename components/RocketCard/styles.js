import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  margin-bottom:40px;
  border:1px solid white;
  border-radius:25px;
  padding:30px 20px;
  @media (min-width: 1100px) {
    width:42%;
    padding:40px 30px;
  }
`;

export const Main = styled.div`
  margin-bottom: 30px;
  text-align:center;
  @media (min-width: 1100px) {
  display: flex;
  text-align:justify;
  }
`;

export const Info = styled.div`
  border:1px solid white;
  padding:40px 15px;
    @media (min-width: 1100px) {
    width:50%;
    }
`;

export const Image = styled.div`
  display: flex;
  align-items: flex-end;
  & figure {
    height: 350px;
    margin: 0 auto;
    margin-bottom: 40px;
    max-width: 1200px;
  }
  & img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
  @media (min-width: 1100px) {
    padding-right: 30px;
    width:50%;
    & figure {
      height: 750px;
      margin-bottom: 0;
    }
    & img {
      height: 100%;
      object-fit: cover;
      width: 100%;
    }
  }
`;

export const Text = styled.p`
  font-size:14px;
`;

export const Ul = styled.ul`
  margin: 0;
  text-align: center;
  list-style-position: inside;
  padding: 0 20px;
  margin-top: 30px;
  display:inline-block;
  padding:0 0px;
  & h2 {
    text-transform: capitalize;
    font-size: 24px;
    margin: 0;
    padding-bottom: 10px;
  }
  & li {
    text-transform: capitalize;
    font-size: 12px;
    
  }
  
  @media (min-width: 1100px) {
  text-align: left;
  display:block;
  padding:0 0px;
  }
`;

export const Status = styled.div`
  & p {
    margin: 0 auto;
    display: flex;
    border: ${(props) =>
      props.status === "active" ? "2px solid #98e832" : "2px solid red"};
    color: ${(props) =>
      props.status === "active" ? "#98e832" : "red"};
    text-transform: uppercase;
    font-size: 18px;
    padding: 10px 20px;
    width: fit-content;
  }
  @media (min-width: 768px) {
    padding: 10px 40px;
    font-size: 24px;
  }
`;
