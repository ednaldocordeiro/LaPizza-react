import styled from 'styled-components';
import background from "../../assets/background.svg"

interface propColor {
  color?: string
}

export const Header = styled.header.attrs((props: propColor) => ({
  color: props.color
}))<propColor>`
  width: 100%;
  padding: 15rem 0;
  color: ${props => props.color};
  text-align: center;
  background: url(${background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`
interface propFontSize{
  fontSize: string,
  queryFontSize: string;
}
export const Title = styled.h1.attrs((props: propFontSize) => ({
  fontSize: props.fontSize,
  queryFontSize: props.queryFontSize
}))`

  font-size: ${props => props.fontSize};

  @media (max-width: 850px){
    font-size: ${props => props.queryFontSize};
  }
}
`

export const Color = styled.span.attrs((props: propColor) => ({
  color: props.color
}))<propColor>`
  color: ${props => props.color};
`