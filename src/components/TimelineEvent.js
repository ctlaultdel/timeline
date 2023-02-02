import "./TimelineEvent.css";
import TimeStamp from "./TimeStamp";

// Presentational Component
const TimelineEvent = (props) => {
  return (
    <ul>
      <li>Name: {props.name}</li>
      <li>Status: {props.status}</li>
      <TimeStamp time={props.timestamp}></TimeStamp>
    </ul>
  );
};

export default TimelineEvent;
