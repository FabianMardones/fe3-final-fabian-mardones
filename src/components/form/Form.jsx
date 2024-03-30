import { useGlobalReduceStates } from "../../utils/GlobalContextReducer";
import { ErrorMessage } from "../ErrorMessage";
import { SentMessage } from "../SentMessage";
import "./Form.css";

export function Form({
  handleSubmit,
  errorMessage,
  emptyInput,
  name,
  email,
  btnRef,
  setName,
  setEmail,
  sendMessage,
}) {

  const {state} = useGlobalReduceStates()

  
  return (
    <div className={`cont_form ${state.darkMode && "dark"}`}>
      <h2>Do you want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <form action="" onSubmit={handleSubmit}>
        {emptyInput && <ErrorMessage message={errorMessage} />}
        <div className={`input_group ${state.darkMode && "dark"}`}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="">Name</label>
        </div>
        <div className={`input_group ${state.darkMode && "dark"}`}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="">Email</label>
        </div>
        <button className={`form_button ${state.darkMode && "dark"}`}ref={btnRef}>
          <i></i>
          <i></i>
          <span>Send</span>
        </button>
        <SentMessage sendMessage={sendMessage}/>
      </form>
    </div>
  );
}
