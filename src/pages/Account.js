import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SubHeading from "../components/SubHeading";
import { Form, Row, Col, Button } from "react-bootstrap";

export default function Account() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [pCheck, setPCheck] = useState("");
  const [btc, setBtc] = useState("");
  const [eth, setEth] = useState("");
  const [usdt, setUsdt] = useState("");
  const [email, setEmail] = useState("");
  const [secq, setSecq] = useState("");
  const [ans, setAns] = useState("");
  const [check, setCheck] = useState(false);
  const [show, setShow] = useState(false);
  const [pass, setPass] = useState(false);

  const handleSubmit = () => {
    if (
      name === "" ||
      username === "" ||
      password === "" ||
      pCheck === "" ||
      btc === "" ||
      eth === "" ||
      usdt === "" ||
      email === "" ||
      secq === "" ||
      ans === "" ||
      check === false
    ) {
      alert("All fields must be filled");
    } else if (password.length < 8 || password !== pCheck) {
      setShow(!show);
    } else {
      fetch("https://britishfx-server.herokuapp.com/user/signup", {
        method: "POST",
        body: JSON.stringify({
          fullname: name,
          username: username,
          password: password,
          btc: btc,
          eth: eth,
          usdt: usdt,
          email: email,
          secretQuestion: secq,
          answer: ans,
        }),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          if (json.error) {
            setPass(!pass);
          } else {
            setAns("");
            setBtc("");
            setEmail("");
            setEth("");
            setName("");
            setPCheck("");
            setPassword("");
            setSecq("");
            setUsdt("");
            setUsername("");
            setCheck(false);
            setShow(false);
            setPass(false);
            navigate(`/${json.newUser._id}/dashboard`);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="acc">
      <SubHeading title="Set up an Account" />
      <div className="form">
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="fullname">
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Fullname"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="username">
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="password">
            <Col sm={10}>
              <Form.Control
                type="password"
                placeholder="Password(at least 8 characters)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="pwordMatch">
            <Col sm={10}>
              <Form.Control
                type="password"
                placeholder="Retype Password"
                value={pCheck}
                onChange={(e) => setPCheck(e.target.value)}
                required
              />
            </Col>
            {show && (
              <i style={{ color: "red", fontSize: "small" }}>
                Password does not match
              </i>
            )}
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="btc">
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Your Bitcoin account ID"
                value={btc}
                onChange={(e) => setBtc(e.target.value)}
                required
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="usdt">
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Your USDT account ID"
                value={usdt}
                onChange={(e) => setUsdt(e.target.value)}
                required
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="eth">
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Your Ethereum account ID"
                value={eth}
                onChange={(e) => setEth(e.target.value)}
                required
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="email">
            <Col sm={10}>
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {pass && (
                <i style={{ color: "red", fontSize: "small" }}>
                  Email exists already
                </i>
              )}
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="secretQuestion">
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Secret Question"
                value={secq}
                onChange={(e) => setSecq(e.target.value)}
                required
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="answer">
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Secret answer"
                value={ans}
                onChange={(e) => setAns(e.target.value)}
                required
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
            <Col sm={{ span: 10 }}>
              <Form.Check
                label="I agree with Terms and Conditions"
                required
                checked={check}
                onChange={() => setCheck(!check)}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10 }}>
              <Button
                onClick={handleSubmit}
                style={{ backgroundColor: "blue" }}
              >
                <b>Sign Up Account</b>
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}
