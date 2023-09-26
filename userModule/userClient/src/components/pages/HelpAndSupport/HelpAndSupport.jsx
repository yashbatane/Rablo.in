import React, { useRef, useState, useEffect } from "react";
import "./HelpAndSupport.css";

import "./HelpAndSupport.scss";

import emailjs from "@emailjs/browser";
// import AOS from 'aos';
import growth from "./HelpAndSupportComponents/assets/images/growthcc0-.png";
import cloud from "./HelpAndSupportComponents/assets/images/cloudcc0-.png";
import success from "./HelpAndSupportComponents/assets/images/successcc0-.png";
import { Link } from "react-router-dom";

const StudentFaq = [
  {
    question: " How can your platform benefit educators?",
    answer:
      "Our platform can help educators teach better, grow their businesses, and build their brands by providing a ready-to-teach ecosystem and a hybrid model that combines the benefits of multiple modes.",
  },
  {
    question:
      "How does your platform differ from other SaaS (Service as a Software) products?",
    answer:
      "Our platform is not just another SAAS product, it is a step-by-step approach to upskilling educators and making things easier for them. It is also highly flexible and adaptable to different teaching formats and modes.",
  },
  {
    question: " What services do you offer?",
    answer:
      "We offer profile and course listing services, LMS solutions for live class conduction, content support, an AI-guided teaching engine, and much more.",
  },
  {
    question:
      " Will I get any demo class before hiring a full time tuition service?",
    answer:
      "Yes, once we find a perfect Home Tutor for you based on your requirement, we arrange a free 3 days demo class session by our home tutor at your preferred place. You can finalise the tutor in you like the demo classes.",
  },
  {
    question: " What if I do lot like the demo class?",
    answer:
      "If the student or parents are not satisfied with the demo class, we arrange another home tutor who can stand on their expectations.",
  },
  {
    question: " How much can any educator earn through us?",
    answer:
      "The amount an educator can earn through our platform depends on various factors such as the number of students, the hourly rate, and the frequency of classes. The exact amount an educator earns will depend on their individual circumstances and efforts to attract students.",
  },
  {
    question: "How can any educator take classes through us?",
    answer:
      "Educators can take classes through us using either online live streaming sessions or live interactive sessions. Both of these modes allow for conducting one-to-one or batch classes. Additionally, we also serve offline educators who take classes at students’ homes.",
  },
  {
    question: "Are there any free services available?",
    answer:
      "Yes, we offer a portion of our services for Forever free to access for all, remaining services comes with premium subscription.",
  },
  {
    question: "How can I access your services?",
    answer:
      "All of our services are accessible through our website, we are also working on an android based application that will be finalized soon.",
  },
  {
    question: "How does your platform support educators in teaching better?",
    answer:
      "Our Ready to Teach Ecosystem provides tools and resources to make the teaching process easier, including an LMS for live & offline class management, content support for educators, and an AI-guided teaching engine to mimic the best class planning patterns.",
  },
  {
    question:
      "How does your platform facilitate free-will decision-making for educators?",
    answer:
      "Our services are highly flexible and not tied to any specific format or mode, allowing educators to teach in the way that works best for them and their students.",
  },
  {
    question: "How does Educator can earn through us?",
    answer:
      "Educators can primarily earn through teaching students and receive payment for their services. They may also earn additional income by selling recorded lecture courses or through rewards and incentives offered by the company for exceptional performance",
  },
  {
    question: "How do we protect your fee payment?",
    answer:
      "To protect the fee payment, we collect the fee from the students in advance and temporarily hold it until the end of the period, typically a month. Then, the funds are credited to the educator. In case of any disputes, we have a process in place to either refund the student or credit the educator based on the circumstances. To further ensure security, we may implement additional measures like secure payment gateways and fraud detection systems.",
  },
  {
    question: "What kind of data do you collect on educators?",
    answer:
      "We collect data such as: personal information (such as name, email, phone number), professional information (such as teaching experience, qualifications, expertise), performance metrics (such as student ratings, completion rates), and payment information (such as bank account details for pay-outs). This data is used to match educators with students, track their performance and pay them accurately.",
  },
  {
    question:
      " How does the platform match students with the best-suited tutors?",
    answer:
      " We use a combination of factors including student preferences, learning style, and performance data.",
  },
  {
    question: " How does the platform help me grow my tuition business?",
    answer:
      "We provide tools for marketing, scheduling, and performance tracking, as well as support for business development.",
  },
  {
    question:
      "  How is your service different from other online tutoring platforms?",
    answer:
      " Rablo.in is a unique online tutoring platform that offers both business and technology support to educators. We aim to provide a comprehensive solution for educators looking to build their tutoring careers. Our platform differentiates itself from others by offering a range of support services, from payment protection to student management tools. With Rablo.in, educators have everything they need to succeed in one convenient place.",
  },
];

