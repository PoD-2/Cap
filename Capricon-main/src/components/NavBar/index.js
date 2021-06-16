import React from 'react';
import { Navbar, Nav, NavDropdown, Form, Button, } from 'react-bootstrap';
import Logo from '../../images/logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../redux/actions';
import { RiLoginCircleFill } from "react-icons/ri";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import SearchBar from '../SearchBar';

function NavBar() {

  const dispatch = useDispatch();
  const user = useSelector(state => state.userAuth.user);
  const loggedIn = useSelector(state => state.userAuth.loggedIn);

  const handleLogout = () => {

    dispatch(userActions.logout());

  }



  return (
    <Navbar collapseOnSelect bg="light" expand="xl" fixed="top" className="position-sticky px-md-5 shadow-sm mb-5 rounded">
      <Navbar.Brand href="/">
        <img
          src={Logo}
          width="200"
          height="60"
          className="d-inline-block align-top"
          alt="capricon logo"
        />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="">
        <Form className="position-relative d-xl-block d-none px-0">
          <SearchBar
            position="absolute"
            barLength="25em"
            top={-30}
            left={0}
          />
        </Form>
        <Nav className="ml-auto">
          {loggedIn ? (
            <NavDropdown title={user.userName} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">My Orders</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleLogout()}>Log out</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/seller/login">Sell on Capricon</NavDropdown.Item>
            </NavDropdown>
          ) : (
            <Button href="/login" className="px-5 py-2" variant="primary"><RiLoginCircleFill size={22} className="pr-2"/>Login</Button>
          )}

          <Nav.Link href="/wishlist" className="px-xl-5 py-xl-2 py-sm-4"><FaHeart className="pr-2 pb-1" size={28} /> Wishlist</Nav.Link>
          <Nav.Link href="/Cart" className="py-xl-2 pb-sm-3"><FaShoppingCart size={28} className="pr-2 pb-1" />Cart</Nav.Link>
          <Form className="d-xl-none mb-5">
            <SearchBar
              position="relative"
              barLength="100%"
              top={0}
              left={0}
            />
          </Form>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  )
}

export default NavBar
