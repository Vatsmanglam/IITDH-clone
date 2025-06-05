import "./index.scss";

export interface CardLinkProps {
  text: string;
  image: string;
  link: string;
  even: boolean;
}

const CardLink: React.FC<CardLinkProps> = (props: CardLinkProps) => {
  const { text, image, link, even } = props;
  return (
    <a
      href={link}
      className={`card-link ${even ? "even" : "odd"}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="card-link-content">
        <img className="card-link-content-image" src={image} alt={text} />
        <p className="card-link-content-text">{text}</p>
      </div>
    </a>
  );
};

export default CardLink;
