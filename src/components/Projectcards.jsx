import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import mediaPlayerImage from '../assets/mediaplayer.png'
import { Col, Row } from 'react-bootstrap';

function Projectcards() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
        <Card style={{ width: '18rem' }} onClick={handleShow}>
        <Card.Img variant="top" src={mediaPlayerImage} />
        <Card.Body>
         <Card.Title>Media Player</Card.Title>
      </Card.Body>
    </Card>

    <Modal
        show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Video Player</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6} lg={6}>
              <img src={mediaPlayerImage} width={"100%"} height={"250px"} alt=""/>
            </Col>
            <Col md={6}lg={6}>
              <h4>Description</h4>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                 Incidunt suscipit reprehenderit officiis repellendus excepturi 
                 ratione, blanditiis, eum, itaque provident quidem eaque tempora 
                 harum quisquam minus? Sint ratione voluptas vitae voluptate.
              </p>
              <p><span className='fw-bolder'>Technoligies: </span>Html ,Css , React, Node</p>  
            </Col>
          </Row>
          <div className='d-flex mt-3'>
            <a href="https://media-player-sage.vercel.app/" target="_blank" style={{color:"black", fontSize:"25px"}}><i class="fa-solid fa-link  ms-3"></i></a>
            <a href="https://github.com/bharathmmanoj/media-player" target="_blank" style={{color:"black",fontSize:"25px"}}><i class="fa-brands fa-github ms-3"></i></a>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Projectcards