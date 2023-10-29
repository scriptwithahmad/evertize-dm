import TopBanner from "@/components/Topbar";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';


const Testimonials = () => {
  return (
    <div>
      <TopBanner Route="Testimonials" />
      <div className="mt-24 mb-6 max-w-[1200px] m-auto">
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          navigation={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>
            <blockquote class="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8 gShadow">
              <div class="flex items-center gap-4">
                <img
                  alt="Man"
                  src="https://dcbswebdesign.files.wordpress.com/2013/04/testimonialpicex.jpg"
                  class="h-14 w-14 rounded-full object-cover"
                />

                <div>
                  <p class="mt-0.5 text-lg font-medium text-gray-900">
                    Ghulam Qadir
                  </p>
                  <div class="flex justify-center gap-0.5 text-[#E77918]">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>

              <p class="mt-4 text-gray-700">
                Evertize transformed our digital strategy. The impact was
                immediate and impressive. A game-changer
              </p>
            </blockquote>
          </SwiperSlide>
          <SwiperSlide>
            <blockquote class="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8 gShadow">
              <div class="flex items-center gap-4">
                <img
                  alt="Man"
                  src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698364800&semt=ais"
                  class="h-14 w-14 rounded-full object-cover"
                />

                <div>
                  <p class="mt-0.5 text-lg font-medium text-gray-900">Muhammad Ahmad</p>
                  <div class="flex justify-center gap-0.5 text-[#E77918]">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>

              <p class="mt-4 text-gray-700">
                Efficient, effective, and exceptional. Evertize delivers results
                like no other. Highly recommended
              </p>
            </blockquote>
          </SwiperSlide>
          <SwiperSlide>
            <blockquote class="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8 gShadow">
              <div class="flex items-center gap-4">
                <img
                  alt="Man"
                  src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                  class="h-14 w-14 rounded-full object-cover"
                />

                <div>
                  <p class="mt-0.5 text-lg font-medium text-gray-900">
                    Abdul Mohid
                  </p>
                  <div class="flex justify-center gap-0.5 text-[#E77918]">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>

              <p class="mt-4 text-gray-700">
                Incredible results, Evertize took our online presence to a whole
                new level. Their strategies are spot-on
              </p>
            </blockquote>
          </SwiperSlide>
          <SwiperSlide>
            <blockquote class="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8 gShadow">
              <div class="flex items-center gap-4">
                <img
                  alt="Man"
                  src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                  class="h-14 w-14 rounded-full object-cover"
                />

                <div>
                  <p class="mt-0.5 text-lg font-medium text-gray-900">
                    Abdul Rehman
                  </p>
                  <div class="flex justify-center gap-0.5 text-[#E77918]">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>

              <p class="mt-4 text-gray-700">
                Incredible results, Evertize took our online presence to a whole
                new level. Their strategies are spot-on
              </p>
            </blockquote>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
