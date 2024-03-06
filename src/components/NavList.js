import React from "react";

function NavList(props) {
  const item = props.item;
  return (
    <>
      <li className="text-xl">{item}</li>
    </>
  );
}

export default NavList;
