"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { mainLocationName } from "@/lib/company";
import { phoneDisplay, phoneHref } from "@/lib/contact";
import { buildLocationLinks } from "@/lib/location-links";
import {
  BadgePoundSterling,
  CheckCircle2,
  ChevronDown,
  Clock3,
  MapPin,
  PhoneCall,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";

type HomePageProps = {
  currentLocationLabel?: string;
  heroImage: {
    src: string;
    alt: string;
  };
  supportImage: {
    src: string;
    alt: string;
  };
};

export function HomePage({
  currentLocationLabel,
  heroImage,
  supportImage,
}: HomePageProps) {
  const locationLinks = buildLocationLinks(currentLocationLabel);
  const vehicleCards = [
    { src: "/images/smallvan1.jpg", alt: "Small van hire vehicle", title: "Small Vans" },
    { src: "/images/mediumvan1.jpg", alt: "Medium van hire vehicle", title: "Medium Vans" },
    { src: "/images/largevan1.jpg", alt: "Large van hire vehicle", title: "Large Vans" },
    { src: "/images/lutonboxvan.jpg", alt: "Luton box van hire vehicle", title: "Box Van With Tail Lift" },
    { src: "/images/tippervan.jpg", alt: "Tipper van hire vehicle", title: "Tipper Van" },
    { src: "/images/dropsidevan1.jpg", alt: "Dropside van hire vehicle", title: "Dropside Van" },
    { src: "/images/12seaterminibushire.jpg", alt: "12 seater minibus hire vehicle", title: "Minibus Hire" },
    { src: "/images/7.5tonnecurtainsidehire.jpg", alt: "7.5 tonne curtainside truck hire vehicle", title: "Truck Hire" },
  ];
  const faqs = [
    {
      question: "What vehicles can I hire from Southern Van Hire?",
      answer: "We offer vans, cars, minibuses and trucks, with options suited to personal hire and business use.",
    },
    {
      question: "Can I book for more than one day?",
      answer: "Yes, flexible rental periods are available, including short-term and longer hires depending on your needs.",
    },
    {
      question: "Do you offer delivery and collection?",
      answer: "Yes, delivery and collection can be arranged to make hiring more convenient.",
    },
    {
      question: "What do people usually hire your vehicles for?",
      answer: "Many customers hire for house moves, furniture pickups, business deliveries, events and general self-drive transport.",
    },
    {
      question: "Do you supply vehicles for business hire?",
      answer: "Yes, we support both private customers and businesses looking for flexible vehicle hire.",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-white">
          <a href="#" className="flex items-center gap-3 text-2xl font-bold tracking-tight">
            <Image
              src="/images/SouthernVanHireLogo.png"
              alt="Southern Van Hire"
              width={208}
              height={52}
              className="h-[3.25rem] w-auto"
            />
            <span className="text-[#00B395]">{mainLocationName}</span>
          </a>
          <div className="hidden items-center gap-3 md:flex">
            <details className="group relative z-50">
              <summary className="inline-flex h-9 cursor-pointer list-none items-center justify-center gap-2 rounded-md border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-white/20">
                <MapPin className="h-4 w-4" />
                Locations
                <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="absolute right-0 top-full z-50 mt-2 w-56 overflow-hidden rounded-md border bg-white p-1 text-slate-900 shadow-lg">
                {locationLinks.map((location) => (
                  <Link
                    key={location.href}
                    href={location.href}
                    className="block rounded-sm px-3 py-2 text-sm transition hover:bg-slate-100"
                  >
                    {location.label}
                  </Link>
                ))}
              </div>
            </details>
            <Button className="bg-[#00B395] text-white hover:bg-[#00997f]" asChild>
              <a href={phoneHref} className="inline-flex items-center gap-2">
                <PhoneCall className="h-4 w-4" />
                <span>Book Now</span>
              </a>
            </Button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden pb-20 pt-32 text-white">
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/65 to-slate-900/45" />
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_420px] lg:items-center">
            <div className="max-w-3xl">
              <div className="flex flex-col gap-6">
                <h1 className="text-5xl font-bold tracking-tight">
                  {"Reliable vehicle hire in Romsey"}
                </h1>
                <p className="text-xl text-white">
                  {"Flexible self-drive van, car, minibus and truck hire in Romsey with maintained vehicles, helpful support and convenient delivery options."}
                </p>
                <Button
                  size="lg"
                  className="w-fit bg-[#00B395] text-white hover:bg-[#00997f]"
                  asChild
                >
                  <a href={phoneHref}>Book Now</a>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative h-80 overflow-hidden rounded-3xl border border-white/15 shadow-2xl shadow-[#0f6b31]/30">
                <iframe
                  src="https://www.youtube.com/embed/YvUfUk4gqyI?si=1kju8yn40EZXn6F8"
                  title={supportImage.alt}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative -mt-12 px-6 pb-12">
        <div className="mx-auto max-w-4xl">
          <Card className="overflow-hidden border border-[#00B395]/15 bg-[#eefcf8] shadow-[0_24px_60px_-24px_rgba(0,179,149,0.35)]">
            <div className="flex flex-col gap-6 p-8 md:p-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#00B395]/25 bg-white px-3 py-1 text-sm font-medium text-[#00B395]">
                  <PhoneCall className="h-4 w-4" />
                  {"Easy local booking"}
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">
                  {"Book a hire vehicle without the hassle"}
                </h2>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  {"Booking with Southern Van Hire is designed to be simple. We help arrange the right vehicle, the right hire length and practical delivery or collection options to keep things moving."}
                </p>
                <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-600">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                    <PhoneCall className="h-4 w-4 text-[#00B395]" />
                    {"Free delivery and collection"}
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                    <Clock3 className="h-4 w-4 text-[#00B395]" />
                    {"Flexible rental periods"}
                  </div>
                </div>
              </div>
              <Button
                size="lg"
                className="w-full rounded-full bg-[#00B395] px-8 py-6 text-base font-semibold text-white shadow-lg shadow-[#00B395]/25 transition hover:-translate-y-0.5 hover:bg-[#00997f] md:w-auto"
                asChild
              >
                <a href={phoneHref}>Call Us Now: {phoneDisplay}</a>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <section id="trust" className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold">
              {"A hire service you can rely on"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {"We focus on dependable vehicles, flexible hire and practical support for customers across Romsey and the surrounding area."}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 md:auto-rows-fr">
            {[
              {
                title: "Maintained vehicles",
                description: "Our vehicles are kept well maintained and ready for practical day-to-day hire use.",
                icon: ShieldCheck,
              },
              {
                title: "Flexible rental periods",
                description: "From short bookings to longer arrangements, we help customers hire on terms that suit the job.",
                icon: Star,
              },
              {
                title: "Straightforward local support",
                description: "We support both personal and business customers with clear service and a broad vehicle range.",
                icon: Users,
              },
            ].map((item) => (
              <Card
                key={item.title}
                className="border border-slate-100 bg-white p-8 shadow-[0_20px_45px_-25px_rgba(15,23,42,0.22)]"
              >
                <div className="mb-6 flex w-full items-center gap-3 rounded-2xl bg-[#00B395]/10 px-4 py-4 text-left text-[#00B395]">
                  <item.icon className="h-7 w-7 shrink-0" />
                  <h3 className="text-xl font-bold leading-tight">
                    {item.title}
                  </h3>
                </div>
                <p className="mb-5 text-base leading-7 text-slate-600">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-slate-950">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">
              {"Our hire range"}
            </p>
            <h2 className="max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">
              {"The right vehicle for the job"}
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              {"Van hire is at the heart of what we do, backed up by a broader fleet that also includes cars, minibuses and trucks."}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-[#00B395] text-white hover:bg-[#00997f]"
                asChild
              >
                <a href={phoneHref}>No Hassle Booking {phoneDisplay}</a>
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                value: "Car Hire",
                label: "From small vans to larger load carriers for moves, deliveries and trade jobs.",
              },
              {
                value: "Van Hire",
                label: "Practical car hire for local travel, business trips and everyday journeys.",
              },
              {
                value: "Minibus Hire",
                label: "Comfortable minibus options for group travel, events and planned outings.",
              },
              {
                value: "Truck Hire",
                label: "Truck hire for heavier loads, commercial tasks and larger transport requirements.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.18)]"
              >
                <p className="text-3xl font-bold text-slate-950">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">
            {"A practical choice"}
          </p>
          <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            {"Vehicle hire built around real day-to-day needs"}
          </h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-lg leading-8 text-slate-600">
            <p>{"Southern Van Hire provides dependable self-drive vehicle hire in Romsey with a strong focus on vans, while also offering cars, minibuses and trucks for a wide range of transport needs."}</p>
            <p>{"Customers hire from us for home moves, furniture collection, exhibitions, deliveries, weekends away, business cover and longer-term fleet support. The aim is always the same: make hiring a vehicle simple and useful."}</p>
            <p>{"We keep our service straightforward, with maintained vehicles, clear booking support and flexible rental periods that suit both planned jobs and short-notice requirements."}</p>
            <p>{"From a compact car for local travel to a larger van or truck for heavier loads, we help you find a practical option without unnecessary complications."}</p>
          </div>
        </div>
      </section>

      <section
        id="benefits"
        className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white px-6 py-20"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,179,149,0.14),_transparent_55%)] pointer-events-none" />
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">
              {"Why book with us"}
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              {"Straightforward hire that works around you"}
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              {"Practical reasons to choose a local, service-led vehicle hire company for short trips, longer rentals and business use."}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: BadgePoundSterling,
                title: "Wide vehicle choice",
                description: "Choose from vans, cars, minibuses and trucks for personal or business use.",
                detail: "Whether you are moving house, collecting stock or arranging staff travel, we can help match the vehicle to the job.",
              },
              {
                icon: Clock3,
                title: "Flexible hire periods",
                description: "Book for a day, a week or longer with practical options that suit changing plans.",
                detail: "Our team keeps the process clear and manageable, with support for one-off hires and ongoing business needs.",
              },
              {
                icon: CheckCircle2,
                title: "Dependable service",
                description: "Our vehicles are prepared for the road and backed by dependable customer support.",
                detail: "We focus on well-maintained vehicles, sensible service and fewer complications from booking to return.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group flex h-full flex-col items-center rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-[0_20px_50px_-30px_rgba(15,23,42,0.28)] transition hover:-translate-y-1 hover:shadow-[0_28px_60px_-30px_rgba(0,179,149,0.35)]"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-[#00B395]/10 p-4 text-[#00B395] transition group-hover:bg-[#00B395] group-hover:text-white">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-slate-950">
                  {item.title}
                </h3>
                <p className="flex-1 text-base leading-7 text-slate-600">
                  {item.description}
                </p>
                <p className="mt-6 text-base leading-7 text-slate-600">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {vehicleCards.map((vehicle) => (
              <div
                key={vehicle.title}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_45px_-30px_rgba(15,23,42,0.2)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={vehicle.src}
                    alt={vehicle.alt}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col items-center p-6 text-center">
                  <h3 className="min-h-[4rem] text-2xl font-bold tracking-tight text-slate-950">{vehicle.title}</h3>
                  <a
                    href={phoneHref}
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#00B395] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#00997f]"
                  >
                    <PhoneCall className="h-4 w-4" />
                    <span>Reserve Now</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">
              {"Nearby Locations"}
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              {"Areas we cover near Romsey"}
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              {"We cover Romsey and a range of nearby towns, making it easier to arrange a suitable hire vehicle close to where you live or work."}
            </p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {locationLinks.map((location) => (
              <Link
                key={location.href}
                href={location.href}
                className="rounded-full border border-[#00B395] bg-slate-50 px-6 py-3 text-base font-medium text-slate-700 transition hover:bg-[#00B395]/10"
              >
                {location.label}
              </Link>
            ))}
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                {"Vehicles for different jobs"}
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                {"A broad choice of rental vehicles makes it easier to book something that fits the journey, load size or number of passengers."}
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                {"Hire terms that suit you"}
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                {"Flexible booking periods help whether you need a hire vehicle for a single task, a busy week or ongoing business support."}
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                {"Prepared for the road"}
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                {"Maintained vehicles and straightforward service give you a more dependable rental experience from start to finish."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">
              {"Local Guide"}
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              {"Local driving guide for Romsey"}
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              {"Helpful driving and route tips for getting the most from vehicle hire in and around Romsey."}
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-4xl space-y-6 text-left">
            <p className="text-base leading-8 text-slate-600">
              {"Romsey works well as a starting point for local vehicle hire because the town is compact, easy to navigate and well placed for journeys across Test Valley and the wider Hampshire area. If you are collecting furniture, heading to a job, or organising a home move, it is worth planning your route through town in advance so you can avoid unnecessary turns on narrower streets and get onto the main local routes quickly."}
            </p>
            <p className="text-base leading-8 text-slate-600">
              {"For drivers hiring a van, car, minibus or truck in Romsey, fuel planning is straightforward. Greatbridge Service Station is a useful nearby stop when you want to top up before returning your vehicle or setting off on a longer run. There is also an Esso site a little further out, which can be handy if your route takes you beyond the town centre and into the surrounding Hampshire road network."}
            </p>
            <p className="text-base leading-8 text-slate-600">
              {"If you are using a larger hire vehicle, it helps to keep breaks simple and practical. The Greatbridge area gives you an easy point to pause, check your load, and sort out directions before continuing. That can be especially useful for business deliveries, exhibition transport or longer self-drive journeys where a quick stop near town makes the day run more smoothly."}
            </p>
            <p className="text-base leading-8 text-slate-600">
              {"Romsey is a sensible base for both short local hires and longer trips, whether you need a small car for personal travel or a larger vehicle for carrying goods and equipment. A bit of advance planning around fuel, turning space and your first stop can save time, especially if you are travelling with passengers, moving bulky items or working to a fixed schedule."}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">
              {"Need to know"}
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              {"Frequently asked questions"}
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              {"Useful answers about booking, vehicle types and how our hire service works."}
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 px-6 shadow-sm">
            {faqs.map((item, index) => (
              <details
                key={item.question}
                className="group border-b border-slate-200 last:border-b-0"
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 text-left text-lg font-semibold text-slate-950">
                  <span>{item.question}</span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-slate-500 transition-transform group-open:rotate-180" />
                </summary>
                <div className="pb-6 text-base leading-7 text-slate-600">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#00B395] px-6 py-16 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 text-4xl font-bold">{"Ready to get on the road?"}</h2>
          <p className="mb-8 text-lg text-white/85">
            {"Speak to Southern Van Hire to arrange the right vehicle for your next job, trip or delivery with flexible local support from Romsey."}
          </p>
          <Button
            size="lg"
            className="bg-white text-[#00B395] hover:bg-gray-100"
            asChild
          >
            <a href={phoneHref}>Book Now</a>
          </Button>
        </div>
      </section>

      <footer
        id="contact"
        className="border-t bg-gray-900 px-6 py-12 text-gray-400"
      >
        <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
          <Image
            src="/images/SouthernVanHireLogo.png"
            alt="Southern Van Hire"
            width={286}
            height={72}
            className="h-[4.55rem] w-auto"
          />
          <div className="flex items-center gap-3">
            <h4 className="text-2xl font-bold text-[#00B395]">{mainLocationName}</h4>
          </div>
          <p className="mt-4 max-w-md text-sm">{phoneDisplay}</p>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} SVH {mainLocationName}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}




