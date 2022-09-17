import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "about", "works", "skills", "contact"].map(
        (e, index) => (
          <a
            href={`#${e}`}
            key={e + index}
            className="app__navigation-dot"
            style={active === e ? { backgroundColor: "#29BAF1" } : {}}
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;
