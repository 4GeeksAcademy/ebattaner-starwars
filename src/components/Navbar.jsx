import { NavLink } from "react-router";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { useContext } from "react";
import { ContextoFavoritos } from "../context/Favoritos";
import { Nav, Badge, Button } from "react-bootstrap";
import { isEmpty } from "lodash";
import { UserContext } from "../context/UserContext";

const NavbarComponent = () => {
  const { favoritos, deleteFavorite } = useContext(ContextoFavoritos);
  const { user, logout } = useContext(UserContext);

  return (
    <>
      <Navbar expand="lg" className="bg-body-secondary mb-5" fixed="top">
        <Container>
          <NavLink to="/" className="text-decoration-none">
            <Navbar.Brand>Star Wars Data Base</Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {!isEmpty(user) && !isEmpty(favoritos) && (
              <Nav>
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="Favorites"
                  menuVariant="light"
                >
                  {favoritos.map((fav) => {
                    return (
                      <NavDropdown.Item
                        as="div"
                        key={`${fav.type_enum}${fav.favorite_id}`}
                      >
                        <NavLink to={`${fav.type_enum}/${fav.external_id}`}>
                          {fav.name}
                        </NavLink>
                        <Badge
                          as="button"
                          bg="danger"
                          className="ms-2"
                          onClick={() => {
                            deleteFavorite(
                              fav.external_id,
                              fav.type_enum,
                              fav.favorite_id,
                            );
                          }}
                        >
                          X
                        </Badge>
                      </NavDropdown.Item>
                    );
                  })}
                </NavDropdown>
              </Nav>
            )}
          </Navbar.Collapse>
          {!isEmpty(user) ? (
            <Button className="bg-gray  m-3" onClick={() => logout()}>
              Logout
            </Button>
          ) : (
            <NavLink to="/login" className="text-decoration-none">
              <Button className="bg-gray  m-3">Login / Register</Button>
            </NavLink>
          )}
        </Container>
      </Navbar>
      <hr />
    </>
  );
};

export default NavbarComponent;
