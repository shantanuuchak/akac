import React from "react";
import HomeSlider2 from "./Components/Home2/HomeSlider2";
import About2 from "./Components/About/About2";
import Services2 from "./Components/Home2/Services2";
import Choose2 from "./Components/Home2/Choose2";
import Cta from "./Components/Services/Cta";
import Contact2 from "./Components/Home2/Contact2";
// import Team from './Components/Home2/Team';
import Project2 from "./Components/Home2/Project2";
import Testimonial3 from "./Components/Home2/Testimonial3";
// import Blog2 from "./Components/Home2/Blog2";

const page = () => {
  return (
    <div className="home-page2">
      <HomeSlider2></HomeSlider2>
      <About2
        Img="/assets/img/about_img_2.png"
        TitleUp="About us"
        Title="Turning up the chill factor in your home or office"
        Content="AKAC, established by Arun Kumar, is a name synonymous with excellence in air conditioning, washing machine, and refrigerator services. Based in mumbai, we combine technical mastery with a customer-first approach to deliver reliable solutions."
        FeatureList={[
          "Superior air conditioning solutions",
          "Optimized laundry system care",
          "Reliable refrigeration support",
        ]}
        Experience="14+"
        BioImg="/assets/img/avatar_1.png"
        BioName="Arun Kumar"
        BioContent="Call any time for services"
      ></About2>
      <Services2></Services2>
      <Choose2></Choose2>
      <Cta></Cta>
      {/* <Team></Team> */}
      <Contact2></Contact2>
      <Project2></Project2>
      <Testimonial3></Testimonial3>
      {/* <Blog2></Blog2> */}
    </div>
  );
};

export default page;
