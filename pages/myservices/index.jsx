import TopBanner from "@/components/Topbar";
import React from "react";
import Link from "next/link";

const index = () => {
  return (
    <>
      <TopBanner Route="Service" />
      <div className="grid grid-cols-3 gap-5 bg-[#ffffff] py-16 max-w-[1200px] m-auto">
        {/* card 01 */}
        <div className="rounded-xl p-2 border-[1px] transition-colors active:border-orange-700 border-orange-100 hover:border-orange-300">
          <img
            className="w-full h-[220px] bg-cover rounded-t-lg"
            src="https://edify.pk/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fconnecttoqadir%2Fimage%2Fupload%2Fv1695041768%2FedifyBlog%2Frjrjn2hllwiimpqw3enu.jpg&w=640&q=75"
            alt=""
          />
          <div className="bg-[#eee] p-4">
            <h2 className="line-clamp-1 mb-2 text-[20px] cursor-pointer font-semibold transition-all hover:text-[#E77918]">
              Graphic Designing
            </h2>
            <p className="text-gray-800 line-clamp-3 text-sm leading-[1.7] mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo, totam eaque atque placeat minima nihil.
            </p>
            <Link href="/clientservice" className="btn">
              Get Service
            </Link>
          </div>
        </div>
        {/* card 02 */}
        <div className="rounded-xl p-2 border-[1px] transition-colors active:border-orange-700 border-orange-100 hover:border-orange-300">
          <img
            className="w-full h-[220px] bg-cover rounded-t-lg"
            src="https://edify.pk/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fconnecttoqadir%2Fimage%2Fupload%2Fv1695041768%2FedifyBlog%2Frjrjn2hllwiimpqw3enu.jpg&w=640&q=75"
            alt=""
          />
          <div className="bg-[#eee] p-4">
            <h2 className="line-clamp-1 mb-2 text-[20px] cursor-pointer font-semibold transition-all hover:text-[#E77918]">
              Google Adds and Marketing
            </h2>
            <p className="text-gray-800 line-clamp-3 text-sm leading-[1.7] mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo, totam eaque atque placeat minima nihil.
            </p>
            <Link href="/clientservice" className="btn">
              Get Service
            </Link>
          </div>
        </div>
        {/* card 03 */}
        <div className="rounded-xl p-2 border-[1px] transition-colors active:border-orange-700 border-orange-100 hover:border-orange-300">
          <img
            className="w-full h-[220px] bg-cover rounded-t-lg"
            src="https://edify.pk/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fconnecttoqadir%2Fimage%2Fupload%2Fv1695041768%2FedifyBlog%2Frjrjn2hllwiimpqw3enu.jpg&w=640&q=75"
            alt=""
          />
          <div className="bg-[#eee] p-4">
            <h2 className="line-clamp-1 mb-2 text-[20px] cursor-pointer font-semibold transition-all hover:text-[#E77918]">
              Outdoor & Indoor Ads
            </h2>
            <p className="text-gray-800 line-clamp-3 text-sm leading-[1.7] mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo, totam eaque atque placeat minima nihil.
            </p>
            <Link href="/clientservice" className="btn">
              Get Service
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
