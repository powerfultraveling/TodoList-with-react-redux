import React from 'react';
import Head from './components/Head';
import TodosSec from './components/TodosSec';
import Filters from './components/Filters';
import style from "./css/style.css"
function App() {
  return (
    <div className="App">
      <Head></Head>
      <Filters></Filters>
      <TodosSec></TodosSec>
    </div>
  );
}

export default App;
