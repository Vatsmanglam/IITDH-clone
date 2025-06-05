import Card from "../../components/Card";
import HighlightedButton from "../../components/HighlightedButton";
import "./index.scss";

const UpcomingEvents: React.FC = () => {
  return (
    <div className="upcoming-events-section">
      <div className="upcoming-events-section-header">
        <h2>Upcoming Events</h2>
        <HighlightedButton text="View Past Events" />
      </div>
      <div className="upcoming-events-section-content">
        <div className="upcoming-events-section-content-card">
          <Card
            image="https://www.iitdh.ac.in/sites/default/files/styles/crop_thumbnail/public/2025-01/Untitled_0.png?itok=V3sDzE61"
            description="  4th INTERNATIONAL CONFERENCE ON FRICTION BASED PROCESSES-2025 at IIT TIRUPATI India during 6-8 September 2025."
            link="https://www.iitdh.ac.in/4th-international-conference-friction-based-processes-2025-iit-tirupati-india-during-6-8-september"
            startTime="06/09/2025 09:00AM"
            endTime="08/09/2025 06:00PM"
          />
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
