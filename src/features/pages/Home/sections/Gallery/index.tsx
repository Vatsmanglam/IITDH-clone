import { Slide } from "react-slideshow-image";
import type { CardProps } from "../../components/Card";
import HighlightedButton from "../../components/HighlightedButton";
import Card from "../../components/Card";
import "./index.scss";

const cardLinks: CardProps[] = [
  {
    description:
      "On 26th May 2025, the serene campus of IIT Dharwad came alive with patriotic fervor and environmental zeal as it hosted the Tiranga March and Tree Plantation Drive, organized by IIT Dharwad in collaboration with 24 Karnataka BN NCC, Dharwad.",
    link: "https://www.iitdh.ac.in/26th-may-2025-serene-campus-iit-dharwad-came-alive-patriotic-fervor-and-environmental-zeal-it",
    image:
      "https://www.iitdh.ac.in/sites/default/files/styles/crop_thumbnail/public/2025-06/zeal3-0.jpg?itok=yJF_pT7O",
  },
  {
    description:
      "Prof. Anand Konjengbam graced Che'Tech 2025 as the Chief Guest, delivering an inspiring talk on the future of technology and student innovation that left the audience motivated and forward-looking.",
    link: "https://www.iitdh.ac.in/prof-anand-konjengbam-graced-chetech-2025-chief-guest-delivering-inspiring-talk-future-technology",
    image:
      "https://www.iitdh.ac.in/sites/default/files/styles/crop_thumbnail/public/2025-06/CHETECH2-0.jpg?itok=swyx2pBp",
  },
  {
    description:
      "Professors from IIT Dharwad Represent Institution at YUGM 2025 Conclave for Vikshit Bharat. Prof. Swananda Marathe and Prof. Anand Konjengbam represented the Indian Institute of Technology (IIT) Dharwad at YUGM 2025.",
    link: "https://www.iitdh.ac.in/professors-iit-dharwad-represent-institution-yugm-2025-conclave-vikshit-bharat-prof-swananda",
    image:
      "https://www.iitdh.ac.in/sites/default/files/styles/crop_thumbnail/public/2025-05/YUGM2-0.jpg?itok=GNlJAz_5",
  },
  {
    description:
      "Youth, Discipline & National Service at IIT Dharwad-IIT Dharwad proudly hosts the NCC Annual Training Camp (ATC-III) of the 24 Karnataka Battalion, from May 19–28, 2025!",
    link: "https://www.iitdh.ac.in/youth-discipline-national-service-iit-dharwad-iit-dharwad-proudly-hosts-ncc-annual-training-camp",
    image:
      "https://www.iitdh.ac.in/sites/default/files/styles/crop_thumbnail/public/2025-05/ATC5-0.jpg?itok=HRtbbDmA",
  },
  {
    description:
      "The World Telecommunication and Information Society Day Celebration was held on 17th May 2025. Dr. Naveen Mysore Balasubramanya., Associate Professor, Department of EE&CE, Indian Institute of Technology (IIT) Dharwad, was present on the occasion.",
    link: "https://www.iitdh.ac.in/world-telecommunication-and-information-society-day-celebration-was-held-17th-may-2025-dr-naveen",
    image:
      "https://www.iitdh.ac.in/sites/default/files/styles/crop_thumbnail/public/2025-05/telecom-0.jpg?itok=6TYZnU05",
  },
  {
    description:
      "It is of great pleasure to share that Dr. C. Ravikumar, Associate Professor, Department of Chemical Engineering, Indian Institute of Technology (IIT) Dharwad, delivered an expert lecture during the One Week Self-Sponsored 6th National Workshop.",
    link: "https://www.iitdh.ac.in/it-great-pleasure-share-dr-c-ravikumar-associate-professor-department-chemical-engineering-indian",
    image:
      "https://www.iitdh.ac.in/sites/default/files/styles/crop_thumbnail/public/2025-05/VNIT_IITDH-0.jpg?itok=zR0SIiOg",
  },
];

const GallerySection: React.FC = () => {
  return (
    <div className="gallery-section">
      <div className="gallery-section-header">
        <h2>Gallery</h2>
        <HighlightedButton text="View All Gallery" />
      </div>
      <div className="gallery-section-content">
        <Slide
          slidesToShow={3}
          arrows={true}
          transitionDuration={300}
          infinite={true}
          //   autoplay={true}
          easing="ease-out"
        >
          {cardLinks.map((card, index) => (
            <div className="gallery-section-content-card" key={index}>
              <Card {...card} />
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default GallerySection;
