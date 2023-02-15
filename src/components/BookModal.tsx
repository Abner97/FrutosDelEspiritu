import React, { ChangeEvent, useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import BookCard from "./BookCard";

function BookModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function verifyUserOption() {
    const canShow = localStorage.getItem("showBanner");
    if (canShow) {
      if (canShow === "yes") {
        handleShow();
      } else {
        handleClose();
      }
    } else {
      localStorage.setItem("showBanner", "yes");
      handleShow();
    }
  }

  useEffect(() => {
    verifyUserOption();
    return () => {
      handleShow();
    };
    // eslint-disable-next-line
  }, [0]);

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.checked) {
      localStorage.setItem("showBanner", "no");
    } else {
      localStorage.setItem("showBanner", "yes");
    }
  }

  function click(event: any) {}

  return (
    <>
      <Modal show={show} onHide={handleClose} className='m-10'>
        <Modal.Header closeButton>
          <Modal.Title>Nuevo libro por el Dr. Fernando Abella</Modal.Title>
        </Modal.Header>
        <Modal.Body className='p-0'>
          <BookCard></BookCard>
        </Modal.Body>
        <Modal.Footer className='d-flex p-2 justify-content-around'>
          <Form>
            <Form.Check
              type='checkbox'
              label='No volver a mostrar este mensaje.'
              onChange={onChange}
              onClick={click}
            />
          </Form>

          <Button
            variant='primary'
            href='https://www.amazon.com/dp/B09NCX55WV/ref=cm_sw_r_apan_glt_NPD1PRHC6VH9YKGG4YZ6'
            target='_blank'
            onClick={handleClose}
          >
            Ir a la tienda
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BookModal;
