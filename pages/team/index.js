// import React from "react";
// import Link from "next/link";
// import Image from "next/image";

// //Don't OPEN
// const shapes = [
//   "https://i.ibb.co/hDrF9zd/team-shape-1.png",
//   "https://i.ibb.co/0h0SXz1/team-shape-2.png",
//   "https://i.ibb.co/60vzHxf/team-shape-3.png",
//   "https://i.ibb.co/PZHLYxF/team-shape-4.png",
//   "https://i.ibb.co/hDrF9zd/team-shape-1.png",
//   "https://i.ibb.co/0h0SXz1/team-shape-2.png",
//   "https://i.ibb.co/60vzHxf/team-shape-3.png",
//   "https://i.ibb.co/PZHLYxF/team-shape-4.png",
//   "https://i.ibb.co/hDrF9zd/team-shape-1.png",
//   "https://i.ibb.co/0h0SXz1/team-shape-2.png",
//   "https://i.ibb.co/60vzHxf/team-shape-3.png",
//   "https://i.ibb.co/PZHLYxF/team-shape-4.png",
//   "https://i.ibb.co/hDrF9zd/team-shape-1.png",
//   "https://i.ibb.co/0h0SXz1/team-shape-2.png",
//   "https://i.ibb.co/60vzHxf/team-shape-3.png",
//   "https://i.ibb.co/PZHLYxF/team-shape-4.png",
//   "https://i.ibb.co/hDrF9zd/team-shape-1.png",
//   "https://i.ibb.co/0h0SXz1/team-shape-2.png",
//   "https://i.ibb.co/60vzHxf/team-shape-3.png",
//   "https://i.ibb.co/PZHLYxF/team-shape-4.png",
//   "https://i.ibb.co/hDrF9zd/team-shape-1.png",
//   "https://i.ibb.co/0h0SXz1/team-shape-2.png",
//   "https://i.ibb.co/60vzHxf/team-shape-3.png",
//   "https://i.ibb.co/PZHLYxF/team-shape-4.png",
//   "https://i.ibb.co/hDrF9zd/team-shape-1.png",
//   "https://i.ibb.co/0h0SXz1/team-shape-2.png",
//   "https://i.ibb.co/60vzHxf/team-shape-3.png",
//   "https://i.ibb.co/PZHLYxF/team-shape-4.png",
//   "https://i.ibb.co/hDrF9zd/team-shape-1.png",
//   "https://i.ibb.co/0h0SXz1/team-shape-2.png",
//   "https://i.ibb.co/60vzHxf/team-shape-3.png",
//   "https://i.ibb.co/PZHLYxF/team-shape-4.png",
// ];

// const index = () => {
//   // console.log(data.teamData);
//   return (
//     <div>
//       <div className={`${"ourCoursesBreadCrumb"} ${"breadCrumbOverlay"}`}>
//         <h3 className="breadCrumbTitle">Our Team</h3>
//         {/* <div className="breadCrumbList">Home {`>`} Team</div> */}
//         <div className="ourCoursesGlobalFlex">
//           <Link className="breadCrumbList" href="/">
//             Home
//           </Link>
//           <span className="breadCrumbList">{">"}</span>
//           <Link className="breadCrumbList" href="/team">
//             Team
//           </Link>
//         </div>
//       </div>
//       <div className="outerDiv">
//         <div className="team_Outer_Div">
//           <div className="team_Inner_Div">
//             <div className="team_Item">
//               <div className="team_Thumbs">
//                 <div className="team_Shape">
//                   // <img src="data:image/jpeg;base64,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"></img>
//                   {/* <img src={shapes[i]}></img> */}
//                 </div>
//                 <Image width={250} height={350} src='https://i.ibb.co/hDrF9zd/team-shape-1.png'></Image>
//                 <div className="team_Social_Transitions">
//                   <a className="team-social-icon">
//                     <i class="fa-brands fa-facebook-f"></i>
//                   </a>
//                   <a className="team-social-icon">
//                     <i class="twitter fa-brands fa-twitter"></i>
//                   </a>
//                   <a className="team-social-icon">
//                     <i class="fa-brands fa-linkedin"></i>
//                   </a>
//                   <a className="team-social-icon">
//                     <i class="fa-brands fa-pinterest"></i>
//                   </a>
//                 </div>
//               </div>
//               <div className="team_Content">
//                 <h3>M Ahmad</h3>
//                 <span>Web dev </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default index;

// // export async function getServerSideProps() {
// //   const res = await fetch("http://localhost:3000/api/get-all-team");
// //   const data = await res.json();

// //   return { props: { data } };
// // }

import React from 'react'

const index = () => {
  return (
    <div>index</div>
  )
}

export default index