import Link from "next/link";
import Image from "next/image";
import Model from "@/components/Model";
import { useState } from "react";

const Enquiries = ({ data }) => {
  const [showModel, setShowModel] = useState(false);
  const [modelData, setModelData] = useState([]);

  const showModelData = (v) => {
    setShowModel(!showModel);
    setModelData(v);
  };

  return (
    <>
      <div class="backCover bg-[url('https://img.freepik.com/free-vector/halftone-background-with-circles_23-2148907689.jpg?size=626&ext=jpg&ga=GA1.1.1572214017.1676789510&semt=sph')]">
        <div className="dash-wrapper">
          <div className="filterBox">
            <h1 className="mainTitle">Client Queries</h1>
            <div className="innerInput">
              <input
                type="text"
                className="input"
                placeholder="Search..."
              />
              <button>Search</button>
            </div>
          </div>
          {/* ------------------ CATEGORY SECTION START ------------------- */}
          <div className="cate-buttons">
            <button>All</button>
            <button>Programming</button>
            <button>Digital Marketing</button>
            <button>Art & Design</button>
            <button>Education</button>
            <button>News</button>
            <button>ECommerace</button>
          </div>
          {/* ------------------ CATEGORY SECTION ENDS ------------------- */}
          <div className="dasboard-Main">
            {/* {searchError && <p>No matching results found......</p>} */}
            {data?.serviceAll?.map((v, i) => {
              return (
                <div className="das-col enquiryCard" key={i}>
                  <div className="das-sub-col">
                    <div className="dasImgMain">
                      <Image
                        src={v.avatar}
                        alt={v.avatar}
                        width={200}
                        height={200}
                        className="das-img"
                      />
                    </div>
                    <div className="das-info cursor-pointer">
                      <h1 onClick={() => showModelData(v)} className="title">
                        {" "}
                        {v.serviceName}{" "}
                      </h1>
                      <p
                        style={{ display: "inline-block" }}
                        className="text-[#eeeeee9a] text-[13px] leading-tight"
                      >
                        {v.message.slice(0, 120) + "..."}
                      </p>
                      <div className="mt-4 border-[1px] rounded-lg border-[#eeeeee17] p-2">
                        <div className="flex gap-2 whitespace-nowrap text-[13px]">
                          <span className="text-[#eeeeeea4] font-light">
                            Client Name :{" "}
                          </span>
                          <h3 className="text-[#eeeeee85] font-medium">
                            {v.name}
                          </h3>
                        </div>
                        <div className="flex gap-2 whitespace-nowrap text-[13px]">
                          <span className="text-[#eeeeeea4] font-light">
                            Client Phone :{" "}
                          </span>
                          <h3 className="text-[#eeeeee85] font-medium">
                            {v.phone}
                          </h3>
                        </div>
                        <div className="flex gap-2 justify-between whitespace-nowrap text-[13px]">
                          <div className="flex">
                            <span className="text-[#eeeeeea4] font-light">
                              Client Email :{" "}
                            </span>
                            <h3 className="text-[#eeeeee85] font-medium">
                              {v.email}
                            </h3>
                          </div>
                          {/* EYE BUTTON  ---------*/}
                          <span className="enquiry_eye text-gray-400 text-sm cursor-pointer hover:text-white hover:scale-105">
                            <i
                              onClick={() => showModelData(v)}
                              class="fa-regular fa-eye"
                            ></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {showModel && (
            <Model modelData={modelData} setShowModel={setShowModel} />
          )}
        </div>
      </div>
    </>
  );
};

export default Enquiries;

export async function getServerSideProps() {
  const res = await fetch(
    "https://evertizemarketing.com/api/addclientservice/getall"
  );
  const data = await res.json();

  return { props: { data } };
}
