import React, { useState } from "react";
import SubHeading from "../components/SubHeading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faCircleMinus } from "@fortawesome/free-solid-svg-icons";

export default function Faqs() {
  const [q1, setQ1] = useState(false);
  const [q2, setQ2] = useState(false);
  const [q3, setQ3] = useState(false);
  const [q4, setQ4] = useState(false);
  const [q5, setQ5] = useState(false);
  const [q6, setQ6] = useState(false);
  const [q7, setQ7] = useState(false);
  const [q8, setQ8] = useState(false);
  const [q9, setQ9] = useState(false);
  return (
    <div>
      <SubHeading title="FAQs" />
      <div className="faq">
        <div className="question">
          <h5 onClick={() => setQ1(!q1)}>
            {q1 ? (
              <FontAwesomeIcon icon={faCircleMinus} />
            ) : (
              <FontAwesomeIcon icon={faCirclePlus} />
            )}{" "}
            What is BritishFX account?
          </h5>
          {q1 && (
            <p>
              A BritishFX account is an investment account that is owned by an
              individual investor and looked after by a hired professional money
              manager or by a group of managers. The managers get authorization
              from the investor to trade his or her investment in the foreign
              exchange market in order to gain profits. The managers do not have
              access to the invested capital, they cannot withdraw money from
              it, they only get paid a performance fee.
            </p>
          )}
        </div>
        <div className="question">
          <h5 onClick={() => setQ2(!q2)}>
            {q2 ? (
              <FontAwesomeIcon icon={faCircleMinus} />
            ) : (
              <FontAwesomeIcon icon={faCirclePlus} />
            )}{" "}
            How much is performance fee?
          </h5>
          {q2 && (
            <p>
              We charge a 50% performance fee on new profits, only if the total
              value of your investment becomes greater than the former highest
              value.
            </p>
          )}
        </div>
        <div className="question">
          <h5 onClick={() => setQ3(!q3)}>
            {q3 ? (
              <FontAwesomeIcon icon={faCircleMinus} />
            ) : (
              <FontAwesomeIcon icon={faCirclePlus} />
            )}{" "}
            Do you accept investores from USA?
          </h5>
          {q3 && (
            <p>Yes, we accept investors from any country including USA.</p>
          )}
        </div>
        <div className="question">
          <h5 onClick={() => setQ4(!q4)}>
            {q4 ? (
              <FontAwesomeIcon icon={faCircleMinus} />
            ) : (
              <FontAwesomeIcon icon={faCirclePlus} />
            )}{" "}
            How can I pay the performance fee?
          </h5>
          {q4 && (
            <p>
              A monthly performance fee will be applied to new profits on your
              account and be deducted every first workday after the profitable
              month automatically by the broker as contracted. You as an
              investor don’t have to do anything about it.
            </p>
          )}
        </div>
        <div className="question">
          <h5 onClick={() => setQ5(!q5)}>
            {q5 ? (
              <FontAwesomeIcon icon={faCircleMinus} />
            ) : (
              <FontAwesomeIcon icon={faCirclePlus} />
            )}{" "}
            Is my investment safe?
          </h5>
          {q5 && (
            <p>
              The safety of your capital is as important for us as it is for
              you. Your money will be held in renowned banks in Australia and
              the UK, in an account in your own name providing exclusive access
              to you! Guaranteed by the Terms and Conditions of the contract
              between the investor and the brokerage. The trader has no direct
              access to the investments. Authorization is only given for trading
              on your account and receiving the predetermined percentage of
              gained profits. Thus you are assured the highest level of security
              possible.
            </p>
          )}
        </div>
        <div className="question">
          <h5 onClick={() => setQ6(!q6)}>
            {q6 ? (
              <FontAwesomeIcon icon={faCircleMinus} />
            ) : (
              <FontAwesomeIcon icon={faCirclePlus} />
            )}{" "}
            What does POA(Power of Attorney) mean and what is it good for?
          </h5>
          {q6 && (
            <p>
              A legal document giving authorization for our money manager to
              trade on your account. The trader does not have any other powers
              than trading, the owner of the account has exclusive access to his
              or her investment which means that nobody else can withdraw money
              from the account other than the investor.
            </p>
          )}
        </div>
        <div className="question">
          <h5 onClick={() => setQ7(!q7)}>
            {q7 ? (
              <FontAwesomeIcon icon={faCircleMinus} />
            ) : (
              <FontAwesomeIcon icon={faCirclePlus} />
            )}{" "}
            Does anyone else have access to my account?
          </h5>
          {q7 && (
            <p>No, you are the only one with access to withdraw your funds.</p>
          )}
        </div>
        <div className="question">
          <h5 onClick={() => setQ8(!q8)}>
            {q8 ? (
              <FontAwesomeIcon icon={faCircleMinus} />
            ) : (
              <FontAwesomeIcon icon={faCirclePlus} />
            )}{" "}
            What currency is the account traded in?
          </h5>
          {q8 && <p>All the managed accounts are traded in USD.</p>}
        </div>
        <div className="question">
          <h5 onClick={() => setQ9(!q9)}>
            {q9 ? (
              <FontAwesomeIcon icon={faCircleMinus} />
            ) : (
              <FontAwesomeIcon icon={faCirclePlus} />
            )}{" "}
            Can I add more funds to my account?
          </h5>
          {q9 && <p>Yes, you can do this at any time.</p>}
        </div>
      </div>
    </div>
  );
}
