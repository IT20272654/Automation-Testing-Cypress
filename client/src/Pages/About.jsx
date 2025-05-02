import React from 'react'
import proPic from "../assets/profile.png";
import banner from "../assets/banner.png";

import { useEffect, useState } from "react";




const About = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("projects.json")
    .then(res => res.json())
    .then (data => setProjects(data))
  }, [])



  return (
    <div className="mt-20 bg-bgShade" id="about">
       <div className="mt-20 bg-bgShade" id="home">
      <div className="lg:px-12 px-4 flex flex-col md:flex-row-reverse items-center justify-between py-24 gap-5">
      <div className="md:w-1/2 w-full">
          <img src={banner} alt="" className="w-full" />
        </div>
        {/* left side */}
        <div className="md:w-1/2 w-full mt-5">
          <p className="text-xl text-headingcolor font-semibold mb-5">Get in touch with us – we're just a click away!</p>
          <h1 className="md:text-6xl text-4xl font-bold text-headingcolor leading-snug md:leading-[76px]  mb-5">
          Our platform offers a <span className="text-primary">seamless experience</span> tailored to your needs
          </h1>
          <p className="text-2xl text-body leading-9 mb-8">Have a question or need assistance? Don't hesitate to reach out to us! Whether you're a job seeker looking for guidance or an employer seeking support, our team is here to help. 
          </p>
          {/*<button className="btn-primary">Get In Touch</button>*/}
        </div>
        {/* rigth side */}
        
      </div>

      {/* project card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {
            projects.map(project => <div key={project.id} className="shadow-xl rounded-lg">
              <img src={project.image} alt="" />
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-2 text-headingcolor">{project.name}</h3>
                <p className="text-body mb-4">{project.description}</p>
                
              </div>
            </div>)
          }
      </div>
    </div>
      <div className="flex flex-col sm:flex-row md:gap-24 gap-12 items-center justify-between">
        <div className="sm:w-1/2"> 
          <img src={proPic} alt="" className="w-full sm:w-11/12" />
        </div>
        <div className="sm:w-1/2">
          <p className="text-xl text-headingcolor font-semibold mb-5">
            
          </p>
          <h3 className="md:text-5xl text-4xl text-headingcolor font-bold">About Us</h3>
          <p className="mt-8 md:pr-8 mb-8">
          we specialize in connecting talented individuals with leading companies across diverse industries. Our team's expertise lies in creating innovative solutions that streamline the job recruitment process, providing both job seekers and employers with a platform that is intuitive, efficient, and effective. With a deep understanding of the evolving needs of the job market, coupled with cutting-edge technology and personalized service, we're committed to helping you achieve your hiring or career goals. Trust in our expertise to navigate the ever-changing landscape of employment with confidence and success.
            <br /> <br />
            Join us and experience the difference that our expertise can make in your job recruitment journey.
          </p>
          
        </div>
      </div>

    <footer class="sticky-footer">

        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/Search">Available Jobs</a></li>
            <li><a href="/post-job">Post A Job</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/contact">Feedback Us</a></li>
            <li><a href="/about">About Us</a></li>
        </ul>
    </footer><br/><br/><br/>

    </div>
    
  )
}

export default About