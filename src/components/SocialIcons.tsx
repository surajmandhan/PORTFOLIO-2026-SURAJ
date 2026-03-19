import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { MdArrowOutward } from "react-icons/md";
import { useEffect } from "react";
import HoverLinks from "./HoverLinks";

const SocialIcons = () => {
  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;

    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;

      const rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };

      document.addEventListener("mousemove", onMouseMove);

      updatePosition();

      return () => {
        elem.removeEventListener("mousemove", onMouseMove);
      };
    });
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a href="https://in.linkedin.com/in/suraj-parkash-mandhan-556a61246" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
        </span>
        <span>
          <a href="https://www.facebook.com/BeingSurajSingh7/" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
        </span>
        <span>
          <a href="https://wa.me/919068327292" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
        </span>
        <span>
          <a href="https://www.instagram.com/suraj.mandhan" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </span>
      </div>
      <a className="resume-button" href="/Suraj Parkash (Resume).pdf" target="_blank" rel="noopener noreferrer">
        <HoverLinks text="RESUME" />
        <span>
          <MdArrowOutward />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
