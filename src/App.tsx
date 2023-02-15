import React, { useEffect, useState } from "react";
import "./App.css";
import { auth } from "./firebase";
import AuthState from "./context/auth/AuthState";
import FrutosState from "./context/frutos/FrutosState";
import QuestionsState from "./context/questions/QuestionsState";
import Routes from "./router/Routes";
import { Col, Container, Row, Spinner } from "react-bootstrap";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      await auth.signInAnonymously().then(() => {
        setLoading(false);
      });
    })();
    // eslint-disable-next-line
  }, [0]);
  return (
    <QuestionsState>
      <FrutosState>
        <AuthState>
          {loading ? (
            <Container fluid className='h-100 w-100'>
              <Row className=' justify-content-md-center align-items-center h-100 w-100'>
                <Col className='d-flex justify-content-center'>
                  <Spinner animation='grow' className='bg-success' />
                </Col>
              </Row>
            </Container>
          ) : (
            <Routes></Routes>
          )}
        </AuthState>
      </FrutosState>
    </QuestionsState>
  );
}

export default App;
