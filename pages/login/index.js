import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState("");
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  const formDataChangeHandler = (e) => {
    const inputValue = e.target.value;
    setFormData({ ...formData, [e.target.name]: inputValue });

    if (e.target.name === "email") {
      setIsValidEmail(inputValue !== "");
    }

    if (e.target.name === "password") {
      setIsValidPassword(inputValue !== "");
    }
  };


  const submitHandler = async (e) => {
    e.preventDefault();
  
    try {
      setLoading(true);
  
      const response = await axios.post("/api/login", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.data.success) {
        toast.success("Login Successfully!");
  
        // Assuming 'data' contains user information
        const user = response.data.user;
  
        // Store user data in state, context, or localStorage
        setUser(user);
        console.log(user);
  
        setFormData({
          email: "",
          password: "",
        });
  
        // Redirect to home page after successful login
        router.push("/");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      }
    } finally {
      setLoading(false);
    }
  };
  

  // const submitHandler = async (e) => {
  //   e.preventDefault();

  //   try {
  //     setLoading(true);

  //     const response = await fetch("/api/login/", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     const data = await response.json();

  //     if (response.ok) {
  //       toast.success("Login Successfully!");

  //       // Assuming 'data' contains user information
  //       const user = data.user;

  //       // Store user data in state, context, or localStorage
  //       setUser(user);
  //       console.log(user)

  //       setFormData({
  //         email: "",
  //         password: "",
  //       });

  //       // Redirect to home page after successful login
  //       router.push("/");
  //     } else {
  //       toast.error(data.message);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     if (error?.response?.data?.message) {
  //       toast.error(error.response.data.message);
  //     }
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <>
      <section class="bg-[#eee]">
        <div class="flex flex-col items-center justify-center px-6 py-2 mx-auto md:h-full md:py-8 lg:py-10">
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
                {/* Email  -------------------------------*/}
                <div class="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="email"
                    className={`peer p-3 border ${
                      isValidEmail ? "border-gray-300" : "border-red-500"
                    } text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block min-h-full w-full bg-transparent outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none0 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 focus:border-orange-600`}
                    id="exampleFormControlInput22"
                    onChange={formDataChangeHandler}
                    name="email"
                  />
                  <label
                    for="exampleFormControlInput22"
                    class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:text-orange-600 peer-focus:bg-gray-50 peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                  >
                    Email
                  </label>
                </div>
                {/* Password  ----------------------------*/}
                <div class="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="password"
                    className={`peer p-3 border ${
                      isValidPassword ? "border-gray-300" : "border-red-600"
                    } text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block min-h-full w-full bg-transparent outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 focus:border-orange-400`}
                    id="exampleFormControlInput22"
                    onChange={formDataChangeHandler}
                    name="password"
                  />

                  <label
                    for="exampleFormControlInput22"
                    class="pointer-events-none absolute left-3 top-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:text-orange-500 peer-focus:bg-white peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                  >
                    Password
                  </label>
                </div>
                {/* New Account ----------------------*/}
                <div>
                  {/* gpt  ---------*/}
                  <button
                    type="submit"
                    class="w-full mb-3 text-white bg-[#E77818] transition-colors hover:bg-[#fa7f13] focus:focus:ring-4 ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    {loading ? "Loading.." : "Sing In"}
                  </button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account?{" "}
                    <Link
                      href="/register"
                      class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Sign up
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

export default Login;
