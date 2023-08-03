"use client";

import { useEffect, useState } from "react";

function Home() {
  const arr = [
    { id: 0, name: "tab1" },
    { id: 1, name: "tab2" },
    { id: 2, name: "tab3" },
    { id: 3, name: "tab4" },
    { id: 4, name: "tab5" },
  ];

  const btn = [
    { id: 0, name: "Fine Arts" },
    { id: 1, name: "Visual Arts" },
    { id: 2, name: "Applied Arts" },
    { id: 3, name: "Performing Arts" },
    { id: 4, name: "Culanary Arts" },
  ];

  const [value, setValue] = useState<number>(0);
  console.log(value, "value");

  // const [object, setObject] = useState({});

  // console.log(object);

  useEffect(() => {}, [value]);

  const hadleChangeTab = (e: any) => {
    setValue(parseInt(e.target.value));
  };

  return (
    <div className="course_tabs">
      <div className="inner_container">
        <div className="tabs">
          {btn.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={hadleChangeTab}
                value={index}
                className={value === index ? "active" : "inactive"}
              >
                {item.name}
              </button>
            );
          })}
        </div>
        <div className="tabpanel">
          <div>
            {arr.map((item, index) => {
              if (value === index) {
                console.log(value, "inval");
                return <div key={item.id}>{item.name}</div>;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
