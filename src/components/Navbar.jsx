import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useFavorites } from "./Favorites";

const NavbarComponent = () => {
  const { favorites, removeFavorite } = useFavorites();

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand href="#home">STAR WARS WEB</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {favorites.length > 0 && (
              <NavDropdown title="Favorites" id="basic-nav-dropdown">
                {favorites.map((favorite) => (
                  <NavDropdown.Item key={`${favorite.type}-${favorite.id}`}>
                    <span>
                      <a href={`/${favorite.type}/${favorite.id}`}>
                        {favorite.name}
                      </a>
                      <button
                        style={{
                          marginLeft: "10px",
                          background: "none",
                          border: "none",
                          color: "red",
                          cursor: "pointer",
                        }}
                        onClick={() =>
                          removeFavorite(favorite.id, favorite.type)
                        }
                      >
                        X
                      </button>
                    </span>
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
