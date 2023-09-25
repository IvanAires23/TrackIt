import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cadastrar from './components/Login/Cadastro';
import Login from './components/Login/Login';
import Hoje from './components/Pages/Hoje';
import Habitos from "./components/Pages/Habitos/Habitos"
import Historico from "./components/Pages/Historico"
import Fixos from './components/TopFooter/Fixos';

import Context from './contexts/Context';
import { useState } from 'react';

function App() {
  const [userDados, setUserDados] = useState("")

  return (
    <BrowserRouter>
      <Context.Provider value={<Fixos userDados={userDados} />}>
        <Routes>
          <Route path="/" element={<Login setUserDados={setUserDados} />} />
          <Route path="/cadastro" element={<Cadastrar />} />
          <Route path="/hoje" element={<Hoje />} />
          <Route path="/habitos" element={<Habitos userDados={userDados} />} />
          <Route path="/historico" element={<Historico />} />
        </Routes>
      </Context.Provider>
    </BrowserRouter>
  )

}

export default App;