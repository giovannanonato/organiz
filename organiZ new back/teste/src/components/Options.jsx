import { Link } from 'react-router-dom';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


export default function Options() {
    const [smShow, setSmShow] = useState(false);

    /* botao de sinal de mais Check List e To Do List*/

    return (
        <>
            <Button onClick={() => setSmShow(true)} className="me-2">
                <img src="data:image/png;base64,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" alt="" height={55} />
            </Button>

            <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        Selecione:
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Navbar className="bg-body-tertiary">
                            <Container>
                            <Navbar.Brand>Check List</Navbar.Brand>
                            </Container>
                        </Navbar>
                        <Navbar className="bg-body-tertiary">
                            <Container>
                                <Navbar.Brand href="#home">To do List</Navbar.Brand>
                            </Container>
                        </Navbar>
                </Modal.Body>
            </Modal>

        </>
        /*parte acima foi feita para o usuario selecionar a o tipo de tarefa que ela quer criar*/
    );
}
