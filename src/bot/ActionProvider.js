import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  
  const handleSiteCreation = () => {
    window.open(`https://api.whatsapp.com/send?phone=${'5593984394640'}&text=${encodeURIComponent('criação de páginas')}`, '_blank');    
  };


  const handleChatBotAutomation = () => {
    window.open(`https://api.whatsapp.com/send?phone=${'5593984394640'}&text=${encodeURIComponent('Automação com chatbot')}`, '_blank'); 
  };

  const handleAppDevelopment = () => {
    window.open(`https://api.whatsapp.com/send?phone=${'5593984394640'}&text=${encodeURIComponent('Desenvolvimento de Aplicações')}`, '_blank'); 
  };

 


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
            handleEspecialista                      
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;