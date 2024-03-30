import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/NavBar";
import { Footer } from "./components/footer/Footer";
import { Home } from "./views/Home";
import { Contact } from "./views/Contact";
import { Favs } from "./views/Favs";
import { Detail } from "./views/Detail";
import { ContextProviderReduce } from "./utils/GlobalContextReducer";

function App() {

  return (
    <div>
      <BrowserRouter>
      <ContextProviderReduce>
      <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/favs" element={<Favs />} />
            <Route path="/detail/:dentistId" element={<Detail />} />
          </Routes>
          <Footer />
      </ContextProviderReduce>
      </BrowserRouter>
    </div>
  );
}

export default App;
