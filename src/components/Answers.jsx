
import React, { useState, useEffect } from 'react';
import { Button, Col } from "react-bootstrap";
import { Provider } from "../providers/Provider";



const answerProvider = new Provider();


const Answers = () => {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    answerProvider.getAnswers().then((snapshot)=>{
      setAnswers(snapshot);
    },[]);
    
  });
  
  return (
    <>
      {answers.map((e, i) => {
        return (
          <Col key={i} xl={{ span: "6" }}>
            <Button variant="primary" size="lg" className="w-100 m-1 hoverable" onClick={()=>getAnswer(e)}>
              {e.answer}
            </Button>
          </Col>
        );
      })}
    </>
  );
};

const getAnswer = (answ)=>{
    console.log(answ);
}
export default Answers;
