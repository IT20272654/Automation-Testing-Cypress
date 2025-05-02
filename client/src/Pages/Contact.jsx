import React, { useState } from 'react'
import '../assets/css/contact.css'


const Contact = () => {
    const [userData, setUserData] = useState(
        {
            Name: '', Email: '', Subject: '', Message: ''
        }

    )
    let name, value
    console.log(userData)
    const data = (e) =>
    {
        name = e.target.name
        value = e.target.value
        setUserData({...userData, [name]:value})

    }
    const send = async(e) =>
    {
        const {Name, Email, Subject, Message} = userData;
        e.preventDefault();
        const option = {
            method: 'POST',
            headers: {
                'Content-type':'aplication/json'
            }, 
            body : JSON.stringify({
                Name, Email, Subject, Message
            })
        }
        const res = await fetch('https://contact-us-react-ab779-default-rtdb.firebaseio.com/FeedBack.json', option )
        console.log(res)
        if(res)
        {
            alert("Your Feedback Sent")
        }
    }
  return (
    
    <div className='mt-20 bg-bgShade'><br/>
    <table align='center'>
     <div className='ContactUs_container'>
        <div className='ContactUs_contact_box'>
            
            <form method='POST'>
                <h1 align='center' className='contactUs'><b>Feedback Form</b></h1>
                
                <input type='text' name='Name' value={userData.Name} placeholder='Enter Your Name' autoComplete='off' onChange={data}></input>
                <input type='email' name='Email' value={userData.Email} placeholder='Enter Your E-mail' autoComplete='off' onChange={data}></input>
                <input type='text' name='Subject' value={userData.Subject} placeholder='Thoughts about the Our website' autoComplete='off' onChange={data}></input>
                <textarea value={userData.Message} name='Message' placeholder='How we can improve Our website' autoComplete='off' onChange={data}></textarea>
                <button onClick={send} >Send your Feedback</button>

            </form>
            
        </div>
     </div>
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
</div>
    
  )
}

export default Contact