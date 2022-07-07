import React, { useState } from "react";
import SubHeading from "../components/SubHeading";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState(false);
  const [pass, setPass] = useState(false);

  const handleSubmit = () => {
    if (username === "" || password === "") {
      alert("Invalid username or password");
    } else {
      fetch("https://britishfx-server.herokuapp.com/user/signin", {
        method: "POST",
        body: JSON.stringify({
          email: username,
          password: password,
        }),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          if (json.type === "email") {
            setMail(!mail);
          } else if (json.type === "password") {
            setPass(!pass);
          } else {
            setPassword("");
            setUsername("");
            setMail(false);
            setPass(false);
            navigate(`/${json.user._id}/dashboard`);
          }
        });
    }
  };
  return (
    <div className="sign">
      <SubHeading title="Sign In" />
      <div className="form">
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Col sm={10}>
              <Form.Control
                type="email"
                placeholder="Email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              {mail && (
                <i style={{ color: "red", fontSize: "small" }}>
                  Email does not exist
                </i>
              )}
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalPassword"
          >
            <Col sm={10}>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {pass && (
                <i style={{ color: "red", fontSize: "small" }}>
                  Invalid password
                </i>
              )}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10 }}>
              <Button
                onClick={handleSubmit}
                style={{ backgroundColor: "blue" }}
              >
                <b>Sign in</b>
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}
