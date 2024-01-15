/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {
  Navbar, Container, Nav,
} from 'react-bootstrap';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>📚 Simply Books 📚</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="ml-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link passHref href="/">
              <Navbar.Brand>Books</Navbar.Brand>
            </Link>
            <Link passHref href="/book/new">
              <Navbar.Brand>Create Book</Navbar.Brand>
            </Link>
            <Link passHref href="/author">
              <Navbar.Brand>Authors</Navbar.Brand>
            </Link>
            <Link passHref href="/author/new">
              <Navbar.Brand>Create Author</Navbar.Brand>
            </Link>
            <Link passHref href="/profile">
              <Navbar.Brand>Profile</Navbar.Brand>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

NavBar.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
    photoURL: PropTypes.string,
  }).isRequired,
};
