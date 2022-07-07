import React from "react";
import SlideShow from "../components/SlideShow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faCircleDollarToSlot,
  faCircleQuestion,
  faPlugCircleBolt,
} from "@fortawesome/free-solid-svg-icons";

import p1 from "../secure investment data/p1.png";
import p2 from "../secure investment data/p2.png";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <SlideShow />
      <div className="info">
        <div>
          <FontAwesomeIcon
            icon={faPlugCircleBolt}
            style={{ fontSize: "60px", color: "blue" }}
          />
          <h2>Performance</h2>
          <p>
            The average monthly return is 10% – 25%. Check out the exceptional
            performance of our traders on this page.
          </p>
          <a href="/performance">Read more>></a>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faCircleDollarToSlot}
            style={{ fontSize: "60px", color: "blue" }}
          />
          <h2>Open an account</h2>
          <p>
            It is very easy to open a forex secured account and start investing.
            We will guide you through the entire process.
          </p>
          <a href="/account">Read more>></a>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faCircleQuestion}
            style={{ fontSize: "60px", color: "blue" }}
          />
          <h2>How it works</h2>
          <p>
            If you are new to BritishFX then we will explain how it all works.
            Please click the link below
          </p>
          <a href="/how-it-works">Read more>></a>
        </div>
      </div>
      <div className="us">
        <h1>BritishFX Trading</h1>
        <div className="x">
          <div className="hr"></div>
        </div>
        <p>
          Don’t have the time to trade your own account? We believe a BritishFX
          account can give an investor who cannot watch the market 24 hours a
          day an opportunity to participate in the exciting world of forex
          trading. BritishFX accounts are also ideal for those investors who
          prefer to have their capital secured by professional forex money
          manager. This is a viable solution for individuals or companies
          looking to diversify into Forex without hands-on involvement. It is an
          effective way for retail investors to benefit from the knowledge,
          resources and experience of an investment manager without the
          restrictions of investing in a hedge fund or other alternative
          investment . <br />
          As an Investor who wants to diversify his portfolio with a secured
          forex account we believe you have come to the right place.
        </p>
      </div>
      <div className="choose">
        <h1>Why choose BritishFX?</h1>
        <p>
          <FontAwesomeIcon
            icon={faCheck}
            style={{ fontSize: "20px", color: "aqua" }}
          />{" "}
          Average Monthly Return: 15% – 30%
        </p>
        <p>
          <FontAwesomeIcon
            icon={faCheck}
            style={{ fontSize: "20px", color: "aqua" }}
          />{" "}
          Performance is verified by Myfxbook.
        </p>
        <p>
          <FontAwesomeIcon
            icon={faCheck}
            style={{ fontSize: "20px", color: "aqua" }}
          />{" "}
          Fully NFA, CFTC, ASIC regulated brokerage firms.
        </p>
        <p>
          {" "}
          <FontAwesomeIcon
            icon={faCheck}
            style={{ fontSize: "20px", color: "aqua" }}
          />{" "}
          Segregated BritishFX allocated in insured banks.
        </p>
        <p>
          <FontAwesomeIcon
            icon={faCheck}
            style={{ fontSize: "20px", color: "aqua" }}
          />{" "}
          Funds held and operated within an industry known and highly reputed
          brokers.
        </p>
        <p>
          <FontAwesomeIcon
            icon={faCheck}
            style={{ fontSize: "20px", color: "aqua" }}
          />{" "}
          Investor gets 24/7 real time access to trading activities and detailed
          report.
        </p>
        <p>
          <FontAwesomeIcon
            icon={faCheck}
            style={{ fontSize: "20px", color: "aqua" }}
          />{" "}
          Funds are secured by proven and experienced fund managers with a
          disciplined trading approach.
        </p>
        <p>
          <FontAwesomeIcon
            icon={faCheck}
            style={{ fontSize: "20px", color: "aqua" }}
          />{" "}
          Money management techniques with sophisticated strategies that seek to
          control losses and protect profits.
        </p>
        <p>
          <FontAwesomeIcon
            icon={faCheck}
            style={{ fontSize: "20px", color: "aqua" }}
          />{" "}
          You only pay for performance, no management fees.
        </p>
        <p>
          <FontAwesomeIcon
            icon={faCheck}
            style={{ fontSize: "20px", color: "aqua" }}
          />{" "}
          We accept clients from all countries including USA and Canada.
        </p>
      </div>
      <div className="trading">
        <h1>The Legal Stuff</h1>
        <div className="x">
          <div className="hr"></div>
        </div>
        <p>
          Financial spread trading comes with a high risk of losing money
          rapidly due to leverage. 83.5% of retail investor accounts lose money
          when trading CFDs with this provider. You should consider whether you
          understand how spread trading works and whether you can afford to take
          the high risk of losing your money. <br />
          <br />
          BritishFX is a trading name of BritishFX Financial UK Ltd, a financial
          services company authorised and regulated by the Financial Conduct
          Authority under firm reference number 525164. Our registered office is
          Longbow House, 20 Chiswell Street, London, EC1Y 4TW, United Kingdom.{" "}
          <br />
          <br />
          BritishFX is a trading name of BritishFX Australia Pty Ltd, a
          financial services company authorised and regulated by the Australian
          Securities and Investments Commission, ACN 158 065 635, AFSL No.
          422661 <br />
          <br />
          BritishFX Financial (Pty) Ltd, registration number 2018/418755/07, is
          authorised and regulated by the Financial Sector Conduct Authority,
          FSP No 49846 <br />
          <br />
          BritishFX Ltd, registration Number 203493 B, is authorised and
          regulated by the Securities Commission of the Bahamas, SIA-F216 <br />
          <br />
          The information on this site is not directed at residents of the
          United States or any particular country outside the UK, Australia,
          South Africa or The Bahamas and is not intended for distribution to,
          or use by, any person in any country or jurisdiction where such
          distribution or use would be contrary to local law or regulation. Full
          Legal notices. <br />
          <br />* The Loyalty Bonus is not offered with BritishFX UK and
          BritishFX Australia accounts
        </p>
      </div>
      <div className="ret">
        <h1>Awesome Returns</h1>
        <div className="x">
          <div className="hr"></div>
        </div>
        <p>
          The primary objective of forex secured accounts are strong monthly
          returns with low drawdown. Using a strategy developed over many years
          of trading. Forex secured accounts aim to satisfy the aggressive
          investor seeking superior performance.
        </p>
      </div>
      <div className="trading">
        <h1>Trading Approach and Risk Management</h1>
        <div className="x">
          <div className="hr"></div>
        </div>
        <p>
          Money management is the cornerstone of any professionally secured
          forex account, and this forex secured fund is no exception. All
          secured forex account positions will have hard stoploss orders in
          place at all times. These stops are raised as a trade becomes
          profitable, so that profitable exit orders are also in place for
          closing winning trades.
        </p>
      </div>
      <div className="service">
        <h1>How We Provide Services</h1>
        <div className="x">
          <div className="hr"></div>
        </div>
        <p>
          <b>Minimum Investment:</b> $1,000 <br /> <b>Broker:</b> We work with
          several brokers, arguably the world’s largest forex brokers, by
          liquidity & deposited funds, with an excellent reputation. <br />
          We accept clients from all countries including USA and Canada. <br />
          Any investment made in other currencies such as Bitcoin and Ethereum,
          will have their dollar equivalent credited to the owner's BritishFX
          account.
        </p>
        <div className="btn">
          <button onClick={() => navigate("/signup")}>Open Account</button>
        </div>
      </div>
      <div className="partners">
        <h1>Our Partners</h1>
        <div className="x">
          <div className="hr"></div>
        </div>
        <img src={p1} alt="" /> <br />
        <img src={p2} alt="" />
      </div>
    </div>
  );
}
