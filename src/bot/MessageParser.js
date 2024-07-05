import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("site") || message.includes("1")) {
      actions.handleSiteCreation();      
    }
     else if (lowerCaseMessage.includes("chatbot") || message.includes("2")) {
      actions.handleChatBotAutomation();
    }
     else if (lowerCaseMessage.includes("aplicação") || message.includes("3")) {
      actions.handleAppDevelopment();
    }
    else if (lowerCaseMessage.includes("especialista") || message.includes("4")) {
      actions.handleEspecialista();
    }
    
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;