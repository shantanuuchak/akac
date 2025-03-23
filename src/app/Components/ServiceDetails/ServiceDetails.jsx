"use client"
import Form from '../Form/Form';
import { useEffect, useRef, useState } from 'react';
import data from '../../Data/accordion.json';
import Link from 'next/link';
import Image from 'next/image';
import Tick from '../Icon/Tick'

const ServiceDetails = () => {

    const ServiceCategory = [
        { title: 'BreezeCheck Maintenance', link: '/service/service-details' },
        { title: 'ChillMax Cleaning', link: '/service/service-details' },
        { title: 'CoolFlow Inspection', link: '/service/service-details' },
        { title: 'FrostWave Duct Cleaning', link: '/service/service-details' },
        { title: 'CoolPro Installation', link: '/service/service-details' },
        { title: 'RapidRepair Services', link: '/service/service-details' },
        { title: 'Emergency CoolFix', link: '/service/service-details' }
    ];

    const accordionContentRef = useRef(null);
    const [openItemIndex, setOpenItemIndex] = useState(-1);
    const [firstItemOpen, setFirstItemOpen] = useState(true);

    const handleItemClick = index => {
        if (index === openItemIndex) {
            setOpenItemIndex(-1);
        } else {
            setOpenItemIndex(index);
        }
    };
    useEffect(() => {
        if (firstItemOpen) {
            setOpenItemIndex(0);
            setFirstItemOpen(false);
        }
    }, [firstItemOpen]);


    return (
        <div className='service-details'>
            <section>
                <div className="cs_height_120 cs_height_lg_80"></div>
                <div className="container">
                    <div className="row cs_gap_y_60">
                        <div className="col-lg-8">
                            <div className="cs_pr_30">
                                <div className="cs_service_details">
                                    <Image src="/assets/img/service_details_1.jpg" alt="img" width={746} height={427} />
                                    <h2 className="cs_fs_48 cs_mb_20">Cooling You Can Count On</h2>
                                    <p className="cs_mb_25">Fast and efficient installation of new air conditioning units. Our certified technicians ensure your system is properly installed for optimal performance Site assessment, equipment delivery air an complete installation. <br /><br />Regular maintenance services to keep your air conditioning system running smoothly and  for as efficiently, preventing an breakdowns and extending its lifespan  Filter replacement, coil cleaning, refrigerant check, thermostat calibration, and system inspection air conditioning Upgrading your existing air conditioning system.</p>
                                    <h3 className="cs_fs_30 cs_mb_15">Your Comfort, Our Mission</h3>
                                    <p className="cs_mb_25">Upgrading your existing air conditioning system to more energy-efficient models, helping you save on energy bills and reduce your carbon footprint  Lubrication of moving parts, electrical connection inspection,</p>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <Image src="/assets/img/service_details_2.jpg" alt="img" width={361} height={317} />
                                        </div>
                                        <div className="col-lg-6">
                                            <Image src="/assets/img/service_details_3.jpg" alt="img" width={361} height={317} />
                                        </div>
                                    </div>
                                    <p className="cs_mb_25">Energy assessment, old unit removal, new unit installation, and energy efficiency optimization a Advanced diagnostic services using the latest technology to detect and address issues in your air conditioning system before they become major problems</p>
                                    <h3 className="cs_fs_30 cs_mb_15">Air Conditioning & Heating Services</h3>
                                    <p className="cs_mb_25">Comprehensive system scan, fault detection, detailed report, and recommended solutions. Tha Precision calibration services to ensure your air conditioning system is operating at its optimal settings for maximum comfort and efficiency</p>
                                    <ul className="cs_list cs_style_1 cs_mp_0 cs_fs_18 cs_medium cs_heading_font">
                                        <li>
                                            <Tick />
                                            Precision Installations
                                        </li>
                                        <li>
                                            <Tick />
                                            FrostWave Duct Cleaning
                                        </li>
                                        <li>
                                            <Tick />
                                            CoolCare Maintenance
                                        </li>
                                        <li>
                                            <Tick />
                                            CoolFlow Inspection
                                        </li>
                                        <li>
                                            <Tick />
                                            TempGuard Emergency
                                        </li>
                                        <li>
                                            <Tick />
                                            FrostGuard Inspection
                                        </li>
                                    </ul>
                                    <h3 className="cs_fs_30 cs_mb_15">We help you with the dedication & affection</h3>
                                    <p className="cs_mb_25">Thorough cleaning services to remove dirt, dust, and debris from your air conditioning system, improving air quality and system efficiency</p>

                                    <h3>A/C Installation</h3>
                                    <p>At AKAC, we provide professional A/C installation services to ensure your unit is properly fitted and functioning at its best. Whether it’s a new installation or a replacement, our expert technicians guarantee a smooth setup, taking into account your space and requirements for optimal cooling.</p>

                                    <h3>A/C Gas Refilling</h3>
                                    <p>Our A/C gas refilling service at AKAC ensures that your air conditioning unit operates efficiently. Over time, A/C units can lose refrigerant, leading to poor cooling performance. We refill the refrigerant gas to the recommended levels, helping to restore your unit’s cooling capacity and improve energy efficiency.</p>

                                    <h3>A/C Maintenance</h3>
                                    <p>Regular A/C maintenance is essential for extending the life of your system and maintaining optimal performance. AKAC offers comprehensive maintenance services, including cleaning, filter checks, and system inspections, to ensure your air conditioning unit works at its best throughout the year.</p>

                                    <h3>Safe A/C Shifting</h3>
                                    <p>If you need to move your air conditioning unit, AKAC provides safe and efficient A/C shifting services. Our team ensures that your unit is carefully disassembled, transported, and reinstalled in its new location without any damage, preserving its functionality and longevity.</p>

                                    <h3>Jet Pump Service</h3>
                                    <p>At AKAC, we also specialize in jet pump services. We provide thorough maintenance and repairs for jet pumps, ensuring that your water supply system operates smoothly and reliably. Whether you need servicing for residential or commercial jet pumps, our team is here to help.</p>

                                    <h3>BDS</h3>
                                    <p>Our BDS (Building Drainage System) services at AKAC focus on ensuring the proper function and maintenance of drainage systems in residential and commercial buildings. We offer inspections, repairs, and maintenance to prevent blockages and ensure effective water drainage.</p>


                                    <div className="cs_accordians cs_style_1">
                                        {data.map((item, index) => (
                                            <div key={index} className={`cs_accordian ${index === openItemIndex ? "active" : ""}`}>
                                                <div className="cs_accordian_head" onClick={() => handleItemClick(index)}>
                                                    <h2 className="cs_accordian_title cs_fs_18 cs_medium mb-0">{item.title}</h2>
                                                    <span className="cs_accordian_toggle"></span>
                                                </div>
                                                <div className="cs_accordian_body" ref={accordionContentRef}>
                                                    <p>{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="cs_right_sidebar">
                                <div className="cs_sidebar_widget cs_color_1">
                                    <form action="#" className="cs_search_form">
                                        <input type="text" placeholder="Enter Keyword" className="cs_search_input" />
                                        <button className="cs_search_submit_btn"><svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.75 14.7188L11.5625 10.5312C12.4792 9.38542 12.9479 8.04167 12.9688 6.5C12.9271 4.66667 12.2917 3.13542 11.0625 1.90625C9.83333 0.677083 8.30208 0.0416667 6.46875 0C4.63542 0.0416667 3.10417 0.677083 1.875 1.90625C0.666667 3.13542 0.0416667 4.66667 0 6.5C0.0416667 8.33333 0.677083 9.86458 1.90625 11.0938C3.11458 12.3229 4.63542 12.9583 6.46875 13C8.03125 12.9792 9.375 12.5104 10.5 11.5938L14.6875 15.7812C14.875 15.9271 15.0625 16 15.25 16C15.4583 16 15.6354 15.9271 15.7812 15.7812C16.0729 15.4271 16.0625 15.0729 15.75 14.7188ZM1.5 6.5C1.54167 5.08333 2.03125 3.90625 2.96875 2.96875C3.90625 2.03125 5.08333 1.54167 6.5 1.5C7.91667 1.54167 9.09375 2.03125 10.0312 2.96875C10.9688 3.90625 11.4583 5.08333 11.5 6.5C11.4583 7.91667 10.9688 9.09375 10.0312 10.0312C9.09375 10.9688 7.91667 11.4583 6.5 11.5C5.08333 11.4583 3.90625 10.9688 2.96875 10.0312C2.03125 9.09375 1.54167 7.91667 1.5 6.5Z" fill="white" />
                                        </svg>
                                        </button>
                                    </form>
                                </div>
                                <div className="cs_sidebar_widget">
                                    <h2 className="cs_sidebar_widget_heading cs_fs_24 cs_semibold">Categories</h2>
                                    <ul className="cs_category_widget">
                                        {ServiceCategory.map((item, i) => (
                                            <li key={i}>
                                                <Link href={item.link}>
                                                    <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.9062 7.4375L14.9062 13.4375C14.7188 13.7917 14.4062 13.9792 13.9688 14H2C1.4375 13.9792 0.96875 13.7812 0.59375 13.4062C0.21875 13.0312 0.0208333 12.5625 0 12V2C0.0208333 1.4375 0.21875 0.96875 0.59375 0.59375C0.96875 0.21875 1.4375 0.0208333 2 0H5.6875C6.22917 0 6.69792 0.197917 7.09375 0.59375L8.625 2H13C13.5625 2.02083 14.0312 2.21875 14.4062 2.59375C14.7812 2.96875 14.9792 3.4375 15 4V5H13.5V4C13.4792 3.6875 13.3125 3.52083 13 3.5H8L6.03125 1.65625C5.92708 1.55208 5.8125 1.5 5.6875 1.5H2C1.6875 1.52083 1.52083 1.6875 1.5 2V11L3.71875 6.5625C3.90625 6.20833 4.20833 6.02083 4.625 6H17C17.375 6.02083 17.6562 6.17708 17.8438 6.46875C18.0312 6.76042 18.0521 7.08333 17.9062 7.4375Z" fill="#696969" />
                                                    </svg>
                                                    <span>{item.title}</span>
                                                    <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M13.7188 6.71875L8.71875 11.7188C8.51042 11.9062 8.27083 12 8 12C7.72917 12 7.48958 11.9062 7.28125 11.7188C7.09375 11.5104 7 11.2708 7 11C7 10.7292 7.09375 10.4896 7.28125 10.2812L10.5938 7H1C0.708333 7 0.46875 6.90625 0.28125 6.71875C0.09375 6.53125 0 6.29167 0 6C0 5.70833 0.09375 5.46875 0.28125 5.28125C0.46875 5.09375 0.708333 5 1 5H10.5938L7.28125 1.71875C7.09375 1.51042 7 1.27083 7 1C7 0.729167 7.09375 0.489583 7.28125 0.28125C7.48958 0.09375 7.72917 0 8 0C8.27083 0 8.51042 0.09375 8.71875 0.28125L13.7188 5.28125C13.9062 5.48958 14 5.72917 14 6C14 6.27083 13.9062 6.51042 13.7188 6.71875Z" fill="#696969" />
                                                    </svg>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="cs_sidebar_widget">
                                    <h2 className="cs_sidebar_widget_heading cs_fs_24 cs_semibold">Download</h2>
                                    <div>
                                        <a href="#" className="cs_btn cs_style_1 w-100 cs_mb_15">
                                            <i className="fa-solid fa-file-pdf"></i>
                                            <span>DOWNLOAD PDF</span>
                                        </a>
                                        <a href="#" className="cs_btn cs_style_1 cs_color_2 w-100">
                                            <i className="fa-solid fa-file"></i>
                                            <span>DOWNLOAD DOC</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="cs_sidebar_widget">
                                    <Form></Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cs_height_120 cs_height_lg_80"></div>
            </section>

        </div>
    );
};

export default ServiceDetails;