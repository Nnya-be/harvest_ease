import React from "react";

function MediumHeader(props) {
    const heading = props.heading
    return (
        <div className="text-2xl py-5 px-3 text-center text-gray-950">{heading}</div>
    )
}

export default MediumHeader