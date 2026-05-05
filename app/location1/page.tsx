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

export default function LocationPage() {
  const locationLinks = buildLocationLinks("North Baddesley");
  const heroImage = { src: "/images/location1-image1.jpeg", alt: "Hire van driving near North Baddesley in Hampshire" };
  const supportImage = { src: "/images/location1-image2.jpeg", alt: "Self-drive rental vehicle ready for a North Baddesley customer" };
  const faqs = [
    { question: "Can I hire a van in North Baddesley for moving jobs?", answer: "Yes, van hire is a popular choice for North Baddesley house moves, furniture collection and DIY projects." },
    { question: "Do you only provide vans in North Baddesley?", answer: "Yes, we offer cars, minibuses and trucks as well as vans, depending on the type of journey or load." },
    { question: "Are longer rentals available from North Baddesley?", answer: "Many bookings can be arranged for both short-term and longer rental periods, depending on availability and requirements." },
    { question: "Can the hire vehicle be delivered to North Baddesley?", answer: "Delivery and collection can be arranged, helping make the booking more convenient." },
    { question: "Is North Baddesley vehicle hire suitable for business use?", answer: "Yes, business users often hire for delivery runs, temporary fleet cover and general transport needs." },
  ];
  const trustCards = [
    { title: "Road-ready fleet", description: "Vehicles are maintained and prepared for practical self-drive use across local and longer routes.", icon: ShieldCheck },
    { title: "Helpful booking support", description: "We keep the process clear, from choosing a vehicle to arranging the rental period.", icon: Star },
    { title: "Built for real use", description: "Suitable for private hire, business transport and one-off jobs that need a reliable vehicle.", icon: Users },
  ];
  const featureStats = [
    { value: "Car Hire", label: "Useful van hire for moving, trade work and bulky collections around North Baddesley." },
    { value: "Van Hire", label: "Car hire for daily travel, appointments and short local trips." },
    { value: "Minibus Hire", label: "Minibus options for family outings, club travel and event transport." },
    { value: "Truck Hire", label: "Truck hire for larger loads and heavier transport tasks." },
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
    { icon: BadgePoundSterling, title: "Choice for everyday jobs", description: "From small cars to practical vans and larger vehicles, there is a sensible option for different journeys and loads.", detail: "That makes it easier to book for house clearances, furniture collection, local deliveries or business cover in and around North Baddesley." },
    { icon: Clock3, title: "Rental periods that work", description: "Flexible hire periods help when jobs overrun or when you need transport beyond a single day.", detail: "Short local bookings and longer rentals can both be arranged with straightforward support." },
    { icon: CheckCircle2, title: "Straightforward local service", description: "A maintained fleet and practical service help keep your booking simple from start to finish.", detail: "We focus on usable vehicles and clear communication rather than overcomplicating the process." },
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
                <h1 className="text-5xl font-bold tracking-tight">{"Vehicle hire in North Baddesley made straightforward"}</h1>
                <p className="text-xl text-white">{"Self-drive van, car, minibus and truck hire for North Baddesley with flexible booking, maintained vehicles and practical local support."}</p>
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
                  {"Simple booking for North Baddesley"}
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">{"Arrange hire around North Baddesley with ease"}</h2>
                <p className="mt-3 text-base leading-7 text-slate-600">{"If you need vehicle hire in North Baddesley, we make booking clear and practical. Tell us what you need to move, where you are going and how long you need the vehicle for, and we will help with a suitable option."}</p>
                <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-600">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                    <PhoneCall className="h-4 w-4 text-[#00B395]" />
                    {"Maintained self-drive vehicles"}
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                    <Clock3 className="h-4 w-4 text-[#00B395]" />
                    {"Delivery and collection available"}
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
            <h2 className="mb-4 text-4xl font-bold">{"A dependable option for North Baddesley"}</h2>
            <p className="text-lg text-muted-foreground">{"Customers in North Baddesley choose Southern Van Hire for practical vehicles, straightforward service and flexible hire support that fits around real transport needs."}</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3 md:auto-rows-fr">
            {trustCards.map((item) => (
              <Card key={item.title} className="border border-slate-100 bg-white p-8 shadow-[0_20px_45px_-25px_rgba(15,23,42,0.22)]">
                <div className="mb-6 flex w-full items-center gap-3 rounded-2xl bg-[#00B395]/10 px-4 py-4 text-left text-[#00B395]">
                  <item.icon className="h-7 w-7 shrink-0" />
                  <h3 className="text-xl font-bold leading-tight">{item.title}</h3>
                </div>
                <p className="mb-5 text-base leading-7 text-slate-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-slate-950">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Available to hire"}</p>
            <h2 className="max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">{"A fleet that suits North Baddesley drivers"}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{"Our North Baddesley customers hire vehicles for all sorts of practical jobs, with vans leading the way and other categories available when needed."}</p>
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
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Local vehicle hire"}</p>
          <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Practical hire for North Baddesley journeys"}</h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-lg leading-8 text-slate-600">
            <p>{"For customers in North Baddesley, we keep vehicle hire straightforward. Whether you need a van for a house move, a car for short-term transport, a minibus for group travel or a truck for heavier loads, we offer practical options backed by dependable service."}</p>
            <p>{"North Baddesley is well placed for local journeys and longer runs across Hampshire, so flexibility matters. We help customers book the right size vehicle without overcomplicating the process, with hire periods that can suit one day, a weekend, a working week or something longer."}</p>
            <p>{"Because many trips from North Baddesley join main routes quickly, having the right vehicle size matters. A smaller van may be enough for a short collection, while a larger load space can save repeat journeys across the day."}</p>
            <p>{"Because many hires from North Baddesley are time-sensitive, we focus on clear communication, well-maintained vehicles and practical support from booking through to return. It is a simple service aimed at helping you get the job done with less hassle."}</p>
          </div>
        </div>
      </section>

      <section id="benefits" className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white px-6 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,179,149,0.14),_transparent_55%)] pointer-events-none" />
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Helpful advantages"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Why North Baddesley drivers choose us"}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{"Useful reasons to choose a hire service that understands day-to-day travel and transport around North Baddesley."}</p>
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
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{"More hire coverage around North Baddesley"}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{"If North Baddesley is your starting point, we also cover a range of nearby Hampshire locations that are convenient for local collections, deliveries and onward travel."}</p>
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
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Match the vehicle to the task"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"A suitable hire vehicle helps you avoid overloading, repeat trips or using the wrong type of transport for the job."}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Useful for planned and last-minute jobs"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Flexible hire periods are useful when local jobs in North Baddesley run longer than expected or involve several stops."}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Ready for local and regional travel"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Our self-drive vehicles are maintained and prepared to give customers a more dependable rental experience."}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Local Guide"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Driving in and around North Baddesley"}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{"Useful driving and journey-planning advice for getting the most from a hire vehicle in North Baddesley."}</p>
          </div>
          <div className="mx-auto mt-12 max-w-4xl space-y-6 text-left">
            <p className="text-base leading-8 text-slate-600">{"North Baddesley works well for local vehicle hire because journeys are usually straightforward in and out of the village. Main Road is a useful reference when planning collection, delivery, or the first part of your route, especially if you want to avoid unnecessary turns through smaller residential streets."}</p>
            <p className="text-base leading-8 text-slate-600">{"If you are hiring for a house move, furniture collection, or weekend job, it helps to plan loading around quieter times of day. Roads through North Baddesley can feel busier around school runs and commuter periods, so an earlier pickup or a mid-morning start often makes loading and setting off easier."}</p>
            <p className="text-base leading-8 text-slate-600">{"For business users, North Baddesley is a practical base for reaching the wider Test Valley area without the hassle of taking a larger vehicle into tighter village roads for longer than needed. Choosing the right size vehicle before travel is especially useful here, whether you need a compact van for light loads or something larger for multiple drops."}</p>
            <p className="text-base leading-8 text-slate-600">{"If your trip starts or ends in North Baddesley, leave a little extra time for parking, turning space, and careful loading on residential roads. A short bit of route planning before you travel can make a big difference, particularly if you are carrying bulky items, heading out for a full day of deliveries, or returning the vehicle after normal traffic builds."}</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"North Baddesley FAQs"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Questions about hiring in North Baddesley"}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{"Quick answers for customers arranging vehicle hire in and around North Baddesley."}</p>
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
          <h2 className="mb-4 text-4xl font-bold">{"Need a hire vehicle in North Baddesley?"}</h2>
          <p className="mb-8 text-lg text-white/85">{"Book a suitable van, car, minibus or truck for North Baddesley travel, moving jobs and business transport with Southern Van Hire."}</p>
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




