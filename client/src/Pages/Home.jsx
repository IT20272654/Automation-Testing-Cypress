import Banner from '../components/Banner'
import React, { useEffect, useState } from "react";
import Card from '../components/Card';
import Jobs from './Jobs';
import Sidebar from '../sidebar/Sidebar';
import SideBarRight from '../sidebar/SideBarRight';
import banner from "../assets/HomeBanner.jpg";
import logo from '../assets/logo.svg';
import '../assets/css/style.css'
import '../assets/css/flaticon.css'


const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [jobs,setJobs] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage =6;

    useEffect(() => {
        setIsLoading(true);
        fetch("http://localhost:4000/all-jobs")
            .then(res => res
            .json())
            .then(data => {
           //console.log(data) 
           setJobs(data)
           setIsLoading(false)
        })
    }, [])

   // console.log(jobs)

    const [query, setQuery] = useState("");
    const haddleInputChange = (event) => {
        setQuery(event.target.value)
    }

    //filter jobs by title
    const filteredItems = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1);

    //radio button filter
    const haddleChange = (event) =>{
        setSelectedCategory(event.target.value)
    }

    //button based filtering
    const haddleClick = (event) => {
        setSelectedCategory(event.target.value)
    }

    //calculate the index range
    const calculatePageRange = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return {startIndex, endIndex};
    }

    //function for the next page
    const nextPage = () => {
        if(currentPage < Math.ceil(filteredItems.length / itemsPerPage)){
            setCurrentPage(currentPage+1);
        }
    }

    //function for the previous page
    const prevPage = () => {
        if(currentPage > 1){
            setCurrentPage(currentPage-1);
        }
    }





    // main function
    const filteredData = (jobs, selected, query) =>
    {
        let filteredJobs = jobs;

        //filtering input items
        if(query){
            filteredJobs = filteredItems;
        }

        //category filtering
        if(selected){
            filteredJobs = filteredJobs.filter(({jobLocation, maxPrice, experienceLevel, salaryType, employmentType, postingDate}) => (
                jobLocation.toLowerCase() === selected.toLowerCase() || 
                parseInt(maxPrice) === parseInt(selected) ||    
                salaryType.toLowerCase() === selected.toLowerCase() ||
                experienceLevel.toLowerCase() === selected.toLowerCase() ||
                employmentType.toLowerCase() === selected.toLowerCase()
            ))
                console.log(filteredJobs);
        }
        //slice the data based on current page
        const {startIndex, endIndex} = calculatePageRange();
        filteredJobs = filteredJobs.slice(startIndex, endIndex)
        return filteredJobs.map((data, i) => <Card key={i} data={data}/>)

    }

    const result = filteredData(jobs, selectedCategory, query);


    return (
        
    <div className="mt-20 bg-bgShade" id="home">
        
      <div className="lg:px-12 px-4 flex flex-col md:flex-row-reverse items-center justify-between gap-5">
      <div className="banner">
          <img draggable="false" src={banner} alt="" className="w-full" />
        </div>
        {/* left side */}
        <div className="md:w-1/2 w-full mt-5">
          {/* <p className="text-4xl text-headingcolor font-semibold mb-5">Hey,</p> */}
          <h1 className="font-bold text-headingcolor leading-snug md:leading-[116px] mb-5"><h1 className='Heading'>Find your<br/> <span className='text-blue'>New Job</span> today...</h1>
           
          </h1>
          <p className="text-2xl text-body leading-9 mb-8">
          Find your dream job with our recruitment website. Browse and apply for opportunities across all industries, from entry-level to executive positions. Join us and start your journey to success today!
          </p>
          <a href="/Search">
          <button className="home-submit">View Available Jobs</button>
          </a>
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

export default Home