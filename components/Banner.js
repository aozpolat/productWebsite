// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import Image from "next/image";
import Head from "next/head";

// Import Swiper styles
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Banner() {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredericka+the+Great"
          rel="stylesheet"
        />
      </Head>
      <Swiper
        id="main"
        navigation
        pagination
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <Image src="/banner.jpg" alt="" width={550} height={435}></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/1.png" alt="" width={300} height={200}></Image>
          <span className="discount">50% Off</span>
        </SwiperSlide>
      </Swiper>

      <style jsx>{`
        .discount {
          margin-left: 4rem;
          margin-bottom: 2rem;
          font-size: 110px;
          color: #d588d6c4;
          transform: rotate(347deg);
          font-family: "Fredericka the Great", cursive;
        }
      `}</style>
    </div>
  );
}
