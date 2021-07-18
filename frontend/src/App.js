import React, { useState } from 'react';
import { Button } from 'antd';
import './App.css';

import QuestionPage from "./QuestionPage";

function App() {
  const [started, setStarted] = useState(false);

  return (
    started ?
      <QuestionPage restart={() => setStarted(false)}/> :
    <>
      <div className="App">
        <h1>獵人官方念能力測驗</h1>
        <Button type="primary" onClick={() => setStarted(true)}>開始</Button>
      </div>
      <div className="info">
        <div><a href="https://www.dcard.tw/f/acg/p/226113580" target="_blank" rel="noopener noreferrer">Reference</a></div>
        <div><a href="https://github.com/rh137" target="_blank" rel="noopener noreferrer">Program Author</a></div>
        <div><a href="https://github.com/rh137/HunterXHunterTest" target="_blank" rel="noopener noreferrer">GitHub Repo</a></div>
      </div>
    </>
  )
}

export default App;
