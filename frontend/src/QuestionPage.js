import './QuestionPage.css';
import { Button } from "antd";
import { useState } from "react";

import questions from './questions';

import MyButton from "./MyButton";

function QuestionPage() {
  const [currentQuestionID, setCurrentQuestionID] = useState("q01");
  const [doneQuestionIDs, setDoneQuestionIDs] = useState([]);
  const [choices, setChoices] = useState([]);

  function renderQuestion(id) {
    const q = questions[id];
    return (
      <>
        <h1>{q.header}</h1>
        <h1>{q.question}</h1>
        {q.options.map(opt => {
          return <div>
            <MyButton text={opt.id + '. ' + opt.body}
                      className="option"
                      onClick={() => {
                        setDoneQuestionIDs([...doneQuestionIDs, currentQuestionID]);
                        setCurrentQuestionID(opt.next ? opt.next : q.next);
                        setChoices([...choices, opt.id])
                      }}/>
          </div>
        })}
      </>
    )
  }

  return (
    <>
      <Button className="backButton" type="primary"
              onClick={() => {
                setCurrentQuestionID(doneQuestionIDs[doneQuestionIDs.length - 1]);
                setDoneQuestionIDs(doneQuestionIDs.slice(0, doneQuestionIDs.length - 1));
                setChoices(choices.slice(0, choices.length - 1))
              }} disabled={currentQuestionID === 'q01'}>返回上一題</Button>
      <Button onClick={() => {alert(choices); alert(doneQuestionIDs)}}>check</Button>
      <div className="questionBlock">
        {renderQuestion(currentQuestionID)}
      </div>
    </>
  )
}

export default QuestionPage;