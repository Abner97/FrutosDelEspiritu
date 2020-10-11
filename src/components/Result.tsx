import React from "react";
import { results } from "../helper/results";

const Result: React.FC<results> = ({ fruto, result }: results) => {
  return (
    <>
      <h2>{fruto}</h2>
      <h3>{result}</h3>
      <br />
    </>
  );
};

export default Result;
