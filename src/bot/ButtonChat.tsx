import React from 'react'

interface ButtonChatProps{
  handleClick:(e:React.MouseEvent<HTMLDivElement>) => void;

}

const ButtonChat = ({handleClick}:ButtonChatProps) => {

  return (
    <div className="floating-whatsapp-button" onClick={handleClick}>
      <i className="pi pi-whatsapp" style={{ fontSize: '2rem', color:"#f2f2f2"}}></i>
    </div>
  )
}

export default ButtonChat