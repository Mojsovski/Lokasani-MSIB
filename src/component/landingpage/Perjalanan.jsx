import React, { useState } from "react";
import Perjalanan1 from "../../assets/img/perjalanan1.jpeg";
import Perjalanan2 from "../../assets/img/perjalanan2.jpeg";
import Perjalanan3 from "../../assets/img/perjalanan3.jpeg";

function Card({ title, image, description }) {
  return (
    <div className="w-[485px] h-[524px] flex-col justify-start items-start gap-6 inline-flex snap-start">
      <div className="self-stretch text-blue-800 text-4xl font-bold leading-[54px]">
        {title}
      </div>
      <img
        className="w-[485px] h-[350px] relative rounded-[36px]"
        src={image}
        alt={title}
      />
      <div className="self-stretch text-blue-800 text-2xl font-normal leading-9">
        {description}
      </div>
    </div>
  );
}

function Perjalanan() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (direction) => {
    const cardWidth = 485;
    const scrollStep = 1;

    if (direction === "left") {
      setScrollPosition((prev) => Math.max(prev - cardWidth * scrollStep, 0));
    } else if (direction === "right") {
      const containerWidth = 570 * 4;
      const maxScroll = containerWidth - window.innerWidth;
      setScrollPosition((prev) =>
        Math.min(prev + cardWidth * scrollStep, maxScroll)
      );
    }
  };

  return (
    <>
      <div className="h-[1000px] mx-auto py-32 relative justify-center items-center overflow-hidden ">
        <div className="h-full flex-col ">
          <div className="h-1/6 ">
            <h1 className="text-5xl text-center text-blue-900 font-semibold">
              Perjalanan <span className="text-yellow-500">Lokasani</span>
            </h1>
          </div>

          <div className=" mx-auto px-28 justify-center items-center relative grid-row-12">
            <div
              className="flex-row inline-flex snap-x snap-mandatory gap-14 "
              style={{
                transform: `translateX(-${scrollPosition}px)`,
                transition: "transform 0.5s ease",
              }}
            >
              <Card
                title="Agustus 2023"
                image={Perjalanan1}
                description="Tim yang bersemangat dalam diskusi strategis di ruang konferensi."
              />
              <Card
                title="September 2023"
                image={Perjalanan2}
                description="Tim melakukan presentasi untuk marketing produk UMKM"
              />
              <Card
                title="Oktober 2023"
                image={Perjalanan3}
                description="Tim menuangkan ide-ide kreatif mereka dan berdiskusi dengan semangat."
              />
              <Card
                title="November 2024"
                image={Perjalanan1}
                description="Tim menuangkan ide-ide kreatif mereka dan berdiskusi dengan semangat."
              />
            </div>
          </div>

          <div className="px-28 py-10 flex-row inline-flex gap-6 items-center relative">
            <button
              className="w-14 h-14 rounded-full bg-blue-800 flex items-center justify-center"
              onClick={() => handleScroll("left")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              className="w-14 h-14 rounded-full bg-blue-800 flex items-center justify-center"
              onClick={() => handleScroll("right")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Perjalanan;
