import React from 'react';
import whatsapp from '../Assets/whatsapp.png'

const whatsappNumber = '08045729031'; // Project's phone number
const defaultMessage = encodeURIComponent('Hello, I am interested in your elevator solutions!');
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

export const WhatsAppFloatingButton: React.FC = () => (
  <a
    href={whatsappLink}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed right-6 bottom-6 z-50 bg-white-500 hover:bg-green-600 rounded-full shadow-lg p-3 flex items-center justify-center transition-colors duration-200"
    style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.2)' }}
    aria-label="Chat on WhatsApp"
  >
    {/* Official WhatsApp SVG Logo */}
    <img src={whatsapp} width='40px'alt="" />
    {/* <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="whatsapp.png"> */}
      {/* <circle cx="16" cy="16" r="16" fill="#25D366" /> */}
      {/* <path d="M23.472 19.339c-.355-.177-2.104-1.037-2.429-1.156-.325-.119-.562-.177-.799.178-.237.355-.914 1.156-1.122 1.393-.207.237-.414.266-.769.089-.355-.178-1.5-.553-2.857-1.763-1.056-.943-1.77-2.104-1.978-2.459-.207-.355-.022-.546.155-.723.159-.158.355-.414.532-.62.178-.207.237-.355.355-.592.119-.237.06-.444-.03-.622-.089-.178-.799-1.924-1.093-2.637-.288-.692-.581-.597-.799-.608-.207-.009-.444-.011-.681-.011-.237 0-.62.089-.946.444-.325.355-1.24 1.211-1.24 2.951 0 1.74 1.267 3.422 1.444 3.659.178.237 2.5 3.822 6.055 5.211.847.292 1.507.466 2.023.596.85.203 1.624.174 2.236.106.682-.075 2.104-.861 2.402-1.693.296-.832.296-1.545.207-1.693-.089-.148-.325-.237-.68-.414z" fill="white"/> */}
    {/* </svg> */}
  </a>
); 