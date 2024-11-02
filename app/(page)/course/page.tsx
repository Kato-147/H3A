import { HeroSection } from '@/components/layout/course_sections/hero';
import Info from '@/components/layout/course_sections/info';
import React from 'react'


export const metadata = {
  title: "Khóa học tiếng Hàn",
  description: "Khóa học tiếng Hàn Quốc",
  openGraph: {
    type: "website",
    url: "https://h3a.onrender.com/",
    title: "Khóa học",
    description: "Khóa học tiếng Hàn Quốc",
    images: [
      {
        url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
        width: 1200,
        height: 630,
        alt: "Khóa học",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://h3a.onrender.com/",
    title: "Khóa học",
    description: "Khóa học tiếng Hàn Quốc",
    images: [
      "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
    ],
  },
};

export default function Course() {
  return (
    <>
    <HeroSection/>
    <Info/>
    </>
  )
}
