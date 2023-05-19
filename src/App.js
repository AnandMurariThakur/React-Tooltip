import Tooltip from "./Tooltip";

const App = () => {
  const positions = ["right", "top", "left", "bottom"];

  return (
    <div className="app">
      {/* passing text and position as the props to our tooltip component*/}
      {positions.map((position, index) => {
        return (
          <Tooltip
            key={index}
            text="This tooltip is at"
            position={`${position}`}
          >
            {/* here button is acting as our children for our component */}
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
