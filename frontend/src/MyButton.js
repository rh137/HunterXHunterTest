import { useState } from 'react';
import './MyButton.css';

function MyButton ({ text, onClick, className }) {
  const [chosen, setChosen] = useState(false);

  return (
    <button className={className + " " + (chosen ? 'chosen' : 'not-chosen')}
            onClick={() => {
              //setChosen(!chosen)
              onClick()
            }}>{text}</button>
  )
}

export default MyButton;