import React from "react";
import SubHeading from "../components/SubHeading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneSquare } from "@fortawesome/free-solid-svg-icons";

export default function ContactUs() {
  return (
    <div>
      <SubHeading title="Contact Us" />
      <div className="contact">
        For opening of BritishFX account or getting information concerning
        investment, contact us via Whatsapp at: <b>+447405844662</b>
        <br />
        <br />
        Or reach out to us at: <br />
        <b>Crown Way Cardiff CF13 3UZ DX 33049 Cardiff United Kingdom</b>
        <br />
        <br />
        You can click on this link to chat directly:{" "} <br />
        <a href="https://api.whatsapp.com/send?phone=447405844662">
          <FontAwesomeIcon
            icon={faPhoneSquare}
            style={{ fontSize: "100px", color: "aqua" }}
          />
        </a>
      </div>
    </div>
  );
}
