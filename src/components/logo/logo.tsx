import { Title, Color } from "../header/style";

interface propsFontSize{
  fontSize: string,
  queryFontSize: string;
}
export default function Logo({fontSize, queryFontSize}:propsFontSize){

  return(
    <>
      <Title fontSize={fontSize} queryFontSize={queryFontSize}>La P
          <Color color="var(--yellow)">i</Color>
          <Color color="var(--red)">z</Color>
          <Color color="var(--green)">z</Color>
          a
      </Title>
    </>
  )

}