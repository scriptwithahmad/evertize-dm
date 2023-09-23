import Link from "next/link";
import Image from "next/image";

export default function Services({ data }) {
  // console.log(data.serviceAll);
  return (
    <>
      <div class="backCover">
        <div className="dash-wrapper">
          <div className="filterBox">
            <h1 className="mainTitle">
              Services that you offered
            </h1>
            <div className="innerInput">
              <input
                type="text"
                // value={query}
                // onKeyDown={OnKeyEnter}
                placeholder="Search..."
                // onChange={handleInputChange}
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
                <div className="das-col" key={i}>
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
                    <div className="das-info">
                      <h1 className="title"> {v.serviceName} </h1>
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
                        <div className="flex gap-2 whitespace-nowrap text-[13px]">
                          <span className="text-[#eeeeeea4] font-light">
                            Client Email :{" "}
                          </span>
                          <h3 className="text-[#eeeeee85] font-medium">
                            {v.email}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://evertize.vercel.app/api/addclientservice/getall");
  const data = await res.json();

  return { props: { data } };
}
