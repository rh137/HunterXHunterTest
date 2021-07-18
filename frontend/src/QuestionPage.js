import './QuestionPage.css';
import { Button } from "antd";
import { useState } from "react";

import questions from './questions';

import MyButton from "./MyButton";

function QuestionPage() {
  const [currentQuestionID, setCurrentQuestionID] = useState("q01");
  const [doneQuestionIDs, setDoneQuestionIDs] = useState([]);
  const [allQuestionChoices, setAllQuestionChoices] = useState([]);
  const [currentQuestionChoices, setCurrentQuestionChoices] = useState([]);


  function renderQuestion(id) {
    if (id === "END") {
      return <><h1>END</h1></>
    }
    const q = questions[id];
    return q.isSingleSelection ? (
      <>
        <h1>{q.header}</h1>
        <h1>{q.question}</h1>
        {q.options.map(opt => {
          return <div>
            <MyButton qid={id}
                      text={opt.id + '. ' + opt.body}
                      className="option"
                      onClick={() => {
                        setDoneQuestionIDs([...doneQuestionIDs, currentQuestionID]);
                        setCurrentQuestionID(opt.next ? opt.next : q.next);
                        setAllQuestionChoices([...allQuestionChoices, opt.id])
                      }}/>
          </div>
        })}
      </>
    ) : (
      <>
        <h1>{q.header}</h1>
        <h1>{q.question}</h1>
        {q.options.map(opt => {
          return <div>
            <MyButton qid={id}
                      text={opt.id + '. ' + opt.body}
                      className="option"
                      useSetChosen={true}
                      onClick={() => {
                        const index = currentQuestionChoices.indexOf(opt.id);
                        let newChoices = Array.from(currentQuestionChoices);
                        if (index !== -1)
                          newChoices.splice(index, 1)
                        else
                          newChoices.push(opt.id);
                        setCurrentQuestionChoices(newChoices);
                      }}/>
          </div>
        })}
        <MyButton text="確認" className="option"
                  onClick={() => {
                    setDoneQuestionIDs([...doneQuestionIDs, currentQuestionID]);
                    setCurrentQuestionID(q.next);
                    setAllQuestionChoices([...allQuestionChoices, currentQuestionChoices])
                    setCurrentQuestionChoices([])
                  }} />
      </>
    )
  }

  return (
    <>
      <Button className="backButton" type="primary"
              onClick={() => {
                setCurrentQuestionID(doneQuestionIDs[doneQuestionIDs.length - 1]);
                setDoneQuestionIDs(doneQuestionIDs.slice(0, doneQuestionIDs.length - 1));
                setAllQuestionChoices(allQuestionChoices.slice(0, allQuestionChoices.length - 1));
                setCurrentQuestionChoices([]);
              }} disabled={currentQuestionID === 'q01'}>返回上一題</Button>
      <Button onClick={() => {console.log(allQuestionChoices); alert(doneQuestionIDs)}}>check</Button>
      <div className="questionBlock">
        {renderQuestion(currentQuestionID)}
      </div>
    </>
  )
}

export default QuestionPage;