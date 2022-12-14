import "./App.css";
import Day1 from "./components/Day1";
import Day2 from "./components/Day2";
import Day3 from "./components/Day3";
import Day4 from "./components/Day4";
import Day6 from "./components/Day6";
import Day16 from "./components/Day16";
import Day87 from "./components/Day87";
import Day48 from "./components/Day48";
import Day37 from "./components/Day37";
import Day101 from "./components/Day101";
import Day103 from "./components/Day103";

function App() {
  const sampleArray = [
    <Day1 />,
    <Day2 />,
    <Day3 />,
    <Day4 />,
    <Day6 />,
    <Day16 />,
    <Day87 />,
    <Day48 />,
    <Day37 />,
    <Day101 />,
    <Day103 />,
  ];

  return (
    <div className="app">
      <div className="app__header">
        <h1 className="app__headerTitle">CSS SAMPLES</h1>
      </div>
      <div className="app__body">
        {sampleArray.map((sample) => {
          return <div className="app__sample">{sample}</div>;
        })}
      </div>
    </div>
  );
}

export default App;
