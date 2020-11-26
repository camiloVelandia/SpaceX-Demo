import styled from "styled-components";

export const Section = styled.section`
width:80%;
margin:0 auto;
margin-top:60px;
margin-bottom:40px;
border:1px solid white;
`;
export const Title = styled.div`
background-color:white;
text-align  :center;
padding:15px;
& h2{
  color: #000;
  text-transform:uppercase;
  font-size:36px;
  margin:0;
}
`;
export const Main = styled.div`
display:flex;
padding:30px;
`;
export const Image = styled.div`
width:25%;
& figure{
  width:200px;
  height:200px;
}
& img{
  height:100%;
  object-fit:contain;
}
`;
export const Info = styled.div`
  width: 50%;
  border-right:1px solid white;
  display:flex;
  flex-direction:column;
  justify-content:center;
  & h3 {
    font-size: 24px;
    text-transform: uppercase;
    margin: 0;
    padding-bottom: 20px;
  }
  & p {
    font-size: 14px;
    margin: 0;
    padding-right:60px;
  }
`;
export const Bullets = styled.div`
width:25%;
display:flex;
  flex-direction:column;
  justify-content:center;
  & p{
    font-size:14px;
    margin:0;
    padding-left:40px;
    padding-bottom:10px;
    text-transform:capitalize;
  }
`;
