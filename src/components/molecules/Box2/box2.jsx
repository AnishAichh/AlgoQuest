import React from "react";
import { Card } from "../../atoms";
import { CardData2 } from "../../../utils";

const Box2 = () => {
  return (
    <div>
      <div>
        <div className="">
          <h2 className="font-bold text-2xl">
            Learn through some amazing courses
          </h2>
        </div>
        <div className="container mx-auto p-8 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
            {CardData2.map((value) => (
              <Card
                key={value.id}
                title={value.title}
                img={value.img}
                link={value.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box2;
