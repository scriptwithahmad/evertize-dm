import axios from "axios";
import React, { useState } from "react";
import Image from "next/image";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/router";

const Team = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    design: "",
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

  //   CLOUDINARY
  // SUBMIT FORM ON SUBMIT
  const sumbitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const imageUrl = await uploadImageToCloudinary();
      // const res = await axios.post("https://evertize.vercel.app/api/team/", {
      const res = await axios.post("http://localhost:3000/api/team", {
        ...formData,
        avatar: imageUrl,
      });
      toast.success("Team Member Added Succesfully!", {
        duration: 2000,
        position: "top-center",
      });
      setFormData({
        name: "",
        design: "",
      });
      setTempImage("");
      router.push("/team");
    } catch (error) {
      if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      }
    } finally {
      setLoading(false);
    }
  };

  // SUBMIT FORM ON SUBMIT

  return (
    <div>
      <div>
        <Toaster />
        <div className="main">
          <form className="formMain teamMain" onSubmit={sumbitHandler}>
            {/* Name ---------*/}
            <label htmlFor="name"> Name </label>
            <input
              type="text"
              required
              id="name"
              name="name"
              value={formData.name}
              placeholder="Enter your name..."
              onChange={formDataChangeHandler}
            />
            {/* Desgination ---------*/}
            <label htmlFor="design"> Designation </label>
            <input
              placeholder="Enter your Designation..."
              required
              name="design"
              id="design"
              value={formData.design}
              onChange={formDataChangeHandler}
            />
            {/* ------------------ CLOUDINARY ----------------- */}
            {tempImage ? (
              <div className="imagePreview">
                <div className="imageContainer">
                  <Image
                    required
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
                  required
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
      </div>
    </div>
  );
};

export default Team;
