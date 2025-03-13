import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaServer, FaSync, FaEye } from 'react-icons/fa'; // Icons for points
import './css/InventorySection.css'; // Custom CSS for additional styling

const InventorySection = () => {
    return (
        <section className="inventory-section">
            <Container>
                <h2 className="title mx-auto text-align-center gradient-text fw-bold">
                Build Your Cloud Asset Inventory with Platus
                </h2>

                <Row className="align-items-center">
                    <Col md={6}>
                        <div className="points-list">
                            <div className="point-item">
                                <FaServer className="point-icon" />
                                <div className="point-content">
                                    <h4>Centralized Management</h4>
                                    <p>Track all cloud assets in one place, regardless of the provider.</p>
                                </div>
                            </div>
                            <br/>
                            <div className="point-item">
                                <FaSync className="point-icon" />
                                <div className="point-content">
                                    <h4>Cross-Platform Integration</h4>
                                    <p>Integrate seamlessly with AWS, GCP, Azure, and DigitalOcean.</p>
                                </div>
                            </div>
                            <br/>
                            <div className="point-item">
                                <FaEye className="point-icon" size={60} />
                                <div className="point-content">
                                    <h4>Enhanced Visibility</h4>
                                    <p>Gain deeper insights into your cloud infrastructure, helping you manage resources more effectively and reduce costs.</p>
                                </div>
                            </div>
                        </div>
                        <Button variant="primary" href="https://platus.clb2.nifetency.com/">Get Started</Button>
                    </Col>
                    <Col md={6}>
                        <img
                            src={require('../images/finops inventory.png')}
                            alt="Cloud Asset Inventory Screenshot"
                            className="inventory-img"
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default InventorySection;
