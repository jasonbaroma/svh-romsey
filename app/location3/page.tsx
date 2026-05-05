"use client";

import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { mainLocationName } from "@/lib/company";
import { phoneDisplay, phoneHref } from "@/lib/contact";
import { buildLocationLinks } from "@/lib/location-links";
import { slugifyLocation } from "@/lib/utils";
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

export const metadata = {
  alternates: {
    canonical: `/${slugifyLocation("Bishop's Waltham")}`,
  },
} satisfies Metadata;

export default function LocationPage() {
  const locationLinks = buildLocationLinks("Bishop's Waltham");
  const heroImage = { src: "/images/location3-image1.jpeg", alt: "Hire van parked near the centre of Bishop's Waltham" };
  const supportImage = { src: "/images/location3-image2.jpeg", alt: "Rental vehicle on a road leading through Bishop's Waltham" };
  const faqs = [
    { question: "Can I book a hire vehicle in Bishop's Waltham for a local move?", answer: "Yes, we can help arrange vehicle hire for customers in Bishop's Waltham, subject to availability and booking details." },
    { question: "What types of vehicles are available for Bishop's Waltham customers?", answer: "Yes, free delivery and collection is available, which can be especially helpful for busy residential or business bookings." },
    { question: "Do you offer flexible hire periods in Bishop's Waltham?", answer: "Short rentals are available, and longer bookings can also be arranged depending on what you need." },
    { question: "Is Bishop's Waltham a suitable starting point for longer Hampshire journeys?", answer: "A medium or large van is often a good fit for moving furniture or handling a house move, but the best choice depends on load size." },
    { question: "Do businesses in Bishop's Waltham use your hire vehicles as well?", answer: "Many customers do. We support both private and business use, so the best option depends on the type of journey and load." },
  ];
  const trustCards = [
    { title: "Prepared to go", description: "Our vehicles are maintained for dependable performance across local and longer-distance journeys.", icon: ShieldCheck },
    { title: "Straightforward service", description: "The booking process is kept practical and clear, without unnecessary complication.", icon: Star },
    { title: "Useful for all kinds of hire", description: "Support for private customers, trades and businesses in Bishop's Waltham who need practical self-drive transport without unnecessary delays.", icon: Users },
  ];
  const featureStats = [
    { value: "Car Hire", label: "Practical vans for moves, trade jobs, stock runs and everyday transport tasks." },
    { value: "Van Hire", label: "Comfortable car hire for local travel, business appointments and temporary replacement use." },
    { value: "Minibus Hire", label: "Self-drive minibuses for group outings, club transport and organised travel." },
    { value: "Truck Hire", label: "Larger truck hire for heavier loads, commercial work and planned logistics." },
  ];
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
  const benefits = [
    { icon: BadgePoundSterling, title: "Broad vehicle choice", description: "Book a vehicle that matches the size of the job, from quick personal use to larger commercial moves.", detail: "Cars, vans, minibuses and trucks available for flexible rental periods." },
    { icon: Clock3, title: "Less hassle around booking", description: "Local delivery and collection helps save time when your schedule is already busy.", detail: "Useful for home moves, trade work, fleet cover and event transport." },
    { icon: CheckCircle2, title: "Ready for real work", description: "Vehicles are prepared for practical daily use so you can focus on the trip ahead.", detail: "A dependable option for both one-off hires and repeat business use." },
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
                  <Link key={location.href} href={location.href} className="block rounded-sm px-3 py-2 text-sm transition hover:bg-slate-100">
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
        <Image src={heroImage.src} alt={heroImage.alt} fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/65 to-slate-900/45" />
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_420px] lg:items-center">
            <div className="max-w-3xl">
              <div className="flex flex-col gap-6">
                <h1 className="text-5xl font-bold tracking-tight">{"Dependable vehicle hire in Bishop's Waltham"}</h1>
                <p className="text-xl text-white">{"Choose from vans, cars, minibuses and trucks in Bishop's Waltham with flexible rental periods, maintained vehicles and straightforward local support."}</p>
                <Button size="lg" className="w-fit bg-[#00B395] text-white hover:bg-[#00997f]" asChild>
                  <a href={phoneHref}>Book Now</a>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative h-80 overflow-hidden rounded-3xl border border-white/15 shadow-2xl shadow-[#0f6b31]/30">
                <Image src={supportImage.src} alt={supportImage.alt} fill className="object-cover" sizes="420px" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />
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
                <h2 className="text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">{"Book hire vehicles easily in Bishop's Waltham"}</h2>
                <p className="mt-3 text-base leading-7 text-slate-600">{"Booking a hire vehicle in Bishop's Waltham should not be hard work. We keep things simple, with practical guidance on vehicle choice, flexible hire periods and support for both personal and business use."}</p>
                <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-600">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                    <PhoneCall className="h-4 w-4 text-[#00B395]" />
                    {"Free delivery and collection"}
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                    <Clock3 className="h-4 w-4 text-[#00B395]" />
                    {"Flexible hire periods"}
                  </div>
                </div>
              </div>
              <Button size="lg" className="w-full rounded-full bg-[#00B395] px-8 py-6 text-base font-semibold text-white shadow-lg shadow-[#00B395]/25 transition hover:-translate-y-0.5 hover:bg-[#00997f] md:w-auto" asChild>
                <a href={phoneHref}>Call Us Now: {phoneDisplay}</a>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <section id="trust" className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold">{"A dependable choice in Bishop's Waltham"}</h2>
            <p className="text-lg text-muted-foreground">{"Our Bishop's Waltham service focuses on dependable vehicles, flexible booking and the kind of straightforward support people want when transport matters."}</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3 md:auto-rows-fr">
            {trustCards.map((item) => (
              <Card key={item.title} className="border border-slate-100 bg-white p-8 shadow-[0_20px_45px_-25px_rgba(15,23,42,0.22)]">
                <div className="mb-6 inline-flex rounded-2xl bg-[#00B395]/10 p-4 text-[#00B395]">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-[#00B395]">{item.title}</h3>
                <p className="mb-5 text-base leading-7 text-slate-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-slate-950">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Our hire range"}</p>
            <h2 className="max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">{"Hire options available in Bishop's Waltham"}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{"From everyday transport needs to larger commercial jobs, we offer a broad mix of hire vehicles for customers in Bishop's Waltham."}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="bg-[#00B395] text-white hover:bg-[#00997f]" asChild>
                <a href={phoneHref}>No Hassle Booking {phoneDisplay}</a>
              </Button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {featureStats.map((item) => (
              <div key={item.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.18)]">
                <p className="text-3xl font-bold text-slate-950">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Why book here"}</p>
          <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Why Bishop's Waltham customers book with us"}</h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-lg leading-8 text-slate-600">
            <p>{"If you need vehicle hire in Bishop's Waltham, the main priority is having the right vehicle for the job without unnecessary delays. We offer vans, cars, minibuses and trucks to cover everything from local collections to longer planned journeys."}</p>
            <p>{"Bishop's Waltham sits in a useful position between Winchester, Fareham and Southampton, so many hires need to work for both town driving and wider Hampshire travel. We help customers choose vehicles that are practical, comfortable and suited to the route ahead."}</p>
            <p>{"Some customers in Bishop's Waltham need a van for moving house or collecting furniture, while others need a car for temporary transport, a minibus for group travel or a truck for larger loads. The aim is always the same: straightforward hire that supports the task properly."}</p>
            <p>{"With maintained vehicles, flexible rental periods and a service-led approach, our Bishop's Waltham vehicle hire is built around reliability. It is a practical option for local residents, tradespeople and businesses that need transport without added hassle."}</p>
          </div>
        </div>
      </section>

      <section id="benefits" className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white px-6 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,179,149,0.14),_transparent_55%)] pointer-events-none" />
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"What matters most"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Clear advantages for Bishop's Waltham bookings"}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{"Useful reasons to book your hire vehicle through a service that understands the practical needs of Bishop's Waltham drivers."}</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {benefits.map((item) => (
              <div key={item.title} className="group flex h-full flex-col items-center rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-[0_20px_50px_-30px_rgba(15,23,42,0.28)] transition hover:-translate-y-1 hover:shadow-[0_28px_60px_-30px_rgba(0,179,149,0.35)]">
                <div className="mb-6 flex w-full items-center gap-3 rounded-2xl bg-[#00B395]/10 px-4 py-4 text-left text-[#00B395] transition group-hover:bg-[#00B395] group-hover:text-white">
                  <item.icon className="h-7 w-7 shrink-0" />
                  <h3 className="text-xl font-bold leading-tight">{item.title}</h3>
                </div>
                <p className="flex-1 text-base leading-7 text-slate-600">{item.description}</p>
                <p className="mt-6 text-base leading-7 text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {vehicleCards.map((vehicle) => (
              <div key={vehicle.title} className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_45px_-30px_rgba(15,23,42,0.2)]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={vehicle.src} alt={vehicle.alt} fill sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col items-center p-6 text-center">
                  <h3 className="min-h-[4rem] text-2xl font-bold tracking-tight text-slate-950">{vehicle.title}</h3>
                  <a href={phoneHref} className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#00B395] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#00997f]">
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
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Nearby Locations"}</p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{"Nearby hire coverage around Bishop's Waltham"}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{"If you are based in Bishop's Waltham, we also cover surrounding locations that are useful for onward travel, collections and local transport needs across the area."}</p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {locationLinks.map((location) => (
              <Link key={location.href} href={location.href} className="rounded-full border border-[#00B395] bg-slate-50 px-6 py-3 text-base font-medium text-slate-700 transition hover:bg-[#00B395]/10">
                {location.label}
              </Link>
            ))}
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Hire terms that fit"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Whether you need a vehicle for a day, a week or longer, we offer practical hire periods that suit real jobs and real schedules."}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Useful vehicle options"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Our fleet is selected to cover common local needs, from simple personal transport to heavier-duty commercial work."}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Simple from start to finish"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Booking support stays straightforward so you can focus on your route, your load and your timings."}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Local Guide"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Driving in and around Bishop's Waltham"}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{"Useful driving notes for getting around Bishop's Waltham and planning a smoother hire journey."}</p>
          </div>
          <div className="mx-auto mt-12 max-w-4xl space-y-6 text-left">
            <p className="text-base leading-8 text-slate-600">{"Bishop's Waltham is well suited to local vehicle hire because most journeys start on town-centre streets before quickly joining the wider Hampshire road network. If you are collecting furniture, moving stock or heading out for a day job, it helps to plan for narrower approach roads in the centre and leave a little extra time at busier points."}</p>
            <p className="text-base leading-8 text-slate-600">{"For practical routing, Winchester Road is one of the main local corridors to keep in mind when travelling in and out of Bishop's Waltham. It gives you a straightforward way to link the town with surrounding areas, which is useful if you are hiring a van, car or larger vehicle and want to avoid unnecessary detours."}</p>
            <p className="text-base leading-8 text-slate-600">{"Victoria Road is another useful local route, especially for short town runs, property access and smaller delivery jobs around Bishop's Waltham. If you are driving a longer wheelbase van or carrying bulky items, checking access and parking before you set off can make unloading much easier once you arrive."}</p>
            <p className="text-base leading-8 text-slate-600">{"For longer trips, many customers use Bishop's Waltham as a sensible starting point for work across the wider Winchester and Hampshire area. A well-planned hire vehicle gives you the flexibility to handle home moves, event transport, trade jobs or business deliveries without relying on multiple short trips in a smaller car."}</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Bishop's Waltham FAQs"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Frequently asked questions for Bishop's Waltham"}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{"Straight answers to common questions about arranging vehicle hire in Bishop's Waltham."}</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 px-6 shadow-sm">
            {faqs.map((item, index) => (
              <details key={item.question} className="group border-b border-slate-200 last:border-b-0" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 text-left text-lg font-semibold text-slate-950">
                  <span>{item.question}</span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-slate-500 transition-transform group-open:rotate-180" />
                </summary>
                <div className="pb-6 text-base leading-7 text-slate-600">{item.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#00B395] px-6 py-16 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 text-4xl font-bold">{"Arrange your Bishop's Waltham hire vehicle"}</h2>
          <p className="mb-8 text-lg text-white/85">{"If you are planning transport in Bishop's Waltham, we can help you arrange a suitable van, car, minibus or truck with practical support and flexible hire options."}</p>
          <Button size="lg" className="bg-white text-[#00B395] hover:bg-gray-100" asChild>
            <a href={phoneHref}>Book Now</a>
          </Button>
        </div>
      </section>

      <footer id="contact" className="border-t bg-gray-900 px-6 py-12 text-gray-400">
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




