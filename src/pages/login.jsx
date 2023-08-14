import "./login.css"
import profile from "../components/landing/assets/profy.png";
import Button from '@mui/material/Button';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="mainy">
     <div className="sub-mainy">
      
         <div className="imgsy">
           <div className="container-imagey">
             <img src={profile} alt="profile" className="profiley"/>
           </div>
         </div>

         <div className="inpuc">
           <h3>The Talent Hub Africa</h3>
           <h2>Recruiter Login</h2>

            <div className="labely">
              <label>Your email</label>
            </div>
           <div className="search">
              <AlternateEmailIcon style={{paddingRight:"10px"}} />
              <input className="loginput" type="text" placeholder="Email..." />
           </div>

              
            <div className="labely">
                <label>Your password</label>
            </div>
            <div className="search">
              <LockOpenIcon style={{paddingRight:"10px"}}/>
              <input className="loginput" type="text" placeholder="Password..." />
            </div>
              
          

          <div className="login-button">
          <Button className="loginbutton" startIcon={<LoginIcon fontSize="small"/>}  color="grey" variant="contained" style={{width:"70%", backgroundColor:"#ff0000",marginBottom:"10px"}} >Login</Button>
          </div>
          <hr></hr>
          <Button className="loginbutton" startIcon={<gmailIcon fontSize="small"/>}  color="grey" variant="contained" style={{width:"70%", backgroundColor:"rgba(241, 241, 241, 0)", marginTop:"10px", textTransform:"none"}} >Continue with Gmail</Button>
          <Button className="loginbutton" startIcon={<linkedlnIcon fontSize="small"/>}  color="grey" variant="contained" style={{width:"70%", backgroundColor:"rgba(241, 241, 241, 0)", marginTop:"10px", textTransform:"none"}} >Continue with linkedln</Button>
        
           
            <p className="linky">
              <a className="anka" href="#">Forgot password, </a> <a onClick={()=>{navigate("/choice")}}>Sign Up ?</a> Or <a onClick={()=>{navigate("/")}}>Back Home ?</a>
            </p>
           
 
         </div>
       
       

     </div>
    </div>
  );
};

export default Login;