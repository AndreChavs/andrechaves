import React from 'react';
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from './config.js';
import MessageParser from './MessageParser.js';
import ActionProvider from './ActionProvider.js';
import ButtonChat from './ButtonChat';
import { useRouter } from 'next/router.js';

const ReactChatBot = () => {
  const [showBot, toggleBot] = React.useState(false);
  const router = useRouter()  

  const saveMessages = (messages) => {
    localStorage.setItem('chat_messages', JSON.stringify(messages));
  };

  const loadMessages = () => {
    const messages = JSON.parse(localStorage.getItem('chat_messages'));
    return messages;
  };

  async function handleClick() {
    toggleBot((prev) => !prev)
  }

  const handleScroll = () => {     
    if ((window.innerHeight + window.scrollY + 1) >= document.body.scrollHeight) { 
      console.log("Você chegou ao final da página!");
       if(router.route === "/"){
         toggleBot(true)
       }    
    }
  };
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);  
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='react-chatbot'>
      {
        showBot && <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
          messageHistory={loadMessages()}
          saveMessages={saveMessages}
          headerText='Chatbot Assistente'
          placeholderText='Digite sua mensagem'
        />
      }      
      <ButtonChat handleClick={handleClick}/>
    </div>
  );
};

export default ReactChatBot