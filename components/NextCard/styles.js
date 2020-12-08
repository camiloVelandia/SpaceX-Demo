import styled from "styled-components";

export const Section = styled.article`
  width: 100%;
  margin-bottom: 40px;
  border: 1px solid white;
  text-align: center;
  @media (min-width: 768px) {
  width: 48%;
    }
`;
export const Title = styled.h2`
  background-color: white;
  color: black;
  padding: 30px 0;
  font-size: 36px;
  text-transform: uppercase;
  font-weight: 600;
  margin: 0;
`;
export const Figure = styled.figure`
  max-width: 228px;
  max-height: 218px;
  height: 100%;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;
  & img {
    height: 100%;
    object-fit: cover;
  }
`;
export const Name = styled.h3`
  font-size: 24px;
  margin-top: 30px;
  margin-bottom: 30px;
  text-transform: uppercase;
  padding: 0 20px;
  margin:  0;
  margin-top:40px;
`;
export const Text = styled.p`
  padding: 20px 20px;
  text-align: justify;
  padding-bottom: 30px;
  margin: 0;
`;
export const Info = styled.div`
  padding: 0 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-around;
`;
export const Bullet = styled.div`
  & p {
    margin: 0;
    text-align: center;
    text-transform:uppercase;
  }
`;
