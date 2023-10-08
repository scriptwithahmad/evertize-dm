import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="bg-[#131A29] relative overflow-hidden">
        <footer className="relative z-10 footer_parent max-w-[1200px] m-auto md:px-4">
          <div className="footer_links_main">
            <div className="footer_div_links_col-1">
              <div className="footer_logo">
                <Link href={"/"}>
                  <img src="/logo.png" alt="Footer Logo" />
                </Link>
              </div>
              <p className="text-[#eee]">
                We Believe Marketing Doesn't Have to Be Expensive or
                Complicated, Rather, It Should Be Smart & Targeted
              </p>
              {/* social links  ----------*/}
              <div className="email_input_div">
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin-in"></i>
              </div>
            </div>

            <div className="footer_div_links_col-2">
              <h3 className="text-[#fff]">Explore</h3>
              <ul className="footer_ul_list">
                <Link href="/about">About us</Link>
                <Link href="/myservices">Service</Link>
                <Link href="/team">Team</Link>
                <Link href={"/testimonials"}>Testimonials</Link>
                <Link href="/contact">Contact</Link>
              </ul>
            </div>

            <div className="footer_div_links_col-2">
              <h3 className="text-[#fff]">Links</h3>
              <ul className="footer_ul_list">
                <Link href={"/"}>Partners</Link>
                <Link href="#features">Features</Link>
                <Link href="#work">Our Work History</Link>
                <Link href="#ceo">CEO Mission</Link>
                <Link href={"/"}>Contact us</Link>
              </ul>
            </div>

            <div className="footer_div_links_col-3">
              <h3 className="text-[#fff]">Information</h3>
              <ul>
                <div className="Links_location_tags">
                  <p>Home Town Address</p>
                  <Link href={"/"}>Green Town Punjab Faislabad, Pakistan</Link>
                </div>
                <div className="Links_location_tags">
                  <p>Phone No</p>
                  <Link href={"/"}>+92 300 7791895</Link>
                </div>
                <div className="Links_location_tags">
                  <p>Email:</p>
                  <Link href={"/"}>evertize.marketing@gmail.com</Link>
                </div>
              </ul>
            </div>
          </div>

          <div className="footer_copyrights_span">
            <span>© 2023 Evertize All Rights Reserved.</span>
          </div>
        </footer>
        <img
          className="overlayFooter absolute top-1/2 -left-40 opacity-5"
          src="/overlay.png"
          alt=""
        />
        <img
          className="absolute right-[-10%] top-[200px] opacity-[0.02] w-1/2"
          src="/overlay2.png"
          alt=""
        />
      </div>
    </>
  );
};

export default Footer;
