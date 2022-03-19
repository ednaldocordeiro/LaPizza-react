import image from '../../assets/image.png'
import { Card, Information, Price } from './style';
import Button from '../button/button'

interface CardProps {
  pizza: string;
  nomePizza: string;
}

function Cards({ pizza, nomePizza }: CardProps){

  return(
    <Card>
      <div><img src={pizza} alt="" /></div>
      <Information background='var(--white)'>
        <h3>{nomePizza}</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <Price>R$ 23</Price>
      </Information>

      <Button text='Compre agora'/>
    </Card>
  )
  }

Cards.defaultProps = {
  pizza: image
}

export default Cards