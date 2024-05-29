import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  
  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleSiteCreation = () => {
    const botMessage = createChatBotMessage('Você selecionou Criação de Sites e Landing Pages.');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
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
    const botMessage = createChatBotMessage('Você selecionou Desenvolvimento de Aplicações.');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

 

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions:{
            handleHello,
            handleSiteCreation,
            handleChatBotAutomation,
            handleAppDevelopment,
            handleCursos
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;