import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import account from "../secure investment data/reg.jpeg";
import reg from "../secure investment data/re.jpeg";
import trans from "../secure investment data/trans.jpeg";
import ret from "../secure investment data/investment.jpeg";
import re from "../secure investment data/2.jpeg";

export default function SlideShow() {
  return (
    <div className="slide">
      <Carousel>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={account}
            alt="Image One"
            height={560}
          />
          <Carousel.Caption>
            <h1>Accountability</h1>
            <p>We are detailed in handling Investments</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={trans}
            alt="Image Two"
            height={560}
          />
          <Carousel.Caption>
            <h1>Transparency</h1>
            <p>We make sure you see through us</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={reg}
            alt="Image Two"
            height={560}
          />
          <Carousel.Caption>
            <h1>Easy Account Opening</h1>
            <p>Get an account in few minute</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={ret}
            alt="Image Two"
            height={560}
          />
          <Carousel.Caption>
            <h1>Outstanding Returns</h1>
            <p>With a monthly return rate of 15%-30%</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={re}
            alt="Image Two"
            height={560}
          />
          <Carousel.Caption>
            <h1>Round The Clock Respondence</h1>
            <p>With our agents available to answer to you 24/7</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
