import { createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
  --green: #5C913B;
  --yellow: #FFA200;
  --red: #CF3031;
  --pink: #FFD4C9;

  --white: #FEF6F4;
  --gray: #616161;
  --gray-200: #2E2E2E;
}

*{
  padding: 0;
  margin: 0;
  border: 0;
  box-sizing: border-box;
  font-family: 'Sora', sans-serif;
}
html{
  font-size: 62.5%;
}
body{
  width: 100%;
}

body::-webkit-scrollbar {
  width: 10px;
  position: fixed;
}
body::-webkit-scrollbar-track {
  background: none;
}
body::-webkit-scrollbar-thumb {
  background-color: rgb(107, 107, 107);
}

main{
  color: var(--gray-200);
}
h2{
  font-size: 3.2rem;
}
h3{
  font-size: 1.8rem;
}
p{
  font-size: 1.4rem;
  color: var(--gray);
}
a{
  font-size: 1.2rem;
  text-decoration: none;
  color: var(--gray-200);
  font-weight: 600;
}

.absolute{
  position: absolute;
}
#img1{
  left: -70px;
  top: -70px;
}
#img2{
  left: 460px;
  top: -10px;
}
#img3{
  right: 270px;
  top: 90px;
}
#img4{
  right: 150px;
  top: 200px;
  z-index: -1;
}
#img5{
  left: 70px;
  top: 700px;
  z-index: 1;
}
#img6{
  right: 0px;
  bottom: -230px;
  z-index: 1;
}
#img7{
  // left: 8px;
  top: 150px;
  z-index: 1;
}
#img8{
  right: 50px;
  z-index: 0;
}

@media (max-width: 1320px){
  #img2{
    left: initial;
    right: 800px;
  }
}
@media (max-width: 1210px){
  #img8{
    right: -25px;
    bottom: -170px;
  }
}
@media (max-width: 1100px){
  #img8{
    bottom: -105px;
  }
}
@media (max-width: 1000px){
  .card {
    width: 100%;
  }
}
@media (max-width: 600px){
  .absolute{
    max-width: 45vw;
  }
  #img5{
    top: initial;
  }
}
@media (max-width: 550px){
  #img8{
    display: none;
  }
}
@media (max-width: 450px){
  #img6{
    bottom: 400px;
  }
}

`