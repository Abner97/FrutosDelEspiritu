import React from "react";
import { Card } from "react-bootstrap";
import Answers from "./Answers";

const QuestionCard = ({ question, options }) => {
  return (
    <>
     <Card className="w-50 mb-3" >
        <Card.Body><h2>Cuando se comete una injusticia en mi contra, y que no puedo solucionar, pongo el asunto en las manos de Dios sin hacer el mal.</h2></Card.Body>
      </Card>
      <Answers></Answers>
    </>
     
    
  );
};

export default QuestionCard;
