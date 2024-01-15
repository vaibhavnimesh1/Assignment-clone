import React from "react";
import "./Home.css";
import Input from "./mini_component/Input";
import Rnage from "./mini_component/RangeSalary";
import Checkbox from "./mini_component/Checkbox";
import RangeSalary from "./mini_component/RangeSalary";
import RangeRadius from "./mini_component/RangeRadius";

const jobType = ["Freelancer", "Full Time", "Part Time", "Temporary"];

const Experience = [" Fresher", "1 Years", "2 Years", "3 Years", "4 Years"];

const datePosted = [
  "All",
  "  Last Hour",
  "Last 24 Hour",
  "Last 7 Days",
  "  Last 14 Days",
  " Last 30 Days",
];
const HomeLeft = () => {
  return (
    <div className="home-left">
      <Input
        title={"Search by Keywords"}
        placeholder={"Job title, keywords, or company"}
      />
      <Input title={"Locations"} placeholder={"City or postcode"} />
      <RangeRadius/>
      {/* <Rnage title={"Radius around selected destination"} /> */}
      <Input title={"Category"} placeholder={"Choose a category"} />
      <div className="check-block">
        <h1>Job type</h1>
        {jobType.map((item, i) => (
          <div key={i}>
            <Checkbox title={"Job type"} item={item} />
          </div>
        ))}
      </div>
      <div className="check-block">
        <h1>Date Posted</h1>
        {datePosted.map((item, i) => (
          <div key={i}>
            <Checkbox title={"Job type"} item={item} />
          </div>
        ))}
      </div>
      <div className="check-block">
        <h1>Experience Level</h1>
        {Experience.map((item, i) => (
          <div key={i}>
            <Checkbox title={"Job type"} item={item} />
          </div>
        ))}
      </div>
      <RangeSalary/>
      {/* <Rnage title={"Salary"}  /> */}
    </div>
  );
};

export default HomeLeft;
