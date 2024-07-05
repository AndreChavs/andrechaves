import React from 'react'
import Link from 'next/link';

interface LinksOptsProps{  
  href:string;
  text:string;
  toggleBot: React.Dispatch<React.SetStateAction<boolean>>;  
}

const LinksOptions = ({href ,text, toggleBot}:LinksOptsProps) => {
  return (
    <button className="option-button" onClick={() => toggleBot(false)}>      
      <Link href={href} style={{ wordBreak: "break-all" }} legacyBehavior>{text}</Link>
    </button>
    
  )
}

export default LinksOptions