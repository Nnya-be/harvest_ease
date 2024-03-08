import React from "react";
import MediumHeader from "./MediumHeader";
import NavList from "./NavList";
import logo from "../statics/harvest_logo_light.png";
import facebook from "../statics/icons/facebook.svg";
import x from '../statics/icons/x.svg'
import gmail from '../statics/icons/google-plus3.svg'
import linkedin from '../statics/icons/linkedin.svg'
import whatsapp from '../statics/icons/whatsapp.svg'

const icons_lists = [
  {
    icon: facebook,
    id: "01",
  },
  {
    icon: x,
    id: "02",
  },
  {
    icon: gmail,
    id: "03",
  },
  {
    icon: linkedin,
    id: "04",
  },
  {
    icon: whatsapp,
    id: "05",
  },
];

const item_lists = [
  {
    id: "01",
    item: "Abouts",
  },
  {
    id: "02",
    item: "Products",
  },
  {
    id: "03",
    item: "Choose Us",
  },
];
function Footer() {
  return (
    <div className="bg-emerald-950 flex justify-between items-center px-20 h-max py-8">
      <div className="">
        <ul className="text-lime-200 grid grid-cols-3 grid-rows-1 justify-between items-center">
          {item_lists.map((list) => {
            return <NavList key={list.id} item={list.item}></NavList>;
          })}
        </ul>
      </div>
      <div className="flex justify-around items-center flex-col">
        <div className="text-lime-200 flex justify-around items-center flex-col">
          <img className="h-40 " src={logo}></img>
          <span>Harvest Ease</span>
        </div>
        <div className="text-lime-200 text-justify">
          &copy; {new Date().getFullYear()} Harvest Ease. All rights reserved.
        </div>
      </div>
      <div className="flex">
        {
            icons_lists.map((value) =>{
                return (<img className='mr-2 contrast-50 invert w-8 brightness-50' key={value.id} src={value.icon} alt={`icon ${value.id}`}></img>)
            })
        }
      </div>
    </div>
  );
}

export default Footer;
