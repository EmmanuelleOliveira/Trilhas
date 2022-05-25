import React from 'react';
import {GlobalStyle} from './style/global'
import Main from './components/Main/Main';

function App() {
  return (
    <>
    <GlobalStyle />
    <header>
      <h1>Gerenciador de Tarefas - Kanban</h1>
    </header>
    <Main />
    </>
  );
}

export default App;
