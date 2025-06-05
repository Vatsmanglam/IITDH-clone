import "./index.scss";

export interface CardProps {
  link: string;
  image: string;
  description: string;
}

const Card: React.FC<CardProps> = (orops) => {
  const { image, description, link } = orops;
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
    </div>
  );
};

export default Card;
