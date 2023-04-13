import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';


const styles = {
  title: {
    textAlign: 'center',
    margin: '50px 0',
    fontSize: '68px',
    fontWeight: 'bold',
  },
  buttonContainer: {
    margin: '50px 0',
  },
  button: {
    marginBottom: '20px',
    borderRadius: '10px',
    padding: '40px 20px',
    fontSize: '25px',
  },
};


const HomeScreen = () => {
  return (
    <Container>
      <div id='cuerpo'>
      <div style={styles.title}>SysProp</div>
      <div style={styles.buttonContainer}>
        <Row>
          <Col>
            <Button color="primary" style={styles.button} block>Compras</Button>
          </Col>
          <Col>
            <Button color="primary" style={styles.button} block>Ventas</Button>
          </Col>
          <Col>
            <Button color="primary" style={styles.button} block>Clientes</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button color="primary" style={styles.button} block>Proveedores</Button>
          </Col>
          <Col>
            <Button color="primary" style={styles.button} block>Inventario</Button>
          </Col>
          <Col>
            <Button color="primary" style={styles.button} block>Usuarios</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button color="primary" style={styles.button} block>Mantenimiento</Button>
          </Col>
          <Col>
            <Button color="primary" style={styles.button} block>Ayuda</Button>
          </Col>
        </Row>
      </div>
      </div>
    </Container>
  );
};


export default HomeScreen;
