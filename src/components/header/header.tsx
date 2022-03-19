import Logo from "../logo/logo";
import { Header } from "./style";


export function Head(){

  return(
    <>
      <Header color="var(--white)">
        <Logo fontSize="19.2rem" queryFontSize='20vw'/>
      </Header>
    </>
  )
}