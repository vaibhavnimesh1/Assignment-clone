import "./TopHeader.css";
import "../../App.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { VscAccount } from "react-icons/vsc";



const TopHeader = () => {
  return (
    <header>
      <div className="upper-header">
        <div className="logo">
          <img
            src="../../../public/envato_market-dde916a48af7413e54aa058fe7ae6856752fca799da4bec355f00aea904bfa19.svg"
            alt="Envato Market"
            // src="https://themeforest.net/item/superio-job-board-react-nextjs-template/42719363?_ga=2.39074211.1835068785.1705216131-512360509.1705216131"
          />
        </div>
        <div className="header-btn">
          <button className="header-btn-button">Buy now</button>
        </div>
      </div>
      <div className="lower-header">
        <div className="first">
          <img src="https://superio-appdir.vercel.app/images/logo.svg" alt="Superio" />
        </div>
        <div className="middle">
          <ul>
            <li>
              <div className="li-title">Home</div>
              <div>
                <RiArrowDropDownLine />
              </div>
            </li>
            <li>
              <div className="li-title">Find Jobs</div>
              <div>
                <RiArrowDropDownLine />
              </div>
            </li>
            <li>
              <div className="li-title">Employers</div>
              <div>
                <RiArrowDropDownLine />
              </div>
            </li>
            <li>
              <div className="li-title">Candidate</div>
              <div>
                <RiArrowDropDownLine />
              </div>
            </li>
            <li>
              <div className="li-title">Blogs</div>
              <div>
                <RiArrowDropDownLine />
              </div>
            </li>
            <li>
              <div className="li-title">Pages</div>
              <div>
                <RiArrowDropDownLine />
              </div>
            </li>
          </ul>
        </div>
        <div className="last">
          <div className="uplaod header-btn-button ">Upload your CV</div>
          <div className="sign header-btn-button ">Login / Register</div>
          <div className="job  header-btn-button">Job Post</div>
        </div>
        <div className="mobile-head">
        <VscAccount className="acount" />
        <RxHamburgerMenu className="menu" />
        </div>
        
      </div>
    </header>
  );
};

export default TopHeader;
