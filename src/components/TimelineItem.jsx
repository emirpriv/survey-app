import "../styles/timeline.css";
const TimelineItem = ({ memory }) => {
  return (
    <div className="timeline-item">
      <img src={memory.image} alt={memory.title} />
      <h3>{memory.title}</h3>
      <p>{memory.description}</p>
      <span>{memory.date}</span>
    </div>
  );
};

export default TimelineItem;
