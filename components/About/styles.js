import styled from "styled-components";

export const Section = styled.section`
  position:relative;
  margin-top: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 700px;
  /* height: 100vh; */
  padding:80px 20px;
  width: 100%;
  background-image: url("./images/Dragon.jpg");
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
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
`;
export const Container = styled.div`
  width: 80%;
  background-color: rgba(0, 0, 0, 0.8);
  position:relative;
  z-index:5;
  padding:40px;
  border-radius:25px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  flex-wrap:wrap
`;
export const Article = styled.article`
  margin: 50px 0;
  width: 100%;
  @media (min-width: 824px) {
    width: 45%;
  }
`;
export const Title = styled.h2`
  margin: 0;
  font-size: 35px;
  text-transform: uppercase;
  @media (min-width: 939px) {
  font-size: 40px;
  }
  @media (min-width: 1121px) {
  font-size: 48px;
  }
`;
export const Text = styled.p`
 margin:0;
 font-size:18px;
 max-width:700px;
 padding-top:30px;
`;
export const Grid = styled.div`
max-width:500px;
 display:flex;
 justify-content:space-between;
`;
export const Item = styled.div`
padding-top:20px;
 & h3{
   font-size:18px;
   font-weight:400;
   text-transform:uppercase;
 }
 & ul{
   list-style:none;
   padding:0;

 }
`;
