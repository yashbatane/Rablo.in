import React, { useState } from "react";
import { Link } from "react-router-dom";
import { question } from "./Api";
import "./faq.css";
import MyAccordion from "./MyAccordion";
export default function faq() {
  const [data, setdata] = useState(question);
  return (
    <>
      <section className="main-div">
        <p className="main-p">FAQS</p>
        <div className="faq__headWrap">
          <hr />
          <h1>Frequently Asked Questions</h1>
          <hr />
        </div>
        <p className="main-p2">Have Questions? We are here to help.</p>

        <div className="faq-section">
          {data.map((curElem) => {
            const { id } = curElem;
            return <MyAccordion key={id} {...curElem} />;
          })}
        </div>
        <div className="faq__button__wrapper">

       <Link to="/AboutUs"> <button className="faq__button" style={{margin:"auto"}}>
          <i className="far fa-arrow-alt-circle-down"></i>
          &nbsp; Know More
        </button>
        </Link>
        </div>
      </section>
    </>
  );
}
