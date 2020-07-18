import React from 'react';
import { Container, Jumbotron, Row, Col } from 'react-bootstrap';

function NotFound() {
  return (
    <Container>
      <Row>
        <Col size='md-12'>
          <Jumbotron>
            <h1>
              Page Does Not Exits <i className='fas fa-eye-slash'></i>
            </h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default NotFound;
