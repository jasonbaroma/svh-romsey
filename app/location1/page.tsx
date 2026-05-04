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
  const heroImage = { src: "/images/location1-image1.jpeg", alt: "White rental van driving along a tidy suburban road in North Baddesley" };
  const supportImage = { src: "/images/location1-image2.jpeg", alt: "People loading boxes into a clean rental van outside a home in North Baddesley" };
  const faqs = [
    { question: "What can I hire in North Baddesley?", answer: "Yes, customers in North Baddesley can hire vans, cars, minibuses and trucks depending on the job and availability." },
    { question: "Can you deliver a hire vehicle to North Baddesley?", answer: "Yes, delivery and collection can often be arranged, which is useful if you want to keep the day simple." },
    { question: "What are the most common reasons to hire here?", answer: "Many bookings are for house moves, furniture collection, trade jobs, business deliveries and group outings." },
    { question: "Do you offer short and longer hires?", answer: "Yes, we offer flexible rental periods, so you can book for a short job or for longer if needed." },
    { question: "Can you help me choose the right vehicle size?", answer: "We can guide you based on load space, passenger numbers, distance and the kind of driving you expect to do." },
  ];
  const trustCards = [
    { title: "Reliable vehicles", description: "A maintained fleet helps customers book with confidence for local and longer journeys.", icon: ShieldCheck },
    { title: "Flexible service", description: "We keep booking arrangements practical, with support for different hire lengths and transport needs.", icon: Star },
    { title: "Useful local support", description: "Southern Van Hire supports both private customers and businesses with straightforward local help.", icon: Users },
  ];
  const featureStats = [
    { value: "Car Hire", label: "Van hire for moving jobs, storage runs, deliveries and trade use around North Baddesley." },
    { value: "Van Hire", label: "Car hire for everyday travel, temporary replacement needs and local business journeys." },
    { value: "Minibus Hire", label: "Minibus hire for family events, club trips and organised group travel." },
    { value: "Truck Hire", label: "Truck hire for heavier loads, site work and larger commercial transport tasks." },
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
    { icon: BadgePoundSterling, title: "Choice that fits the job", description: "Hire the right vehicle for moving, collecting, delivering or day-to-day travel.", detail: "From a small van for furniture pickup to a larger vehicle for business work or a minibus for group plans, we help keep the choice practical." },
    { icon: Clock3, title: "Hire around your schedule", description: "Flexible booking options help you plan around work, home moves and weekend jobs.", detail: "We aim to make timing easier with rental periods that suit short local use as well as longer bookings when more time is needed." },
    { icon: CheckCircle2, title: "Dependable local support", description: "A maintained fleet and helpful service give you confidence before setting off.", detail: "We focus on reliable vehicles and clear arrangements so collection, delivery and the hire itself feel straightforward from the start." },
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
                <h1 className="text-5xl font-bold tracking-tight">{"Vehicle Hire in North Baddesley"}</h1>
                <p className="text-xl text-white">{"Book self-drive vans, cars, minibuses and trucks for local jobs, business use and longer journeys with flexible support from Southern Van Hire."}</p>
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
                <h2 className="text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">{"Easy vehicle hire for North Baddesley"}</h2>
                <p className="mt-3 text-base leading-7 text-slate-600">{"Hiring a vehicle for North Baddesley should be easy to arrange. We help local residents and businesses book suitable vans, cars, minibuses and trucks for one-off trips, planned jobs and ongoing transport needs without overcomplicating the process."}</p>
                <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-600">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                    <PhoneCall className="h-4 w-4 text-[#00B395]" />
                    {"Delivery and collection available"}
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                    <Clock3 className="h-4 w-4 text-[#00B395]" />
                    {"Short and longer hires"}
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
            <h2 className="mb-4 text-4xl font-bold">{"Why customers choose us in North Baddesley"}</h2>
            <p className="text-lg text-muted-foreground">{"Our North Baddesley service is built around dependable vehicles, practical booking help and flexible arrangements that suit everyday jobs."}</p>
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
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Hire categories"}</p>
            <h2 className="max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">{"Vehicle options available for North Baddesley"}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{"We provide practical self-drive options for everyday local use and wider Hampshire travel."}</p>
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
          <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Straightforward hire for home, work and local travel"}</h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-lg leading-8 text-slate-600">
            <p>{"Southern Van Hire supports North Baddesley with practical self-drive vehicle hire backed by the wider coverage and experience of a regional provider. While van hire is a major part of the service, we also offer cars, minibuses and trucks for many different transport requirements."}</p>
            <p>{"North Baddesley is well placed for local and cross-county travel, making hire vehicles useful for house moves, furniture collection, business deliveries, trade work and short-term replacement transport. Customers often need something flexible rather than long-term ownership, and that is where hire can be a sensible option."}</p>
            <p>{"Because the village sits close to Romsey, Southampton and key route links, many bookings involve a mix of local roads and larger A-road or motorway travel. We help customers choose a vehicle that suits the route, load and duration, whether that means a compact van, a comfortable car or a larger commercial option."}</p>
            <p>{"Our aim is to keep the service straightforward: maintained vehicles, clear communication and practical booking support. That makes it easier for customers in North Baddesley to get a hire vehicle in place without wasting time."}</p>
          </div>
        </div>
      </section>

      <section id="benefits" className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white px-6 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,179,149,0.14),_transparent_55%)] pointer-events-none" />
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Why hire here"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Useful vehicle hire for North Baddesley journeys"}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{"A practical fleet, flexible bookings and a straightforward local service make hiring in North Baddesley easier to organise."}</p>
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
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{"Other places we cover near North Baddesley"}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{"If North Baddesley is not the only place you are travelling from, we also cover nearby Hampshire towns and villages that are practical for the same booking area."}</p>
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
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Suitable vehicles for real tasks"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"We help match customers in North Baddesley with a hire vehicle that suits the journey, number of passengers or amount of cargo involved."}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Prepared for practical use"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Our rental vehicles are maintained and prepared to support reliable travel for domestic use, business work and planned transport needs."}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Helpful booking support"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"With delivery, collection and flexible hire periods available, booking a vehicle around North Baddesley can be kept simple and workable."}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Local Guide"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"North Baddesley driving guide"}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{"Useful local driving notes for getting in and out of North Baddesley with a hire vehicle."}</p>
          </div>
          <div className="mx-auto mt-12 max-w-4xl space-y-6 text-left">
            <p className="text-base leading-8 text-slate-600">{"North Baddesley works well for straightforward local collection and drop-off planning, especially if you want to stay close to the village before joining wider Hampshire routes. Main Road is one of the practical local corridors to keep in mind, particularly for short residential moves, furniture pickups, and small business deliveries."}</p>
            <p className="text-base leading-8 text-slate-600">{"If you are hiring a larger vehicle, it helps to plan around village traffic and give yourself a little extra time at busier parts of the day. Many customers use North Baddesley as a convenient starting point for jobs that begin locally and then continue out towards the wider Test Valley and Southampton side of the area."}</p>
            <p className="text-base leading-8 text-slate-600">{"For self-drive van, car, minibus, or truck hire, the area suits practical trips such as house moves, collecting bulky items, event transport, and trade work. A short local run through North Baddesley is often followed by onward travel across Hampshire, so it is worth checking your loading plan, parking space, and route before setting off."}</p>
            <p className="text-base leading-8 text-slate-600">{"When arranging vehicle hire in North Baddesley, the simplest approach is usually to think in stages: local access first, main route second, and unloading point third. That keeps the journey easier to manage, especially with longer vehicles or when timing matters for home deliveries, business bookings, or multi-stop work."}</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Need to know"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"North Baddesley hire FAQs"}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{"Answers to common questions about hiring a vehicle in North Baddesley."}</p>
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
          <h2 className="mb-4 text-4xl font-bold">{"Book vehicle hire in North Baddesley"}</h2>
          <p className="mb-8 text-lg text-white/85">{"Arrange a suitable van, car, minibus or truck for North Baddesley with flexible booking and practical help from Southern Van Hire."}</p>
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




