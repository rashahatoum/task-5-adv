import { Container, Nav, Navbar } from 'react-bootstrap'
import "./NavBar.css"
import type { NavBarProps } from '../../interfaces'


const NavBar = ({ brand , items }: NavBarProps) => {
    return (
        <Navbar expand="lg" className="py-0 w-100">
            <Container fluid className='position-fixed top-0 z-2 bg-white'>
                <Navbar.Brand href="#" className="text-uppercase fw-bold">{brand}</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" className="border-0" />
                <Navbar.Collapse id="navbarScroll" className="flex-grow-0">
                    <Nav
                        className="me-auto my-2 my-lg-0 gap-5"
                        navbarScroll
                    >
                        {items.map((item, index) => {
                            return (
                                <Nav.Link key={index} href={`#${item}`}>
                                    {item}
                                </Nav.Link>
                            )
                        })}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar