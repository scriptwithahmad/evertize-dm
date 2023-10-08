import axios from "axios";
import React, { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
// import { useSession } from 'next-auth/react'

const category = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState([]);
  const [category, setCategory] = useState("");
  const [loadAgain, setLoadAgain] = useState(false);

  const fetchcourses = async () => {
    const { data } = await axios.get("/api/newcategory");

    setCourses(data.getcat);
  };
  useEffect(() => {
    fetchcourses();
  }, [loadAgain]);

  const addCourse = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.post(`/api/newcategory/addnewcategory`, { category });
      toast.success("Category Added Successfully!");
      setLoadAgain(!loadAgain);
      setCategory("");
    } catch (error) {
      console.log(error);
      setError(error.response?.data?.message);
      setTimeout(() => {
        setError("");
      }, 500);
    } finally {
      setLoading(false);
    }
  };

  const deleteCategory = async (id) => {
    try {
      await axios.delete(`/api/newcategory/${id}`);
      toast.success("Category has been Removed!");
      window.location.reload();
    } catch (error) {
      toast.error("Something Went Wrong!");
    }
  };

  return (
    <div className="DashboardCourses">
      <Toaster />
      {/* <Toaster position="bottom-right" /> */}
      <div className="DashboardCoursesWrapper">
        <form onSubmit={addCourse}>
          <div className="dashboardHeading">
            Add Your Services <span>Categories</span>
          </div>

          <div className="flex items-center gap-3 max-w-[50%] py-2">
            <input
              onChange={(e) => {
                setCategory(e.target.value);
                setError("");
              }}
              value={category}
              required
              type="text"
              placeholder="Category Name"
            />
            <button
              disabled={loading}
              className="bg-blue-600 text-white p-2 px-6 rounded-md hover:bg-blue-700"
            >
              {" "}
              {loading && <i className="bx bx-loader"></i>}
              <span>Add</span>
            </button>
          </div>

          <p className="errorPara">{error}</p>
        </form>

        <div className="allcourses">
          {courses?.map((v, i) => {
            return (
              <div key={i} className="eachCategory">
                <h3>{v.category} </h3>
                <div className="actions">
                  {
                    <i
                      onClick={() => {
                        window.confirm(
                          "Are you sure to delete this Category?"
                        ) && deleteCategory(v._id);
                      }}
                      className="fa-solid fa-trash-can text-red-600 cursor-pointer hover:text-red-700"
                    ></i>
                  }
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default category;
