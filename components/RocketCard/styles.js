import styled from "styled-components";

export const Container = styled.section`
  
  width: 100%;
  margin-bottom:40px;
  border:1px solid white;
  border-radius:25px;
    padding:30px 20px;
  @media (min-width: 768px) {
    width:42%;
    padding:40px 30px;
  }
`;

export const Main = styled.div`
 display:flex;
margin-bottom: 30px;
`;

export const Info = styled.div`
  border:1px solid white;
  padding:40px 15px;
`;

export const Image = styled.div`
  display:flex;
  align-items:flex-end;
  & figure{
    height:750px;
  }
  & img{
    height:100%;
    object-fit:contain;
  }
`;

export const Text = styled.p`
  font-size:14px;
`;

export const Ul = styled.ul`
  text-align:left;
  margin:0;
  list-style-position:inside;
  padding:0;
  margin-top: 30px;;
  & h2{
    text-transform:capitalize;
    font-size:24px;
    margin:0;
    padding-bottom:10px;
  }
  & li{
    text-transform:capitalize;
    font-size:14px;
  }
`;

export const Status = styled.div`
  & p {
  margin: 0 auto;
    display:flex;
    border: 2px solid #98e832;
    color: #98e832;
    text-transform:uppercase;
    font-size:24px;
    padding:10px 40px;
    width:fit-content;
  }
`;
