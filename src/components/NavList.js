import React from "react";

function NavList(props) {
  const item = props.item;
  return (
    <>
      <li className="text-xl hover:text-green-400">{item}</li>
    </>
  );
}

export default NavList;
