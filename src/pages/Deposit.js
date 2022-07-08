import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/Nav";

export default function Deposit() {
  const { id } = useParams();
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand("copy");
    // This is just personal preference.
    // I prefer to not show the the whole text area selected.
    e.target.focus();
  }
  return (
    <div className="dashboard">
      <Nav id={id} />
      <div className="dep">
        <h1 style={{ color: "blue", fontWeight: "bold" }}>
          Fund Your Account:
        </h1>
        <table>
          <thead>
            <tr>
              <th>Plans</th>
              <th>Amount($)</th>
              <th>Monthly Profit(%)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Plan 1</td>
              <td>1000 - 9,999</td>
              <td>15</td>
            </tr>
            <tr>
              <td>Plan 2</td>
              <td>10,000 - 24,999</td>
              <td>20</td>
            </tr>
            <tr>
              <td>Plan 3</td>
              <td>25,000 -</td>
              <td>30</td>
            </tr>
          </tbody>
        </table>
        <h5>Payments should be made to:</h5>
        <b>BTC:</b>
        <div style={{ display: "flex" }}>
          <form>
            <input
              className="input"
              ref={textAreaRef}
              value="bc1qxfvzdap4q3ukjplqamcz46zk3u4ak9apndwgz4"
              readOnly
            />
          </form>
          {document.queryCommandSupported("copy") && (
            <div>
              <button className="b" onClick={copyToClipboard}>
                Copy
              </button>
            </div>
          )}
        </div>
        <b>Ethereum:</b>
        <div style={{ display: "flex" }}>
          <form>
            <input
              className="input"
              ref={textAreaRef}
              value="0x3354c55D9e84e5B8BA3c1963AD1821eF8A4a27aC"
              readOnly
            />
          </form>
          {document.queryCommandSupported("copy") && (
            <div>
              <button className="b" onClick={copyToClipboard}>
                Copy
              </button>
            </div>
          )}
        </div>
        <b>USDT:</b>
        <div style={{ display: "flex" }}>
          <form>
            <input
              className="input"
              ref={textAreaRef}
              value="hvngmfhcygcburhf7yuylcth89urijfh7fygtrue7hgc6yutegfu7iwehy8"
              readOnly
            />
          </form>
          {document.queryCommandSupported("copy") && (
            <div>
              <button className="b" onClick={copyToClipboard}>
                Copy
              </button>
            </div>
          )}
        </div>
        <br />
        <i style={{ color: "red" }}>
          Contact our agent after payment for funding to reflect.
        </i>
      </div>
    </div>
  );
}
