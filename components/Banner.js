// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import Image from "next/image";
import Head from "next/head";

// Import Swiper styles
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination]);

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
      >
        <SwiperSlide>
          <Image src="/1.png" alt="" width={400} height={250}></Image>
          <span className="discount">20% Off</span>
        </SwiperSlide>
        <SwiperSlide tag="li">
          <Image src="/2.png" alt="" width={370} height={320}></Image>
        </SwiperSlide>
      </Swiper>

      <style jsx>{`
        .discount {
          margin-left: 2rem;
          font-size: 60px;
          color: crimson;
          transform: rotate(329deg);
          font-family: "Fredericka the Great", cursive;
        }
      `}</style>
    </div>
  );
}
