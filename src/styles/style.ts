import styled from "styled-components";

export const BestSellers = styled.section`
  text-align: center;
  padding: 5rem 16rem;
  position: relative;
  gap: 2rem;

  div{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  @media (max-width: 1320px){
    div {
      justify-content: center;
    }
  }
  @media (max-width: 600px){
    padding: 10vw;
  }
`

export const About = styled.section`
  position: relative;
  padding: 10rem 16rem;
  display: flex;
  align-items: center;
  background: #fffee8;
  position: relative;
  clip-path: polygon(0 6%, 100% 0, 100% 100%, 0% 100%);


  div:nth-child(1){
    position: relative;

    #img7{
      left: -100px;
      top: 150px;
      z-index: 1;
    }

    img:nth-child(2){
      width: 100%;
      height: 45rem;
      object-fit: cover;
    }
  }

  div:nth-child(2){
    width: 46rem;
    margin: 0 0 0 7rem;
    position: relative;

    p{
      margin: 2.5rem 0;
      line-height: 26px;
    }
  }

  @media (min-width: 1400px){
    justify-content: center;
  }

  @media (max-width: 1100px){
    flex-direction: column;
    padding: 20rem 10vw;

    img:nth-child(2){
      width: 100%;
      height: 45rem;
      object-fit: cover;
    }

    div:nth-child(1), div:nth-child(2){
      width: 100%;
      margin: 0;
    }
  }
`