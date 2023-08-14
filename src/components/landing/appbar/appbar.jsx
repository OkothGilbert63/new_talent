import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react'
// import profile from "../../landing/assets/logo.png";
import "./appbar.css";
import { useNavigate } from 'react-router-dom';

const Appbar = () => {
   const navigate = useNavigate();
  return (
    <div>
      <AppBar elevation={0} className="barup">
         <Toolbar style={{display:"flex", justifyContent:"space-between", backgroundColor:"rgba(0, 0, 0, 0)"}}>
            <div style={{display:"flex",alignItems:"center",paddingLeft:"20px"}}>
               {/* <div className="container-imageyla">
                  <img src={profile} alt="profile" className="profileyla"/>
               </div> */}
               <Typography variant='h5'>
                  TalentHub
               </Typography>
            </div>
            <div >
               <p className="mlinkya">
                  <a className="ankaa" onClick={()=>{navigate("/dashboard")}} style={{color:"grey"}} >Home </a>
                  <a className="ankaa" onClick={()=>{navigate("/dashboard")}} >My Dashboard</a>
                  <a onClick={()=>{navigate("/register")}}>Careers</a>
                  <a onClick={()=>{navigate("/register")}}>Blogs</a>
               </p>
            </div>
            <div className="mlinkya">
               <button className="butsta" onClick={()=>{navigate("/register")}} style={{backgroundColor:"rgb(241, 21, 21)", border:"none"}}>Sign in</button>
               <button className="butsta" onClick={()=>{navigate("/login")}} style={{backgroundColor:"rgb(0, 0, 0, 0)"}}>Log in</button>
            </div>
         </Toolbar>
      </AppBar>
    </div>
  )
}

export default Appbar;