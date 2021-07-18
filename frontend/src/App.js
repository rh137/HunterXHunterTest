import React, { useState } from 'react';
import { Button } from 'antd';
import './App.css';

import QuestionPage from "./QuestionPage";

function App() {
  const [started, setStarted] = useState(false);

  return (
    started ?
      <QuestionPage /> :
    <div className="App">
      <h1>獵人官方念能力測驗</h1>
      <Button type="primary" onClick={() => setStarted(true)}>開始</Button>
    </div>
  )
}

export default App;
