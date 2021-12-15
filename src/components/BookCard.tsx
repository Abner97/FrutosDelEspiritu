import React from "react";
import { Card } from "react-bootstrap";
import bookImage from "../assets/images/revolucion_book.jpg";
function BookCard() {
  return (
    <Card style={{ width: "100%" }}>
      <Card.Img variant='top' src={bookImage} alt='Libro Revolución' />
      <Card.Body>
        <Card.Text>
          ¡Un cambio permanente en tu carácter es más real de lo que piensas!
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BookCard;
