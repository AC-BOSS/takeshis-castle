import React, {useEffect, useState} from 'react';
import { Card, Modal, Col } from 'react-bootstrap';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import './card.css';

export default function RenderCard(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let img_class = props.video?"card-img":"";
    let xl = props.cast?3:4;

    return (
        <>
        <Col md={4} sm={6} xl={xl}  className="mb-4">
            <Card className="h-100" id={props.id || props.title}>
                <div className={img_class} onClick={handleShow}>
                    {props.video && <PlayCircleFilledIcon fontSize="large" className="play-btn" />}
                    <Card.Img variant='top' src={props.image} loading="lazy"/>
                </div>
                <Card.Body>
                    <Card.Title className="text-center">{props.title}</Card.Title>
                    <Card.Text>
                        {props.children}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        {props.video && 
            <Modal dialogClassName="modal" show={show} onHide={handleClose} size="lg" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Clips</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="iframe-container">
                        <iframe className="resp-iframe" src={props.video} title={props.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </Modal.Body>
            </Modal>
        }
        </>
    )
}