import styled from "styled-components";

export const Head = styled.header`
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:20px;
  position:fixed;
  top:0;
  left:0;
  right:0;
  background-color:black;
  z-index:10;
`;
export const Logo = styled.a`
  height:50px;
  width:280px;
  cursor:pointer;
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
  & a {
    color: white;
    text-decoration: none;
    margin-right: 30px;
    position:relative;
    padding-bottom:6px;
    padding-right:5px;
    &:after {
      content: "";
      border-bottom: 2px solid white;
      width:0;
      transition: .6s ease-out;
      position:absolute;
      bottom: 0;
      left:0;
    }
    &:hover {
      &:after {
        content: "";
        transition: .6s ease-in;
        width:100%
      }
    }
  }
`;