import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height:700px;
  height:100vh;
  width:100%;
  background-image:url('./images/Dragon.jpg');
  background-position:top;
  background-size:cover;
  background-repeat:no-repeat;
  &::after{
    content:'';
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom: 0;
    background-color:rgba(0,0,0,.7);
    z-index:0;
  }
`;

export const Counter = styled.div`
  position:relative;
  display: flex;
  flex-direction:column;
  border-radius: 25px;
  background-color: rgba(0, 0, 0, 0.8);
  z-index:1;
  padding:60px 80px;
  & h1{
    font-size:48px;
    text-transform:uppercase;
    text-align:center;
    margin:0;
  }
`;

export const Info = styled.div`
  
  justify-content: space-between;
  padding-top: 40px;
  text-align:center;
  & p{
    margin:0;
    padding-bottom:10px;
    text-transform:capitalize;
  }
  & span{
    text-transform:uppercase;
    color: #00ab66;
  }
`;
export const NumberContainer = styled.div`
  display: flex;
  justify-content:space-between;
  padding-top:40px;
`;

export const Number = styled.div`
  position:relative;
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  z-index:1;
  & p{
    margin:0;
    font-size:80px;
    padding-left:40px;
    padding-right:40px;
  }
  & small{
    margin:0;
    font-size:24px;
    text-transform:uppercase;

  }
`;
