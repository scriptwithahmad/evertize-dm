import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const singleService = ({ data }) => {
  console.log(data.singleService);
  const [edit, setEdit] = useState(data);
  function createMarkup(c) {
    return { __html: c };
  }

  return (
    <div className="h-full">
      <div className="newWriteMain">
        <div className="imgDiv">
          <Image
            className="writePageImage"
            height={200}
            width={200}
            src={data.singleService.avatar}
            alt="Image here"
          />
          <div className="imgSideBarDetail">
            <h2>Service Details</h2>
            <div className="flex_layout">
              <div className="child">
                <h3>Date</h3>
                <span>
                  {new Date(data.singleService.createdAt).toDateString()}
                </span>
              </div>
              <div className="child">
                <h3>Category</h3>
                <span> {data.singleService.cate} </span>
              </div>
              <div className="child">
                <h3>Author Name</h3>
                <span> {data.singleService.author} </span>
              </div>
            </div>
          </div>
          <div className="subTitle">
            <h1>Description</h1>
            {edit && (
              <p
                dangerouslySetInnerHTML={createMarkup(data.singleService.desc)}
              ></p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default singleService;

export async function getServerSideProps({ params }) {
  const slug = params.slug;
  const res = await fetch(`https://evertize.vercel.app/api/addservice/${slug}`);

  const data = await res.json();
  return { props: { data } };
}