const HelpAndSupport = () => {
  const Form = () => {
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPELATE_ID,
          form.current,
          process.env.REACT_APP_SECRET_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
    return (
      <>
        <div className="helpandsupportformcontainer">
          <h1>Ask Your Enquiry Here</h1>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="user_name"
              placeholder=" Name"
              required={true}
              autoComplete="off"
            />
            <input
              type="text"
              name="mobile_number"
              placeholder="Mobile Numebr"
              required={true}
            />
            <input type="email" name="user_email" placeholder="Email" />
            <textarea
              name="message"
              placeholder="Question"
              required={true}
              autoComplete="off"
            />
            <button type="Submit" value="Send">
              {" "}
              Send
            </button>
          </form>
        </div>
      </>
    );
  };
  const Accordian = ({ data, heading, title, desc, subHeading }) => {
    const [active, setActive] = useState(0);
    const clickHandler = (index) => {
      if (index === active) {
        setActive(0);
        return;
      }
      setActive(index);
    };
    return (
      <div className="accordiancontainer">
        <div style={{ flex: 0.6 }}>
          <div className="faq__headingContainer">
            <h3
              className="faq_heading"
              data-aos={"fade-bottom"}
              data-aos-duration="1000"
              data-aos-once="true"
            >
              {title}
            </h3>

            <div className="helpAndSupport__heading">
              <div className="helpAndSupport__accordion__hr"></div>

              <p className="faq__accordion__para">{heading}</p>
              {"    "}
              <div className="helpAndSupport__accordion__hr"></div>
            </div>

            <p className="faq__accordion__heading">{desc}</p>

            <p className="">{subHeading}</p>
          </div>
        </div>{" "}
        <div>
          {data.map((item, index) => (
            <div key={index} className="accordian">
              <div
                className={
                  index + 1 === active ? "question active " : "question"
                }
                onClick={() => {
                  clickHandler(index + 1);
                }}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <p style={{ margin: 0 }}>Q: {item.question}</p>
                <p>
                  <i
                    className={`fas fa-angle-${
                      index + 1 === active ? "up" : "down"
                    }`}
                  ></i>
                </p>
              </div>
              <div className={index + 1 === active ? "answer show" : "answer"}>
                <p>
                  <strong>Ans) </strong>
                  {" " + item.answer}
                </p>
              </div>
            </div>
          ))}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "Center",
              padding: "1rem",
            }}
          >
            <Link to="/join"><button className="accordion_btn">Join Us Now</button></Link>
          </div>
        </div>
      </div>
    );
  };
  //aos
  //   useEffect(() => {
  //     AOS.init()
  // }, [])
  return (
    //BEM Nomenclature
    <div className="userClient__helpAndSupport">
      <div className="helpAndSupport__heroSection">
        <h1
          className="helpAndSupport__heroHeading"
          data-aos={"fade-right"}
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <span className="helpAndSupport__heroHeading__main">
            {" "}
            Help &amp;{" "}
          </span>
          Support
        </h1>
        <p
          className="helpAndSupport__heroPara"
          data-aos={"fade-right"}
          data-aos-duration="800"
          data-aos-once="true"
          data-aos-delay={"500"}
        >
          Here, you'll find the answers to your questions and the resources you
          need to get the most out of Rablo.in. Whether you're a new or
          experienced user, we're here to help.
        </p>
        <div className="helpAndSupport__accordions__hr"></div>
        <div className="helpAndSupport__btnContainer">
          <button
            className="helpAndSupport__btnf"
            data-aos={"fade-up"}
            data-aos-duration={"1000"}
            data-aos-once="true"
          >
            Explore FAQs
          </button>
          <button
            className="helpAndSupport__btns"
            data-aos={"fade-up"}
            data-aos-duration={"1000"}
            data-aos-once="true"
          >
            Ask Expert
          </button>
        </div>
        <div class="custom-shape-divider-bottom-1676396431">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"
              opacity=".25"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              class="shape-fill"
            ></path>
            <path
              d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>

      <div
        className="helpAndSupport__cardContainer"
        data-aos={"fade-up"}
        data-aos-duration="500"
        data-aos-once="true"
      >
        <div className="helpAndSupport__card">
          <div className="">
            <div className="helpAndSupport__cardIconContainer">
              <img
                className="helpAndSupport__cardIcon"
                src={success}
                alt="..."
              />
            </div>
          </div>
          <h3 className="helpAndSupport__cardHeading">Live chat</h3>
          <p className="helpAndSupport__cardDesc">
            For an immediate response, use our live chat feature to speak with a
            representative in real-time.
          </p>
        </div>
        <div className="helpAndSupport__card">
          <div className="">
            <div className="helpAndSupport__cardIconContainer">
              <img
                className="helpAndSupport__cardIcon"
                src={growth}
                alt="..."
              />
            </div>
          </div>
          <h3 className="helpAndSupport__cardHeading">Email Support</h3>
          <p className="helpAndSupport__cardDesc">
            If you prefer to send an email, our support team is available 24/7
            to respond to your questions.
          </p>
        </div>
        <div className="helpAndSupport__card">
          <div className="">
            <div className="helpAndSupport__cardIconContainer">
              <img className="helpAndSupport__cardIcon" src={cloud} alt="..." />
            </div>
          </div>
          <h3 className="helpAndSupport__cardHeading">On Call Support</h3>
          <p className="helpAndSupport__cardDesc">
            If you need immediate assistance, our support team is available 24/7
            to answer any questions you may have.
          </p>
        </div>
      </div>

      <div className="helpAndSupport__contentSection">
        <div className="helpAndSupport__contentSection__faq faqcontainer">
          <div className="faq__accordionContainer allaccordians">
            <Accordian
              data={StudentFaq}
              title="FAQs"
              heading="Frequently Asked Questions"
              desc="Have Questions? We are here to help."
              subHeading="FOR EDUCATORS"
            />
          </div>
        </div>
      </div>
      <div
        className="helpAndSupport__footer"
        data-aos={"fade-bottom"}
        data-aos-duration={"1000"}
        data-aos-once="true"
      >
        <svg
          className="helpAndSupport__footer__svgWave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L60,74.7C120,85,240,107,360,101.3C480,96,600,64,720,42.7C840,21,960,11,1080,10.7C1200,11,1320,21,1380,26.7L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
        <div className="helpAndSupport__footerContainer">
          <div className="helpAndSupport__footerHeadingContainer">
            <h2
              className="helpAndSupport__footerHeading"
              data-aos={"fade-up"}
              data-aos-duration={"1000"}
              data-aos-once="true"
            >
              Need help ?
            </h2>
            <p
              className="helpAndSupport__footerPara"
              data-aos={"fade-right"}
              data-aos-duration={"1000"}
              data-aos-once="true"
              data-aos-delay={"500"}
            >
              If you can’t find the answer you’re looking for, don’t hesitate to
              reach out to our support team. Our dedicated team of experts is
              available 24/7 to assist you with any questions or concerns.
            </p>
          </div>
          <div className="helpAndSupport__footer__form">
            <div>
              <div className="form-group">
                <input type="text" placeholder="Name" />
              </div>
              <div className="form-group">
                <input type="text" placeholder="PhoneNo" />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Email" />
              </div>
              <div className="form-group">
                <textarea
                  rows={3}
                  style={{ width: "26vw", overflow: "hidden" }}
                  type="text"
                  placeholder="Message"
                />
              </div>
            </div>
            <div className="helpAndSupport__footer__btnContainer">
              <button
                className="helpAndSupport__footer__btn"
                data-aos={"fade-up"}
                data-aos-duration={"1000"}
                data-aos-once="true"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpAndSupport;
