import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const footerLinks = {
  Academics: [
    {
      text: "Admissions",
      link: "https://www.iitdh.ac.in/jee-advanced",
    },
    {
      text: "Announcements",
      link: "https://www.iitdh.ac.in/academic-calendar",
    },
    {
      text: "Departments",
      link: "https://www.iitdh.ac.in/departments",
    },
    {
      text: "Programs",
      link: "https://www.iitdh.ac.in/programs",
    },
  ],
  Research: [
    {
      text: "Consultancy Projects",
      link: "https://www.iitdh.ac.in/consultancy-projects",
    },
    {
      text: "IRINS",
      link: "https://iitdh.irins.org/",
    },
    {
      text: "Project Vacancies",
      link: "https://www.iitdh.ac.in/other-recruitments",
    },
    {
      text: "Publications",
      link: "https://www.iitdh.ac.in/all-publications",
    },
    {
      text: "Sponsored Projects",
      link: "https://www.iitdh.ac.in/sponsored-projects",
    },
  ],
  People: [
    {
      text: "Administration",
      link: "https://www.iitdh.ac.in/board-governors",
    },
    {
      text: "Faculty",
      link: "https://www.iitdh.ac.in/faculty",
    },
    {
      text: "RA/iPDF",
      link: "https://iitdh.ac.in/ra-ipdf",
    },
    {
      text: "Research Scholars",
      link: "https://www.iitdh.ac.in/research-scholars",
    },
    {
      text: "Staff",
      link: "https://www.iitdh.ac.in/staff",
    },
    {
      text: "Students",
      link: "https://studentswelfare.iitdh.ac.in/",
    },
  ],
  "Quick Links": [
    {
      text: "About dhArwAD",
      link: "https://www.iitdh.ac.in/staff/about-dharwad",
    },
    {
      text: "Anti-Ragging Cell",
      link: "https://www.iitdh.ac.in/staff/anti-ragging-cell",
    },
    {
      text: "Chief Vigilance Officer",
      link: "https://www.iitdh.ac.in/staff/chief-vigilance-officers",
    },
    {
      text: "Counselling Center",
      link: "https://www.iitdh.ac.in/staff/counselling-center",
    },
    {
      text: "CSR",
      link: "https://csr-iitdh.onrender.com/",
    },
    {
      text: "Events",
      link: "https://www.iitdh.ac.in/staff/events",
    },
    {
      text: "Grievance Redressal",
      link: "https://www.iitdh.ac.in/staff/grievance-redressal-committee",
    },
    {
      text: "Library",
      link: "https://www.iitdh.ac.in/staff/knowledge-resource-and-information-library",
    },
    {
      text: "ICC",
      link: "https://www.iitdh.ac.in/staff/internal-complaints-committee",
    },
    {
      text: "Intranet",
      link: "https://intranet.iitdh.ac.in:444/",
    },
    {
      text: "Moodle",
      link: "https://moodle.iitdh.ac.in",
    },
    {
      text: "Old Website",
      link: "https://old.iitdh.ac.in",
    },
    {
      text: "RTI",
      link: "https://www.iitdh.ac.in/staff/rti",
    },
    {
      text: "SC-ST-OBC Liaison Cell",
      link: "https://www.iitdh.ac.in/staff/sc-st-obc-liaison-cell",
    },
    {
      text: "Tenders",
      link: "https://www.iitdh.ac.in/staff/tenders",
    },
    {
      text: "Transport",
      link: "https://www.iitdh.ac.in/staff/transport",
    },
    {
      text: "Videos",
      link: "https://www.iitdh.ac.in/staff/videos",
    },
    {
      text: "VPN Access",
      link: "https://drive.google.com/drive/folders/1IG-ASfdc2aIXtKoou-B1YfNNG-0hkQfv",
    },
  ],
};

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="footer-information">
          <div className="footer-information-address">
            INDIAN INSTITUTE OF TECHNOLOGY DHARWAD PERMANENT CAMPUS
            CHIKKAMALLIGAWAD DHARWAD - 580 011 KARNATAKA BHARATA (INDIA)
          </div>
          <a
            href="mailto: pro@iitdh.ac.in"
            className="footer-information-contact"
          >
            <FontAwesomeIcon icon={faEnvelope} />
            <div className="footer-information-contact">pro@iitdh.ac.in</div>
          </a>
          <a
            href="https://www.iitdh.ac.in/telephone-directory"
            className="footer-information-contact"
          >
            <FontAwesomeIcon icon={faPhone} />
            <div className="footer-information-contact">Contact Us</div>
          </a>
        </div>
        {Object.entries(footerLinks).map(([section, links]) => (
          <div className="footer-column" key={section}>
            <div className="footer-column-title">{section}</div>
            <div className="footer-column-divider" />
            <ul
              className={`footer-column-list footer-column-list-${section
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
            >
              {links.map((link, index) => (
                <li key={index} className="footer-column-list-item">
                  <a href={link.link} className="footer-column-list-item-link">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
