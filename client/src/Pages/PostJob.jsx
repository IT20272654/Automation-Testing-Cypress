import { useState } from "react";
import { useForm } from "react-hook-form"
import CreatableSelect from 'react-select/creatable';

const PostJob = () => {
    const [selectedOption,setSelectedOption] = useState(null);

    const {
        register,
        handleSubmit, reset,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => {
        data.skills=selectedOption;
        //console.log(data)
        fetch("http://localhost:4000/post-job", {
            method:"POST",
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then((result) => {
            console.log(result);
            if(result.acknowledged === true){
                alert("Job Posted Successfully!!!")
            }
            reset()
        });
    };
    
    const options = [
        {value: "JavaScript", lable: "JavaScript"},
        {value: "C++", label: "C++"},
        {value: "HTML", label: "HTML"},
        {value: "CSS", label: "CSS"},
        {value: "React", label: "React"},
        {value: "Node", label: "Node"},
        {value: "MongoDb", label: "MongoDb"},
    ]

    return (
        <div className=""><br/><br/>
        <div className=""><div className="max-w-screen-2xl container mx-auto xl:px-24 px-4"> <br/><div>
      
      <div className="md:w-2/3 mx-auto mb-20">
      <form onSubmit={handleSubmit(onSubmit)} className="jobPostForm">
      <h1 align='center' className='applyjobHeading'><b>Post Your Job Advertisement</b></h1>
          
          <div className="flex flex-col sm:flex-row gap-8 items-center mb-8">
            <div className="sm:w-1/2 w-full">
              <label htmlFor="jobTitle" className="text-base text-headingcolor w-full">Job Title</label>
              <input type="text" placeholder={"Enter position that you want to post..."} {...register("jobTitle")} className="block border border-primary rounded-lg py-2 px-2 mt-2 w-full" required/>
            </div>

            <div className="sm:w-1/2 w-full">
              <label htmlFor="companyName" className="text-base text-headingcolor w-full">Company Name</label>
              <input type="text" placeholder={"Enter company name here..."}{...register("companyName")} className="block border border-primary rounded-lg py-2 px-2 mt-2 w-full" required/>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 items-center mb-8">
            <div className="sm:w-1/2 w-full">
              <label htmlFor="jobTitle" className="text-base text-headingcolor w-full">Minimum Salary</label>
              <input type="text" placeholder={"Ex: 80000"}{...register("minPrice")} 
              className="block border border-primary rounded-lg py-2 px-2 mt-2 w-full" required/>
            </div>

            <div className="sm:w-1/2 w-full">
              <label htmlFor="companyName" className="text-base text-headingcolor w-full">Maximum Salary</label>
              <input type="text" placeholder={"Ex: 1000000"} {...register("maxPrice")} className="block border border-primary rounded-lg py-2 px-2 mt-2 w-full" required/>
            </div>
          </div>

          <div className="w-full mb-8">
            <label htmlFor="salaryType" className="text-base text-headingcolor w-full">Category</label>
            <select {...register("salaryType")} className="block border border-primary rounded-lg py-2 px-2 mt-2 w-full">
            <option value="">Choose Category</option>
            <option value="Design & Creative">Design & Creative</option>
            <option value="Design & Development">Design & Development</option>
            <option value="Sales & Marketing">Sales & Marketing</option>
            <option value="Construction">Construction</option>
            <option value="Information Technology">Information Technology</option>
            <option value="Content Writer">Content Writer</option>
            </select>
          </div>

          <div className="w-full mb-8">
            <label htmlFor="jobLocation" className="text-base text-headingcolor w-full">Location</label>
            <select {...register("jobLocation")} className="block border border-primary rounded-lg py-2 px-2 mt-2 w-full">
            <option value="">Choose Location</option>
            <option value="Western Province">Western Province</option>
            <option value="Southern Province">Southern Province</option>
            <option value="Central Province">Central Province</option>
            <option value="Eastern Province">Eastern Province</option>
            <option value="Northern Province">Northern Province</option>
            <option value="North Western Province">North Western Province</option>
            <option value="North Central Province">North Central Province</option>
            <option value="Uva Province">Uva Province</option>
            <option value="Sabaragamuwa Province">Sabaragamuwa Province</option>
            </select>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 items-center mb-8">
            <div className="sm:w-1/2 w-full">
              <label htmlFor="postingDate" className="text-base text-headingcolor w-full">Job Posting Date</label>
              <input type="date" {...register("postingDate")}
              className="block border border-primary rounded-lg py-2 px-2 mt-2 w-full" required/>
            </div>

            <div className="sm:w-1/2 w-full">
              <label htmlFor="postingDate" className="text-base text-headingcolor w-full">Company Logo</label>
              <input type="url" placeholder={"Paste your company url logo here"} {...register("companyLogo")}
              className="block border border-primary rounded-lg py-2 px-2 mt-2 w-full" required/>
            </div>
          </div>

          <div className="w-full mb-8">
            <label htmlFor="experienceLevel" className="text-base text-headingcolor w-full">Experience Level</label>
            <select {...register("experienceLevel")} className="block border border-primary rounded-lg py-2 px-2 mt-2 w-full">
            <option value="">Choose Your Experience Level</option>
            <option value="Any experience">Any experience</option>
            <option value="Work remotely">Work remotely</option>
            <option value="Intership">Intership</option>
            </select>
          </div>

            <div className="w-full mb-8">
              <label htmlFor="email" className="text-base text-headingcolor w-full">Company Email</label>
              <input type="text" placeholder={"Enter your company email"} {...register("email")}
              className="block border border-primary rounded-lg px-2 py-2 mt-2 w-full" />
            </div>

          <div className="w-full mb-8">
            <label htmlFor="experienceLevel" className="text-base text-headingcolor w-full">Experience Level</label>
            <select {...register("employmentType")} className="block border border-primary rounded-lg py-2 px-2 mt-2 w-full">
            <option value="">Choose Your Employee Type</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Temporary">Temporary</option>
            </select>
          </div>

          <div className="w-full mb-8">
            <label htmlFor="description" className="text-base text-headingcolor w-full">Description</label>
            <input 
              type="text" 
              placeholder="Enter job description..." 
              {...register("description")}
              className="block border border-primary rounded-lg py-2 px-2 mt-2 w-full"
            />
          </div>
          
          <table align="center">
          <input type="submit" value="Submit" className="jobPost-submit"/>
          </table> 
          <br/><br/>
        </form>
      </div>
      
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
      </footer>
      <br/><br/><br/>
       </div>
      </div>
    )
}

export default PostJob