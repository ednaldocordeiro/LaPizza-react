

interface AbsoluteImages {
  img: string;
  id: string;
}

export default function AbsoluteImages({img, id}:AbsoluteImages){
  return (
    <img src={img} alt="" className="absolute" id={id}/>
  )
}