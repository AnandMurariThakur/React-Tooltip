import React, { useState } from "react";

const Tooltip = ({ text, position, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    console.log("hiuvsdvds");
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    console.log("hiu");
    setIsHovered(false);
  };

  //we have added this function to check the position for tooltip that we have passed as props here and add styling to our tooltip to set positioned as per requirement
  const getTooltipPositionStyle = () => {
    switch (position) {
      case "top":
        return { top: "-90%", left: "50%", transform: "translateX(-50%)" };
      case "bottom":
        return { top: "100%", left: "50%", transform: "translateX(-50%)" };
      case "right":
        return { top: "10%", left: "100%" };
      case "left":
        return { top: "10%", right: "100%" };
      default:
        return {};
    }
  };

  return (
    <div
      className="tooltip-container"
      style={{ position: "relative", display: "inline-block" }}
      // React has provided the following event handlers for detecting the hover state for an element
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {/* handled the tooltip with isHovered state */}
      {isHovered && (
        <div
          className="tooltip"
          style={{
            position: "absolute",
            ...getTooltipPositionStyle(),
            backgroundColor: "#333",
            color: "#fff",
            padding: "0.5rem",
            borderRadius: "4px",
            fontSize: "16px",
          }}
        >
          {text} {position}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
