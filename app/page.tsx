"use client";

import { HomePage } from "@/components/home-page";

export default function Home() {
  return (
    <HomePage
      heroImage={{ slot: "image1", src: "/images/image1.jpeg", alt: "Southern Van Hire vehicle on a road near Romsey town centre" }}
      supportImage={{ slot: "image2", src: "/images/image2.jpeg", alt: "Self-drive hire vehicle prepared for collection in Romsey" }}
    />
  );
}
