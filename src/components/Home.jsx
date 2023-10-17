import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowDown, BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/Photo.png";
import CV from '../assets/cv.pdf';

const Home = ({ ratio }) => {
  // const clientCount = useRef(null);
  const projectCount = useRef(null);

  // const animationClientsCount = () => {
  //   animate(0, 100, {
  //     duration: 1,
  //     onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
  //   });
  // };
  const animationProjectsCount = () => {
    animate(0, 50, {
      duration: 1,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };

  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br /> Shaquib Khan
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A Developer", "A Designer", "A Creator"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:shaquibkhanrdx34@gmail.com">Hire Me</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>

          <p>
            <a href={CV} download>
              <button>
                Resume
                <a href="#work">
                  <BsArrowDown />
                </a>
              </button>
            </a>
          </p>

          <aside>
            <article>
              <p>
                +
                {ratio < 2.1 && (
                  <motion.span
                    ref={projectCount}
                    whileInView={animationProjectsCount}
                  >
                    500
                  </motion.span>
                )}
              </p>
              <span>Projects Done</span>
            </article>

            <article data-special>
              <p>Contact</p>
              <span>shaquibkhanrdx34@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="Shaquib Khan" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
