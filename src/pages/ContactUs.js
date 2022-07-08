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
      </div>
    </div>
  );
}
