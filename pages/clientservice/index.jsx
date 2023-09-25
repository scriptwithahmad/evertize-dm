import axios from "axios";
import React, { useState } from "react";
import Image from "next/image";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/router";

const Team = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceName: "",
    message: "",
  });
  const [selectedImage, setSelectedImage] = useState(null);
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
      // const res = await axios.post("https://evertize.vercel.app/api/addclientservice/", {
      const res = await axios.post("api/addclientservice/", {
        ...formData,
        avatar: imageUrl,
      });
      toast.success("Your Porposal Succesfully Sent!", {
        duration: 2000,
        position: "top-center",
      });
      setTimeout(() => {
        router.push('/myservices')
      }, 2000);
      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceName: "",
        message: "",
      });
      setTempImage("");
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
              autoFocus
              type="text"
              id="name"
              name="name"
              value={formData.name}
              placeholder="Enter your name..."
              onChange={formDataChangeHandler}
            />
            {/* phone ---------*/}
            <label htmlFor="phone"> Phone </label>
            <input
              id="phone"
              type="number"
              name="phone"
              value={formData.phone}
              placeholder="Enter your Phone..."
              onChange={formDataChangeHandler}
            />
            {/* email ---------*/}
            <label htmlFor="email"> Email </label>
            <input
              placeholder="Enter your email..."
              name="email"
              id="email"
              value={formData.email}
              onChange={formDataChangeHandler}
            />
            {/* serviceName -----------------------*/}
            <label htmlFor="serviceName"> Service Name </label>
            <select
              name="serviceName"
              id="serviceName"
              value={formData.serviceName}
              onChange={formDataChangeHandler}
            >
              <option value="" disabled>
                Select a Service...
              </option>
              <option value="Social Media Ads">Social Media Ads</option>
              <option value="News Paper Ads">News Paper Ads</option>
              <option value="Graphic Designing">Graphic Designing</option>
              <option value="Outdoor Indoor Ads">Outdoor Indoor Ads</option>
            </select>
            {/* message ----------------------------*/}
            <label htmlFor="message"> Your Message </label>
            <textarea
              rows="4"
              id="message"
              name="message"
              className="text-white mb-6"
              value={formData.message}
              onChange={formDataChangeHandler}
              placeholder="write about your service that you need..."
            ></textarea>

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
            {/* Button */}
            <button type="submit" className="mybtn">
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
