import React from "react";
import "./Education.css";
import college_img from "../../Image/AIT-army-institute-of-techn.jpg";
import college_logo from "../../Image/icon.png";
function Education() {
  const my_education_data = [
    {
      index: 1,
      education_logo_link: college_logo,
      college_name: "Army institute of Technology,Pune",
      college_degree_name: "B.E. in Electronics and telecommunication",
      education_spam: "2020-Present",
      education_info: [
        {
          index: 1,
          educ_info:
            "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, DC , EC etc.",
        },
        {
          index: 2,
          educ_info:
            "⚡ Apart from this, I have done courses on Front-end Development, and Full Stack Development (MERN).",
        },
        {
          index: 3,
          educ_info:
            "⚡  I have implemented several projects based on what I've learnt by my Self.",
        },
      ],
      btn_name: "Visit Website",
      btn_link: "https://www.aitpune.com/",
    },
  ];
  return (
    <>
      <div className="educ_container">
        <div className="educ_div_section">
          {my_education_data.map((data, index) => {
            return (
              <>
                <div className="educ_upper_section" key={index}>
                  <div className="educ_container_one">
                    <img src={college_img} alt="educ_image" />
                  </div>
                  <div className="educ_container_two">
                    <div className="upper_container_section">
                      <div className="upper_left">
                        <img
                          src={data.education_logo_link}
                          alt="college logo"
                        />
                      </div>
                      <div className="upper_middle">
                        <h3>{data.college_name}</h3>
                        <div className="upper_right">
                          <h4>{data.college_degree_name}</h4>
                          <h5 style={{ color: "green" }}>
                            {data.education_spam}
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="educ_lower_section">
                      {data.education_info.map((indata, index) => {
                        return (
                          <div className="educ_data_info" key={index}>
                            <p>{indata.educ_info}</p>
                          </div>
                        );
                      })}
                      <div className="educ_btn">
                        <a href={data.btn_link}>
                          <button>{data.btn_name}</button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Education;
