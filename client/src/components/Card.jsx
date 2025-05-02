import React from 'react'
import { Link } from 'react-router-dom'
import {FiCalendar, FiCamera, FiClock, FiDollarSign, FiMapPin} from "react-icons/fi"


 const Card = ({data}) => {
    const{_id, companyName,jobTitle, companyLogo, minPrice, maxPrice, salaryType, jobLocation, employmentType, postingDate, description} = data;
    return (

   <section className='card'>
        <Link to = {`/job/${_id}`} className='flex gap-4 flex-col sm:flex-row items-start'>
            <img draggable="false" className='jobListCompanyImage' src={companyLogo} alt="" />
            <div>
            <br/>
                <h3 className='cardHeading'>{jobTitle}</h3>
                <h4 className='cardCompany'>{companyName}</h4>
                <br/>
                <div className='text-primary/70 text-base flex flex-wrap gap-2 mb-2'>
                    <span className='flex items-center gap-2'><FiMapPin/>{jobLocation}</span>
                    <span className='flex items-center gap-2'><FiClock/>{employmentType}</span>
                    <span className='flex items-center gap-2'>Rs. {minPrice}-Rs. {maxPrice}</span>
                    <span className='flex items-center gap-2'><FiCalendar/>{postingDate}</span>
                </div>
                
                <br/>
                {/* <p className='text-base text-primary/'>{description}</p> */}
                <button className="login-button-home" >View More</button>


            </div>
        </Link>

   </section>
  )
}
export default Card

