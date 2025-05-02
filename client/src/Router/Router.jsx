import {createBrowserRouter} from "react-router-dom";
import App from "../App";
// Shavindu
import Home from "../Pages/Home";
import JobPostingData from "../sidebar/JobPostingData";
import PostJob from "../Pages/PostJob";
import JobDetails from "../Pages/JobDetails";
import Search from "../Pages/Search";
import ApplyJob from "../Pages/ApplyJob";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

// Shayamal
import Contact from "../Pages/Contact";
import UserHome from "../Pages/UserHome";
import About from "../Pages/About";
import ContactUs from "../Pages/ContactUs";

// Thisura
import Login from "../components/Login";
import Signup from "../components/Signup";



const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        { path: "/",
         element:<Home></Home>
        },
        // { path: "/post-job", 
        // element:<PrivateRoute><PostJob/></PrivateRoute>
        // },
        { path: "/post-job", 
          element:<PostJob/>
          },
        { path: "/job/:id", 
        element:<JobDetails/>
        },
        { path: "/Search", 
        element:<Search/>
        },
        { path: "/Contact", 
        element:<Contact></Contact> 
        },
        { path: "/userhome", 
        element:<UserHome></UserHome> 
        },
        { path: "/contactUs", 
        element:<ContactUs></ContactUs>
        },
        { path: "/about", 
        element:<About></About>
       },
       { path: "/ApplyJob", 
        element:<ApplyJob/>
        }
      ],
    },
    {
      path:"/login",
      element:<Login></Login>
    },
    {
      path: "/sign-up",
      element: <Signup></Signup>
    },
    // { path: "/About", 
    // element:<PrivateRoute><About/></PrivateRoute >
    // }
  ]);

  export default router;




