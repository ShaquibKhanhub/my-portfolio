import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://avatars.githubusercontent.com/u/111151404?v=4"}
          alt="Founder"
        />

        <h2>Shaquib Khan</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://twitter.com/RDX32778024" target={"blank"}>
            <AiFillTwitterCircle />
          </a>
          <a href="https://instagram.com/shaquib_khann" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/ShaquibKhanhub" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
