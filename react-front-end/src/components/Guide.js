import React from "react";
import Accordion from "./Accordion";

export default function Guide() {
  
  const accordionData =  [{title: "When does a lawyer get involved in the pre-construction condo purchase?", content:["It is advisable to retain a lawyer at the very beginning of the pre-construction condo purchase. A lawyer will help you to review the Agreement of Purchase and Sale (APS), as well as other documents that you will need to review and sign throughout the purchase process. Depending on your needs, a lawyer's main goal will be to help you save time and money, while simultaneously helping you understand legal terms and protecting you from the financial risks that can be associated with a pre-construction condo purchase. Understanding these important legal terms can mean the difference between giving the condo buyer a preferred right or imposing a heavy financial burden on the buyer. In short, involving a lawyer early in the process can help you to successfully complete one of the biggest financial decision of your life."]}, {title: "Why do I need to provide my SIN number when I purchase a condo?", content: ["When you want to purchase a pre-construction condominium you will need to put money down as a deposit. This deposit will sit in an Interest Bearing Trust Account and can be held for up to six or seven years. The developer can collect the interest earned on the deposits; however, in order to do so, the developer must issue the necessary tax documentation, which will require your SIN number. It is important to note that this sensitive information is always handled with the utmost care and will only be shared with the developer."]}, {title: "What is the process to purchase at the beginning of a new condominium launch with a platinum agent?", content: ["Below are the typical steps involved in purchasing a suite at the beginning of a new condo launch. Platinum Agents tend to offer front of line access to the best projects and suites.", "1. Selecting the Project", "Perhaps one of the most important aspects is selecting the right project. This will involve consultations with your chosen Real Estate Professional.", "2. Selecting the Suite", "Once you have chosen the project, narrow down your selection for the best suite. This will include a floor plan analysis, the view, a range of floor choices, suite price, and determining how the suite will fit in your budget.", "3. Submitting a Suite Reservation Worksheet", "Once you determine which suite you are interested in purchasing simply complete a suite reservation worksheet and return it to your Platinum Agent. The worksheet will outline the suite you are interested in and what floors you would like to possible purchase that particular floorplan on. It will also include you contact information, your occupation. In addition, your Platinum Agent will ask for a copy of your ID to confirm that the information on the worksheet is accurate.", "4. Confirmation of Suite Allocation", "Your Platinum Agent will confirm the suite that has been allocated to you. Once you confirm that you wish to purchase the suite, you will make an appointment to sign the agreement. The suite will be held for you until that time.", "5. Signing the Agreement", "If the information that you provided on your worksheet is accurate, then the paperwork for the agreement can be prepared before you arrive. You will typically sign multiple copies of the same agreement so that all parties have a copy.", "6. 10 Day Recession Period", "Once you sign the agreement, you will have a 10 calendar day “Cooling off Period.” The developer is required to give you this time period to review your agreement and suite decision. We recommend that you do the following during this period:", "Have a Lawyer review your agreement. A lawyer will read through the agreement and highlight any issues that may be of concern", "Get pre-approved by a mortgage broker. If there are any problems within the 10 days, you will be able to cancel the agreement with no penalty.", "7. Deal goes firm & Deposits Cashed", "On the 11th day, the deal will automatically go firm and the first deposit cheque will be cashed."]}, {title: "At what point do I need to get a Mortgage when buying Pre-Construction Condos?", content: ["A mortgage is not required until final possession. Final possession is typically 3-5 years after the first round of sales for a condominium in Toronto. At the time of the final possession, the deposit money that you have already paid will be applied to the purchase price."]}, {title: "What are the stages of a new condo launch?", content: ["It is important to understand that every condo launch cycle will be slightly different. With this is in mind, as a developer goes through the stages, they will typically increase prices and remove various incentives. The following stages represent a typical new condo launch in Toronto; however, these stages are not indicative of every launch."]}]

  return (
    <div class="page-layout">
      <h2>Quick Guide</h2>
      <p>Below you will find the most frequently asked questions. You can also use the Help section to send us your query for a quick response from us</p>
      <div class="quick-guide">
      <div class="faqs">
      <h2>FAQ's</h2>
      <div class="acc-item">
      {accordionData.map(({title, content}) => (
        <Accordion title={title} content={content} />
      ))} 
      </div>
      </div>
      <div class="help">
        <h2>Help</h2>
        <div>Couldn’t find an answer to your question? Please send us a request below and our team member will get in touch with you shortly.</div>
        <input placeholder="Your Name"/>
        <input placeholder="Your Email"/>
        <input placeholder="Phone Number"/>
        <input placeholder="Message"/>
        <input type="submit"/> 
      </div>
      </div>
    </div>
  )
};
