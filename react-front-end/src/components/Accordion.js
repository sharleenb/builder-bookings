import React, {useState} from "react";

export default function Accordion({title, content}) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div class="faq-accordion" onClick={()=> setIsActive(!isActive)}>
      <div class="accordion-btn">
        <div>{title}</div>
        <div class="accordion-symbol">{isActive ? '-' : '+'}</div> 
      </div>
      {isActive && <div class="panel">{content.map((point) => 
      (  <p>{point}</p>)
      )}</div>}
    </div>
  )
};
