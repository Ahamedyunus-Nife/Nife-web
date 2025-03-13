import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const OurValues = () => {
  return (
    <Container className="my-5 text-center">
      <h2 className="text-white mb-4">Our Values</h2>
      <Row className="justify-content-center">
        <Col md={6} lg={3} className="mb-4">
          <Card className="bg-dark text-white border-light">
            <Card.Img
              variant="top"
              src={require('../images/customer-first-principle.png')}
              className="p-0 img"
              alt="Customer-First Principle"
              style={{
                width: '50px', /* Adjust the size as needed */
                height: '50px', /* Adjust the size as needed */
                objectFit: 'contain',
                display: 'block', /* Ensures that image takes up space properly */
                margin: '10px auto 0',
                
              }}
            />
            <Card.Body>
              <Card.Title>Customer-First Principle</Card.Title>
              <Card.Text>
                Nife ensures that we solve problems for the customer and customer pain-point.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3} className="mb-4">
          <Card className="bg-dark text-white border-light">
            <Card.Img
              variant="top"
              src={require('../images/make-it-matter.png')}
              className="p-0 img"
              alt="Make it Matter"
              style={{
                width: '50px', /* Adjust the size as needed */
                height: '50px', /* Adjust the size as needed */
                objectFit: 'contain',
                display: 'block', /* Ensures that image takes up space properly */
                margin: '10px auto 0',
                
              }}
            />
            <Card.Body>
              <Card.Title>Make it Matter</Card.Title>
              <Card.Text>
                Nife chains all the requirements and execution to make this matter.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3} className="mb-4">
          <Card className="bg-dark text-white border-light">
            <Card.Img
              variant="top"
              src={require('../images/demand-excellence.png')}
              className="p-0 img"
              alt="Demand Excellence"
              style={{
                width: '50px', /* Adjust the size as needed */
                height: '50px', /* Adjust the size as needed */
                objectFit: 'contain',
                display: 'block', /* Ensures that image takes up space properly */
                margin: '10px auto 0',
                
              }}
            />
            <Card.Body>
              <Card.Title>Demand Excellence</Card.Title>
              <Card.Text>
                Nife stands for Excellence – we demand Excellence from everyone.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3} className="mb-4">
          <Card className="bg-dark text-white border-light">
            <Card.Img
              variant="top"
              src={require('../images/transparency.png')}
              className="p-0 img"
              alt="Transparency"
              style={{
                width: '50px', /* Adjust the size as needed */
                height: '50px', /* Adjust the size as needed */
                objectFit: 'contain',
                display: 'block', /* Ensures that image takes up space properly */
                margin: '10px auto 0',
                
              }}
            />
            <Card.Body>
              <Card.Title>Transparency</Card.Title>
              <Card.Text>
                Nife strives to be open and transparent in communication.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default OurValues;
