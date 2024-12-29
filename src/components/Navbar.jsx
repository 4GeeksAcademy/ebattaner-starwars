import React, { useContext } from "react";
import { isEmpty } from "lodash";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, useLocation } from "react-router";
import Badge from "react-bootstrap/Badge";
import FavoritesContext from "./Favorites";

const CustomNavbar = () => {
  const { favorites, deleteFavorites } = useContext(FavoritesContext);

  let location = useLocation();

  const parsedLocation = () => {
    const locations = {
      species: "Species",
      starships: "Starships",
      vehicles: "Vehicles",
    };
    return locations[location.pathname.split("/")[1]] || "";
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">STAR WARS WEB</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!isEmpty(favorites) && (
              <NavDropdown title="Favorites" id="basic-nav-dropdown">
                {favorites.map((favorite) => (
                  <NavDropdown.Item key={`${favorite.type}${favorite.id}`}>
                    <NavLink to={`${favorite.type}/${favorite.id}`}>
                      {favorite.name}
                    </NavLink>
                    <Badge
                      pill
                      bg="danger"
                      onClick={() =>
                        deleteFavorites(favorite.id, favorite.type)
                      }
                      style={{ cursor: "pointer", marginLeft: "10px" }}
                    >
                      X
                    </Badge>
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

export default CustomNavbar;
