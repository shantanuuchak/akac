"use client";
import { useEffect, useState } from "react";
import Nav from "./Nav";
import Link from "next/link";
import Image from "next/image";
import HeaderStyle2 from "./HeaderStyle2";
import { usePathname } from "next/navigation";
export default function Header({ variant }) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState();
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        setIsSticky("cs-gescout_sticky"); // Scrolling down
      } else if (currentScrollPos !== 0) {
        setIsSticky("cs-gescout_show cs-gescout_sticky"); // Scrolling up
      } else {
        setIsSticky();
      }
      setPrevScrollPos(currentScrollPos); // Update previous scroll position
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup the event listener
    };
  }, [prevScrollPos]);

  const pathName = usePathname();
  if (pathName.includes("home2")) return <HeaderStyle2></HeaderStyle2>;

  return (
    <div className="header-arae">
      <header
        className={`cs_site_header cs_style_1 ${
          variant ? variant : ""
        } cs_sticky_header cs_site_header_full_width ${
          mobileToggle ? "cs_mobile_toggle_active" : ""
        } ${isSticky ? isSticky : ""}`}
      >
        <div className="cs_top_header">
          <div className="container">
            <div className="cs_top_header_in">
              <div className="cs_top_header_left">
                <ul className="cs_top_nav d-flex flex-wrap align-items-center cs_fs_12 text-white m-0 p-0">
                  <li>Welcome to AKAC Services</li>
                </ul>
              </div>
              <div className="cs_top_header_right">
                <div className="cs_header_social_links_wrap">
                  <p className="mb-0">Follow Us On: </p>
                  <div className="cs_header_social_links">
                    <a
                      href="mailto:info@akac.in"
                      className="cs_social_btn cs_center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-mail"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                        <path d="M3 7l9 6l9 -6" />
                      </svg>
                    </a>
                    <a
                      href="https://facebook.com/akacindia"
                      className="cs_social_btn cs_center"
                    >
                      <svg
                        width="9"
                        height="15"
                        viewBox="0 0 9 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.62891 8.625H5.57812V14.75H2.84375V8.625H0.628906V6.08203H2.84375V4.16797C2.86198 3.05599 3.16276 2.20833 3.74609 1.625C4.34766 1.04167 5.14974 0.75 6.15234 0.75C6.66276 0.75 7.10938 0.777344 7.49219 0.832031C7.89323 0.886719 8.10286 0.914062 8.12109 0.914062V3.07422H7.02734C6.48047 3.09245 6.10677 3.23828 5.90625 3.51172C5.6875 3.76693 5.57812 4.07682 5.57812 4.44141V6.08203H8.01172L7.62891 8.625Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                    <a
                      href="https://instagram.com/akacindia"
                      className="cs_social_btn cs_center"
                    >
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.125 3.60547C7.01823 3.6237 7.75651 3.93359 8.33984 4.53516C8.94141 5.11849 9.2513 5.85677 9.26953 6.75C9.2513 7.64323 8.94141 8.38151 8.33984 8.96484C7.75651 9.56641 7.01823 9.8763 6.125 9.89453C5.23177 9.8763 4.49349 9.56641 3.91016 8.96484C3.30859 8.38151 2.9987 7.64323 2.98047 6.75C2.9987 5.85677 3.30859 5.11849 3.91016 4.53516C4.49349 3.93359 5.23177 3.6237 6.125 3.60547ZM6.125 8.80078C6.70833 8.78255 7.19141 8.58203 7.57422 8.19922C7.95703 7.81641 8.15755 7.33333 8.17578 6.75C8.15755 6.16667 7.95703 5.68359 7.57422 5.30078C7.19141 4.91797 6.70833 4.71745 6.125 4.69922C5.54167 4.71745 5.05859 4.91797 4.67578 5.30078C4.29297 5.68359 4.09245 6.16667 4.07422 6.75C4.09245 7.33333 4.29297 7.81641 4.67578 8.19922C5.05859 8.58203 5.54167 8.78255 6.125 8.80078ZM10.1445 3.46875C10.1263 3.26823 10.0534 3.09505 9.92578 2.94922C9.77995 2.82161 9.60677 2.75781 9.40625 2.75781C9.1875 2.75781 9.01432 2.82161 8.88672 2.94922C8.74089 3.09505 8.66797 3.26823 8.66797 3.46875C8.70443 3.92448 8.95052 4.17057 9.40625 4.20703C9.84375 4.17057 10.0898 3.92448 10.1445 3.46875ZM12.2227 4.23438V4.20703C12.2409 4.57161 12.25 5.09115 12.25 5.76562C12.25 6.42188 12.25 7.07812 12.25 7.73438C12.25 8.39062 12.2409 8.90104 12.2227 9.26562C12.2227 10.2682 11.8854 11.125 11.2109 11.8359C10.5 12.5104 9.65234 12.8385 8.66797 12.8203C8.30339 12.8385 7.78385 12.8568 7.10938 12.875C6.45312 12.875 5.79688 12.875 5.14062 12.875C4.46615 12.8568 3.95573 12.8385 3.60938 12.8203C2.60677 12.8385 1.75 12.5104 1.03906 11.8359C0.364583 11.125 0.0364583 10.2682 0.0546875 9.26562C0.0182292 8.90104 0 8.39062 0 7.73438C0 7.07812 0 6.42188 0 5.76562C0 5.09115 0.0182292 4.57161 0.0546875 4.20703C0.0364583 3.22266 0.364583 2.375 1.03906 1.66406C1.76823 0.989583 2.625 0.652344 3.60938 0.652344C3.95573 0.634115 4.46615 0.625 5.14062 0.625C5.79688 0.625 6.45312 0.625 7.10938 0.625C7.78385 0.625 8.30339 0.634115 8.66797 0.652344C9.65234 0.652344 10.5 0.989583 11.2109 1.66406C11.8854 2.375 12.2227 3.23177 12.2227 4.23438ZM10.9102 10.3594C11.0378 9.99479 11.1107 9.5026 11.1289 8.88281C11.1654 8.26302 11.1745 7.69792 11.1562 7.1875C11.1562 7.02344 11.1562 6.8776 11.1562 6.75C11.1562 6.6224 11.1562 6.47656 11.1562 6.3125C11.1745 5.80208 11.1654 5.23698 11.1289 4.61719C11.1107 3.9974 11.0378 3.50521 10.9102 3.14062C10.6732 2.59375 10.2812 2.20182 9.73438 1.96484C9.36979 1.83724 8.8776 1.76432 8.25781 1.74609C7.63802 1.72786 7.07292 1.71875 6.5625 1.71875C6.39844 1.71875 6.2526 1.71875 6.125 1.71875C5.9974 1.71875 5.85156 1.71875 5.6875 1.71875C5.17708 1.70052 4.61198 1.70964 3.99219 1.74609C3.39062 1.76432 2.89844 1.83724 2.51562 1.96484C1.96875 2.20182 1.57682 2.59375 1.33984 3.14062C1.21224 3.50521 1.13932 3.9974 1.12109 4.61719C1.10286 5.23698 1.09375 5.80208 1.09375 6.3125C1.09375 6.47656 1.09375 6.6224 1.09375 6.75C1.09375 6.8776 1.09375 7.02344 1.09375 7.1875C1.09375 7.69792 1.10286 8.26302 1.12109 8.88281C1.13932 9.48438 1.21224 9.97656 1.33984 10.3594C1.57682 10.9062 1.96875 11.2982 2.51562 11.5352C2.89844 11.6628 3.39062 11.7357 3.99219 11.7539C4.61198 11.7721 5.17708 11.7812 5.6875 11.7812C5.85156 11.7812 5.9974 11.7812 6.125 11.7812C6.2526 11.7812 6.39844 11.7812 6.5625 11.7812C7.07292 11.7812 7.63802 11.7721 8.25781 11.7539C8.8776 11.7357 9.36979 11.6628 9.73438 11.5352C10.2812 11.2982 10.6732 10.9062 10.9102 10.3594Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_main_header cs_accent_bg">
          <div className="container">
            <div className="cs_main_header_in">
              <div className="cs_main_header_left">
                <Link className="cs_site_branding" href="/">
                  <Image
                    src="/assets/img/logo.svg"
                    alt="Logo"
                    width={212}
                    height={54}
                  />
                </Link>
              </div>
              <div className="cs_main_header_center">
                <div className="cs_nav cs_primary_font fw-medium">
                  <span
                    className={
                      mobileToggle
                        ? "cs-munu_toggle cs_teggle_active"
                        : "cs-munu_toggle"
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                  <Nav setMobileToggle={setMobileToggle} />
                </div>
              </div>
              <div className="cs_main_header_right">
                <div className="cs_toolbox">
                  <div className="cs_header_contact">
                    <div className="cs_header_contact_right">
                      <Link href="/contact" className="cs_btn cs_style_1">
                        <span>Get in touch</span>
                        <svg
                          width="14"
                          height="13"
                          viewBox="0 0 14 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.28125 0.71875L13.7812 5.96875C13.9271 6.11458 14 6.29167 14 6.5C14 6.70833 13.9271 6.88542 13.7812 7.03125L8.28125 12.2812C7.90625 12.5729 7.55208 12.5729 7.21875 12.2812C6.92708 11.9062 6.92708 11.5521 7.21875 11.2188L11.375 7.25H0.75C0.291667 7.20833 0.0416667 6.95833 0 6.5C0.0416667 6.04167 0.291667 5.79167 0.75 5.75H11.375L7.21875 1.78125C6.92708 1.44792 6.92708 1.09375 7.21875 0.71875C7.55208 0.427083 7.90625 0.427083 8.28125 0.71875Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="cs_site_header_spacing_130"></div>
    </div>
  );
}
