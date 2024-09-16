import CSS from "../../src/assets/images/CSS.png";
import HTML from "../../src/assets/images/HTML.png";
import MaterialUI from "../../src/assets/images/material-ui.png";
import react from "../../src/assets/images/react.png";
import js from "../../src/assets/images/js.png";
import redux from "../../src/assets/images/redux.png";
import git from "../../src/assets/images/git.png";
import sass from "../../src/assets/images/sass.png";
import { motion } from "framer-motion";

function FrontEndSkills() {
  return (
    <motion.div
      className="mt-10"
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1 }}
    >
      <ul className="flex flex-col gap-5">
        <li className="flex items-center">
          <div className="w-1/4 max-[640px]:w-1/3 flex justify-center">
            <img
              src={js}
              className="w-20 px-2 max-[640px]:w-14"
              alt="javascript"
            />
          </div>
          <div className="w-3/4 max-[640px]:w-2/3">
            <div className="bg-black w-full h-5 max-[640px]:h-3 rounded-md flex items-center">
              <motion.div
                className="bg-gradient-to-r from-[#f02981] to-[#c81901] h-[80%] rounded-md"
                initial={{ width: "0%" }}
                whileInView={{ width: "90%" }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              ></motion.div>
            </div>
          </div>
        </li>
        <li className="flex items-center">
          <div className="w-1/4 max-[640px]:w-1/3 flex justify-center">
            <img src={react} className="w-20 max-[640px]:w-14" alt="react" />
          </div>
          <div className="w-3/4 max-[640px]:w-2/3">
            <div className="bg-black w-full h-5 max-[640px]:h-3 rounded-md flex items-center">
              <motion.div
                className="bg-gradient-to-r from-[#f02981] to-[#c81901] h-[80%] rounded-md"
                initial={{ width: "0%" }}
                whileInView={{ width: "90%" }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              ></motion.div>
            </div>
          </div>
        </li>
        <li className="flex items-center">
          <div className="w-1/4 max-[640px]:w-1/3 flex justify-center">
            <img src={MaterialUI} className="w-20 max-[640px]:w-14" alt="html" />
          </div>
          <div className="w-3/4 max-[640px]:w-2/3">
            <div className="bg-black w-full h-5 max-[640px]:h-3 rounded-md flex items-center">
              <motion.div
                className="bg-gradient-to-r from-[#f02981] to-[#c81901] h-[80%] rounded-md"
                initial={{ width: "0%" }}
                whileInView={{ width: "90%" }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              ></motion.div>
            </div>
          </div>
        </li>
        <li className="flex items-center">
          <div className="w-1/4 max-[640px]:w-1/3 flex justify-center">
            <div className="flex items-center gap-1 max-[850px]:flex-col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 54 33"
                className="w-20 max-[640px]:w-14"
              >
                <g clipPath="url(#prefix__clip0)">
                  <path
                    fill="#38bdf8"
                    fillRule="evenodd"
                    d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
                    clipRule="evenodd"
                  />
                </g>
                <defs>
                  <clipPath id="prefix__clip0">
                    <path fill="#fff" d="M0 0h54v32.4H0z" />
                  </clipPath>
                </defs>
              </svg>
              <span className="text-xl font-bold max-[640px]:text-base">
                tailwindcss
              </span>
            </div>
          </div>
          <div className="w-3/4 max-[640px]:w-2/3">
            <div className="bg-black w-full h-5 max-[640px]:h-3 rounded-md flex items-center">
              <motion.div
                className="bg-gradient-to-r from-[#f02981] to-[#c81901] h-[80%] rounded-md"
                initial={{ width: "0%" }}
                whileInView={{ width: "75%" }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              ></motion.div>
            </div>
          </div>
        </li>
        <li className="flex items-center">
          <div className="w-1/4 max-[640px]:w-1/3 flex justify-center">
            <img src={HTML} className="w-20 max-[640px]:w-14" alt="html" />
          </div>
          <div className="w-3/4 max-[640px]:w-2/3">
            <div className="bg-black w-full h-5 max-[640px]:h-3 rounded-md flex items-center">
              <motion.div
                className="bg-gradient-to-r from-[#f02981] to-[#c81901] h-[80%] rounded-md"
                initial={{ width: "0%" }}
                whileInView={{ width: "90%" }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              ></motion.div>
            </div>
          </div>
        </li>
        <li className="flex items-center">
          <div className="w-1/4 max-[640px]:w-1/3 flex justify-center">
            <img src={CSS} className="w-20 max-[640px]:w-14" alt="css" />
          </div>
          <div className="w-3/4 max-[640px]:w-2/3">
            <div className="bg-black w-full h-5 max-[640px]:h-3 rounded-md flex items-center">
              <motion.div
                className="bg-gradient-to-r from-[#f02981] to-[#c81901] h-[80%] rounded-md"
                initial={{ width: "0%" }}
                whileInView={{ width: "80%" }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              ></motion.div>
            </div>
          </div>
        </li>
        <li className="flex items-center">
          <div className="w-1/4 max-[640px]:w-1/3 flex justify-center">
            <img src={sass} className="w-20 max-[640px]:w-14" alt="css" />
          </div>
          <div className="w-3/4 max-[640px]:w-2/3">
            <div className="bg-black w-full h-5 max-[640px]:h-3 rounded-md flex items-center">
              <motion.div
                className="bg-gradient-to-r from-[#f02981] to-[#c81901] h-[80%] rounded-md"
                initial={{ width: "0%" }}
                whileInView={{ width: "75%" }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              ></motion.div>
            </div>
          </div>
        </li>

        <li className="flex items-center">
          <div className="w-1/4 max-[640px]:w-1/3 flex justify-center">
            <img src={git} className="w-20 max-[640px]:w-14" alt="git" />
          </div>
          <div className="w-3/4 max-[640px]:w-2/3">
            <div className="bg-black w-full h-5 max-[640px]:h-3 rounded-md flex items-center">
              <motion.div
                className="bg-gradient-to-r from-[#f02981] to-[#c81901] h-[80%] rounded-md"
                initial={{ width: "0%" }}
                whileInView={{ width: "80%" }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              ></motion.div>
            </div>
          </div>
        </li>
      </ul>
    </motion.div>
  );
}

export default FrontEndSkills;
