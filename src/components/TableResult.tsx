import React from "react";
import { Table } from "react-bootstrap";

const TableResult = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Fruto</th>
          <th>Puntuación</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mark</td>
          <td>Otto</td>
        </tr>
        <tr>
          <td>Jacob</td>
          <td>Thornton</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default TableResult;
