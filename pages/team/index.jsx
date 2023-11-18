import React from "react";
import TopBanner from "@/components/Topbar";

//Don't OPEN
const shapes = [
  "https://i.ibb.co/hDrF9zd/team-shape-1.png",
  "https://i.ibb.co/0h0SXz1/team-shape-2.png",
  "https://i.ibb.co/60vzHxf/team-shape-3.png",
  "https://i.ibb.co/PZHLYxF/team-shape-4.png",
  "https://i.ibb.co/hDrF9zd/team-shape-1.png",
  "https://i.ibb.co/0h0SXz1/team-shape-2.png",
  "https://i.ibb.co/60vzHxf/team-shape-3.png",
  "https://i.ibb.co/PZHLYxF/team-shape-4.png",
  "https://i.ibb.co/hDrF9zd/team-shape-1.png",
  "https://i.ibb.co/0h0SXz1/team-shape-2.png",
  "https://i.ibb.co/60vzHxf/team-shape-3.png",
  "https://i.ibb.co/PZHLYxF/team-shape-4.png",
  "https://i.ibb.co/hDrF9zd/team-shape-1.png",
  "https://i.ibb.co/0h0SXz1/team-shape-2.png",
  "https://i.ibb.co/60vzHxf/team-shape-3.png",
  "https://i.ibb.co/PZHLYxF/team-shape-4.png",
  "https://i.ibb.co/hDrF9zd/team-shape-1.png",
  "https://i.ibb.co/0h0SXz1/team-shape-2.png",
  "https://i.ibb.co/60vzHxf/team-shape-3.png",
  "https://i.ibb.co/PZHLYxF/team-shape-4.png",
  "https://i.ibb.co/hDrF9zd/team-shape-1.png",
  "https://i.ibb.co/0h0SXz1/team-shape-2.png",
  "https://i.ibb.co/60vzHxf/team-shape-3.png",
  "https://i.ibb.co/PZHLYxF/team-shape-4.png",
  "https://i.ibb.co/hDrF9zd/team-shape-1.png",
  "https://i.ibb.co/0h0SXz1/team-shape-2.png",
  "https://i.ibb.co/60vzHxf/team-shape-3.png",
  "https://i.ibb.co/PZHLYxF/team-shape-4.png",
  "https://i.ibb.co/hDrF9zd/team-shape-1.png",
  "https://i.ibb.co/0h0SXz1/team-shape-2.png",
  "https://i.ibb.co/60vzHxf/team-shape-3.png",
  "https://i.ibb.co/PZHLYxF/team-shape-4.png",
];

const Team = ({ data }) => {
  console.log(data.teamData);
  return (
    <div>
      <TopBanner Route="Team" />
      <div className="py-10">
        <div className="max-w-[1100px] m-auto mb-8 text-center">
          <p className="text-base leading-7 text-orange-600">Team</p>
          <h2 className="mt-2 text-4xl  font-extrabold tracking-tight text-[#131A29]">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 px-4 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-8">
            {data?.teamData.map((v, i) => {
              return (
                <div
                  key={i}
                  className="border-[1px] shadow-lg border-[orange-300] rounded-lg relative overflow-hidden h-[400px] w-[100%] group"
                >
                  <img
                    className="rounded-lg h-[100%] w-[100%] object-cover transition-transform transform group-hover:scale-105"
                    src={v.avatar}
                    alt="team image"
                  />
                  <div className="h-[100%] w-[0%] absolute top-0 transition-all group-hover:w-[100%] bg-[#131a29ce] mix-blend-multiply backdrop-blur-sm"></div>
                  <div className="h-[100%] w-[100%] absolute top-0 flex flex-col justify-center items-center text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                    <h2 className="font-bold text-orange-500 mb-2">{v.name}</h2>
                    <h4 className="text-base">{v.design}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/team/get-all-team");
  const data = await res.json();

  return { props: { data } };
}
