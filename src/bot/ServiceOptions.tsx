import React from 'react';


interface ServiceOptsProps{
  actions:any;
}

const ServiceOptions = ({ actions }:ServiceOptsProps) => {
  const options = [
    {
      text: "1 - Criação de Sites",
      handler: actions.handleSiteCreation,
      id: 1,
    },
    {
      text: "2 - Automação com ChatBot",
      handler: actions.handleChatBotAutomation,
      id: 2,
    },
    {
      text: "3 - Sistemas e Aplicações",
      handler: actions.handleAppDevelopment,
      id: 3,
    },
    {
      text: "4 - Cursos",
      handler: actions.handleCursos,
      id: 4,
    },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default ServiceOptions;