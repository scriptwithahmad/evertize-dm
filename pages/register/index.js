import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import Image from "next/image";
import { useRouter } from "next/router";

const index = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
  });

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

  // Submit Data
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const imageUrl = await uploadImageToCloudinary();
      const res = await axios.post("/api/register/", {
        ...formData,
        avatar: imageUrl,
      });
      toast.success("User Register Successfully!");
      setFormData({
        fullName: "",
        userName: "",
        email: "",
        password: "",
      });
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (error) {
      console.log(error);
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
      <section class="bg-[#eee]">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-full lg:py-0">
          <div class="w-full rounded-lg shadow border my-8 sm:max-w-md xl:p-0 bg-white">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <Link
                href="/"
                class="flex items-center mb-6 text-2xl font-semibold text-gray-900"
              >
                <img
                  class="w-14 h-12 object-contain p-2 rounded-md mr-3 shadow-md"
                  src="/elogo.png"
                  alt="logo"
                />
                Evertize
              </Link>
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Create an Account
              </h1>
              <form onSubmit={submitHandler} class="space-y-4 md:space-y-6">
                {/* FUll Name  ------------------------*/}
                <div class="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="text"
                    class="p-3 border border-ora text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:text-orange-600 focus:border-primary-600 block min-h-[auto] w-full bg-transparent outline-none transition-all duration-200 ease-linear focus:border-orange-200"
                    id="exampleFormControlInput22"
                    onChange={formDataChangeHandler}
                    name="fullName"
                    placeholder="Full Name"
                  />
                  {/* <label
                    for="exampleFormControlInput22"
                    class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:text-orange-400 peer-focus:bg-gray-50 peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  >
                    Full Name
                  </label> */}
                </div>
                {/* User Name -------------------------*/}
                <div class="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="text"
                     class="p-3 border border-ora text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:text-orange-600 focus:border-primary-600 block min-h-[auto] w-full bg-transparent outline-none transition-all duration-200 ease-linear focus:border-orange-200"
                    id="exampleFormControlInput22"
                    onChange={formDataChangeHandler}
                    name="userName"
                    placeholder="Username"
                  />
                  {/* <label
                    for="exampleFormControlInput22"
                    class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:text-orange-400 peer-focus:bg-gray-50 peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  >
                    Username
                  </label> */}
                </div>
                {/* Email  ----------------------------*/}
                <div class="relative mb-6" data-te-input-wrapper-init>
                  <input
                    autoComplete="true"
                    type="email"
                     class="p-3 border border-ora text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:text-orange-600 focus:border-primary-600 block min-h-[auto] w-full bg-transparent outline-none transition-all duration-200 ease-linear focus:border-orange-200"
                    id="exampleFormControlInput22"
                    onChange={formDataChangeHandler}
                    name="email"
                    placeholder="Email"
                  />
                  {/* <label
                    for="exampleFormControlInput22"
                    class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:text-orange-400 peer-focus:bg-gray-50 peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  >
                    Email
                  </label> */}
                </div>
                {/* Password  ----------------------------*/}
                <div class="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="password"
                     class="p-3 border border-ora text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:text-orange-600 focus:border-primary-600 block min-h-[auto] w-full bg-transparent outline-none transition-all duration-200 ease-linear focus:border-orange-200"
                    id="exampleFormControlInput22"
                    onChange={formDataChangeHandler}
                    name="password"
                    placeholder="Password"
                  />
                  {/* <label
                    for="exampleFormControlInput22"
                    class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:text-orange-400 peer-focus:bg-gray-50 peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  >
                    Password
                  </label> */}
                </div>
                {/* ------------------ CLOUDINARY ----------------- */}
                <div>
                  {tempImage ? (
                    <div className="">
                      <Image
                        className="relative w-full h-[280px] object-cover rounded-lg"
                        width={200}
                        height={200}
                        src={URL.createObjectURL(tempImage)}
                        alt="Service Alt Image"
                      />
                      <button
                        title="Remove Image"
                        className="bg-blue-600 px-6 py-1 rounded-lg absolute top-[53%] left-1/2 -translate-x-1/2"
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
                        className="p-2 w-full mb-3 bg-opacity-75 text-black text-sm focus:text-black bg-[#eee] border border-ora rounded-lg outline-none"
                        onChange={(e) => setTempImage(e.target.files[0])}
                      />
                      <label htmlFor="avatar">
                        <div className="">
                          <img
                            className=" border border-gray-200 w-full h-[280px] rounded-lg"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXp5ZIUWquEoLHqcBFvATwXyfQsiNfV9o_OopJKKuGU1oY7Otw_tlw7lqpYZJIZfB7KuM&usqp=CAU"
                            alt="image here"
                          />
                        </div>
                      </label>
                    </>
                  )}
                </div>
                {/* ------------------ CLOUDINARY ----------------- */}
                {/* Terms and Conditions --------------*/}
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      class="w-4 h-4 border border-ora rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label
                      for="terms"
                      class="font-light text-gray-500 dark:text-gray-300"
                    >
                      I accept the{" "}
                      <a
                        class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                {/* New Account ----------------------*/}
                <div>
                  <button
                    type="submit"
                    class="w-full mb-3 text-white bg-[#E77818] transition-colors hover:bg-[#fa7f13] focus:ring-4 ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    {loading ? "Loading.." : "Sing Up"}
                  </button>

                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account?{" "}
                    <Link
                      href="/login"
                      class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Sign In
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
