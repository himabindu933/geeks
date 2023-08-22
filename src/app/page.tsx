"use client";

import Link from "next/link";
import ImgTag from "next/image";
import { useEffect, useState } from "react";
import Course from "./images/chart.png";
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

import mentor1 from "./images/mentor1.jpg";
import mentor2 from "./images/mentor2.jpg";
import mentor3 from "./images/mentor3.jpg";
import mentor4 from "./images/mentor4.jpg";
import mentor5 from "./images/mentor5.jpg";
import mentor6 from "./images/mentor6.jpg";
import collaboration1 from "./images/grid.png";
import collaboration2 from "./images/telangana.png";
import collaboration3 from "./images/tvaga.png";
import img1 from "./images/frontrowseat.png";
import img2 from "./images/exposure.png";
import img3 from "./images/placements.png";
import img4 from "./images/reports.png";
import img5 from "./images/updates.png";
import img6 from "./images/Communitybuilding.png";
import men2 from "./images/men2.jpg";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import $ from "jquery";
// import "slick-carousel";

import Carousal from "./components/carousal/carousal";

import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  // const arr = [
  //   { id: 0, name: "tab1" },
  //   { id: 1, name: "tab2" },
  //   { id: 2, name: "tab6" },
  //   { id: 3, name: "tab4" },
  //   { id: 4, name: "tab5" },
  // ];

  const btn = [
    { id: 0, name: "Fine Arts" },
    { id: 1, name: "Visual Arts" },
    { id: 2, name: "Applied Arts" },
    { id: 3, name: "Performing Arts" },
    { id: 4, name: "Culanary Arts" },
  ];

  interface cards_flex {
    id: number;
    name: string;
    image: any;
  }

  interface course {
    id: number;
    name: string;
    // image: any;
    cards: cards_flex[];
  }

  const content: course[] = [
    {
      id: 0,
      name: "fine arts",
      cards: [
        { id: 0, name: "Fine1", image: mentor1 },
        { id: 1, name: "Fine2", image: mentor2 },
        { id: 2, name: "Fine3", image: mentor3 },
        { id: 0, name: "Fine1", image: mentor4 },
        { id: 1, name: "Fine2", image: mentor5 },
        { id: 2, name: "Fine3", image: mentor6 },
      ],
    },
    {
      id: 1,
      name: "Visual arts",
      cards: [
        { id: 0, name: "Fine1", image: mentor6 },
        { id: 1, name: "Fine2", image: mentor5 },
        { id: 2, name: "Fine3", image: mentor4 },
        { id: 0, name: "Fine1", image: mentor3 },
        { id: 1, name: "Fine2", image: mentor2 },
        { id: 2, name: "Fine3", image: mentor1 },
      ],
    },
    {
      id: 2,
      name: "Applied arts",
      cards: [
        { id: 0, name: "Fine1", image: mentor1 },
        { id: 1, name: "Fine2", image: mentor2 },
        { id: 2, name: "Fine3", image: mentor3 },
        { id: 0, name: "Fine1", image: mentor4 },
        { id: 1, name: "Fine2", image: mentor5 },
        { id: 2, name: "Fine3", image: mentor6 },
      ],
    },
    {
      id: 3,
      name: "Performance arts",
      cards: [
        { id: 0, name: "Fine1", image: mentor6 },
        { id: 1, name: "Fine2", image: mentor5 },
        { id: 2, name: "Fine3", image: mentor4 },
        { id: 0, name: "Fine1", image: mentor3 },
        { id: 1, name: "Fine2", image: mentor2 },
        { id: 2, name: "Fine3", image: mentor1 },
      ],
    },
    {
      id: 4,
      name: "Culunay arts",
      cards: [
        { id: 0, name: "Fine1", image: mentor1 },
        { id: 1, name: "Fine2", image: mentor2 },
        { id: 2, name: "Fine3", image: mentor3 },
        { id: 0, name: "Fine1", image: mentor4 },
        { id: 1, name: "Fine2", image: mentor5 },
        { id: 2, name: "Fine3", image: mentor6 },
      ],
    },
  ];

  const [value, setValue] = useState<number>(0);
  console.log(value, "value");

  useEffect(() => {}, [value]);

  const hadleChangeTab = (e: any) => {
    setValue(parseInt(e.target.value));
  };

  // $(document).ready(function () {
  // $(".card_flex").slick({
  //   slidesToShow: 4,
  //   dots: false,
  //   centerMode: false,
  //   cssEase: "ease",
  //   slidesToScroll: 1,
  // });
  // $(".slideshow-container").slick({
  //   slidesToShow: 1,
  //   dots: false,
  //   centerMode: false,
  //   cssEase: "ease",
  //   slidesToScroll: 1,
  // });
  // $(".testimonials_container").slick({
  //   slidesToShow: 4,
  //   dots: false,
  //   centerMode: false,
  //   cssEase: "ease",
  //   slidesToScroll: 1,
  // });
  // });

  const cards_flex_carousel: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    centerMode: true,
    slidesToScroll: 1,
    initialSlide: 0,
    adaptiveHeight: true,
    swipeToSlide: true,
  };

  const students_flex_carousel: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    slidesToScroll: 1,
    initialSlide: 0,
    adaptiveHeight: true,
    swipeToSlide: true,
  };

  const testimonials_flex_carousel: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    centerMode: true,
    slidesToScroll: 2,
    initialSlide: 0,
    adaptiveHeight: true,
    swipeToSlide: true,
  };

  interface testimonials {
    id: number;
    name: string;
    para: string;
  }

  const studentsFeedback: testimonials[] = [
    { id: 0, name: "Anvesh", para: "Lorem ipsum dollar" },
    { id: 1, name: "Rithwik", para: "Lorem ipsum dollar" },
    { id: 2, name: "Deepak", para: "Lorem ipsum dollar" },
    { id: 3, name: "Sanjay", para: "Lorem ipsum dollar" },
    { id: 4, name: "Rahul", para: "Lorem ipsum dollar" },
  ];

  const geeks: cards_flex[] = [
    {
      id: 0,
      name: "Learn at your own place and time",
      image: img1,
    },
    {
      id: 1,
      name: "Learn at your own place and time",
      image: img2,
    },
    {
      id: 2,
      name: "Learn at your own place and time",
      image: img3,
    },
    {
      id: 3,
      name: "Learn at your own place and time",
      image: img4,
    },
    {
      id: 4,
      name: "Learn at your own place and time",
      image: img5,
    },
    {
      id: 5,
      name: "Learn at your own place and time",
      image: img6,
    },
  ];

  return (
    <>
      <Carousal />
      <div className="course_tabs">
        <div className="inner_container">
          <h2 className="scroll-animation">COURSES & CERTIFICATES</h2>
          <div className="underline"></div>
          <p className="text-center mb-[60px]">
            Cinematic courses and certificate programs taught by the world’s
            most engaging instructors.
          </p>
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
            {content.map((item, index) => {
              if (value === index) {
                console.log(value, "inval");
                return (
                  <div key={item.id} className="card_flex">
                    <Slider {...cards_flex_carousel} className="slider">
                      {item.cards.map((child, childIndex) => {
                        return (
                          <div className="card" key={index}>
                            <ImgTag
                              src={child.image}
                              alt="image"
                              className="card_img"
                            />
                            <div className="card_text">
                              <div
                                className="mentor_name"
                                style={{
                                  fontStyle: "italic",
                                  fontSize: 13,
                                  fontWeight: 500,
                                }}
                              >
                                <p>Lisa Johnes-Ex Discovery</p>
                                <p>Online</p>
                              </div>
                              <h5 style={{ fontSize: 15 }}>
                                Basic to photography
                              </h5>
                              <div className="underline"></div>
                              <p className="mb-[15px]">
                                In this course we would dive you from basic to
                                advance learning.
                              </p>
                              <div className="button">
                                <Link href="/course">
                                  <button>
                                    Join Now <span>&#x3e;</span>
                                  </button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </Slider>
                  </div>
                );
              }
            })}
          </div>
          <div className="all_courses_btn">
            <button>
              Explore all courses <span>&#x3e;</span>
            </button>
          </div>
        </div>
      </div>

      <div className="comapanies">
        <div className="inner_container">
          <h2 className="text-center">WHAT DO STUDENTS GET?</h2>
          <div className="underline"></div>

          <div className="slideshow-container">
            <Slider {...students_flex_carousel}>
              {geeks.map((item, index) => {
                return (
                  <div className="companies_flex" key={index}>
                    <div className="companies_flex_left">
                      <div>
                        <h3 style={{ fontSize: 30 }}>{item.name}</h3>
                      </div>
                    </div>
                    <div className="companies_flex_right">
                      <ImgTag
                        src={item.image}
                        alt="image1"
                        // width={100}
                        // height={100}
                        className="company_img"
                      />
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
        <div className="inner_container cater">
          {/* <h2>Whom does we cater to?</h2> */}
          <div className="catericons">
            <div style={{ display: "flex", columnGap: 10 }}>
              <p style={{ fontSize: 70, fontWeight: "normal" }}>
                <span
                  style={{
                    color: "orangered",
                    fontSize: 70,
                    fontWeight: "normal",
                  }}
                >
                  +
                </span>
                150
              </p>
              <div style={{ marginTop: 31 }}>
                <p style={{ fontWeight: "bold", fontSize: "20px" }}>Happy</p>
                <p style={{ fontSize: 20 }}>Customers</p>
              </div>
            </div>
            <div style={{ display: "flex", columnGap: 10 }}>
              <p style={{ fontSize: 70, fontWeight: "normal" }}>
                <span
                  style={{
                    color: "orangered",
                    fontSize: 70,
                    fontWeight: "normal",
                  }}
                >
                  +
                </span>
                50
              </p>
              <div style={{ marginTop: 31 }}>
                {" "}
                <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                  Certified
                </p>
                <p style={{ fontSize: 20 }}>Courses</p>
              </div>
            </div>
            <div style={{ display: "flex", columnGap: 10 }}>
              <p style={{ fontSize: 70, fontWeight: "normal" }}>
                <span
                  style={{
                    color: "orangered",
                    fontSize: 70,
                    fontWeight: "normal",
                  }}
                >
                  +
                </span>
                1000
              </p>
              <div style={{ marginTop: 31 }}>
                <p style={{ fontWeight: "bold", fontSize: "20px" }}>Awards</p>
                <p style={{ fontSize: 20 }}>Received</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="geeks_for_parent">
        <div className="inner_container geeks_for">
          <div className="geeks_for_left">
            <div className="inner_geeks_left">
              <h2 className="mb-[20px]">WHAT IS GEEKS.IN FOR COMPANIES?</h2>
              <p>
                Loresm ipsum dolar Loresm ipsum dolar Loresm ipsum dolar Loresm
                ipsum dolar Loresm ipsum dolar Loresm ipsum dolar Loresm ipsum
                dolar Loresm ipsum dolar Loresm ipsum dolar Loresm ipsum
                dolarLoresm ipsum dolar.
              </p>
              <div className="inner_companies_flex">
                <div className="icon icon1">
                  <BsFillTelephoneFill />
                  {/* <ImgTag alt="img" src={img1} width={100} height={100} /> */}
                </div>
                <div className="icon icon2">
                  <HiUserGroup />
                  {/* <ImgTag alt="img" src={img6} width={100} height={100} /> */}
                </div>
                <div className="icon icon3">
                  <GrLanguage />
                  {/* <ImgTag alt="img" src={img4} width={100} height={100} /> */}
                </div>
                <div className="icon icon4">
                  <TbMessages />
                  {/* <ImgTag alt="img" src={img3} width={100} height={100} /> */}
                </div>
                <div className="icon icon5">
                  <LuCalendarClock />
                  {/* <ImgTag alt="img" src={img5} width={100} height={100} /> */}
                </div>
              </div>
            </div>
          </div>

          <div className="geeks_for_right">
            <ImgTag
              src={Course}
              alt="image1"
              // width={100%}
              // height={500}
              className="company_img"
            />
          </div>
        </div>

        <div className="collaborations_parent">
          <h2 className="text-center">COLLABORATIONS</h2>
          <div className="underline"></div>
          <div className="inner_container collaborations">
            <ImgTag src={collaboration1} alt="company img" className="img1" />
            <ImgTag src={collaboration2} alt="company img" className="img2" />
            <ImgTag src={collaboration3} alt="company img" className="img3" />
          </div>
        </div>
      </div>

      <div className="testimonials">
        <h2 className="text-center mb-[0px]">
          HEAR FROM OUR STUDENTS & ASPIRANTS
        </h2>
        <div className="underline"></div>
        <div className="inner_container testimonials_container">
          <Slider {...testimonials_flex_carousel}>
            {studentsFeedback.map((item, index) => {
              return (
                <div className="card" key={index}>
                  <div className="card_bg">
                    <div style={{ display: "flex", columnGap: 10 }}>
                      {/* <BsFillPersonFill className="icon" /> */}
                      <ImgTag src={men2} alt="students" className="icon" />
                      <h5 style={{ marginTop: 30 }}>{item.name}</h5>
                    </div>
                    <p>{item.para}</p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>

        <h2
          className="text-center content"
          style={{ width: "80%", margin: "50px auto 0px auto" }}
        >
          "Teaching is our expertise. We'll take care of it, so you can focus on
          your feature."
        </h2>

        <h3 className="text-center ceo_name">Syed Shakeer, CEO</h3>
        {/* <div className="inner_container companies_testimonials">
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
        </div> */}
      </div>

      {/* <div className="team inner_conatiner">
        <h2 className="text-center">Meet Our Team</h2>
        <div className="underline"></div>

        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          adipisci.
        </p>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div> */}

      <div className="stay">
        <div className="inner_container">
          <h3 className="text-center">STAY IN THE KNOW</h3>
          <h2
            className="text-center"
            style={{ fontWeight: "normal", marginTop: 10 }}
          >
            Be the first to hear about new classes and breaking news
          </h2>
          <div style={{ textAlign: "center", margin: "30px 0" }}>
            <input
              type="text"
              placeholder="Enter e-mail id"
              style={{
                padding: "5px 15px",
                color: "#fff",
                backgroundColor: "transparent",
                border: "2px solid #fff",
                borderRadius: 5,
              }}
            />
            <span
              style={{
                color: "#000",
                marginLeft: 20,
                fontWeight: "bold",
                border: "1px solid #fff",
                borderRadius: 5,
                padding: "9px 15px",
                cursor: "pointer",
                backgroundColor: "#fff",
              }}
            >
              Submit
            </span>
          </div>
          <p style={{ textAlign: "center" }}>
            By signing up for our email list, you indicate that you have read
            and agree to our{" "}
            <a style={{ textDecoration: "underline", cursor: "pointer" }}>
              Terms of Use
            </a>
            . We respect your privacy.
          </p>
        </div>
      </div>
    </>
  );
}
export default Home;
