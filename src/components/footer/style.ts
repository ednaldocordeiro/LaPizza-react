import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
  height: 5rem;
  text-align: center;
  text-transform: uppercase;
  padding: 2rem 0;
  color: #000;
  font-size: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 450px){
    p{
      font-size: 3vw;
    }
  }
`