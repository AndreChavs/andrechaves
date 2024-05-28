import React from 'react'
import Image, { StaticImageData } from 'next/image';

interface CardProps{
  titulo: string;
  subTitulo:string;
  descricao:string;
  img:StaticImageData;
}

const CardEffect = ({titulo, descricao, subTitulo, img}:CardProps) => {
  return (
    <div className="card">
      <Image src={img.src} width={img.width} height={img.height} alt={titulo} />
      <div className="card-content">
        <h2 className="card-title">{titulo}</h2>
        <p className='sub-title'>{subTitulo}</p>
        <p className="card-body">
          {descricao}
        </p>
        <a href="#" className="button">
          Learn More
        </a>
      </div>
  </div>
  )
}

export default CardEffect