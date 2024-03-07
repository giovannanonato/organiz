import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function Perfil() {
    return (

        <div className="perfil">
            <>
                {[false,].map((expand) => (
                    <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
                        <Container fluid>
                            <Navbar.Brand href="#">
                            </Navbar.Brand>


                            
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />


                            <Navbar.Offcanvas
                                id={`offcanvasNavbar-expand-${expand}`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                placement="end"
                            >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                        <img src="https://cdn-icons-png.flaticon.com/512/3985/3985429.png" alt="fotoPerfil" height={50} />
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="justify-content-end flex-grow-1 pe-3">
                                        <Nav.Link href="#action1">Usuário </Nav.Link>
                                        <Nav.Link href="#action2">E-mail</Nav.Link>

                                    </Nav>
                                    <Form className="d-flex">
                                        <Button variant="outline-success"> <img src="https://cdn-icons-png.flaticon.com/512/545/545702.png" alt="fotoSair" height={20} /></Button>
                                    </Form>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>
                ))}
            </>
        </div>
    )
}