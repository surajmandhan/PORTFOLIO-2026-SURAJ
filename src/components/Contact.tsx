import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:work.suraj.dev@gmail.com" data-cursor="disable">
                work.suraj.dev@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>B.tech</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://in.linkedin.com/in/suraj-parkash-mandhan-556a61246"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://www.facebook.com/BeingSurajSingh7/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Facebook <MdArrowOutward />
            </a>
            <a
              href="https://wa.me/919068327292"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              WhatsApp <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/suraj.mandhan"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by{" "}
              <span>
                <a
                  href="https://in.linkedin.com/in/suraj-parkash-mandhan-556a61246"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="disable"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Suraj Parkash
                </a>
              </span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
