import "./index.css";
import facebook from "./facebook.png"
import instagram from "./instagram.png"
import linkedin from "./linkedin.png"


const Social = () => {
  return (
    
     <div className="social">
        <a href="https://www.facebook.com/roberta.rizzuto.37/">
          <img src={facebook} className="icon" alt="facebook icon" />
        </a>
        <a href="https://www.instagram.com/ber.zia/">
          <img src={instagram} className="icon" alt="instagram icon" />
        </a>
        <a href="https://www.linkedin.com/in/roberta-rizzuto-2910a4222/">
          <img src={linkedin} className="icon"  alt="linkedin icon" />
        </a>
      </div>

      
  );
};

export default Social;