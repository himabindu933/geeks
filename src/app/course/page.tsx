"use client";
import React from "react";
import Imgtag from "next/image";
import whiteFace from "../images/geek_face_white.jpg";
import mentor from "../images/mentor1.jpg";
import test from "../images/test.png";
import test2 from "../images/test2.png";
import men1 from "../images/men1.jpg";
import charecter from "../images/charecter.png";
import { AiOutlineShoppingCart, AiFillPlusSquare } from "react-icons/ai";
import { IoSpeedometerOutline } from "react-icons/io5";
import { BiSolidLock } from "react-icons/bi";
import { BsFillPersonFill, BsInstagram } from "react-icons/bs";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

function Course() {
  const content = "Lorem ipsum, dolor sit amet consectetur adipisicing elit.";

  const news = [
    {
      date: "12-10-2018",
      title: "Awesome title",
      content: [content],
    },
    {
      date: "13-10-2018",
      title: "Awesome title",
      content: [content, content],
      open: true,
    },
    {
      date: "13-10-2018",
      title: "Awesome title",
      content: [content],
      open: true,
    },
  ];

  const items = news.map(({ open, date, title, content }) => ({
    open,
    title: <h2>{date + " - " + title}</h2>,
    content: (
      <>
        {content.map((item: string, index: number) => (
          <p key={index}>{item}</p>
        ))}
      </>
    ),
  }));

  return (
    <div>
      <div className="individual_course">
        <div className="inner_container">
          <div className="breadcrump">
            {/* <Imgtag src={whiteFace} alt="logo" width={100} height={100} /> */}
            <p>
              Categoryes <span>&#x3e;</span> Visual Arts <span>&#x3e;</span>{" "}
              Visual Effects <span>&#x3e;</span> RotoScoping <span>&#x3e;</span>{" "}
              Arun Kumar
            </p>
            <div className="underline"></div>
          </div>

          <div className="course_video">
            <div className="course_video_left">
              <h2>How to achieve the best rotoScoping tricks?</h2>
              <p>A course by Arun Kumar, Vfx Generalist</p>
              <Imgtag src={mentor} alt="course" />
              <p style={{ marginTop: 20 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                velit! Iste exercitationem doloribus hic ea vero.
              </p>
            </div>
            <div className="course_video_right">
              <div style={{ display: "flex", columnGap: 50, marginBottom: 20 }}>
                <div>
                  <p style={{ color: "red", fontWeight: 500, fontSize: 23 }}>
                    SALE
                  </p>
                  <p style={{ fontWeight: "bold", fontSize: 38 }}>
                    &#8377; 449/-
                  </p>
                  <p style={{ marginBottom: 15 }}>83% Disc. &#8377;2,699</p>
                  <button
                    className="buynowbtn"
                    style={{
                      backgroundColor: "#fff",
                      padding: "5px 10px",
                      color: "#000",
                      display: "flex",
                      columnGap: 10,
                      borderRadius: 20,
                    }}
                  >
                    Buy Now <AiOutlineShoppingCart style={{ fontSize: 20 }} />
                  </button>
                </div>
                <div>
                  <IoSpeedometerOutline style={{ fontSize: 110 }} />
                  <p style={{ fontWeight: "bold", fontSize: 45 }}>90%</p>
                </div>
              </div>
              <li>This Offer ends in 10h:23m:33s</li>
              {/* <div style={{ paddingLeft: 27 }}> */}
              <li>86 students</li>
              <li>19 lessons (3h 24m)</li>
              <li>16 additional resources (3 files)</li>
              <li>Online and at your own liace</li>
              <li>Available on the website</li>
              <li>Audio: English</li>
              <li>English & Hindi</li>
              <li>Level: Beginner</li>
              <li>Unlimited access forever</li>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="course_summary">
        <div className="inner_container">
          <div className="summary_sec">
            <h3>Course Summary</h3>
            <div className="underline"></div>
            <div className="summary_sec_text">
              <p className="summary_sec_p">
                <span>+19</span>
                Lessons
              </p>
              <p className="summary_sec_p">
                <span>+14</span>
                Exercises
              </p>
              <p className="summary_sec_p">
                <span>+09</span>
                Project Files
              </p>
            </div>
            <div className="underline summary_sec_text_underline"></div>
            <Accordion allowZeroExpanded allowMultipleExpanded>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton
                    style={{
                      display: "flex",
                      columnGap: 10,
                    }}
                  >
                    Unit1: Loremipsim <BiSolidLock style={{ marginTop: 5 }} />
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div style={{ borderLeft: "4px dotted #fff" }}>
                    <div
                      style={{
                        display: "flex",
                        columnGap: 90,
                        marginBottom: 20,
                        // borderLeft: "4px dotted #fff",
                      }}
                    >
                      <p>
                        <span
                          style={{
                            fontSize: 24,
                            marginRight: 5,
                            marginLeft: 5,
                          }}
                        >
                          ........
                        </span>
                        Lesson1: Fundementals
                      </p>
                      <p>
                        <button
                          style={{
                            color: "#000",
                            backgroundColor: "#fff",
                            padding: "3px 13px",
                            width: 100,
                            borderRadius: 20,
                            marginRight: 10,
                          }}
                        >
                          Join Now
                        </button>{" "}
                        <button
                          style={{
                            color: "#000",
                            backgroundColor: "#fff",
                            padding: "3px 13px",
                            borderRadius: 20,
                            width: 100,
                            marginRight: 10,
                          }}
                        >
                          Re-Visit
                        </button>
                      </p>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        columnGap: 90,
                        marginBottom: 20,
                      }}
                    >
                      <p>
                        <span
                          style={{
                            fontSize: 24,
                            marginRight: 5,
                            marginLeft: 5,
                          }}
                        >
                          ........
                        </span>
                        Lesson2: Fundementals
                      </p>
                      <p>
                        <button
                          style={{
                            color: "#000",
                            backgroundColor: "#fff",
                            padding: "3px 13px",
                            width: 100,
                            borderRadius: 20,
                            marginRight: 10,
                          }}
                        >
                          Join Now
                        </button>{" "}
                        <button
                          style={{
                            color: "#000",
                            backgroundColor: "#fff",
                            padding: "3px 13px",
                            borderRadius: 20,
                            width: 100,
                            marginRight: 10,
                          }}
                        >
                          Re-Visit
                        </button>
                      </p>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        columnGap: 90,
                        marginBottom: 20,
                      }}
                    >
                      <p>
                        <span
                          style={{
                            fontSize: 24,
                            marginRight: 5,
                            marginLeft: 5,
                          }}
                        >
                          ........
                        </span>
                        Lesson3: Fundementals
                      </p>
                      <p>
                        <button
                          style={{
                            color: "#000",
                            backgroundColor: "#fff",
                            padding: "3px 13px",
                            width: 100,
                            borderRadius: 20,
                            marginRight: 10,
                          }}
                        >
                          Join Now
                        </button>{" "}
                        <button
                          style={{
                            color: "#000",
                            backgroundColor: "#fff",
                            padding: "3px 13px",
                            borderRadius: 20,
                            width: 100,
                            marginRight: 10,
                          }}
                        >
                          Re-Visit
                        </button>
                      </p>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        columnGap: 90,
                        marginTop: 20,
                      }}
                    >
                      <p>
                        <span
                          style={{
                            fontSize: 24,
                            marginRight: 5,
                            marginLeft: 5,
                          }}
                        >
                          ........
                        </span>
                        Lesson4: Fundementals
                      </p>
                      <p>
                        <button
                          style={{
                            color: "#000",
                            backgroundColor: "#fff",
                            padding: "3px 13px",
                            width: 100,
                            borderRadius: 20,
                            marginRight: 10,
                          }}
                        >
                          Join Now
                        </button>{" "}
                        <button
                          style={{
                            color: "#000",
                            backgroundColor: "#fff",
                            padding: "3px 13px",
                            borderRadius: 20,
                            width: 100,
                            marginRight: 10,
                          }}
                        >
                          Re-Visit
                        </button>
                      </p>
                    </div>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton
                    style={{
                      display: "flex",
                      columnGap: 10,
                    }}
                  >
                    Unit2: Loremipsim <BiSolidLock style={{ marginTop: 5 }} />
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div style={{ borderLeft: "4px dotted #fff" }}>
                    <div
                      style={{
                        display: "flex",
                        columnGap: 90,
                        marginBottom: 20,
                        // borderLeft: "4px dotted #fff",
                      }}
                    >
                      <p>
                        <span
                          style={{
                            fontSize: 24,
                            marginRight: 5,
                            marginLeft: 5,
                          }}
                        >
                          ........
                        </span>
                        Lesson1: Fundementals
                      </p>
                      <p>
                        <button
                          style={{
                            color: "#000",
                            backgroundColor: "#fff",
                            padding: "3px 13px",
                            width: 100,
                            borderRadius: 20,
                            marginRight: 10,
                          }}
                        >
                          Join Now
                        </button>{" "}
                        <button
                          style={{
                            color: "#000",
                            backgroundColor: "#fff",
                            padding: "3px 13px",
                            borderRadius: 20,
                            width: 100,
                            marginRight: 10,
                          }}
                        >
                          Re-Visit
                        </button>
                      </p>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        columnGap: 90,
                        marginBottom: 20,
                      }}
                    >
                      <p>
                        <span
                          style={{
                            fontSize: 24,
                            marginRight: 5,
                            marginLeft: 5,
                          }}
                        >
                          ........
                        </span>
                        Lesson2: Fundementals
                      </p>
                      <p>
                        <button
                          style={{
                            color: "#000",
                            backgroundColor: "#fff",
                            padding: "3px 13px",
                            width: 100,
                            borderRadius: 20,
                            marginRight: 10,
                          }}
                        >
                          Join Now
                        </button>{" "}
                        <button
                          style={{
                            color: "#000",
                            backgroundColor: "#fff",
                            padding: "3px 13px",
                            borderRadius: 20,
                            width: 100,
                            marginRight: 10,
                          }}
                        >
                          Re-Visit
                        </button>
                      </p>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        columnGap: 90,
                        marginBottom: 20,
                      }}
                    >
                      <p>
                        <span
                          style={{
                            fontSize: 24,
                            marginRight: 5,
                            marginLeft: 5,
                          }}
                        >
                          ........
                        </span>
                        Lesson3: Fundementals
                      </p>
                      <p>
                        <button
                          style={{
                            color: "#000",
                            backgroundColor: "#fff",
                            padding: "3px 13px",
                            width: 100,
                            borderRadius: 20,
                            marginRight: 10,
                          }}
                        >
                          Join Now
                        </button>{" "}
                        <button
                          style={{
                            color: "#000",
                            backgroundColor: "#fff",
                            padding: "3px 13px",
                            borderRadius: 20,
                            width: 100,
                            marginRight: 10,
                          }}
                        >
                          Re-Visit
                        </button>
                      </p>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        columnGap: 90,
                        marginTop: 20,
                      }}
                    >
                      <p>
                        <span
                          style={{
                            fontSize: 24,
                            marginRight: 5,
                            marginLeft: 5,
                          }}
                        >
                          ........
                        </span>
                        Lesson4: Fundementals
                      </p>
                      <p>
                        <button
                          style={{
                            color: "#000",
                            backgroundColor: "#fff",
                            padding: "3px 13px",
                            width: 100,
                            borderRadius: 20,
                            marginRight: 10,
                          }}
                        >
                          Join Now
                        </button>{" "}
                        <button
                          style={{
                            color: "#000",
                            backgroundColor: "#fff",
                            padding: "3px 13px",
                            borderRadius: 20,
                            width: 100,
                            marginRight: 10,
                          }}
                        >
                          Re-Visit
                        </button>
                      </p>
                    </div>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      <div className="final_project">
        <div className="inner_container">
          <div className="sec1">
            <h3>Final project work</h3>
            <div className="underline"></div>
            <button>Upload</button>
            <button>Submit</button>
            <button>Book Virtual Console</button>
          </div>
          <div className="sec2">
            <h3>Take your test</h3>
            <div className="underline"></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae ipsa iure quisquam. Odit tempore ad saepe quas fugiat,
              tempora culpa praesentium iusto,
            </p>
            <p>
              laborum eligendi quo quisquam quaerat quod consequuntur
              laudantium!
            </p>

            <div style={{ display: "flex", columnGap: 40, marginTop: 40 }}>
              <div style={{ textAlign: "center" }}>
                <Imgtag src={test} alt="test" width={164} />
                <button style={{ marginTop: 20 }}>Take test</button>
              </div>
              <div style={{ textAlign: "center" }}>
                <Imgtag src={test2} alt="test" width={123} />
                <button style={{ marginTop: 20 }}>Take test</button>
              </div>
            </div>
          </div>
          <div className="sec3">
            <h3>Apply for Job</h3>
            <div className="underline"></div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
              aliquam porro ad fuga doloremque ducimus ipsum sed deserunt
              reiciendis voluptate.
            </p>
            <div>
              <button>Upload Demo</button>
              <button>Apply for Job</button>
            </div>
          </div>
        </div>
      </div>

      <div className="mentor">
        <div className="inner_container">
          <div style={{ display: "flex", columnGap: 30 }}>
            {/* <BsFillPersonFill className="mentor_pic" /> */}
            <Imgtag src={men1} alt="pic" className="mentor_pic" />
            <div>
              <h5 style={{ fontSize: 15, marginTop: 10 }}>ARUN KUMAR</h5>
              <p style={{ marginTop: 20 }}>
                <button
                  style={{
                    backgroundColor: "#fff",
                    color: "#000",
                    padding: "3px 9px",
                    borderRadius: 20,
                  }}
                >
                  Teacher
                </button>
                <button
                  style={{
                    backgroundColor: "#fff",
                    color: "#000",
                    padding: "3px 9px",
                    borderRadius: 20,
                    marginLeft: 20,
                  }}
                >
                  VFX Specialist
                </button>
              </p>
              <p style={{ marginTop: 20, display: "flex", columnGap: 10 }}>
                <button
                  style={{
                    display: "flex",
                    backgroundColor: "skyblue",
                    borderRadius: 5,
                    padding: "5px 10px",
                  }}
                >
                  <AiFillPlusSquare style={{ marginTop: 5, marginRight: 3 }} />{" "}
                  Follow
                </button>
                <BsInstagram style={{ fontSize: 30, cursor: "pointer" }} />
                <Imgtag src={charecter} alt="geek" className="geekimg" />
              </p>
            </div>
          </div>
          <p style={{ marginTop: 20 }}>
            Arun Kumar is an acclaimed photographer and artist known for her
            ability to develop concepts and bring them to life on camera. With a
            diverse portfolio of clients ranging from Footlocker Women to The
            New York Times, Emily's work has been featured in prestigious
            publications such as Vogue Italia, La Botanica, and Flanelle
            magazine.
          </p>

          <p style={{ marginTop: 30 }}>
            Inspired by the power of photography to connect and empower others,
            she embraces the raw quality of shooting on film, making it an
            integral part of her unique style. Emily will take you on a creative
            exploration to discover how to create visually captivating
            photoshoots that speak volumes.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Course;
