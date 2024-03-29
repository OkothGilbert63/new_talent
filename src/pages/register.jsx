import "./register.css"
import profile from "../components/landing/assets/profy.png";
import { useNavigate } from 'react-router-dom';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LoginIcon from '@mui/icons-material/Login';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="mainyr">
     <div className="sub-mainyr">
       
         <div className="imgsyr">
           <div className="container-imageyr">
             <img src={profile} alt="profile" className="profileyr"/>
           </div>
         </div>

         <div className="inpuc">
           <h3>The Talent Hub Africa</h3>
           <h2>Recruiter Sign In</h2>
           

              
           <div className="labelyr">
                <label>User Name</label>
            </div>
            <div className="search">
              <PersonIcon style={{paddingRight:"10px"}}/>
              <input className="loginput" type="text" placeholder="Name..." />
            </div>

            <div className="labelyr">
              <label>Your email</label>
            </div>
           <div className="search">
              <AlternateEmailIcon style={{paddingRight:"10px"}} />
              <input className="loginput" type="text" placeholder="Email..." />
           </div>
              
            <div className="labelyr">
                <label>Password</label>
            </div>
            <div className="search">
              <LockOpenIcon style={{paddingRight:"10px"}}/>
              <input className="loginput" type="password" placeholder="Password..." />
            </div>

            <div className="labelyr">
                <label>Repeat Password</label>
            </div>
            <div className="search">
              <LockOpenIcon style={{paddingRight:"10px"}}/>
              <input className="loginput" type="password" placeholder="Password..." />
            </div>
          

          <div className="login-buttonyr">
          <Button className="loginbutton" startIcon={<LoginIcon fontSize="small"/>}  color="grey" variant="contained" style={{width:"70%", backgroundColor:"#ff0000"}} >Sign In</Button>
          <hr></hr>
          <Button className="loginbutton" startIcon={<GoogleIcon fontSize="small"/>}  color="grey" variant="contained" style={{width:"90%", backgroundColor:"rgba(241, 241, 241, 0)", textTransform:"none"}} >Continue with Gmail</Button>
          <Button className="loginbutton" startIcon={<GitHubIcon fontSize="small"/>}  color="grey" variant="contained" style={{width:"90%", backgroundColor:"rgba(241, 241, 241, 0)", textTransform:"none"}} >Continue with Linkedln</Button>
          </div>
           
            <p className="linky">
              <a className="anka" href="#">Forgot password, </a><a onClick={()=>{navigate("/login")}}>Login ?</a> Or <a onClick={()=>{navigate("/")}}>Back Home ?</a>
            </p>
           
 
         </div>

     </div>
    </div>
  );
};

export default Login;