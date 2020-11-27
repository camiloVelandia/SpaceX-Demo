import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  margin-bottom: 40px;
  border: 1px solid white;
  border-radius: 25px;
  padding: 30px 20px;
  @media (min-width: 992px) {
    width: 42%;
    padding: 40px 30px;
  }
`;

export const Info = styled.div`
  border: 1px solid white;
  padding: 40px 15px;
`;
export const Name = styled.div`
  text-transform:uppercase;
  font-weight:600;
  font-size:28px;
`;
export const Lists = styled.div`
  padding: 40px 15px;
  display:flex;
  flex-wrap:wrap;
  justify-content:space-around;
`;


export const Text = styled.p`
  font-size: 14px;
`;
export const Figure = styled.figure`
  font-size: 14px;
  max-width:224px;
  max-height:224px;
  height:100%;
  margin:0 auto;
  margin-top:60px;
  & img{
    height:100%;
    width:100%;
    object-fit:contain;
  }
`;

export const Ul = styled.ul`
  text-align: center;
  margin: 0;
  list-style-position: inside;
  padding: 0;
  margin-top: 30px;
  width: 100%;
  & h2 {
    text-transform: capitalize;
    font-size: 24px;
    margin: 0;
    padding-bottom: 10px;
  }
  & li {
    text-transform: capitalize;
    font-size: 14px;
  }
  @media (min-width: 400px) {
    width: 48%;
    text-align:left;
  }
`;

export const Status = styled.div`
  margin-top: 60px;
  & p {
    margin: 0 auto;
    display: flex;
    border: 2px solid #98e832;
    color: #98e832;
    text-transform: uppercase;
    font-size: 16px;
    padding: 10px 40px;
    width: fit-content;
  }
  @media (min-width: 768px) {
    & p{
    font-size: 24px;

    }
  }
`;
