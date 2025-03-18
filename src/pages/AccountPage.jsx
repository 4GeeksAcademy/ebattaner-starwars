import { Card, Nav } from "react-bootstrap";
import { LoginPage } from "./LoginPage";
import { RegisterPage } from "./RegisterPage";
import { useState } from "react";
import "./AccountPage.css"; // Asegúrate de crear este archivo CSS para estilos personalizados

export const AccountPage = () => {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="account-page">
      <Card className="bg-dark text-light account-card">
        <Card.Header>
          <Nav
            fill
            variant="tabs"
            activeKey={activeTab}
            onSelect={(selectedKey) => setActiveTab(selectedKey)}
          >
            <Nav.Item>
              <Nav.Link
                className={
                  activeTab === "login"
                    ? "custom-tab-active"
                    : "custom-tab-inactive"
                }
                eventKey="login"
              >
                Login
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className={
                  activeTab === "register"
                    ? "custom-tab-active"
                    : "custom-tab-inactive"
                }
                eventKey="register"
              >
                Register
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          {activeTab === "login" ? <LoginPage /> : <RegisterPage />}
        </Card.Body>
      </Card>
    </div>
  );
};
