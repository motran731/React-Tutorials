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
  //curOpen will hold the number(num) that is open
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((el, index) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={el.title}
          // text={el.text}
          num={index}
          key={el.title}
        >
          {" "}
          {el.text}{" "}
        </AccordionItem>
      ))}
      <AccordionItem
        curOpen={curOpen}
        onOpen={setCurOpen}
        title="test 1"
        num={22}
        key="test 1"
      >
        <p>Allows React developers to:</p>
        <ul>
          <li>Break up UI into components</li>
          <li>Make components reusuable</li>
          <li>Place state efficiently</li>
        </ul>
      </AccordionItem>
    </div>
  );
}

function AccordionItem({ num, title, curOpen, onOpen, children }) {
  const isOpen = num === curOpen;
  // const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    // setIsOpen((isOpen) => !isOpen);
    onOpen(num);
  }
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number"> {num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title"> {title}</p>
      {/* if its open show plus, if it's close show minus */}
      <p className="icon"> {isOpen ? "-" : "+"} </p>

      {/* js mode  */}
      {isOpen && <div className="content-box">{children} </div>}
    </div>
  );
}
