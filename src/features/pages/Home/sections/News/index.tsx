import type { CardProps } from "../../components/Card";
import Card from "../../components/Card";
import HighlightedButton from "../../components/HighlightedButton";
import "./index.scss";

const NewsSection: React.FC = () => {
  const cardProps: CardProps[] = [
    {
      link: "https://www.iitdh.ac.in/greetings-indian-institute-technology-dharwad-we-are-pleased-invite-you-register-gian-course-titled",
      image:
        "https://www.iitdh.ac.in/sites/default/files/styles/crop_thumbnail/public/2025-06/ES-0.jpg?itok=Fg_3mfNy",
      description:
        "Greetings from the Indian Institute of Technology Dharwad. We are pleased to invite you to register for the GIAN course titled: &quot;Modelling, Control, and Operation of Grid-Connected Green Hydrogen Energy Systems&quot;, approved under the GIAN programme.",
    },
    {
      link: "https://www.iitdh.ac.in/mr-debashis-biswas-department-humanities-economics-arts-rural-technologies-has-successfully",
      image:
        "https://www.iitdh.ac.in/sites/default/files/styles/crop_thumbnail/public/2025-06/nptel-0.jpg?itok=X4xFTO00",
      description:
        "Mr Debashis Biswas, from the Department of Humanities, Economics, Arts, &amp; Rural Technologies, has successfully completed the NPTEL course “Philosophy and Critical Thinking”(Jan-April 25) with an outstanding score of 92%, earning Elite + Gold certification",
    },
    {
      link: "https://www.iitdh.ac.in/we-are-proud-announce-dr-c-ravi-kumar-associate-professor-chemical-engineering-and-his",
      image:
        "https://www.iitdh.ac.in/sites/default/files/styles/crop_thumbnail/public/2025-05/Dr.C.Ravikumar_Patent-0.jpg?itok=NhmK52Xa",
      description:
        "We are proud to announce that Dr. C. Ravi Kumar, Associate Professor of Chemical Engineering and his collaborators have achieved a significant milestone with the publication of their Indian patent application.",
    },
  ];
  return (
    <div className="news-section">
      <div className="news-section-header">
        <h2>Latest News</h2>
        <HighlightedButton text="View More News" />
      </div>
      <div className="news-section-content">
        {cardProps.map((card, index) => (
          <Card {...card} key={index} />
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
