import "./App.css";
import timelineData from "./data/timeline.json";
import Timeline from "./components/Timeline";

function App() {
  // pass timelineData into Timeline
  return (
    <section>
      <h2>Timeline Events</h2>
      <Timeline data={timelineData}></Timeline>
    </section>
  );
}

export default App;
