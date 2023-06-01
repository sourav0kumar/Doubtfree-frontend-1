import React, { useEffect, useState } from "react";
import classNames from "classnames";

const AnimatedText = () => {
  const [index, setIndex] = useState(0);
  const texts = ["certified.", "skilled.", "trained."];
  const delay = 3000; // Delay between text changes in milliseconds (adjusted)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, delay);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="h-20 overflow-hidden mr-6 mt-0">
      <div
        className={classNames("ml:text-6xl md:text-5xl lg:text-6xl font-bold relative", {
          "translate-y-full": index === 0,
          "-translate-y-full": index === 1,
          "-translate-y-full": index === 2,
        })}
        style={{ transitionDuration: "2s" }}
      >
        {texts.map((text, i) => (
          <div
            key={i}
            className={classNames("text-blue-500 absolute", {
              "opacity-100": index === i,
              "opacity-0": index !== i,
            })}
            style={{ top: `${i * 100}%` }}
          >
            <span className="text-black">Get</span> {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedText;
