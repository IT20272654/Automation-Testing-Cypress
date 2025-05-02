import Banner from '../components/Banner'
import React, { useEffect, useState } from "react";
import Card from '../components/Card';
import Jobs from './Jobs';
import Sidebar from '../sidebar/Sidebar';
import SideBarRight from '../sidebar/SideBarRight';
import banner2 from "../assets/coverImage1.png";
import banner1 from "../assets/coverImage2.png";
import Button from '../sidebar/Button'
import InputField from '../components/InputField'

const Search = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [jobs,setJobs] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage =10;

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
            <div>
                
<div class="row">
                    <div class="col-lg-12">
                        <h1 class="jobSearchHeading">
                            Featured Job Categories
                        </h1>
                    </div>
                </div>
<div class="our-services section-pad-t30">
            <div>
                {/* <!-- Section Tittle --> */}
                
                <div class="row d-flex justify-contnet-center">
                    <table align='center' cellPadding={20}>
                    <tr>  
                    <td><div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div class="single-services text-center mb-30">
                            <div class="services-ion">
                                <span class="flaticon-tour"></span>
                            </div>
                            <div class="services-cap">
                               {/* <h5><a href="job_listing.html">Design & Creative</a></h5> */}
                               <Button onClickHaddler={haddleClick} value="Design & Creative" tittle="Design & Creative"/>
                            </div>
                        </div>
                    </div></td>
                    <td><div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div class="single-services text-center mb-30">
                            <div class="services-ion">
                                <span class="flaticon-cms"></span>
                            </div>
                            <div class="services-cap">
                               {/* <h5><a href="job_listing.html">Design & Development</a></h5> */}
                               <Button onClickHaddler={haddleClick} value="Design & Development" tittle="Design & Development"/>
                            </div>
                        </div>
                    </div></td>
                    <td><div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div class="single-services text-center mb-30">
                            <div class="services-ion">
                                <span class="flaticon-report"></span>
                            </div>
                            <div class="services-cap">
                               {/* <h5><a href="job_listing.html">Sales & Marketing</a></h5> */}
                               <Button onClickHaddler={haddleClick} value="Sales & Marketing" tittle="Sales & Marketing"/>
                            </div>
                        </div>
                    </div></td>
                    {/* <td><div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div class="single-services text-center mb-30">
                            <div class="services-ion">
                                <span class="flaticon-app"></span>
                            </div>
                            <div class="services-cap">
                               <h5><a href="job_listing.html">Mobile Application</a></h5>
                            </div>
                        </div>
                    </div></td> */}
                    
                    <td><div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div class="single-services text-center mb-30">
                            <div class="services-ion">
                                <span class="flaticon-helmet"></span>
                            </div>
                            <div class="services-cap">
                               {/* <h5><a href="job_listing.html">Construction</a></h5> */}
                               <Button onClickHaddler={haddleClick} value="Construction" tittle="Construction"/>
                            </div>
                        </div>
                    </div></td>
                    <td><div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div class="single-services text-center mb-30">
                            <div class="services-ion">
                                <span class="flaticon-high-tech"></span>
                            </div>
                            <div class="services-cap">
                               {/* <h5><a href="job_listing.html">Information Technology</a></h5> */}
                               <Button onClickHaddler={haddleClick} value="Information Technology" tittle="Information Technology"/>
                            </div>
                        </div>
                    </div></td>
                    {/* <td><div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div class="single-services text-center mb-30">
                            <div class="services-ion">
                                <span class="flaticon-real-estate"></span>
                            </div>
                            <div class="services-cap">
                               <h5><a href="job_listing.html">Real Estate</a></h5>
                            </div>
                        </div>
                    </div></td> */}
                    <td><div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div class="single-services text-center mb-30">
                            <div class="services-ion">
                                <span class="flaticon-content"></span>
                            </div>
                            <div class="services-cap">
                               {/* <h5><a href="job_listing.html">Content Writer</a></h5> */}
                               <Button onClickHaddler={haddleClick} value="Content Writer" tittle="Content Writer"/>

                            </div>
                        </div>
                    </div></td>
                    </tr>
                    </table>
                </div>
            </div>
        </div>


        <table align='center'>         
<section id="hero">
<div class="search_box">
   <div class="search">
     <div class= "select_area">
       <i class="fas fa-map-marker-alt map_icon"></i>
       <div class="text">Search</div>
     </div>
     
     <div class="line"></div>
     
     <div class = "text_and-icon">
       <input autoComplete="off" type="text" class="search_text" id="search_text" placeholder="position here.." onChange={haddleInputChange}
                value={query}/> 
            <i class="fas fa-search search_icon"></i>
              </div>
        </div> </div> 
        </section>
        </table><br/><br/>

            <div className='bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:24 px-4 py-12'>
                {/* left side */}
                <div className='bg-white p-4 rounded'>
                    <Sidebar haddleChange={haddleChange} haddleClick={haddleChange}/>
                    <SideBarRight haddleChange={haddleChange} haddleClick={haddleChange}/>
                    {/* <img src={banner1} alt="" className="w-full" /> */}
                </div>

               



                {/* job side */}
                
                <div className='col-span-3 bg-white p-4 rounded-sm'>
                <div className='flex justify-start md:flex-row flex-col md:gap-0 gap-4'>
                <div className='flex md:rounded-s-md rounded shadow-sm ring-2 ring-inset ring-gray-400 focus-within:ring-2 focus-within:ring-inset  md:w-1/7 w-full'>
                {/* <input type="text" name="title" id="title" placeholder='What position are you looking for?' className='block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-black-400 focus:right-0 sm:text-sm sm:leading-6'onChange={haddleInputChange}
                value={query}/> */}
                 </div></div>
                  {
                    isLoading ? (<p className='font-medium'>Loading...</p>) : result.length > 0 ? (<Jobs result={result}/>) :
                    <>
                    {/* <h3>{result.length} Jobs</h3> */}
                    <p >No Jobs Found</p>
                    </>
                  }

                {/* Pages numbers */}

                      
                </div>

                {/* right side */}
                {/* <div className='bg-white p-4 rounded'>
                    <SideBarRight haddleChange={haddleChange} haddleClick={haddleChange}/>
                  
                    <img src={banner2} alt="" className="w-full" />
                </div> */}
                </div>
                <table align='center'>
                {
                    result.length > 0 ? (
                        <div className='flex justify-center mt-4 space-x-8'>
                            <button onClick={prevPage} disabled = {currentPage ==1} className='hover:underline'>Previous</button>
                            <span>Page {currentPage} of {Math.ceil(filteredItems.length / itemsPerPage)}</span>
                            <button onClick={nextPage} disabled = {currentPage == Math.ceil(filteredItems.length / itemsPerPage)} className='hover:underline'>Next</button>
                        </div>
                    ) : ""
                  } 
                  </table>
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
                <br/><br/>
                </div>
    )
}
export default Search