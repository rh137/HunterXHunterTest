import './QuestionPage.css';
import { Button } from "antd";
import { useState } from "react";

import questions from './questions';
import scoringStandards from './scoringStandards';

import MyButton from "./MyButton";

function QuestionPage({ restart }) {
  const [currentQuestionID, setCurrentQuestionID] = useState("q01");
  const [doneQuestionIDs, setDoneQuestionIDs] = useState([]);
  const [allQuestionChoices, setAllQuestionChoices] = useState([]);
  const [currentQuestionChoices, setCurrentQuestionChoices] = useState([]);


  function renderQuestion(id) {
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
        <h4>（多選題，選擇至少一個答案後按確認）</h4>
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
        <MyButton text="確認" className="option checkButton" disabled={currentQuestionChoices.length === 0}
                  onClick={() => {
                    setDoneQuestionIDs([...doneQuestionIDs, currentQuestionID]);
                    setCurrentQuestionID(q.next);
                    setAllQuestionChoices([...allQuestionChoices, currentQuestionChoices.join('')])
                    setCurrentQuestionChoices([])
                  }} />
      </>
    )
  }

  function result() {
    let point = {
      "ENH": 0,
      "EMI": 0,
      "MAN": 0,
      "TRA": 0,
      "CON": 0,
      "SPE": 0,
    }
    for (let i = 0; i < 20; i++){
      for (let choice of allQuestionChoices[i]) {
        scoringStandards[i][choice](point);
      }
    }
    return (
      <>
        <h1>強化系：{point.ENH}</h1>
        <h1>放出系：{point.EMI}</h1>
        <h1>操作系：{point.MAN}</h1>
        <h1>變化系：{point.TRA}</h1>
        <h1>具現化系：{point.CON}</h1>
        <h1>特質系：{point.SPE}</h1>
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
              }} disabled={currentQuestionID === 'q01' || currentQuestionID === 'END'}>返回上一題</Button>
      <Button className="backButton" type="primary"
              onClick={() => {
                setCurrentQuestionID('q01');
                setDoneQuestionIDs([]);
                setAllQuestionChoices([]);
                setCurrentQuestionChoices([]);
                restart();
              }} >重玩</Button>
      <div className="questionBlock">
        {currentQuestionID === "END" ? result() : renderQuestion(currentQuestionID)}
      </div>
    </>
  )
}

export default QuestionPage;