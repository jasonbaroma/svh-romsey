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
    canonical: `/${slugifyLocation("Stockbridge")}`,
  },
} satisfies Metadata;

export default function LocationPage() {
  const locationLinks = buildLocationLinks("Stockbridge");
  const heroImage = { src: "/images/location4-image1.jpeg", alt: "Rental van parked on a street in Stockbridge" };
  const supportImage = { src: "/images/location4-image2.jpeg", alt: "Hire vehicle travelling through the Stockbridge area" };
  const faqs = [
    { question: "What types of vehicle can I hire in Hythe?", answer: "Yes, Hythe customers can hire cars, vans, minibuses and trucks depending on the vehicle type needed and availability at the time of booking." },
    { question: "What is Hythe vehicle hire commonly used for?", answer: "Many customers in Hythe hire for moving house, collecting furniture, trade work, family trips and temporary business transport." },
    { question: "Can you deliver a hire vehicle in Hythe?", answer: "Yes, free delivery and collection can help make local bookings more convenient." },
    { question: "How do I know which hire vehicle size to book?", answer: "That depends on how much you need to carry, but we can help you choose a suitable size based on your load and route." },
    { question: "Do you support business vehicle hire in Hythe?", answer: "Yes, business customers in Hythe can hire vehicles for deliveries, projects, staff transport and temporary fleet support." },
  ];
  const trustCards = [
    { title: "Built around reliability", description: "Vehicles are maintained and prepared for practical day-to-day use, not just showroom appearance.", icon: ShieldCheck },
    { title: "Suitable for many uses", description: "We support both private and business customers with flexible vehicle hire that fits real requirements.", icon: Star },
    { title: "Convenient from day one", description: "Free delivery and collection helps make Hythe bookings easier to manage from the start.", icon: Users },
  ];
  const featureStats = [
    { value: "Car Hire", label: "Vans for moves, collections, trade equipment and day-to-day transport jobs." },
    { value: "Van Hire", label: "Car hire for local journeys, business trips and short-term replacement needs." },
    { value: "Minibus Hire", label: "Minibuses for group travel, events and organised outings from Hythe." },
    { value: "Truck Hire", label: "Truck hire for larger loads and commercial transport requirements." },
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
    { icon: BadgePoundSterling, title: "The right size for the job", description: "Choose a vehicle suited to moving, deliveries, family travel or commercial work.", detail: "A broad fleet means you can avoid paying for more vehicle than you need." },
    { icon: Clock3, title: "Convenient local support", description: "Free delivery and collection can make hiring more convenient around Hythe and the Waterside area.", detail: "Especially useful if your booking starts at home, work or a project site." },
    { icon: CheckCircle2, title: "Flexible and dependable", description: "Our service is built around practical self-drive use, from one-off personal bookings to regular business demand.", detail: "Flexible hire periods help you keep the vehicle for the time you actually need." },
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
                <h1 className="text-5xl font-bold tracking-tight">{"Reliable vehicle hire in Stockbridge"}</h1>
                <p className="text-xl text-white">{"Vans, cars, minibuses and trucks available in Stockbridge with flexible booking, maintained vehicles and practical support for local or longer trips."}</p>
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
                  {"Book around your schedule"}
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">{"Straightforward booking for Stockbridge hires"}</h2>
                <p className="mt-3 text-base leading-7 text-slate-600">{"We keep vehicle hire in Stockbridge simple to arrange, with clear booking support, flexible rental periods and a range of vehicles suited to personal and business use."}</p>
                <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-600">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                    <PhoneCall className="h-4 w-4 text-[#00B395]" />
                    {"Maintained hire vehicles"}
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                    <Clock3 className="h-4 w-4 text-[#00B395]" />
                    {"Personal and business use"}
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
            <h2 className="mb-4 text-4xl font-bold">{"Why Stockbridge customers trust our service"}</h2>
            <p className="text-lg text-muted-foreground">{"Customers in Stockbridge value a service that is clear, dependable and suited to real transport needs. That is exactly what we aim to provide across our hire range."}</p>
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
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Vehicle types available"}</p>
            <h2 className="max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">{"Hire vehicles available for Stockbridge customers"}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{"A broad choice of self-drive vehicles for everyday transport, business use, longer journeys and specialist moving jobs in Stockbridge."}</p>
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
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Local hire made simple"}</p>
          <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Vehicle hire that works for Stockbridge"}</h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-lg leading-8 text-slate-600">
            <p>{"For customers in Stockbridge, vehicle hire often needs to balance convenience with practicality. Whether you are moving items locally, heading out across Hampshire or arranging transport for business use, we offer vehicles that help you get the job done efficiently."}</p>
            <p>{"Stockbridge is a smaller town with strong links to surrounding rural areas as well as routes towards Winchester, Andover and Salisbury. That means the right hire vehicle needs to suit both town access and longer A-road travel."}</p>
            <p>{"For customers in Stockbridge, vehicle hire often needs to be straightforward and flexible, whether it is for rural deliveries, event transport, home projects or business use. Southern Van Hire helps keep things simple with a wide vehicle choice, clear booking support and practical hire periods that work for both local journeys and longer mileage."}</p>
            <p>{"With maintained vehicles and flexible hire options, our Stockbridge service is built for real transport needs rather than complicated booking processes. It is a dependable solution for residents, visitors and businesses needing self-drive hire."}</p>
          </div>
        </div>
      </section>

      <section id="benefits" className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white px-6 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,179,149,0.14),_transparent_55%)] pointer-events-none" />
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Practical reasons to book"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Benefits of booking in Stockbridge"}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{"Practical reasons why drivers and businesses in Stockbridge choose our vehicle hire service for local and longer-distance transport."}</p>
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
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{"Areas served around Stockbridge"}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{"If Stockbridge is your main pickup area, we also cover surrounding locations that are practical for nearby collections, deliveries and onward travel."}</p>
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
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Vehicles for everyday needs"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"From local personal use to business transport, our rental vehicles are chosen to cover a wide range of practical jobs."}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Flexible rental periods"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"You can book for short periods or arrange longer hire where needed, giving you more control over how the vehicle fits your plans."}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Straightforward booking help"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Support stays focused on keeping things simple, with helpful guidance on vehicle choice and local booking arrangements."}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Local Guide"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Driving Around Stockbridge"}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{"Useful local driving notes for planning a hire vehicle in and around Stockbridge, with straightforward route and stop advice."}</p>
          </div>
          <div className="mx-auto mt-12 max-w-4xl space-y-6 text-left">
            <p className="text-base leading-8 text-slate-600">{"Stockbridge journeys often work best when you keep planning simple and allow a little extra time around local high streets and narrower residential roads. If you are collecting furniture, loading event kit or heading out with a larger hire vehicle, it helps to choose quieter parts of the day and confirm where you can stop safely before setting off."}</p>
            <p className="text-base leading-8 text-slate-600">{"For onward travel, Ferry Road is one of the more useful named routes to keep in mind when joining wider links beyond Stockbridge. It can be a practical corridor for moving between local areas before continuing onto busier roads, especially if you want to avoid unnecessary turns in an unfamiliar vehicle."}</p>
            <p className="text-base leading-8 text-slate-600">{"If you need to top up before returning your vehicle or heading further afield, a nearby filling station can make the end of the journey easier to manage. In and around Stockbridge, many drivers simply plan fuel and unloading stops in advance so they are not searching at the last minute with a van, minibus or truck."}</p>
            <p className="text-base leading-8 text-slate-600">{"Stockbridge is a sensible starting point for short local hires and longer runs alike, whether you are moving items across town or connecting with the wider city area. The main thing is to match the vehicle to the job, leave room for parking and loading, and take a steady route if you are driving something larger than usual."}</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Help before you book"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Stockbridge vehicle hire FAQs"}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{"Common questions about hiring a vehicle in Stockbridge, answered in a clear and practical way."}</p>
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
          <h2 className="mb-4 text-4xl font-bold">{"Book your Stockbridge vehicle hire"}</h2>
          <p className="mb-8 text-lg text-white/85">{"If you need a van, car, minibus or truck in Stockbridge, we are here to help you arrange the right vehicle with flexible, practical service."}</p>
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




