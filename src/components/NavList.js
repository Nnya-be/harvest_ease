import React from "react";

function NavList(props) {
  const item = props.item;
  return (
    <>
      <li className=" cursor-pointer text-xl inline text-inherit hover:text-green-400">{item}</li>
    </>
  );
}

export default NavList;
