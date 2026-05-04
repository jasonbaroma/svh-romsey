"use client";

import { HomePage } from "@/components/home-page";

export default function Home() {
  return (
    <HomePage
      heroImage={{ slot: "image1", src: "/images/image1.jpeg", alt: "Clean rental vans and cars parked near a roadside setting in Romsey" }}
      supportImage={{ slot: "image2", src: "/images/image2.jpeg", alt: "Customer receiving keys during a rental van handover at a tidy vehicle hire depot" }}
    />
  );
}
