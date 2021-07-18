import { useState, useEffect } from 'react';
import './MyButton.css';

function MyButton ({ qid, text, onClick, className, useSetChosen }) {
  const [chosen, setChosen] = useState(false);

  useEffect(() => {
    setChosen(false);
  }, [qid])

  return (
    <button className={className + " " + (chosen ? 'chosen' : 'not-chosen')}
            onClick={() => {
              if (useSetChosen) setChosen(!chosen)
              onClick()
            }}>{text}</button>
  )
}

export default MyButton;