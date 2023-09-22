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

  // SUBMIT FORM ON SUBMIT
  const sumbitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post("https://evertize.vercel.app/api/addclientservice/", {
        ...formData,
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
              placeholder="Enter your Phone..."
              name="phone"
              id="phone"
              value={formData.phone}
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
              className="text-white"
              value={formData.message}
              onChange={formDataChangeHandler}
              placeholder="write about your service that you need..."
            ></textarea>
            {/* Button */}
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
