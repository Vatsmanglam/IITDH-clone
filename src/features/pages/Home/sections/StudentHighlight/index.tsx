import { Slide } from "react-slideshow-image";
import type { CardProps } from "../../components/Card";
import HighlightedButton from "../../components/HighlightedButton";
import Card from "../../components/Card";
import "./index.scss";

const cardLinks: CardProps[] = [
  {
    description:
      "Mr. DIVYANSH PRAKASH from the Department of Computer Science and Engineering showcased outstanding athletic prowess at the General Championship event held at IIT Dharwad!- Congratulations, Divyansh!",
    image:
      "https://www.iitdh.ac.in/sites/default/files/styles/crop_thumbnail/public/2025-05/divyansh2-0.jpg?itok=BgSVoeEv",
    link: "https://www.iitdh.ac.in/mr-divyansh-prakash-department-computer-science-and-engineering-showcased-outstanding-athletic",
  },
  {
    description:
      "Ms. Vinitha John from the Department of Humanities, Economics, Arts and Rural Technologies (HEART), IIT Dharwad, was invited as the resource person for an online orientation session on the UGC NET/JRF held on 9th April 2025.",
    image:
      "https://www.iitdh.ac.in/sites/default/files/styles/crop_thumbnail/public/2025-04/john1-0.jpg?itok=nSZeQRcj",
    link: "https://www.iitdh.ac.in/ms-vinitha-john-department-humanities-economics-arts-and-rural-technologies-heart-iit-dharwad-was",
  },
  {
    description:
      "Mr. Vedansh Chaudhary, a student from the Department of Mathematics, IIT dhArwAD, participated in the prestigious Research and Innovation Symposium in Computer Science (RISC 2025), organized by the Department of CSE at IIT Bombay.",
    image:
      "https://www.iitdh.ac.in/sites/default/files/styles/crop_thumbnail/public/2025-04/risc1-0.jpg?itok=5giJEH0y",
    link: "https://www.iitdh.ac.in/mr-vedansh-chaudhary-student-department-mathematics-iit-dharwad-participated-prestigious-research",
  },
  {
    description:
      'Showcasing Innovation: Poster Presentations at ANRF-INAE Conclave 2025. As part of the ANRF-INAE Conclave on "Atmanirbhar Technologies: Engineering a Secure Future" at IIT Dharwad.',
    image:
      "https://www.iitdh.ac.in/sites/default/files/styles/crop_thumbnail/public/2025-03/conclave1-0.jpg?itok=AqEyDrcU",
    link: "https://www.iitdh.ac.in/showcasing-innovation-poster-presentations-anrf-inae-conclave-2025-part-anrf-inae-conclave",
  },
  {
    description:
      "Ms. Debajani Rout, a PhD student under the supervisor of Prof. Santosh Kumar, Department of Physics, received the award for best oral presentation in the third international conference on Materials Science and Technology (ICMST 2025).",
    image:
      "https://www.iitdh.ac.in/sites/default/files/styles/crop_thumbnail/public/2025-03/Debajani_Award.jpg?itok=maKDkHYu",
    link: "https://www.iitdh.ac.in/ms-debajani-rout-phd-student-under-supervisor-prof-santosh-kumar-department-physics-received-award",
  },
  {
    description:
      "Ms. Vaidehi Painter, PhD Scholar in the Department of EECE, has secured the prestigious Raman-Charpak Fellowship 2024, a program issued by CEFIPRA. As part of this fellowship, she will have the opportunity to visit the XLIM Laboratory in France this year.",
    link: "https://www.iitdh.ac.in/ms-vaidehi-painter-phd-scholar-department-eece-has-secured-prestigious-raman-charpak-fellowship",
    image:
      "https://www.iitdh.ac.in/sites/default/files/styles/crop_thumbnail/public/2025-03/XLIM0.jpg?itok=Yk6rWI3W",
  },
];

const StudentHighlightSection: React.FC = () => {
  return (
    <div className="student-hightligh-section">
      <div className="student-hightligh-section-header">
        <h2>Student Highlights</h2>
        <HighlightedButton text="View More" />
      </div>
      <div className="student-hightligh-section-content">
        <Slide
          slidesToShow={3}
          arrows={true}
          transitionDuration={300}
          infinite={true}
          //   autoplay={true}
          easing="ease-out"
        >
          {cardLinks.map((card, index) => (
            <div className="student-hightligh-section-content-card" key={index}>
              <Card {...card} />
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default StudentHighlightSection;
