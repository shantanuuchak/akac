import React from 'react';
import ContactCard from '../ContactCard/ContactCard';
import Form3 from '../Form/Form3';

const Contact = () => {
    return (
        <div className="contact-page">
            <section>
                <div className="cs_height_120 cs_height_lg_80"></div>
                <div className="container">
                    <div className="row cs_gap_y_50">
                        <div className="col-xxl-6 col-lg-7">
                            <h2 className="cs_fs_48 cs_semibold cs_mb_22">Contact Information</h2>
                            <p className="cs_mb_30">Experience unparalleled comfort with AKAC's QuickCool AC Installation service. Our certified technicians ensure fast, efficient, and safe installation of your new air conditioning system, tailored to your specific needs. Trust AKAC for a seamless, cool experience from start to finish.</p>
                            <div className="row cs_gap_y_30 cs_row_gap_30">
                                <ContactCard
                                    img="/assets/img/icons/contact_icon_1.svg"
                                    Title="Our Address"
                                    Content="SRA Building Shop 34, Hanuman Nagar, Kandivali E, Mumbai - 400101"
                                >
                                </ContactCard>
                                <ContactCard
                                    img="/assets/img/icons/contact_icon_2.svg"
                                    Title="Phone Number"
                                    Content="+91 77158 64243"
                                >
                                </ContactCard>
                                <ContactCard
                                    img="/assets/img/icons/contact_icon_3.svg"
                                    Title="Email Address"
                                    Content="info@akac.in"
                                >
                                </ContactCard>
                                <ContactCard
                                    img="/assets/img/icons/contact_icon_4.svg"
                                    Title="Working Time"
                                    Content="Work Time: Sun - Fri <br>10AM - 6PM"
                                >
                                </ContactCard>
                            </div>
                            <div className="cs_height_35 cs_height_lg_35"></div>
                            <h3 className="cs_fs_24 cs_semibold cs_mb_10">Follow The Social Media:</h3>
                            <p className="cs_mb_20">Ensure your AC system is ready for the hottest days with our Comfort Check Tune-Up</p>
                            <div className="cs_social_btns cs_style_1 cs_type_1">
                                <a href="mailto:info@akac.in" className="cs_social_btn cs_center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path><path d="M3 7l9 6l9 -6"></path></svg>
                                </a>
                                <a href="https://facebook.com/akacindia" className="cs_social_btn cs_center">
                                    <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.75391 8.625H5.70312V14.75H2.96875V8.625H0.726562V6.10938H2.96875V4.16797C2.96875 1.98047 4.28125 0.75 6.27734 0.75C7.23438 0.75 8.24609 0.941406 8.24609 0.941406V3.10156H7.125C6.03125 3.10156 5.70312 3.75781 5.70312 4.46875V6.10938H8.13672L7.75391 8.625Z" fill="#010F34" />
                                    </svg>
                                </a>
                                <a href="https://instagram.com/akacindia" className="cs_social_btn cs_center">
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 3.40625C9.96875 3.40625 11.5938 5.03125 11.5938 7C11.5938 9 9.96875 10.5938 8 10.5938C6 10.5938 4.40625 9 4.40625 7C4.40625 5.03125 6 3.40625 8 3.40625ZM8 9.34375C9.28125 9.34375 10.3125 8.3125 10.3125 7C10.3125 5.71875 9.28125 4.6875 8 4.6875C6.6875 4.6875 5.65625 5.71875 5.65625 7C5.65625 8.3125 6.71875 9.34375 8 9.34375ZM12.5625 3.28125C12.5625 2.8125 12.1875 2.4375 11.7188 2.4375C11.25 2.4375 10.875 2.8125 10.875 3.28125C10.875 3.75 11.25 4.125 11.7188 4.125C12.1875 4.125 12.5625 3.75 12.5625 3.28125ZM14.9375 4.125C15 5.28125 15 8.75 14.9375 9.90625C14.875 11.0312 14.625 12 13.8125 12.8438C13 13.6562 12 13.9062 10.875 13.9688C9.71875 14.0312 6.25 14.0312 5.09375 13.9688C3.96875 13.9062 3 13.6562 2.15625 12.8438C1.34375 12 1.09375 11.0312 1.03125 9.90625C0.96875 8.75 0.96875 5.28125 1.03125 4.125C1.09375 3 1.34375 2 2.15625 1.1875C3 0.375 3.96875 0.125 5.09375 0.0625C6.25 0 9.71875 0 10.875 0.0625C12 0.125 13 0.375 13.8125 1.1875C14.625 2 14.875 3 14.9375 4.125ZM13.4375 11.125C13.8125 10.2188 13.7188 8.03125 13.7188 7C13.7188 6 13.8125 3.8125 13.4375 2.875C13.1875 2.28125 12.7188 1.78125 12.125 1.5625C11.1875 1.1875 9 1.28125 8 1.28125C6.96875 1.28125 4.78125 1.1875 3.875 1.5625C3.25 1.8125 2.78125 2.28125 2.53125 2.875C2.15625 3.8125 2.25 6 2.25 7C2.25 8.03125 2.15625 10.2188 2.53125 11.125C2.78125 11.75 3.25 12.2188 3.875 12.4688C4.78125 12.8438 6.96875 12.75 8 12.75C9 12.75 11.1875 12.8438 12.125 12.4688C12.7188 12.2188 13.2188 11.75 13.4375 11.125Z" fill="#010F34" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="col-xxl-5 offset-xxl-1 col-lg-5">
                            <Form3></Form3>
                        </div>
                    </div>
                </div>
                <div className="cs_height_120 cs_height_lg_80"></div>
            </section>
            <div className="cs_map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7535.955720467668!2d72.86236584213977!3d19.19616932813281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7005bd1b00d%3A0x724e14cd488d5e28!2sNew%20SRA%20Building!5e0!3m2!1sen!2sin!4v1742682703218!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

        </div>
    );
};

export default Contact;