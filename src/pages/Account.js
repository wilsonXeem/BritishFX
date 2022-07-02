import React from "react";
import SubHeading from "../components/SubHeading";

export default function Account() {
  return (
    <div className="acc">
      <SubHeading title="Open an Account" />
      <p>
        Please contact us and we will guide you through the process to open your
        secured forex account. <br /><br />
        The minimum investment capital is $1,000 USD. <br />
        Further infomation will be passed via communication with our agents. <br /><br />
        Click <a href="/contact-us">Here</a> to begin contact.
      </p>
    </div>
  );
}
