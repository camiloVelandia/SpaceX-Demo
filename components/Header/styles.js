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
  height: 50px;
  width: 220px;
  cursor: pointer;
  & img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
  @media (min-width: 768px) {
  width: 270px;
    
  }
`;
export const List = styled.ul`
  display: none;
  padding: 0;
  margin: 0;
  list-style: none;
  @media (min-width: 768px) {
  display: flex;
    
  }
`;
export const MenuContainer = styled.ul`
  display: block;
  
  @media (min-width: 768px) {
    display: none;
  }
`;
export const Item = styled.li`
  & a {
    color: white;
    text-decoration: none;
    margin-right: 12px;
    position: relative;
    padding-bottom: 6px;
    padding-right: 5px;
    font-size: 12px;
    @media (min-width: 890px) {
      font-size: 16px;
      margin-right: 30px;
    }
    &:after {
      content: "";
      border-bottom: 2px solid white;
      width: 0;
      transition: 0.6s ease-out;
      position: absolute;
      bottom: 0;
      left: 0;
    }
    &:hover {
      &:after {
        content: "";
        transition: 0.6s ease-in;
        width: 100%;
      }
    }
  }

  & input {
    background-color: transparent;
    border: 1px solid white;
    border-radius: 22px;
    color: white;
    max-width: 70px;
    padding: 2px 8px;
    font-size: 12px;
    margin-right:0;
    @media (min-width: 890px) {
    max-width: 90px;
      font-size: 14px;
      margin-right: 30px;
    }
    &::placeholder {
      color: white;
    }
  }
`;