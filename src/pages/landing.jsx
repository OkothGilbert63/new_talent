import Intro from "../components/landing/intro/intro";
import Footer from "../components/landing/footer/footer";
import Script from "../components/landing/script/script";
import Slider from '../components/landing/slider/slider';
import  AppBar  from "../components/landing/appbar/appbar";
import Services from "../components/landing/services/services";


const Landing = () => {
   return <div>
          <AppBar/>
          <Intro/> 
          <Script/>
          <Slider/>
          <Services/>
          <Footer/>
      </div>
};
export default Landing;