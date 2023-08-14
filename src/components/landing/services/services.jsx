
import "./services.css";
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();
    return (
      <div className="beba" >
        <Grid  container style={{gap:"10px"}}>
          <Grid item className="gpiclt" xs={12} md={5.9} lg={5.8}>
            <div className="piclt"></div>
          </Grid>
          <Grid item className="gpiclt" xs={12} md={5.9} lg={5.8}>
            <div style={{display:"flex", flexDirection:"column", padding:"30px 0px 0px 0px"}}>
              <h3>Explore recruitment Methods</h3>
              <p style={{margin:"10px 0px 0px 0px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste non, molestias rerum ratione repudiandae libero vel magni ad veniam consequuntur velit officiis delectus doloribus cum ut quibusdam aliquid consectetur molestiae.</p>
              <h4 className="waka" >Learn More On Recruitment Strategies</h4>
            </div>
          </Grid>
        </Grid>

        <Grid  container style={{gap:"10px"}}>
          <Grid item xs={12} md={5.9} lg={5.8}>
            <div style={{display:"flex", flexDirection:"column", padding:"50px 40px 30px 50px"}}>
              <h3>Explore recruitment Methods</h3>
              <p style={{margin:"10px 0px 0px 0px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste non, molestias rerum ratione repudiandae libero vel magni ad veniam consequuntur velit officiis delectus doloribus cum ut quibusdam aliquid consectetur molestiae.</p>
              <h4 className="waka">Learn More On Recruitment Strategies</h4>
            </div>
          </Grid>
          <Grid className="gpicbr" item xs={12} md={5.9} lg={5.8}>
             <div className="piclt"></div>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center",alignItems:"center", margin:"60px 0px 40px 0px"}}>
              <h3>Get Top Talents With TalentHub</h3>
              <button className="butstas" onClick={()=>{navigate("/login")}} >Log in</button>
            </div>
          </Grid>
        </Grid>
      </div>
  );
};

export default Services;