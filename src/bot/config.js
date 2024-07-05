import { createChatBotMessage } from 'react-chatbot-kit';
import ServiceOptions from './ServiceOptions';
import LinksOptions from './LinksOptions';


  //toggleBot:React.Dispatch<React.SetStateAction<boolean>>;


const config = (toggleBot) => ({
  initialMessages: [
    createChatBotMessage(`Olá! Como posso ajudar voçê hoje?`,{
      widget: "serviceOptions",
    }), 
    
  ],
  
  customComponents: {
    // Replaces the default header
   
   botAvatar: () => (
      <div style={{
        background:"#0d0d0d", 
        width:"35px", 
        height:"35px",
        borderRadius: "50%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        }}>
        <i className="fa-solid fa-robot" style={{color:"#f2f2f2"}}></i>
      </div>
    ),
    
 },
 widgets: [
    {
      widgetName: "serviceOptions",
      widgetFunc: (props) => <ServiceOptions {...props} />,
    },
    // {
    //   widgetName:"sitesLink",
    //   widgetFunc: (props) => <LinksOptions toggleBot={toggleBot} {...props}  />,
    //   props:{
    //     href:"/servicos/sites",
    //     text:"Acesse a nossa página para serviço de sites"
    //   }              
    // }    
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',      
    },    
  },
});

export default config;