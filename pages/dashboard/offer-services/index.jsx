import Link from "next/link";
import Image from "next/image";

export default function Services({ data }) {
  console.log(data);
  return (
    <>
      <div class="backCover">
        <div className="dash-wrapper">
          <div className="filterBox">
            <h1 className="mainTitle">Services that you offered</h1>
            <div className="innerInput">
              <input
                type="text"
                className="input"
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
            {data?.message?.map((v, i) => {
               const createdAtDate = new Date(v.createdAt);
               const month = createdAtDate.toLocaleString('default', { month: 'long' });
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
                      <h1 className="title"> {v.title} </h1>
                      <p
                        style={{ display: "inline-block" }}
                        className="text-[#eeeeee9a] text-[13px] leading-tight"
                      >
                        {v.desc}
                      </p>
                      <div className="mt-4 border-[1px] rounded-lg border-[#eeeeee17] p-2">
                        <div className="flex gap-2 whitespace-nowrap text-[13px]">
                          <span className="text-[#eeeeeea4] font-light">
                            Service Uploaded By :{" "}
                          </span>
                          <h3 className="text-[#eeeeee85] font-medium">
                            {v.author}
                          </h3>
                        </div>
                        <div className="flex gap-2 whitespace-nowrap text-[13px]">
                          <span className="text-[#eeeeeea4] font-light">
                            Uploaded Time :{" "}
                          </span>
                          <h3 className="text-[#eeeeee85] font-medium">
                          {month} {createdAtDate.getDate()}, {createdAtDate.getFullYear()}
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
  const res = await fetch("https://evertize.vercel.app//api/addservice");
  const data = await res.json();

  return { props: { data } };
}