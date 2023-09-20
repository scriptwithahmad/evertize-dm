import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="bg-slate-100 relative overflow-hidden">
        <footer className="relative z-10 footer_parent max-w-[1200px] m-auto md:px-4">
          <div className="footer_links_main">
            <div className="footer_div_links_col-1">
              <div className="footer_logo">
                <img src="/logo.png" alt="Footer Logo" />
              </div>
              <p>
                Let us help you yield your true academic potential for foreign
                education. To configure and discover an apt international
                enrolment strategy, get in touch!
              </p>
              <div className="email_input_div">
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin-in"></i>
              </div>
            </div>

            <div className="footer_div_links_col-2">
              <h3>Explore</h3>
              <ul className="footer_ul_list">
                <Link href={"/"}>About us</Link>
                <Link href={"/"}>Courses</Link>
                <Link href={"/"}>Educal University</Link>
                <Link href={"/"}>Instructor</Link>
                <Link href={"/"}>Events</Link>
              </ul>
            </div>

            <div className="footer_div_links_col-2">
              <h3>Links</h3>
              <ul className="footer_ul_list">
                <Link href={"/"}>Partners</Link>
                <Link href={"/"}>Support the canpaing</Link>
                <Link href={"/"}>News & Blogs</Link>
                <Link href={"/"}>Library</Link>
                <Link href={"/"}>Contact us</Link>
              </ul>
            </div>

            <div className="footer_div_links_col-3">
              <h3>Information</h3>
              <ul>
                <div className="Links_location_tags">
                  <p>University Offices:</p>
                  <Link href={"/"}>382 NE 191st 87394 Miami,</Link>
                </div>
                <div className="Links_location_tags">
                  <p>International:</p>
                  <Link href={"/"}>+(088) 234 567 899</Link>
                </div>
                <div className="Links_location_tags">
                  <p>International:</p>
                  <Link href={"/"}>info@educal.com</Link>
                </div>
              </ul>
            </div>
          </div>

          <div className="footer_copyrights_span">
            <span>.© 2023 Evertize All Rights Reserved.</span>
          </div>
        </footer>
        <img
          className="absolute top-1/2 -left-40"
          src="/overlay.png"
          alt=""
        />
      </div>
    </>
  );
};

export default Footer;


