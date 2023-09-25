import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { Toaster, toast } from "react-hot-toast";


// For Jodit React
import dynamic from "next/dynamic";
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const Experience = () => {
  const editor = useRef(null);
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    author: "",
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
      router.push('/dashboard')
      setTempImage('')
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
      <div className="main add_experience_main">
        <form className="formMain teamMain" onSubmit={sumbitHandler}>
          {/* Title ---------*/}
          <label htmlFor="title"> Title </label>
          <input
            type="title"
            id="title"
            name="title"
            placeholder="title.."
            value={formData.title}
            onChange={formDataChangeHandler}
          />
          {/* author ----------------------*/}
          <label htmlFor="author"> author </label>
          <input
            placeholder="Enter author..."
            name="author"
            id="author"
            value={formData.author}
            onChange={formDataChangeHandler}
          />
          {/* JoditEditor ----------------------*/}
          <label htmlFor="desc"> Description </label>
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

           {/* ------------------ CLOUDINARY ----------------- */}
           {tempImage ? (
              <div className="imagePreview">
                <div className="imageContainer">
                  <Image
                    className="inputImage"
                    width={200}
                    height={200}
                    src={URL.createObjectURL(tempImage)}
                    alt=""
                  />
                </div>
                <button className="delImage" onClick={() => setTempImage("")}>
                  <i class="fa-solid fa-xmark"></i>
                  <i class="fa-regular fa-trash-can"></i>
                </button>
              </div>
            ) : (
              <>
                <input
                  type="file"
                  name="avatar"
                  id="avatar"
                  onChange={(e) => setTempImage(e.target.files[0])}
                />
                <label htmlFor="avatar">
                  <div className="defaultimageContainer">
                    <img
                      className="defaultImg"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXp5ZIUWquEoLHqcBFvATwXyfQsiNfV9o_OopJKKuGU1oY7Otw_tlw7lqpYZJIZfB7KuM&usqp=CAU"
                      alt="image here"
                    />
                  </div>
                </label>
              </>
            )}
            {/* ------------------ CLOUDINARY ----------------- */}

          <button type="submit">
            {loading ? <span className="loading"></span> : "Submit"}
            <i class="arrow fa-solid fa-arrow-right"></i>
          </button>
        </form>
      </div>
    </>
  );
};

export default Experience;
