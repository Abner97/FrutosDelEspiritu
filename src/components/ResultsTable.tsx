import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Table from "react-bootstrap/esm/Table";
import styled from "styled-components";
import { Results } from "../helper/results";

const DescriptionText = styled.p`
  font-size: 14px;
  font-style: italic;
  color: #757373;
  margin-top: 20px;
`;

interface ResultsTableProps {
  show: boolean;
  results: Array<Results>;
}

const ResultsTable: React.FC<ResultsTableProps> = ({
  ...props
}: ResultsTableProps) => {
  const [showDescription, setShowDescription] = useState<Array<boolean>>([]);
  const tempArray: Array<boolean> = [];

  function changeArrow(index: number, value: boolean) {
    tempArray[index] = value;
    setShowDescription(tempArray);
  }

  useEffect(() => {
    props.results.forEach((item) => {
      tempArray.push(false);
      setShowDescription(tempArray);
      item.result = parseFloat(localStorage.getItem(`P${item.fruto}`)!);
    });
    // eslint-disable-next-line
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr style={{ backgroundColor: "#36773a", color: "white" }}>
          <th>Elementos del Fruto del Espíritu</th>
          <th>Porcentaje</th>
        </tr>
      </thead>
      <tbody>
        {props.show
          ? props.results.map(
              ({ fruto, result, description, color }, index) => (
                <tr
                  key={index}
                  style={{
                    background: `${color}`,
                  }}
                  onClick={() =>
                    changeArrow(index, showDescription[index] ? false : true)
                  }
                >
                  <td>
                    <Container fluid>
                      <Row>
                        <Col lg={10} xl={10} xs={10} sm={10}>
                          <b>{fruto}</b>
                        </Col>
                        <Col lg={10} xl={2} xs={2} sm={2}>
                          {showDescription[index] ? (
                            <FontAwesomeIcon
                              icon={faAngleUp}
                              onClick={() => changeArrow(index, false)}
                              size={"1x"}
                            />
                          ) : (
                            <FontAwesomeIcon
                              icon={faAngleDown}
                              onClick={() => changeArrow(index, true)}
                              size={"1x"}
                            />
                          )}
                        </Col>
                      </Row>
                      {showDescription[index] && (
                        <DescriptionText>{description}</DescriptionText>
                      )}
                    </Container>
                  </td>
                  <td>{result}%</td>
                </tr>
              )
            )
          : null}
      </tbody>
    </Table>
  );
};

export default ResultsTable;
