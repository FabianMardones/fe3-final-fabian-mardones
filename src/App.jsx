import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/NavBar";
import { Footer } from "./components/footer/Footer";
import { Home } from "./Routes/Home";
import { Contact } from "./Routes/Contact";
import { Favs } from "./Routes/Favs";
import { Detail } from "./Routes/Detail";
import { ContextProvider } from "./utils/GlobalContextReducer";

function App() {

  return (
    <div>
      <BrowserRouter>
      <ContextProvider>
      <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/favs" element={<Favs />} />
            <Route path="/detail/:dentistId" element={<Detail />} />
          </Routes>
          <Footer />
      </ContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
