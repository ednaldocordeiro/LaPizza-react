import styled from "styled-components"

interface propBackground {
  background?: string
}

export const Card = styled.div`
  width: 25rem;
  margin: 3rem;

  div:nth-child(1){
    position: relative;
    top: 6rem;
  }

  img{
    margin: 0 auto;
  }

  @media (max-width: 1320px){
    margin: 5rem;
  }

  @media (max-width: 1000px){
    width: 100%;
  }
`

export const Information = styled.div.attrs((props:propBackground) => ({
  background: props.background
}))<propBackground>`
  width: 100%;
  height: auto;
  border-radius: 3rem;
  padding: 8rem 0 4rem;
  background: ${props => props.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Price = styled.span`
  font-size: 3.2rem;
`
