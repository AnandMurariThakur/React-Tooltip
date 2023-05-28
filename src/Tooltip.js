import { useState } from "react";

const Tooltip = ({ text, position, children }) => {
  // State to track the hover state of the tooltip
  const [isHovered, setIsHovered] = useState(false);

  // Event handler for mouse enter event
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Event handler for mouse leave event
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Function to determine the positioning of the tooltip based on the provided position prop
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
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {/* Render the tooltip when hovered */}
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
