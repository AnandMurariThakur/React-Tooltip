import Tooltip from "./Tooltip";

const App = () => {
  const positions = ["right", "top", "left", "bottom"];

  return (
    <div className="app">
      {/* Iterate over the positions array and create a Tooltip component for each position */}
      {positions.map((position, index) => {
        return (
          <Tooltip
            key={index}
            text="This tooltip is at"
            position={`${position}`}
          >
            {/* Render a button as the children of the Tooltip component */}
            <button className="hover-button">
              Hover over me to check tooltip at {`${position}`}
            </button>
          </Tooltip>
        );
      })}
    </div>
  );
};

export default App;
