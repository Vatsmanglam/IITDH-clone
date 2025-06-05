import Carousel from "react-bootstrap/Carousel";
import CardLink, { type CardLinkProps } from "./components/CardLink";
import "./index.scss";
import InformationSection from "./sections/Information";
import NewsSection from "./sections/News";
import StudentHighlightSection from "./sections/StudentHighlight";
import UpcomingEvents from "./sections/UpcomingEvents";
import GallerySection from "./sections/Gallery";
import HighlightedButton from "./components/HighlightedButton";
import Footer from "./sections/Footer";

const urls: string[] = [
  "https://www.iitdh.ac.in/sites/default/files/2024-09/banner-01.jpg",
  "https://www.iitdh.ac.in/sites/default/files/2025-05/Website%20Banner%20-%20Open%20house%20for%20JEE%20%28Advanced%29%202025%20%281800%20x%20600%20px%29%20%281%29.png",
  "https://www.iitdh.ac.in/sites/default/files/2025-04/GAIN%20Congratulations%20Banner%20%281800%20x%20600%20px%29.png",
  "https://www.iitdh.ac.in/sites/default/files/2025-05/Congratulations%20Banner%20%281800%20x%20600%20px%29%20%281%29%20%281%29.png",
  "https://www.iitdh.ac.in/sites/default/files/2025-03/Prime%20Minister%27s%20Early%20Career%20Research%20Grant%20Congratulations%20Banner%20%281800%20x%20600%20px%29%20%282%29%20%281%29.png",
  "https://www.iitdh.ac.in/sites/default/files/2025-03/Prof.%20Punnag%20Chatterjee%20and%20Prof.%20Vyom%20Sharma%20Congratulatory%20Banner%20%281800%20x%20600%20px%29.png",
  "https://www.iitdh.ac.in/sites/default/files/2024-09/CCS%20Internship%20Banner.png",
  "https://www.iitdh.ac.in/sites/default/files/2024-10/Net%20Zero%20Academic%20Campus%20%281800%20x%20600%20px%29_V3_0.jpg",
  "https://www.iitdh.ac.in/sites/default/files/2024-09/banner-03.jpg",
  "https://www.iitdh.ac.in/sites/default/files/2024-09/banner-04.jpg",
];

const cardLinks: Omit<CardLinkProps, "even">[] = [
  {
    text: "People",
    image:
      "https://www.iitdh.ac.in/sites/default/files/2024-08/icon-recruitment-faculty-lg_0.png",
    link: "https://www.iitdh.ac.in/faculty",
  },
  {
    text: "Departments",
    image:
      "https://www.iitdh.ac.in/sites/default/files/2024-08/icon-campus-lg_0.png",
    link: "https://www.iitdh.ac.in/departments",
  },
  {
    text: "Facilities",
    image:
      "https://www.iitdh.ac.in/sites/default/files/2024-08/icon-facilities-lg.png",
    link: "https://www.iitdh.ac.in/research-facilities",
  },
  {
    text: "News",
    image:
      "https://www.iitdh.ac.in/sites/default/files/2024-08/icon-news-lg_1.png",
    link: "https://www.iitdh.ac.in/news",
  },
];

const collegeStats = [
  {
    title: "Students",
    count: "1298",
  },
  {
    title: "Faculty Members",
    count: "112",
  },
  {
    title: "Permanent Staff",
    count: "72",
  },
  {
    title: "Outsourced Staff",
    count: "68",
  },
];

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <Carousel className="home-page-carousel" indicators={false}>
        {urls.map((url, index) => (
          <Carousel.Item key={index}>
            <img
              className="home-page-carousel-image"
              src={url}
              alt={`Slide ${index + 1}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="home-page-links">
        {cardLinks.map((link, index) => (
          <CardLink
            key={index}
            text={link.text}
            image={link.image}
            link={link.link}
            even={index % 2 === 0}
          />
        ))}
      </div>
      <InformationSection />
      <NewsSection />
      <StudentHighlightSection />
      <UpcomingEvents />
      <GallerySection />
      <div className="home-page-stats">
        {collegeStats.map((stat, index) => (
          <div key={index} className="home-page-stats-item">
            <div className="home-page-stats-item-header">{stat.count}</div>
            <div className="home-page-stats-item-count">{stat.title}</div>
          </div>
        ))}
      </div>
      <div className="home-page-declaration">
        <div className="home-page-declaration-card">
          <h2 className="home-page-declaration-card-title">
            Creating an Academic Campus with Net Zero in Water, Energy, and
            Waste [ParashurAma Basaveshwara akshaya Kshetra (PBaK)]
          </h2>
          <div className="home-page-declaration-card-text">
            IIT dhArwAD is committed to create an Academic Campus having net
            zero in water, energy, and waste by 2030, as mandated by its Board
            of Governors (BoG)....{" "}
          </div>
          <HighlightedButton text="View More" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
