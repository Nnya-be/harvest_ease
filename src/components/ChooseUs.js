import React from "react";
import ChooseCards from "./ChooseCards";
import LineGreen from "./LineGreen";
import TertiaryHeader from "./TertiaryHeader";
import picasa from "../statics/icons/picasa.svg";
import steam2 from "../statics/icons/steam2.svg";
import clean_hands from "../statics/icons/clean_hands.svg";
import svg from "../statics/icons/svg.svg";
const details = [
  {
    id: "01",
    icon: picasa,
    heading: "Innovative Technology",
    paragraph:
      "Our machine is equipped with state-of-the-art technology to deliver exceptional performance and reliability.",
  },
  {
    id: "02",
    icon: steam2,
    heading: "Versatility",
    paragraph:
      "From small farms to large-scale operations, our machine is adaptable to a wide range of farming environments and requirements.",
  },
  {
    id: "03",
    icon: clean_hands,
    heading: "Customer Satisfaction",
    paragraph:
      "We prioritize customer satisfaction and are committed to providing excellent service and support throughout your journey with us.",
  },
  {
    id: "04",
    icon: svg,
    heading: "Sustainability",
    paragraph:
      "We're dedicated to sustainability and environmentally friendly practices, ensuring that our solutions contribute to a healthier planet.",
  },
];

function ChooseUs() {
  return (
    <div className="h-[40rem] py-10 px-8 my-10 flex flex-col justify-between items-center">
      <TertiaryHeader heading="Why Choose Us"></TertiaryHeader>
      <div className="w-4/6 flex justify-center items-center">
        <LineGreen></LineGreen>
      </div>
      <div className="flex justify-between w-full">
        {details.map((value) => {
          return <ChooseCards key={value.id} details={value}></ChooseCards>;
        })}
      </div>
    </div>
  );
}

export default ChooseUs;
