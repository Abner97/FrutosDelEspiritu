import React from "react";
import { Button, Col } from "react-bootstrap";

const answers = ["Siempre", "Casi Siempre", "A veces", "Poco", "Nunca"];
const Answers = () => {
  return (
    <>
      {answers.map((e, i) => {
        return (
          <Col key={i} xl={{ span: "6" }}>
            <Button variant="primary" size="lg" className="w-100 m-1 hoverable" onClick={()=>getAnswer(e)}>
              {e}
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
