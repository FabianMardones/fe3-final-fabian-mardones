import { useEffect, useState } from "react";

export function SentMessage({ sendMessage }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sendMessage) {
      setVisible(true);
      const timer = setInterval(() => {
        setVisible(false);
      }, 3000);
  
      return () => {
        clearInterval(timer);
      };
    }
  }, [sendMessage]);
  

  return (
    <div className="message_card">{visible && <h2>{sendMessage}</h2>}</div>
  );
}
