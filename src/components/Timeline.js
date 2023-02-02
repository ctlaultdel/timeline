import "./Timeline.css";
import TimelineEvent from "./TimelineEvent";

// Container Component - pass props into TimelineEvent
const Timeline = (props) => {
  const events = props.data.events;
  const TimelineEvents = events.map((event, index) => {
    return (
      <section key={index}>
        <TimelineEvent
          name={event.person}
          status={event.status}
          timestamp={event.timestamp}
        ></TimelineEvent>
      </section>
    );
  });
  return TimelineEvents;
};

export default Timeline;
