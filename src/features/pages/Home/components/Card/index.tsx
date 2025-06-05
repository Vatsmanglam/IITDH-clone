import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

import "./index.scss";

export interface CardProps {
  link: string;
  image: string;
  description: string;
  startTime?: string;
  endTime?: string;
}

const Card: React.FC<CardProps> = (orops) => {
  const { image, description, link, startTime, endTime } = orops;
  return (
    <div className="card">
      <img className="card-image" src={image} alt="card-image" />
      <div className="card-content">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="card-content-link"
        >
          <div className="card-content-link-description">{description}</div>
        </a>
      </div>
      {startTime && (
        <div className="card-time">
          <FontAwesomeIcon
            icon={faCalendar}
            fill="#fff"
            className="card-time-icon"
          />
          <div>
            <span className="card-time-start">{startTime}</span>
            {endTime && <span className="card-time-end"> - {endTime}</span>}
            <div />
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
