import TopBanner from "@/components/Topbar";
import React, { useState } from "react";
import Link from "next/link";
import Ceo from "@/components/Ceo";
import Features from "@/components/Features";

const index = ({ data }) => {
  // console.log(data)

  function createMarkup(c) {
    return { __html: c };
  }

  const [edit, setEdit] = useState(data.message);
  return (
    <>
      <TopBanner Route="Service" />
      <div className="max-w-[1250px] m-auto">
        <div className="grid grid-cols-1 px-6 gap-5 md:grid-cols-2 md:px-8 lg:grid-cols-3 bg-[#ffffff8c] py-8">
          {/* card 01 */}
          {data?.message?.map((v, i) => {
            return (
              <div className="rounded-xl p-2 border-[1px] transition-colors active:border-orange-700 border-orange-100 hover:border-orange-300">
                <img
                  className="w-full h-[220px] bg-cover rounded-t-lg"
                  src={v.avatar}
                  alt="image here"
                />
                <div className="bg-[#eee] p-4 rounded-b-lg">
                  <Link href={`/sservices/${v.slug}`}>
                    <h2 className="line-clamp-2 mb-2 text-[20px] cursor-pointer font-semibold transition-all hover:text-[#E77918]">
                      {v.title}
                    </h2>
                  </Link>
                  <div className="content text-gray-600 text-base flex flex-col py-2">
                    {edit && (
                      <div
                        className="line-clamp-3"
                        dangerouslySetInnerHTML={createMarkup(v.desc)}
                      ></div>
                    )}
                  </div>
                  <Link href="/clientservice" className="btn serviceBtn">
                    Get Service
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Features />
      <Ceo />
    </>
  );
};

export default index;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/addservice");
  const data = await res.json();

  return { props: { data } };
}
