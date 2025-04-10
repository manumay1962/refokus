import React from "react";
import Card from "./Card";

function Cards() {
  return (
    <div className="mx-auto max-w-screen-xl py-20 gap-1 flex">
      <Card width={"basis-1/3"} start={false} para={true} hover={false} />
      <Card width={"basis-2/3"}  start={true} para={false} hover={true}/>
    </div>
  );
}

export default Cards;
