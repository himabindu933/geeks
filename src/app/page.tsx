"use client";

import ImgTag from "next/image";
import { useEffect, useState } from "react";
import Course from "./images/course.jpg";
import { GiRead } from "react-icons/gi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import {
  BsBuildingsFill,
  BsFillTelephoneFill,
  BsFillPersonFill,
} from "react-icons/bs";
import { GrLanguage } from "react-icons/gr";
import { HiUserGroup } from "react-icons/hi";
import { TbMessages } from "react-icons/tb";
import { LuCalendarClock } from "react-icons/lu";

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
    <>
      <div className="course_tabs">
        <div className="inner_container">
          <h2>Selection Of Courses</h2>
          <div className="underline"></div>
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

      <div className="comapanies">
        <div className="inner_container companies_flex">
          <div className="companies_flex_left">
            <div>
              <h2>What is Geeks?</h2>
              <p>
                Loresm ipsum dolar Loresm ipsum dolar Loresm ipsum dolar Loresm
                ipsum dolar Loresm ipsum dolar Loresm ipsum dolar Loresm ipsum
                dolar Loresm ipsum dolar Loresm ipsum dolar Loresm ipsum
                dolarLoresm ipsum dolar.
              </p>
              <div className="inner_companies_flex_left">
                <div>
                  <BsFillTelephoneFill />
                </div>
                <div>
                  <HiUserGroup />
                </div>
                <div>
                  <GrLanguage />
                </div>
                <div>
                  <TbMessages />
                </div>
                <div>
                  <LuCalendarClock />
                </div>
              </div>
            </div>
          </div>
          <div className="companies_flex_right">
            <ImgTag
              src={Course}
              alt="image1"
              // width={100}
              // height={100}
              className="company_img"
            />
          </div>
        </div>
        <div className="inner_container cater">
          <h2>Whom does we cater to?</h2>
          <div className="catericons">
            <div>
              <GiRead className="icon" />
              <p>Students</p>
            </div>
            <div>
              <LiaChalkboardTeacherSolid className="icon" />
              <p>Mentors</p>
            </div>
            <div>
              <BsBuildingsFill className="icon" />
              <p>Companies</p>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonials">
        <h2 className="text-center mb-[0px]">Students Testimonials</h2>
        <div className="underline"></div>
        <div className="inner_container testimonials_container">
          <div className="card">
            <div className="card_bg">
              <BsFillPersonFill className="icon" />
              <h5>Name</h5>
              <p>Professiom</p>
              <p>Lorem ipsum dollar</p>
            </div>
          </div>

          <div className="card">
            <div className="card_bg">
              <BsFillPersonFill className="icon" />
              <h5>Name</h5>
              <p>Professiom</p>
              <p>Lorem ipsum dollar</p>
            </div>
          </div>

          <div className="card">
            <div className="card_bg">
              <BsFillPersonFill className="icon" />
              <h5>Name</h5>
              <p>Professiom</p>
              <p>Lorem ipsum dollar</p>
            </div>
          </div>
        </div>

        <div className="inner_container companies_testimonials">
          <h2 className="text-center mt-[50px]">Companies Testimonials</h2>
          <div className="underline"></div>
          <div className="companies_testimonials_container">
            <div className="card">
              <div className="card_bg">
                <div className="icon_div">
                  <BsBuildingsFill className="icon" />
                </div>
                <div>
                  <h5>Name</h5>
                  <p>Professiom</p>
                  <p>Lorem ipsum dollar</p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card_bg">
                <div className="icon_div">
                  <BsBuildingsFill className="icon" />
                </div>
                <div>
                  <h5>Name</h5>
                  <p>Professiom</p>
                  <p>Lorem ipsum dollar</p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card_bg">
                <div className="icon_div">
                  <BsBuildingsFill className="icon" />
                </div>
                <div>
                  <h5>Name</h5>
                  <p>Professiom</p>
                  <p>Lorem ipsum dollar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
