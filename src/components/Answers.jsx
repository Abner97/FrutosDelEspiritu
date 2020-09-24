import React from "react";
import { Button } from "react-bootstrap";

const Answers = () => {
  return (
    <div className="d-flex flex-sm-column flex-lg-column flex-xl-row w-50 flex-wrap flex-sm-wrap justify-content-around w-50 h-auto ">
      <Button variant="primary" size="lg" className="w-25 m-1">
        Siempre
      </Button>
      <Button variant="primary" size="lg" className="w-25 m-1">
        Casi Siempre
      </Button>
      <Button variant="primary" size="lg" className="w-25 m-1 ">
        Aveces
      </Button>
      <Button variant="primary" size="lg" className="w-25 m-1 ">
        Poco
      </Button>
      <Button variant="primary" size="lg" className="w-25 m-1">
        Nunca
      </Button>
    
      
    </div>
  );
};

export default Answers;
