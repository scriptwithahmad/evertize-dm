import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { Toaster, toast } from "react-hot-toast";

// For Jodit React
import dynamic from "next/dynamic";
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const updateService = ({ data }) => {
  const cateData = data.getcat;
  const editor = useRef(null);
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    author: "",
    cate: "",
  });
  const [loading, setLoading] = useState(false);

  const formDataChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //   CLOUDINARY
  const [tempImage, setTempImage] = useState("");

  const uploadImageToCloudinary = async () => {
    try {
      const data = new FormData();
      data.append("file", tempImage);
      data.append("upload_preset", "blog-image");

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dmyrswz0r/image/upload",
        {
          body: data,
          method: "POST",
        }
      );

      const jsonRes = await res.json();

      return jsonRes.secure_url;
    } catch (error) {
      alert("Something wrong! while Uplading image");
    }
  };

  // submit form  -----------//
  const sumbitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const imageUrl = await uploadImageToCloudinary();
      const res = await axios.post("/api/addservice/", {
        ...formData,
        avatar: imageUrl,
      });
      toast.success("Service addedd Successfully!", {
        duration: 2000,
        position: "top-center",
      });
      setFormData({
        title: "",
        desc: "",
        author: "",
      });
      router.push("/dashboard");
      setTempImage("");
    } catch (error) {
      if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster />
      <div className="bg-[#0A121E] py-6">
        <form
          className="flex flex-col gap-5 rounded-lg max-w-[600px] m-auto p-6 bg-[#262F3D]"
          onSubmit={sumbitHandler}
          >
          <span className="font-semibold text-2xl text-white pb-3 border-b border-gray-600">Add New Service</span>
          <div className="grid gap-2">
            {/* Title ---------*/}
            {/* <div className="flex flex-col gap-2"> */}
            <label className="text-gray-50" htmlFor="title">
              Service Title{" "}
            </label>
            <input
              type="title"
              id="title"
              name="title"
              className="p-2 bg-opacity-75 text-[#dadada7a] text-sm focus:text-white bg-black border border-black border-opacity-20 rounded-lg outline-none"
              placeholder="Enter title..."
              value={formData.title}
              onChange={formDataChangeHandler}
            />
            {/* </div> */}
            {/* author ----------------------*/}
            {/* <div className="flex flex-col gap-2"> */}
            <label className="text-gray-100" htmlFor="author">
              {" "}
              Author Name{" "}
            </label>
            <input
              name="author"
              id="author"
              className="p-2 bg-opacity-75 text-[#dadada7a] text-sm focus:text-white bg-black border border-black border-opacity-20 rounded-lg outline-none"
              value={formData.author}
              placeholder="Enter author name..."
              onChange={formDataChangeHandler}
            />

            {/* Category =================== */}
            <label className="text-gray-100" htmlFor="cate">
              Category{" "}
            </label>
            <select
              id="country"
              name="cate"
              value={formData.cate}
              className="p-2 bg-opacity-75 text-[#dadada7a] text-sm focus:text-white bg-black border border-black border-opacity-20 rounded-lg outline-none"
              onChange={formDataChangeHandler}
            >
              <option selected>select one</option>
              {cateData.map((item) => (
                <option key={item._id}>{item.category}</option>
              ))}
            </select>
          </div>
          {/* </div> */}

          {/* ------------------ CLOUDINARY ----------------- */}
          <div>
            {tempImage ? (
              <div className="relative">
                <div className="">
                  <Image
                    className="w-full h-[280px] object-cover rounded-lg"
                    width={200}
                    height={200}
                    src={URL.createObjectURL(tempImage)}
                    alt="Service Alt Image"
                  />
                </div>
                <button
                  title="Remove Image"
                  className="bg-blue-600 px-6 py-1 rounded-lg absolute top-[3%] -right-[4%] -translate-x-1/2"
                  onClick={() => setTempImage("")}
                >
                  <i class="text-white fa-regular fa-trash-can"></i>
                </button>
              </div>
            ) : (
              <>
                <label className="text-gray-100" htmlFor="avatar"></label>
                <input
                  type="file"
                  name="avatar"
                  id="avatar"
                  className="p-2 w-full mb-3 bg-opacity-75 text-[#dadada7a] text-sm focus:text-white bg-black border border-black border-opacity-20 rounded-lg outline-none"
                  onChange={(e) => setTempImage(e.target.files[0])}
                />
                <label htmlFor="avatar">
                  <div className="">
                    <img
                      className=" border-4 w-full h-[280px] rounded-lg"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXp5ZIUWquEoLHqcBFvATwXyfQsiNfV9o_OopJKKuGU1oY7Otw_tlw7lqpYZJIZfB7KuM&usqp=CAU"
                      alt="image here"
                    />
                  </div>
                </label>
              </>
            )}
          </div>
          {/* ------------------ CLOUDINARY ----------------- */}
          {/* JoditEditor Description ----------------------*/}
          <div>
            <label className="text-gray-100" htmlFor="desc">
              Description
            </label>
            <div className="jodit">
              <JoditEditor
                id="desc"
                ref={editor}
                value={formData.desc}
                tabIndex={1}
                onBlur={(v) => setFormData({ ...formData, desc: v })}
                onChange={(v) => setFormData({ ...formData, desc: v })}
              />
            </div>
          </div>

          <button type="submit" className="mybtn">
            {loading ? <span className="loading"></span> : "Submit"}
            <i class="arrow fa-solid fa-arrow-right"></i>
          </button>
        </form>
      </div>
    </>
  );
};

export default updateService;

export async function getServerSideProps() {
  const res = await fetch("https://evertize.vercel.app/api/newcategory");
  const data = await res.json();

  return { props: { data } };
}
