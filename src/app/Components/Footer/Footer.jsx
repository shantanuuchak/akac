"use client"
import Link from "next/link";
import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Image from "next/image";

const Footer = () => {

    const Services = [
        'Rapid Cool Installation',
        'Air Flow Optimization',
        'Rapid Drain Unclogging',
        'Frost Guard Emergency',
        'Breeze Balance Calibration',
      ];

    const WorkingHours = [
        {day:'Thu - Fri', time:'9:00 AM - 7:00 PM'},
        {day:'Mon - Wed', time:'8:00 AM - 10:00 PM'},
        {day:'Saturday', time:'7:00 AM - 9:00 PM'},
        {day:'Sunday', time:'Close'},
      ];

      const QuickLinks = [
        {title:'Home', link:'/'},
        {title:'About', link:'/about'},
        {title:'Services', link:'/service'},
        {title:'Blog', link:'/blog'},
        {title:'Contact', link:'/contact'}
      ];      

      useEffect(() => {
        loadBackgroudImages();
      }, []);

    return (
        <footer className="cs_footer cs_style_1">
          <div className="cs_footer_top">
            <div className="container">
              <div className="cs_footer_top_in">
                <div className="cs_social_btns cs_style_1">
                  <Link href="mailto:info@akac.in" className="cs_social_btn cs_center">
                  <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>
                  </Link>
                  <Link href="https://facebook.com/akacindia" className="cs_social_btn cs_center">
                  <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.71875 9H6.375V16H3.25V9H0.6875V6.125H3.25V3.90625C3.25 1.40625 4.75 0 7.03125 0C8.125 0 9.28125 0.21875 9.28125 0.21875V2.6875H8C6.75 2.6875 6.375 3.4375 6.375 4.25V6.125H9.15625L8.71875 9Z" fill="white"/>
                  </svg>
                  </Link>
                  <Link href="https://facebook.com/akacindia" className="cs_social_btn cs_center">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.125 3.60547C7.01823 3.6237 7.75651 3.93359 8.33984 4.53516C8.94141 5.11849 9.2513 5.85677 9.26953 6.75C9.2513 7.64323 8.94141 8.38151 8.33984 8.96484C7.75651 9.56641 7.01823 9.8763 6.125 9.89453C5.23177 9.8763 4.49349 9.56641 3.91016 8.96484C3.30859 8.38151 2.9987 7.64323 2.98047 6.75C2.9987 5.85677 3.30859 5.11849 3.91016 4.53516C4.49349 3.93359 5.23177 3.6237 6.125 3.60547ZM6.125 8.80078C6.70833 8.78255 7.19141 8.58203 7.57422 8.19922C7.95703 7.81641 8.15755 7.33333 8.17578 6.75C8.15755 6.16667 7.95703 5.68359 7.57422 5.30078C7.19141 4.91797 6.70833 4.71745 6.125 4.69922C5.54167 4.71745 5.05859 4.91797 4.67578 5.30078C4.29297 5.68359 4.09245 6.16667 4.07422 6.75C4.09245 7.33333 4.29297 7.81641 4.67578 8.19922C5.05859 8.58203 5.54167 8.78255 6.125 8.80078ZM10.1445 3.46875C10.1263 3.26823 10.0534 3.09505 9.92578 2.94922C9.77995 2.82161 9.60677 2.75781 9.40625 2.75781C9.1875 2.75781 9.01432 2.82161 8.88672 2.94922C8.74089 3.09505 8.66797 3.26823 8.66797 3.46875C8.70443 3.92448 8.95052 4.17057 9.40625 4.20703C9.84375 4.17057 10.0898 3.92448 10.1445 3.46875ZM12.2227 4.23438V4.20703C12.2409 4.57161 12.25 5.09115 12.25 5.76562C12.25 6.42188 12.25 7.07812 12.25 7.73438C12.25 8.39062 12.2409 8.90104 12.2227 9.26562C12.2227 10.2682 11.8854 11.125 11.2109 11.8359C10.5 12.5104 9.65234 12.8385 8.66797 12.8203C8.30339 12.8385 7.78385 12.8568 7.10938 12.875C6.45312 12.875 5.79688 12.875 5.14062 12.875C4.46615 12.8568 3.95573 12.8385 3.60938 12.8203C2.60677 12.8385 1.75 12.5104 1.03906 11.8359C0.364583 11.125 0.0364583 10.2682 0.0546875 9.26562C0.0182292 8.90104 0 8.39062 0 7.73438C0 7.07812 0 6.42188 0 5.76562C0 5.09115 0.0182292 4.57161 0.0546875 4.20703C0.0364583 3.22266 0.364583 2.375 1.03906 1.66406C1.76823 0.989583 2.625 0.652344 3.60938 0.652344C3.95573 0.634115 4.46615 0.625 5.14062 0.625C5.79688 0.625 6.45312 0.625 7.10938 0.625C7.78385 0.625 8.30339 0.634115 8.66797 0.652344C9.65234 0.652344 10.5 0.989583 11.2109 1.66406C11.8854 2.375 12.2227 3.23177 12.2227 4.23438ZM10.9102 10.3594C11.0378 9.99479 11.1107 9.5026 11.1289 8.88281C11.1654 8.26302 11.1745 7.69792 11.1562 7.1875C11.1562 7.02344 11.1562 6.8776 11.1562 6.75C11.1562 6.6224 11.1562 6.47656 11.1562 6.3125C11.1745 5.80208 11.1654 5.23698 11.1289 4.61719C11.1107 3.9974 11.0378 3.50521 10.9102 3.14062C10.6732 2.59375 10.2812 2.20182 9.73438 1.96484C9.36979 1.83724 8.8776 1.76432 8.25781 1.74609C7.63802 1.72786 7.07292 1.71875 6.5625 1.71875C6.39844 1.71875 6.2526 1.71875 6.125 1.71875C5.9974 1.71875 5.85156 1.71875 5.6875 1.71875C5.17708 1.70052 4.61198 1.70964 3.99219 1.74609C3.39062 1.76432 2.89844 1.83724 2.51562 1.96484C1.96875 2.20182 1.57682 2.59375 1.33984 3.14062C1.21224 3.50521 1.13932 3.9974 1.12109 4.61719C1.10286 5.23698 1.09375 5.80208 1.09375 6.3125C1.09375 6.47656 1.09375 6.6224 1.09375 6.75C1.09375 6.8776 1.09375 7.02344 1.09375 7.1875C1.09375 7.69792 1.10286 8.26302 1.12109 8.88281C1.13932 9.48438 1.21224 9.97656 1.33984 10.3594C1.57682 10.9062 1.96875 11.2982 2.51562 11.5352C2.89844 11.6628 3.39062 11.7357 3.99219 11.7539C4.61198 11.7721 5.17708 11.7812 5.6875 11.7812C5.85156 11.7812 5.9974 11.7812 6.125 11.7812C6.2526 11.7812 6.39844 11.7812 6.5625 11.7812C7.07292 11.7812 7.63802 11.7721 8.25781 11.7539C8.8776 11.7357 9.36979 11.6628 9.73438 11.5352C10.2812 11.2982 10.6732 10.9062 10.9102 10.3594Z" fill="white"></path></svg>
                    </Link>
                </div>
                <div className="cs_footer_logo wow zoomIn" data-wow-duration="0.9s" data-wow-delay="0.25s">
                  <Link href="/">
                    <Image src="/assets/img/footer_logo.svg" alt="Logo" width={139} height={111}   />
                  </Link> 
                  </div> 
                <div className="cs_footer_contact_card">
                  <div className="cs_footer_contact_card_icon cs_white_bg cs_center">
                    <Image src="/assets/img/icons/call.svg" alt="img" width={25} height={25}   />
                  </div>
                  <div>
                    <p className="cs_white_color cs_fs_14 mb-0">Need Any Service Help</p>
                    <h3 className="mb-0 cs_fs_24 cs_semibold cs_white_color"><a href="tel:+7715864243">+91 77158 64243</a></h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cs_main_footer cs_bg_filed cs_primary_bg cs_white_color" data-background="/assets/img/footer_bg_1.jpg">
            <div className="container">
              <div className="cs_footer_row cs_type_1">
                <div className="cs_footer_col">
                  <div className="cs_footer_widget">
                    <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">Our Service</h2>
                    <div className="cs_footer_widget_seperator">
                      <span className="cs_accent_bg"></span>
                      <span className="cs_white_bg"></span>
                      <span className="cs_white_bg"></span>
                    </div>
                    <ul className="cs_footer_menu_2">
                    {Services.map((item, i) => ( 
                      <li key={i}><Link href="/service/service-details">{item}</Link></li>
                    ))}
                    </ul>
                  </div>
                </div>
                <div className="cs_footer_col">
                  <div className="cs_footer_widget">
                    <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">Working Hours:</h2>
                    <div className="cs_footer_widget_seperator">
                      <span className="cs_accent_bg"></span>
                      <span className="cs_white_bg"></span>
                      <span className="cs_white_bg"></span>
                    </div>
                    <ul className="cs_working_hours">
                    {WorkingHours.map((item, i) => (                        
                      <li key={i}>
                        <span>{item.day}</span>
                        <span>{item.time}</span>
                      </li>
                     ))}
                    </ul>
                  </div>
                </div>
                <div className="cs_footer_col">
                  <div className="cs_footer_widget">
                    <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">Quick links</h2>
                    <div className="cs_footer_widget_seperator">
                      <span className="cs_accent_bg"></span>
                      <span className="cs_white_bg"></span>
                      <span className="cs_white_bg"></span>
                    </div>
                    <ul className="cs_footer_menu_2">
                    {QuickLinks.map((item, i) => ( 
                      <li key={i}><Link href={item.link}>{item.title} </Link></li>
                    ))}
                    </ul>
                  </div>
                </div>
                <div className="cs_footer_col">
                  <div className="cs_footer_widget">
                    <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">Recent Post</h2>
                    <div className="cs_footer_widget_seperator">
                      <span className="cs_accent_bg"></span>
                      <span className="cs_white_bg"></span>
                      <span className="cs_white_bg"></span>
                    </div>
                    <ul className="cs_recent_post_widget">
                      <li>
                        <div className="cs_recent_post">
                        <Link href="/blog/blog-details" className="cs_recent_post_thumb">
                            <Image src="/assets/img/recent_post_1.jpg" alt="img" width={86} height={86}   />
                          </Link>
                          <div className="cs_recent_post_right">
                            <p className="cs_recent_posted_by cs_fs_14">
                            <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M4.9124 1.625V2.5H8.4124V1.625C8.4124 1.36979 8.49443 1.16016 8.65849 0.996094C8.82255 0.832031 9.03219 0.75 9.2874 0.75C9.54261 0.75 9.75224 0.832031 9.9163 0.996094C10.0804 1.16016 10.1624 1.36979 10.1624 1.625V2.5H11.4749C11.8395 2.51823 12.1494 2.64583 12.4046 2.88281C12.6416 3.13802 12.7692 3.44792 12.7874 3.8125V5.125H0.537398V3.8125C0.555627 3.44792 0.683231 3.13802 0.92021 2.88281C1.17542 2.64583 1.48531 2.51823 1.8499 2.5H3.1624V1.625C3.1624 1.36979 3.24443 1.16016 3.40849 0.996094C3.57255 0.832031 3.78219 0.75 4.0374 0.75C4.29261 0.75 4.50224 0.832031 4.6663 0.996094C4.83037 1.16016 4.9124 1.36979 4.9124 1.625ZM0.537398 6H12.7874V13.4375C12.7692 13.8021 12.6416 14.112 12.4046 14.3672C12.1494 14.6042 11.8395 14.7318 11.4749 14.75H1.8499C1.48531 14.7318 1.17542 14.6042 0.92021 14.3672C0.683231 14.112 0.555627 13.8021 0.537398 13.4375V6ZM2.2874 9.0625C2.30563 9.33594 2.45146 9.48177 2.7249 9.5H3.5999C3.87334 9.48177 4.01917 9.33594 4.0374 9.0625V8.1875C4.01917 7.91406 3.87334 7.76823 3.5999 7.75H2.7249C2.45146 7.76823 2.30563 7.91406 2.2874 8.1875V9.0625ZM5.7874 9.0625C5.80563 9.33594 5.95146 9.48177 6.2249 9.5H7.0999C7.37334 9.48177 7.51917 9.33594 7.5374 9.0625V8.1875C7.51917 7.91406 7.37334 7.76823 7.0999 7.75H6.2249C5.95146 7.76823 5.80563 7.91406 5.7874 8.1875V9.0625ZM9.7249 7.75C9.45146 7.76823 9.30563 7.91406 9.2874 8.1875V9.0625C9.30563 9.33594 9.45146 9.48177 9.7249 9.5H10.5999C10.8733 9.48177 11.0192 9.33594 11.0374 9.0625V8.1875C11.0192 7.91406 10.8733 7.76823 10.5999 7.75H9.7249ZM2.2874 12.5625C2.30563 12.8359 2.45146 12.9818 2.7249 13H3.5999C3.87334 12.9818 4.01917 12.8359 4.0374 12.5625V11.6875C4.01917 11.4141 3.87334 11.2682 3.5999 11.25H2.7249C2.45146 11.2682 2.30563 11.4141 2.2874 11.6875V12.5625ZM6.2249 11.25C5.95146 11.2682 5.80563 11.4141 5.7874 11.6875V12.5625C5.80563 12.8359 5.95146 12.9818 6.2249 13H7.0999C7.37334 12.9818 7.51917 12.8359 7.5374 12.5625V11.6875C7.51917 11.4141 7.37334 11.2682 7.0999 11.25H6.2249ZM9.2874 12.5625C9.30563 12.8359 9.45146 12.9818 9.7249 13H10.5999C10.8733 12.9818 11.0192 12.8359 11.0374 12.5625V11.6875C11.0192 11.4141 10.8733 11.2682 10.5999 11.25H9.7249C9.45146 11.2682 9.30563 11.4141 9.2874 11.6875V12.5625Z" fill="white"/>
                              </svg>
                       
                              12 May, 2024
                            </p>
                            <h3 className="cs_white_color cs_fs_18 cs_medium mb-0">
                            <Link href="/blog/blog-details">Outdoor and Landscape Lighting</Link>
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="cs_recent_post">
                          <Link href="/blog/blog-details" className="cs_recent_post_thumb">
                            <Image src="/assets/img/recent_post_2.jpg" alt="img" width={86} height={86}   />
                          </Link>
                          <div className="cs_recent_post_right">
                            <p className="cs_recent_posted_by cs_fs_14">
                            <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.9124 1.625V2.5H8.4124V1.625C8.4124 1.36979 8.49443 1.16016 8.65849 0.996094C8.82255 0.832031 9.03219 0.75 9.2874 0.75C9.54261 0.75 9.75224 0.832031 9.9163 0.996094C10.0804 1.16016 10.1624 1.36979 10.1624 1.625V2.5H11.4749C11.8395 2.51823 12.1494 2.64583 12.4046 2.88281C12.6416 3.13802 12.7692 3.44792 12.7874 3.8125V5.125H0.537398V3.8125C0.555627 3.44792 0.683231 3.13802 0.92021 2.88281C1.17542 2.64583 1.48531 2.51823 1.8499 2.5H3.1624V1.625C3.1624 1.36979 3.24443 1.16016 3.40849 0.996094C3.57255 0.832031 3.78219 0.75 4.0374 0.75C4.29261 0.75 4.50224 0.832031 4.6663 0.996094C4.83037 1.16016 4.9124 1.36979 4.9124 1.625ZM0.537398 6H12.7874V13.4375C12.7692 13.8021 12.6416 14.112 12.4046 14.3672C12.1494 14.6042 11.8395 14.7318 11.4749 14.75H1.8499C1.48531 14.7318 1.17542 14.6042 0.92021 14.3672C0.683231 14.112 0.555627 13.8021 0.537398 13.4375V6ZM2.2874 9.0625C2.30563 9.33594 2.45146 9.48177 2.7249 9.5H3.5999C3.87334 9.48177 4.01917 9.33594 4.0374 9.0625V8.1875C4.01917 7.91406 3.87334 7.76823 3.5999 7.75H2.7249C2.45146 7.76823 2.30563 7.91406 2.2874 8.1875V9.0625ZM5.7874 9.0625C5.80563 9.33594 5.95146 9.48177 6.2249 9.5H7.0999C7.37334 9.48177 7.51917 9.33594 7.5374 9.0625V8.1875C7.51917 7.91406 7.37334 7.76823 7.0999 7.75H6.2249C5.95146 7.76823 5.80563 7.91406 5.7874 8.1875V9.0625ZM9.7249 7.75C9.45146 7.76823 9.30563 7.91406 9.2874 8.1875V9.0625C9.30563 9.33594 9.45146 9.48177 9.7249 9.5H10.5999C10.8733 9.48177 11.0192 9.33594 11.0374 9.0625V8.1875C11.0192 7.91406 10.8733 7.76823 10.5999 7.75H9.7249ZM2.2874 12.5625C2.30563 12.8359 2.45146 12.9818 2.7249 13H3.5999C3.87334 12.9818 4.01917 12.8359 4.0374 12.5625V11.6875C4.01917 11.4141 3.87334 11.2682 3.5999 11.25H2.7249C2.45146 11.2682 2.30563 11.4141 2.2874 11.6875V12.5625ZM6.2249 11.25C5.95146 11.2682 5.80563 11.4141 5.7874 11.6875V12.5625C5.80563 12.8359 5.95146 12.9818 6.2249 13H7.0999C7.37334 12.9818 7.51917 12.8359 7.5374 12.5625V11.6875C7.51917 11.4141 7.37334 11.2682 7.0999 11.25H6.2249ZM9.2874 12.5625C9.30563 12.8359 9.45146 12.9818 9.7249 13H10.5999C10.8733 12.9818 11.0192 12.8359 11.0374 12.5625V11.6875C11.0192 11.4141 10.8733 11.2682 10.5999 11.25H9.7249C9.45146 11.2682 9.30563 11.4141 9.2874 11.6875V12.5625Z" fill="white"/>
                                </svg>
                              10 May, 2024
                            </p>
                            <h3 className="cs_white_color cs_fs_18 cs_medium mb-0">
                            <Link href="/blog/blog-details">Panel Upgrades and Maintenance</Link>
                            </h3>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cs_footer_bottom cs_accent_bg cs_white_color">
            <div className="container">
              <div className="cs_footer_bottom_in">
                <div className="cs_footer_copyright">Copyright@ {new Date().getFullYear()} <Link href="/">AKAC</Link>. All Rights Reserved.</div>
                <ul className="cs_footer_menu cs_mp_0">
                  <li><Link href="#">Setting & Privacy </Link></li>
                  <li><Link href="#">FAQ</Link></li>
                  <li><Link href="#">Support</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
    );
};

export default Footer;