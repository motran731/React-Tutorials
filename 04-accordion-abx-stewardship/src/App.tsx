import { useState } from "react";
import "./index.css";

const faqs = [
  {
    title:
      "The establishment of an antimicrobial stewardship program in the outpatient setting is required by which organization?",
    text: "The Joint Commission(TJC). While antimicrobial stewardship programs are required for accreditation by both TJC and CMS for acute care hospitals and long-term care facilities, outpatient stewardship is currently required only by TJC.",
  },
  {
    title:
      "Which of the following is a category of stewardship activities recognized in the Infectious Diseases Society of America (IDSA) stewardship guidelines?",
    text: "Antibiotic metrics is a category of stewardship intervention in the IDSA guidelines. The other categories include antibiotic interventions, antibiotic optimization, collaboration with microbiology, and special populations",
  },
  {
    title:
      "Which of the following is NOT a limitation of developing a whole-hospital antibiogram based on CLSI M39 documents recommendations?",
    text: "The purpose of the CLSI antibiogram is to influence empiric antibiotic therapy.",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((el, index) => (
        <AccordionItem title={el.title} text={el.text} num={index} />
      ))}
    </div>
  );
}

function AccordionItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="item">
      <p className="number"> {num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title"> {title}</p>
      {/* if its open show plus, if it's close show minus */}
      <p className="icon"> {isOpen ? "-" : "+"} </p>

      {/* js mode  */}
      {isOpen && <div className="content-box">{text} </div>}
    </div>
  );
}