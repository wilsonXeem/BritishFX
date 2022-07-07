import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/Nav";

export default function Withdraw() {
  const { id } = useParams();
  const [acc, setAcc] = useState({});

  useEffect(() => {
    fetch(`https://britishfx-server.herokuapp.com/user/${id}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json.user);
        setAcc(json.user.account);
      });
  }, []);
  return (
    <div className="dashboard">
      <Nav id={id} />
      <div className="accoun">
        <h1 style={{ color: "blue", fontWeight: "bold" }}>
          ASK FOR WITHDRAWAL:
        </h1>
        <p>Please contact our agent with your desired address to be funded.</p>
        <table>
          <tbody>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td>Account Balance:</td>
              <td>${acc.balance}.00</td>
            </tr>
            <tr>
              <td>Total Withdrwal:</td>
              <td>${acc.withdrawal}.00</td>
            </tr>
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
