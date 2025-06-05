import "./index.scss";

export interface HighlightedButtonProps {
  text: string;
}

const HighlightedButton: React.FC<HighlightedButtonProps> = (props) => {
  const { text } = props;
  return (
    <button className="highlighted-button">
      <div className="highlighted-button-text">{text}</div>
    </button>
  );
};

export default HighlightedButton;
