import React from 'react'

const ApplyJob = () => {
  return (
    <div>
     <br/>      <br/>

    <div className='applyjob'>
      <br/>
    <form action="">
    <h1 align='center' className='applyjobHeading'><b>Apply For Job</b></h1>
    <label className='applyjob_name_label' for="name">Applicant Name</label>
    <input type="text" className='applyjob_name' id="name" name="user_name" placeholder="Your Name.."/>

    <label className='applyjob_email_label' for="email">Email Address</label>
    <input type="email" className='applyjob_email' id="email" name="user_email" placeholder="Your Email.."/>

    <label className='applyjob_cv_label' for="pdf">Upload your cv</label>
    <input type="file" className='applyjob_cv' id="cv" name="cv"/>
  
    <input type="submit" className='applyjob_submit' value="Submit"/>
  </form><br/>
  
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
      </footer>
      <br/><br/><br/>
    </div>
  )
}

export default ApplyJob