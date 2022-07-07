import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/Nav";

export default function Dashboard() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [acc, setAcc] = useState({});

  useEffect(() => {
    fetch(`https://britishfx-server.herokuapp.com/user/${id}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json.user);
        setData(json.user);
        setAcc(json.user.account);
      });
  }, []);
  return (
    <div className="dashboard">
      <Nav id={id} />
      <div className="accoun">
        <h1 style={{ color: "blue", fontWeight: "bold" }}>Your Account:</h1>
        <table>
          <tbody>
            <tr>
              <td>User:</td>
              <td>{data.username}</td>
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td>Account Balance:</td>
              <td>${acc.balance}.00</td>
            </tr>
            <tr>
              <td>Total Earned:</td>
              <td>${acc.earned}.00</td>
            </tr>
            <tr>
              <td>Pending Withdrwal:</td>
              <td>${acc.withdrawn}.00</td>
            </tr>
            <tr>
              <td>Active Deposit:</td>
              <td>${acc.deposit}.00</td>
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
