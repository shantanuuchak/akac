import React from 'react';
import About2 from '../Components/About/About2';
import BreadCumb from '../Components/Common/BreadCumb';
import Testimonial from '../Components/Home/Testimonial';
import Faq from '../Components/Home/Faq';
import Process from '../Components/Home/Process';

const page = () => {
    return (
        <div className='about-page'>
            <BreadCumb Title="About Us"></BreadCumb>
            <About2 
                Img="/assets/img/about_img_2.png"
                TitleUp="About us"
                Title="Turning up the chill factor in your home or office"
                Content="AKAC, established by Arun Kumar, is a name synonymous with excellence in air conditioning, washing machine, and refrigerator services. Based in mumbai, we combine technical mastery with a customer-first approach to deliver reliable solutions."
                FeatureList={[
                    "Superior air conditioning solutions",
                    "Optimized laundry system care",
                    "Reliable refrigeration support"
                ]}
                Experience="14+"
                BioImg="/assets/img/avatar_1.png"                
                BioName="Arun Kumar"                
                BioContent="Call any time for services"                
            ></About2>
            <Testimonial></Testimonial>
            <Faq></Faq>
            <Process></Process>
        </div>
    );
};

export default page;