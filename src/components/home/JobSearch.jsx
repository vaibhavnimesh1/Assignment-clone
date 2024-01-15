import React from "react";
import "./JobSearch.css"
import { IoBagRemoveOutline  } from "react-icons/io5";
import { FaRegMoneyBillAlt,FaRegClock } from "react-icons/fa";
import { CiLocationOn ,CiBookmark } from "react-icons/ci";


const JobSearch = ({jobTitle}) => {
  return (
    <div className="searchjob">
      <div className="left">
        <img
          src="https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fcompany-logo%2F1-1.png&w=64&q=75"
          alt=""
        />
      </div>
      <div className="right">
      {/* <CiBookmark className="bookmark"/> */}
        <h1>{jobTitle}</h1>
        <ul>
          <li className="list">
            <div className="icon"><IoBagRemoveOutline /></div>
            <div className="text">Segment</div>
          </li>
          <li className="list">
            <div className="icon"><CiLocationOn/></div>
            <div className="text">London, UK</div>
          </li>
          <li className="list">
            <div className="icon"><FaRegClock/></div>
            <div className="text">11 hours ago</div>
          </li>
          <li className="list">
            <div className="icon"><FaRegMoneyBillAlt/></div>
            <div className="text">$35k - $45k</div>
          </li>
        </ul>
        <div>
            <div className="box fir">Fulltime</div>
            <div className="box sec">Private</div>
            <div className="box thir">Urgent</div>
        </div>
      </div>
    </div>
  );
};

export default JobSearch;
