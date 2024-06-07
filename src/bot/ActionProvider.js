import Link from 'next/link';
import React from 'react';


const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  
  const handleSiteCreation = () => {
    const botMessage = createChatBotMessage('Se você deseja saber mais sobre nossos serviços de criação de sites e landingPages clique no link abaixo:');

    const link = createChatBotMessage(<Link href='/servicos/sites' style={{wordBreak:"break-all"}}>{`${window.location.origin}/servicos/sites`}</Link>)

    

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage, link],
    }));
  };

  const handleChatBotAutomation = () => {
    const botMessage = createChatBotMessage('Você selecionou Automação com ChatBot.');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleAppDevelopment = () => {
    const botMessage = createChatBotMessage('Você selecionou Desenvolvimento de Aplicações.');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleCursos = () => {
    const botMessage = createChatBotMessage('Você selecionou cursos.');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleSuporte = () => {
    const botMessage = createChatBotMessage('Você selecionou suporte.');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }

  const handleEspecialista = () => {
    const botMessage = createChatBotMessage('Você selecionou Especialista.');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }

 

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions:{            
            handleSiteCreation,
            handleChatBotAutomation,
            handleAppDevelopment,
            handleCursos,
            handleSuporte,
            handleEspecialista
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;