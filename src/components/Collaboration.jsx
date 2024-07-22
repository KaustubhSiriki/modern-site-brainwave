import { brainwaveSymbol, check } from "../assets";
import { collabApps, collabContent, collabText } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";
import { useEffect } from "react";
import { motion } from "framer-motion";

const Collaboration = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".fade-in-item");
    items.forEach((item, index) => {
      item.style.animationDelay = `${index * 0.2}s`;
    });
  }, []);

  return (
    <Section crosses>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <motion.h2
            className="h2 mb-4 md:mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            AI Chat App for seamless collaboration
          </motion.h2>
          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <motion.li key={item.id} className="py-3 mb-3 fade-in-item">
                <div className="flex items-center">
                  <img src={check} alt="check" width={24} height={24} />
                  <h6 className="ml-5 body-2">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="mt-3 body-2 text-n-4">{item.text}</p>
                )}
              </motion.li>
            ))}
          </ul>
          <Button>Try it now</Button>
        </div>

        <div className="mt-4 lg:ml-auto xl:w-[38rem]">
          <p className="mb-8 body-2 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {collabText}
          </p>
          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale-75 md:scale-100">
            <div className="flex m-auto w-60 aspect-square border border-n-6 rounded-full">
              <div className="w-[6rem] m-auto p-[0.2rem] aspect-square bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img
                    src={brainwaveSymbol}
                    alt="brainwave"
                    width={48}
                    height={48}
                  />
                </div>
              </div>
            </div>
            <motion.ul
              className="absolute w-full h-full"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            >
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-1/2 left-1/2 h-[3.2rem] w-[3.2rem] -ml-[1.6rem] -mt-[1.6rem] origin-center rotate-${
                    index * 45
                  }`}
                  style={{
                    transform: `rotate(${
                      index * 45
                    }deg) translateX(10rem) rotate(-${index * 45}deg)`,
                  }}
                >
                  <div
                    className={`flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl`}
                  >
                    <img
                      className="m-auto"
                      src={app.icon}
                      alt={app.title}
                      width={app.width}
                      height={app.height}
                    />
                  </div>
                </li>
              ))}
            </motion.ul>
            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
