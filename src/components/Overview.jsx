import React from "react";

 export default function Overview ({ arr }) {
  return (
    <>
      {arr.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
    </>
  )
}