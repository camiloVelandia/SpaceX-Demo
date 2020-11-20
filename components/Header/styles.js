import styled from "styled-components";

export const Head = styled.header`
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:20px;
`;
export const Logo = styled.a`
  height:50px;
  width:280px;
  & img{
      height:100%;
    width:100%;
    object-fit:contain
  }
`;
export const List = styled.ul`
  display:flex;
  padding:0;
  margin:0;
  list-style:none;
  
`;
export const Item = styled.li`
 & a{
   color:white;
   text-decoration:none;
   padding-right:30px;
 }
`;