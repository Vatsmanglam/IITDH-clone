import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

import "./index.scss";
import ScrollingCard, {
  type ScrollingCardRef,
} from "../../components/ScrollingCard";
import { useRef } from "react";
import HighlightedButton from "../../components/HighlightedButton";

const announcements = [
  "List of shortlisted and non-shortlisted candidates for post of Civil Engineer[on contract] & Electrical Engineer[on contract] against Advt. No: IITDh/Admin/SR/34/2025-26 date 25th April 2025 has been released.",
  "Call Letter-cum-Admit Card & List of Provisionally Shortlisted and Not Shortlisted Candidates to the applied for the post of Training and Placement",
  "Officer (TPO) on contract against the Advt. No.: IITDh/Admin/SR/32/2025-26 dated 7th April 2025 has been released.",
  "Call Letter-cum-Admit Card & Updated List of Provisionally Shortlisted and Not Shortlisted Candidates to the post of of Junior Technical Superintendent [Physics] against Advt. No: IITDh/Admin/SR/29/2024-25 dated 26th August 2024 has been released.",
  "Call Letter-cum-Admit Card & Updated List of Provisionally Shortlisted and Not Shortlisted Candidates to the post of of Junior Technical Superintendent [Civil] against Advt. No: IITDh/Admin/SR/29/2024-25 dated 26th August 2024 has been released.",
  "ACE Scholarship for JEE (Advance) cleared students",
  "Call Letter-cum-Admit Card for the Post of Junior Assistant against the Staff Recruitment Advt. No: IITDh/Admin/SR/29/2024-25 dated 26th August 2024 & Staff Recruitment Advt. No.: IITDh/Admin/SR/33/2025-26 dated 17th April 2025",
  "Call Letter-cum-Admit Card for the Post of Junior Superintendent against the Advt. No: IITDh/Admin/SR/29/2024-25 dated 26th August 2024 is released",
  "List of Provisionally Shortlisted and Non Shortlisted Candidates pertaining to the post of Junior Technical Superintendent [Physics] against Advt. No: IITDh/Admin/SR/29/2024-25 dated 26th August 2024 have been published",
  "Updated List of Shortlisted & Not Shortlisted for the post of Junior Superintendent against Advt. No: IITDh/Admin/SR/29/2024-25 dated 26th August 2024 have been published",
  "Walk-in Interviews for PhD Admission — For CSIR-JRF Holders (April/May 2025 Results)",
  "List of Provisionally Shortlisted and Non Shortlisted Candidates pertaining to the posts of Technical Officer [CCS], JTS [Civil], JTS [CSE], JTS [CCS], JT [MMAE] against Advt. No: IITDh/Admin/SR/29/2024-25 dated 26th August 2024 have been published",
  "Declaration of result for the Post of Assistant Registrar against Advt. No: IITDh/Admin/SR/29/2024-25 dated 26th August 2024",
  "Recruitment for the post of Civil Engineer[on contract] & Electrical Engineer [on contract] Advt. No: IITDh/Admin/SR/34/2025-26 date 25th April 2025 is announced (Last Date to Apply:  2nd May 2025)",
  "Result of the Selection Process held on 19th April 2025 For the post of Library Trainee have been announced.",
  "IIT dhArwAD Summer Internship Program 2025 results have been announced. Click Here to View the results.",
  "Recruitment for the post of the Training and Placement Officer (TPO) [on contract] against Advt. No: IITDh/Admin/SR/32/2025-26 date 7th April 2025 is announced (Last Date to Apply: 6th May 2025)",
  "List of Provisionally shortlisted candidates for the Personal Interview for the post of Assistant Registrar",
  "List of Provisionally Shortlisted and Not Shortlisted Candidates to the post of Junior Superintendent against Advt. No: IITDh/Admin/SR/29/2024-25 dated 26th August 2024 has been released.",
];

const InformationSection = () => {
  const ref = useRef<ScrollingCardRef>(null);
  return (
    <div className="information-section">
      <div className="information-section-card">
        <div className="information-section-card-primary">
          <img
            className="information-section-card-primary-image"
            src="https://www.iitdh.ac.in/themes/base/images/thumb-abt-iitdh.jpg"
            alt="IIT Dharwad"
          />
          <h5 className="information-section-card-primary-header">
            About IIT Dharwad
          </h5>
          <p className="information-section-card-primary-description">
            Indian Institute of Technology dhArwAD (IITdh) is one of the third
            Generation (3-G) IITs, which were established by the Ministry of
            Education (MoE), Government of India (GoI)....
          </p>
          <HighlightedButton text="Find Out More" />
        </div>
      </div>
      <div className="information-section-card">
        <div className="information-section-card-secondary">
          <a
            className="information-section-card-secondary-content"
            href="https://twitter.com/iitdhrwd"
          >
            Tweets from IIT Dharwad
          </a>
        </div>
      </div>
      <div className="information-section-card">
        <div className="information-section-card-tertiary">
          <div className="information-section-card-tertiary-header">
            <h2 className="information-section-card-tertiary-header-title">
              Announcements
            </h2>
            <div className="information-section-card-tertiary-header-controls">
              <button
                className="information-section-card-tertiary-header-controls-button"
                onClick={() => ref.current?.pageUp()}
              >
                <FontAwesomeIcon
                  className="information-section-card-tertiary-header-controls-button-icon"
                  icon={faAngleUp}
                />
              </button>
              <button
                className="information-section-card-tertiary-header-controls-button"
                onClick={() => ref.current?.pageDown()}
              >
                <FontAwesomeIcon
                  className="information-section-card-tertiary-header-controls-button-icon"
                  icon={faAngleDown}
                />
              </button>
            </div>
          </div>
          <div className="information-section-card-tertiary-content">
            <HighlightedButton text="View Past Announcements" />
            <div className="information-section-card-tertiary-content-body">
              <ScrollingCard ref={ref} items={announcements} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationSection;
