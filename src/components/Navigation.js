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
    <div className="pt-5 md:max-lg:fixed lg:flex w-lvw md:mx-lg:top-0 md:max-lg:left-0 ">
      <nav className="flex w-full justify-around items-center h-16">
        <img src={logo} alt="logo" className="w-[15rem] h-40 -ml-8 overflow-hidden"></img>
        <ul className=" invisible lg:visible hidden lg:flex flex min-w-80 justify-between items-center">
          {item_lists.map((list) => {
            return <NavList key={list.id} item={list.item}></NavList>;
          })}
        </ul>
        <span>
          <a className="hidden lg:block lg:visible invisible text-xl bg-green-700 hover:bg-green-600 lg:px-6 lg:py-4 rounded-lg hover:text-emerald-300" href={`tel:${phone}`}>Contact Us </a>
        </span>
      </nav>
    </div>
  );
}

export default Navigation;
