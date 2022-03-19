import lacuma from './assets/Lacuma.svg'
import lamenta from './assets/Lamenta.svg';
import labana from './assets/Labana.svg';
import latoca from './assets/Latoca.svg';
import restaurant from "./assets/restaurant.png";

import AbsoluteImages from "./components/absoluteImages/absoluteImages";
import Cards from './components/cards/card';

import img1 from './assets/absoluteItems/1.svg';
import img2 from './assets/absoluteItems/2.svg';
import img3 from './assets/absoluteItems/3.svg';
import img4 from './assets/absoluteItems/4.svg';
import img5 from './assets/absoluteItems/5.svg';
import img6 from './assets/absoluteItems/6.svg';
import img7 from './assets/absoluteItems/7.svg';
import img8 from './assets/absoluteItems/8.png';

import Baseboard from './components/footer/baseboard';
import { useState } from 'react';
import {Head} from './components/header/header';
import Button from './components/button/button';
import Logo from './components/logo/logo';
import { About, BestSellers } from './styles/style';

function App() {

  const [nome, setNome] = useState()

  return (
    <>
    <Head />
    <main>
      <BestSellers>

      <AbsoluteImages img={img1} id="img1"/>
      <AbsoluteImages img={img2} id="img2"/>
      <AbsoluteImages img={img3} id="img3"/>
      <AbsoluteImages img={img4} id="img4"/>

        <h2>Mais vendidas</h2>

        <div>
          <Cards pizza={lacuma} nomePizza="La Cuma"/>
          <Cards pizza={lamenta} nomePizza="La Menta"/>
          <Cards pizza={labana} nomePizza="La Bana"/>
          <Cards pizza={latoca} nomePizza="La Toca"/>
          <Cards nomePizza="La Cola"/>
        </div>

        <AbsoluteImages img={img5} id="img5"/>
        <AbsoluteImages img={img6} id="img6"/>
    </BestSellers>

    <About>
      <div>
        <AbsoluteImages img={img7} id="img7"/>
        <img src={restaurant} alt="" id="restaurant"/>
      </div>

      <div>
        <Logo fontSize='3.2rem' queryFontSize='3.2rem'/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis justo sem. Donec consequat, nunc a dapibus dapibus, justo dolor tristique tortor, sit amet tincidunt lorem nisl at ex. Cras dolor purus, varius in euismod pretium, finibus nec mi. Curabitur aliquam pharetra lectus in pharetra. Nullam viverra elementum neque quis fermentum. </p>
        <Button text='Saiba mais'/>
        <AbsoluteImages img={img8} id="img8"/>
      </div>
    </About>

    </main>

    <Baseboard />

    </>
  )
}

export default App
