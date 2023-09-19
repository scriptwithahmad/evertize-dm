import Link from "next/link";


const TopBanner = (props) => {
  return (
    <div>
      <div className={`${"ourCoursesBreadCrumb"} ${"breadCrumbOverlay"}`}>
        <h1 className="breadCrumbTitle">{props.Heading}</h1>
        <div className="breadCrumbList text-center">
          <span className="text-[12px]">A FEW WORDS</span>
          <h2 className="text-5xl mt-4 text-[#E77918] font-semibold whitespace-nowrap">- {props.Route} -</h2>
         <h3 className="text-sm mt-2">  <Link className="hover:text-[#E77918]" href="/">Home</Link> {`>`} {props.Route}</h3>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
