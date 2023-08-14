import React from 'react';
import "./choice.css";
import profile from "../components/landing/assets/profy.png";
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';

const Choice = () => {
   const navigate = useNavigate();
  return (
   <div className="mainyx">
      <h2 className="padder" style={{color:"white"}}>Create an Account.</h2>
      <Grid container >
         <Grid item xs={12} md={6} lg={6} className="smholder">
            <div className="sub-mainyx">
         
            <div className="imgsyx">
               <div className="container-imageyx">
               <img src={profile} alt="profile" className="profileyx"/>
               </div>
            </div>

            <div className="inpucx">
               <h2>HR Personnel</h2>
               <h4>Are you looking for quality candidates? Advertise and search with us.</h4>

                  <div className="login-button">
                     <Button className="loginbutton" startIcon={<LoginIcon fontSize="small"/>}  color="grey" variant="contained" style={{width:"70%", backgroundColor:"#ff0000"}} onClick={()=>{navigate("/register")}} >Sign up as HR</Button>
                  </div>
               
            </div>
         
            </div>
         </Grid>

         <Grid item xs={12} md={6} lg={6} className="smholder">
            <div className="sub-mainyx">
         
            <div className="imgsyx">
               <div className="container-imageyx">
               <img src={profile} alt="profile" className="profileyx"/>
               </div>
            </div>

            <div className="inpucx">
               <h2>Recruiter</h2>
               <h4>Are you looking for quality candidates? Advertise and search with us.</h4>

                  <div className="login-button">
                     <Button className="loginbutton" startIcon={<LoginIcon fontSize="small"/>}  color="grey" variant="contained" style={{width:"70%", backgroundColor:"#ff0000"}} onClick={()=>{navigate("/register")}} >Sign up as Recruiter</Button>
                  </div>
               
            </div>
         
            </div>
         </Grid>
      </Grid>
      


      <p className="linkyx">
            <a className="anka" href="#">Forgot password, </a> <a onClick={()=>{navigate("/register")}}>Sign Up ?</a> Or <a onClick={()=>{navigate("/")}}>Back Home ?</a>
      </p>
  </div>
  )
}

export default Choice;