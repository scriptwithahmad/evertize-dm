import React from "react";
import Topbar from "@/components/Topbar";

const About = () => {
  return (
    <>
      <Topbar Route="About" />
      <div className="px-4">
        <div className="py-20 max-w-[1100px] m-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div>
              <p className="text-base font-inter font-semibold leading-7 text-[#E77918]">
                CEO'S MISSION
              </p>
              <h2 className="mt-2 text-4xl font-inter font-extrabold tracking-tight text-slate-900">
                - Saif ur Rehman
              </h2>
              <p className="mt-4 text-base leading-7 font-inter text-slate-700">
                Totam cillum molestie a dolore alias diamlorem corrupti.
                Exercitationem iure. Risus maxime mollis molestias exercitation
                nascetur non repudiandae sit voluptates velit praesentium! Netus
                natus dicta nibh condimentum porta congue platea cras lacinia
                pretium, explicabo qui praesent duis minima hendrerit. Voluptas
                illum duis voluptas dignissimos saepe suspendisse veritati.
              </p>
              <p className="mt-4 text-base leading-7 font-inter text-slate-700">
                Maxime suscipit odit nihil, adipiscing odio ipsa mollit sagittis
                nostra egestas pariatur porttitor feugiat cras class porttitor.
              </p>
            </div>
            <div>
              <img
                className="rounded-lg"
                src="https://i.pinimg.com/564x/f2/09/bd/f209bd478969ff0327225d663564ec02.jpg"
                alt=""
              />
            </div>
          </div>
          <div>
            <h2 className="text-xl mb-4">get in touch</h2>
            <button>
              <i class="hover:text-red-50 hover:bg-[#058AD7] p-3 rounded-[50%] mr-2 fa-brands fa-facebook transition-colors"></i>
            </button>
            <button>
              <i class="hover:text-red-50 hover:bg-[#058AD7] p-3 rounded-[50%] mr-2 fa-brands fa-twitter transition-colors"></i>
            </button>
            <button>
              <i class="hover:text-red-50 hover:bg-[#C462B8] p-3 rounded-[50%] mr-2 fa-brands fa-linkedin-in transition-colors"></i>
            </button>
            <button>
              <i class="hover:text-red-50 hover:bg-[#f10303bd] p-3 rounded-[50%] mr-2 fa-brands fa-instagram transition-colors"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
