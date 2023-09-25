import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cadastrar from './components/Login/Cadastro';
import Login from './components/Login/Login';
import Hoje from './Pages/Hoje/Hoje';
import Habitos from "./Pages/Habitos/Habitos"
import Historico from "./Pages/Historico/Historico"
import Fixos from './components/TopFooter/Fixos';
import Context from './contexts/Context';
import { useState } from 'react';
import Dados from './contexts/Dados';

function App() {
  const [userDados, setUserDados] = useState()

  return (
    <BrowserRouter>
      <Dados.Provider value={{ userDados, setUserDados }}>
        <Context.Provider value={<Fixos />}>
          <Routes>
            <Route path="/" element={<Login setUserDados={setUserDados} />} />
            <Route path="/cadastro" element={<Cadastrar />} />
            <Route path="/hoje" element={<Hoje />} />
            <Route path="/habitos" element={<Habitos userDados={userDados} />} />
            <Route path="/historico" element={<Historico />} />
          </Routes>
        </Context.Provider>
      </Dados.Provider>
    </BrowserRouter>
  )

}

export default App;
