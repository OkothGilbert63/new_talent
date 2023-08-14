import "./intro.css";
import videoBg from "../assets/Recruiterigma.mp4";
import  ExpandMoreIcon  from "@mui/icons-material/ExpandMore";

const Intro = () => {
  return (
    <div className='main'>
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="content">
            {/* <h2>Talent Hub Kenya.</h2> */}
            <h1 style={{lineHeight:"45px", marginBottom:"0px",fontSize:"50px"}}>Discover Talent, Unleash Success</h1>
            <h2 style={{ marginBottom:"50px"}}>Streamlined Resumes for HR Recruitment</h2>
            {/* <h4 className="h41">The Talent Hub Africa is an HR Platform That recommend exceptional candidates to the recruiters from other
organizations. <br/>These candidates are tasted and found fit just ready to be deployed. The talent hub Africa is here
to increase efficiency and enhance collaboration among the HR professionals.</h4> */}
            <button className="butst">Get Started</button>
            <ExpandMoreIcon fontSize="large"/>
            <ExpandMoreIcon fontSize="large"/>
        </div>
    </div>
  )
}

export default Intro;