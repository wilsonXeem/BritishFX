import React from "react";
import { Link } from "react-router-dom";

export default function Nav({id}) {
  return (
    <div className="nav">
      <h4 style={{ color: "blue", fontWeight: "bold", marginBottom: "1rem" }}>
        Navigation
      </h4>
      <p>
        <Link to={`/${id}/dashboard`}>
          <b>Account</b>
        </Link>
      </p>
      <hr />
      <p>
        <Link to={`/${id}/deposit`}>
          <b>Make Deposit</b>
        </Link>
      </p>
      <hr />
      <p>
        <Link to={`/${id}/withdraw`}>
          <b>Withdraw</b>
        </Link>
      </p>
      <hr />
      <p>
        <Link to={`/${id}/trade`}>
          <b>Trade</b>
        </Link>
      </p>
      <hr />
      <p>
        <Link to="/signin">
          <b>Log out</b>
        </Link>
      </p>
      <hr />
    </div>
  );
}
