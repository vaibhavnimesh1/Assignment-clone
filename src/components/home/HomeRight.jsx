import React from 'react'
import '../header/TopHeader.css'
import "./Home.css"
import JobSearch from './JobSearch'
const jobTitle = ["Software Engineer (Android), Libraries","Recruiting Coordinator","Senior Product Designer", "Senior Full Stack Engineer, Creator Success" , "Software Engineer (Android), Libraries", "Software Engineer (Android), Libraries" , "Recruiting Coordinator"]

const HomeRight = () => {
  return (
    <div className='home-right'>

      <div className="home-right-top">
        <p>Show 10 jobs</p>
        <div>
        <div className="sign header-btn-button ">home-right-top</div>
          <div className="sign header-btn-button">All</div>
        </div>
      </div>
     <div className='job_sec'>
     {jobTitle.map((item,i)=>(
      <JobSearch  key={i} jobTitle={item}/>

      ))} 
     </div>
    </div>
  )
}

export default HomeRight