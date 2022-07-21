import React from "react";
import SubHeading from "../components/SubHeading";

export default function HowItWorks() {
  return (
    <div className="how">
      <SubHeading title="How it Works" />
      <div className="fx">
        <h1 style={{ fontWeight: "bolder", color: "blue" }}>What is FX?</h1>
        <p>
          Foreign Exchange, also known as Forex or FX, is the world’s largest
          financial market with around $6.6 trillion-worth of currencies traded
          daily (BIS 2019). Forex prices are always quoted in pairs, showing how
          one currency moves relative to another. The most actively traded pair
          is the EUR/USD (euro vs US dollar), while the GBP/USD (British pound
          vs US dollar) is also very popular. Our EUR/USD spread is just 0.6
          tics wide for 23 hours a day and doesn’t rise on increased market
          volatility. Whilst other financial markets have a central exchange,
          Forex trading is done through networks of banks, dealers and brokers,
          and is carried out 24 hours a day, 5 days a week. <br />
          But, what does ‘Forex trading’ actually mean? Well, it’s ‘the buying
          and selling of global currencies’ with the goal of making a profit,
          and it can be performed by both businesses and individuals – that’s
          you!
        </p>
        <h1 style={{ fontWeight: "bolder", color: "blue" }}>
          What can influence the Forex market?{" "}
        </h1>
        <p>
          Being a global market, there are a lot of factors that can easily
          influence Forex prices. These include:
        </p>
        <ul>
          <li>Inflation</li>
          <li>Interest rates</li>
          <li>Government policy</li>
          <li>Employment figures</li>
          <li>Demand for imports and exports</li>
        </ul>
        <p>
          As there are so many traders and so much money exchanging hands, price
          fluctuations can occur rapidly, making Forex trading extremely
          fast-paced and volatile.
        </p>
        <h1 style={{ fontWeight: "bolder", color: "blue" }}>
          How to trade Forex
        </h1>
        <p>
          Now you know what Forex trading is, you might be keen to have a go
          yourself. But, how do you trade Forex? And what should you look out
          for? First of all, you need to get a trading platform. At Trade
          Nation, you can trade Forex on our spread trading platform whilst our
          MT4 platform is for CFDs. Secondly, you need to decide which currency
          pair you want to trade. At Trade Nation we have over 30 pairs
          available. When choosing which pairs to trade, there are a few things
          you should consider:
        </p>
        <ul>
          <li>
            How stable or unstable are the countries represented in the currency
            pair? A country’s political and economic stability relates directly
            to the value of their currency.
          </li>
          <li>
            Are there any big announcements coming in relation to the two
            countries in the currency pair? Factors such as elections, an
            announcement on interest rates or economic data releases can create
            volatility, resulting in price fluctuations.
          </li>
          <li>
            During times of stability, there won’t be many price fluctuations
            within the pair, so chances for making a profit are smaller.
          </li>
          <li>
            When things are turbulent (or if you’re trading with minor or exotic
            currencies), prices can move around dramatically. This will increase
            your chance of making a profit, but it will also raise the
            possibility of making a loss – you have to stay nimble!
          </li>
        </ul>
        <h1 style={{ fontWeight: "bolder", color: "blue" }}>In conclusion</h1>
        <p>
          FX trading is exciting and fast-moving. This means that there are
          opportunities to profit from price moves but risks as well. This is
          particularly the case when using spread trades or CFDs to speculate on
          FX as both products involve leverage where you can control a large
          position through a relatively modest deposit. It’s important to
          undertake strict money and risk management to protect yourself against
          adverse market moves, and never speculate with money you can’t afford
          to lose.
        </p>
      </div>
    </div>
  );
}
