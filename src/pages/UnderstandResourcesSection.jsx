import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaShieldAlt, FaArrowRight } from 'react-icons/fa';
import './css/UnderstandResourcesSection.css'; // Import your CSS file

const UnderstandResourcesSection = () => {
    return (
        <section className="understand-resources-section">
            <Container>
            <h2 className="title mx-auto text-align-center gradient-text fw-bold">
            Visualize Resource Relationships
                </h2>
                <Row className="align-items-center">
                    {/* Left Side: Screenshot */}
                    <Col md={6} className="order-md-0 mb-4 mb-md-0">
                        <img
                            src={require("../images/finops-cost.png")} // Adjust path as needed
                            alt="Resource Dependency Graph"
                            className="screenshot-img"
                            width={590}
                            height={400}
                        />
                    </Col>

                    {/* Right Side: Points with Icons */}
                    <Col md={6} className="order-md-1">
                        <div className="point-item">
                            <FaShieldAlt className="point-icon" size={60} />
                            <div className="point-content">
                                <h4>Enhanced Security</h4>
                                <p>Stay ahead of potential threats by understanding how your resources are interlinked and identifying potential vulnerabilities.</p>
                            </div>
                        </div>
                        <br/>
                        <div className="point-item">
                            <FaArrowRight className="point-icon" size={60} />
                            <div className="point-content">
                                <h4>Clear Visualization</h4>
                                <p>Visualize the complex relationships between resources to easily spot dependencies and potential points of failure.</p>
                            </div>
                        </div>
                        <div className="point-item"><Button variant="primary" href="https://platus.clb2.nifetency.com/">Get Started</Button></div>
                    </Col>
                </Row>
                
            </Container>
        </section>
    );
};

export default UnderstandResourcesSection;
