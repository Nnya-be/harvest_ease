import React from "react";
import NavList from "./NavList";
import logo from "../statics/harvest_logo_light.png"
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
const phone = +233549120744;
function Navigation() {
  return (
    <div className="pt-5">
      <nav className="flex justify-around items-center h-16">
        <img src={logo} alt="logo" className="w-48 -ml-8"></img>
        <ul className="flex min-w-80 justify-between items-center">
          {item_lists.map((list) => {
            return <NavList key={list.id} item={list.item}></NavList>;
          })}
        </ul>
        <span>
          <a className="text-xl bg-white border-2 border-green-600 hover:bg-green-600 px-6 py-4 rounded-lg hover:text-emerald-300" href={`tel:${phone}`}>Contact Us </a>
        </span>
      </nav>
    </div>
  );
}

export default Navigation;
