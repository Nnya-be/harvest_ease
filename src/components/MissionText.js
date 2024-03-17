import React from "react";
import TertiaryHeader from "./TertiaryHeader";
import LineGreen from "./LineGreen";
import SectionParagraph from "./SectionParagraph";
import ReadMoreButton from "./ReadMoreButton";

const mission =
  "Our mission is to revolutionize agriculture by providing cutting-edge solutions that enhance productivity, reduce labor, and improve the livelihoods of farmers.";

const vision =
  "Our vision is a world where every farmer has access to advanced technologies that optimize their operations and contribute to sustainable agriculture.";
function MissionText() {
  return (
    <div className="ml-8 h-[20rem] mr-4 flex flex-col justify-between items-start text-start">
      <TertiaryHeader heading="Learn More about our mission"></TertiaryHeader>
      <LineGreen></LineGreen>
      <SectionParagraph paragraph={mission}></SectionParagraph>
      <SectionParagraph paragraph={vision}></SectionParagraph>
      <ReadMoreButton></ReadMoreButton>
    </div>
  );
}

export default MissionText;
