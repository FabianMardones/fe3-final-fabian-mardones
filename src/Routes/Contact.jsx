import { Form } from "../components/form/Form";
import { useState, useEffect, useRef } from "react";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [emptyInput, setEmptyInput] = useState(false);
  const [sendMessage, setSendMessage] = useState("")
  const btnRef = useRef(null);
  

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = btnRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      btnRef.current.style.setProperty("--x", `${x}deg`);
    };

    const btn = btnRef.current;
    btn.addEventListener("mousemove", handleMouseMove);

    return () => {
      btn.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(String(email).toLowerCase());
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(name, email);

    if (name.length === 0 && email.length === 0) {
      setEmptyInput(true);
      setErrorMessage("You must to field both inputs");
      console.log("Falta rellenar un input");
      return;
    }

    if (name.length === 0) {
      setEmptyInput(true);
      setErrorMessage("you must field the name input");
      console.log("Falta rellenar un input");
      return;
    }

    if (!validateEmail(email)) {
      setEmptyInput(true);
      setErrorMessage("Please enter a valid email");
      return;
    }

    setEmptyInput(false);

    setData({
      name,
      email,
    });

    console.log(data);

    setSendMessage(`Thank you, ${name}, we will contact you through email as soon as possible. ${new Date().toDateString()}`);


    setName("");
    setEmail("");

    console.log("Enviando formulario");
  }
  return (
    <div className={`contact`}>
      <Form
        name={name}
        email={email}
        data={data}
        errorMessage={errorMessage}
        emptyInput={emptyInput}
        btnRef={btnRef}
        handleSubmit={handleSubmit}
        setName={setName}
        setEmail={setEmail}
        sendMessage={sendMessage}
      />
    </div>
  );
}
