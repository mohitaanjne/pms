import './App.css';
import {Routes,Route} from "react-router-dom";

import Footer from './FooterComponent/footer';
import Home from './HomeComponent/home';
import Navbar from './NavComponent/nav';
import Slider from './SliderComponent/slider';
import About from './AboutComponent/about';
import Service from './ServiceComponent/service';
import Contact from './ContactComponent/contact';
import Register from './RegisterComponent/register';
import Login from './LoginComponent/login';
import Logout from './LogoutComponent/logout';
import AddProject from './AddProjectComponent/addproject';
import ViewProjects from './ViewProjectsComponent/viewprojects';
import AssignProject from './AssignProjectComponent/assignproject';
import CreateGroup from './CreateGroupComponent/creategroup';
import Header from './HeaderComponent/header';
import Admin from './AdminComponent/adminhome';
import ManageUsers from './ManageUsersComponent/manageUsers';
import User from './UserComponent/userhome';
import VerifyUser from './VerifyUserComponent/verifyuser';

function App() {
  return (
    <>
      <Header/>

      <Navbar/>

      <Slider/>

      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/about" element={<About />} ></Route>
        <Route path="/contact" element={<Contact />} ></Route>  
        <Route path="/service" element={<Service />} ></Route>
        <Route path="/register" element={<Register />} ></Route>
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/logout" element={<Logout />} ></Route>
        <Route path="/addproject" element={<AddProject />} ></Route>
        <Route path="/viewprojects" element={<ViewProjects />} ></Route>
        <Route path="/assignproject" element={<AssignProject />} ></Route>
        <Route path="/creategroup" element={<CreateGroup />} ></Route>
        <Route path="/admin" element={<Admin />} ></Route>
        <Route path="/manageusers" element={<ManageUsers />} ></Route>
        <Route path="/user" element={<User />} ></Route>
        <Route path="/verifyuser/:email" element={<VerifyUser />} ></Route>
      </Routes>
      
      <Footer/>


      {/* Back to Top */}
      <a href="#" class="btn btn-lg btn-secondary btn-lg-square rounded back-to-top"><i class="bi bi-arrow-up"></i></a>
    </>
  );
}

export default App;
