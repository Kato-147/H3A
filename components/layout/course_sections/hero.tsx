"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

interface ImageProps {
  image: string;
}

const imagesList: ImageProps[] = [
  { image: "/img1.png" },
  { image: "/hero_img4.jpg" },
  { image: "/hero_img3.jpg" },
  { image: "/hero_img2.jpg" },
];

export const HeroSection = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false); // Trạng thái để theo dõi animation

  // Chuyển ảnh tự động sau mỗi 3 giây (3000ms)
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true); // Bắt đầu animation fade-out

      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === imagesList.length - 1 ? 0 : prevIndex + 1
        );
        setIsFading(false); // Kết thúc animation fade-in
      }, 500); // Thời gian để chạy animation (0.5 giây)
    }, 3000); // Thời gian chờ giữa các ảnh

    return () => clearInterval(interval); // Dọn dẹp interval khi component unmount
  }, []);


  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        
        <div className="text-center space-y-8">
          {/* <Badge variant="outline" className="text-sm py-2">
            <span className="mr-2 text-primary">
              <Badge>New</Badge>
            </span>
            <span> Design is out now! </span>
          </Badge> */}

          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
            <h1>
              Khóa học tiếng
              <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                Hàn Quốc
              </span>
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            {`Trường đại học mở khóa tiếng Hàn hướng tới kiều bào hải ngoại và người ngoại quốc mang học lực giống nhau và đã tốt nghiệp cấp ba.`}
          </p>

          {/* <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button className="w-5/6 md:w-1/4 font-bold group/arrow">
              Get Started
              <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Button>

            <Button
              asChild
              variant="secondary"
              className="w-5/6 md:w-1/4 font-bold"
            >
              <Link
                href="https://github.com/nobruf/shadcn-landing-page.git"
                target="_blank"
              >
                Github respository
              </Link>
            </Button>
          </div> */}
        </div>

        <div className="relative group mt-14">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>
          
          <Image
            width={1200}
            height={1200}
            className={`w-full md:w-[1200px] mx-auto rounded-lg relative rouded-lg leading-none flex items-center border border-t-2 border-secondary border-t-primary/30 transition-opacity duration-500 ${
              isFading ? "opacity-0" : "opacity-100"
            }`} // Thêm hiệu ứng fade
            src={imagesList[currentIndex].image}
            alt="dashboard"
          />

          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};
