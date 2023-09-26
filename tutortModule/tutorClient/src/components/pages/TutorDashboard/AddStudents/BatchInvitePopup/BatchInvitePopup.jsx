import React,{useState} from "react";
import WhatsappIcon from "../resource/WhatsappIcon.svg";
import LinkedinIcon from "../resource/LinkedinIcon.svg";
import CloseIcon from "../resource/CloseIcon.svg";
import TelegramIcon from "../resource/TelegramIcon.svg";
import ClassroomIcon from "../resource/ClassroomIcon.svg";
import whatsapp from "./resource/whatsapp.png"
import message from "./resource/message.png"
import telegram from "./resource/telegram.png"
import line from "./line.png"
import or from "./OR.png"
import Link from "../resource/link.png"
import "./BatchInvitePopup.css";
import { Button } from "@mui/material";

export default function BatchInvitePopup({ setIsPopupActive }) {

  const [value, setValue] = useState('http://www.zoomit.com');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
  }
  return (
    <div className="PopupContainer">
      <div className="BatchInvitePopup">
        <img src={CloseIcon} className="closeButton" onClick={() => setIsPopupActive(false)} />
        <h2>Invite via Sharing Link</h2>
        <p>Share through the channel given below</p>
        <div className="copyContainer">
          <img src={Link} alt="" />
          <input className="linkInput" placeholder="http://www.zoomit.com" value={value} type="text" onChange={(e) => {
            setValue(e.target.value);
            setCopied(false);
          }} />
          {copied==false ? (
              <button className="copyButton" onClick={()=> {
                handleCopy();
                setCopied(true)
              }}>Copy</button>
          ): (
            <button className="copyButton1">Copied!</button>
          )    
          }
        </div>
        <div className="or">
        <img className="orImg" src={or} alt="" />
          <img className="lineImg" src={line} alt="broken line" />
          
        </div>
        <div className="linkContainer">
          <div className="link">
            <div className="imgContainer">
              <img src={whatsapp} />
            </div>
            <p>WhatsApp</p>
          </div>
          <div className="link">
            <div className="imgContainer">
              <img src={message} />
            </div>
            <p>Linkedin</p>
          </div>
          <div className="link">
            <div className="imgContainer">
              <img src={telegram} />
            </div>
            <p>Telegram</p>
          </div>
        </div>
      </div>
    </div>
  );
}
