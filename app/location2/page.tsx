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
  const locationLinks = buildLocationLinks("Chandler's Ford");
  const heroImage = { src: "/images/location2-image1.jpeg", alt: "Rental van on a residential road in Chandler's Ford" };
  const supportImage = { src: "/images/location2-image2.jpeg", alt: "Self-drive hire vehicle near shops and main routes in Chandler's Ford" };
  const faqs = [
    { question: "Is van hire available in Chandler's Ford?", answer: "Yes, many customers in Chandler's Ford hire vans for moving items, collecting purchases and trade work." },
    { question: "Can I hire other vehicle types in Chandler's Ford?", answer: "Yes, we can supply cars, minibuses and trucks as well as vans, depending on the booking." },
    { question: "Do you offer flexible rental lengths in Chandler's Ford?", answer: "Flexible booking periods are available, including hires that run beyond a single day." },
    { question: "Do you support business vehicle hire in Chandler's Ford?", answer: "Yes, business users can hire vehicles for deliveries, fleet support and temporary transport cover." },
    { question: "Can the vehicle be delivered in Chandler's Ford?", answer: "Delivery and collection can be arranged, depending on the booking details." },
  ];
  const trustCards = [
    { title: "Dependable vehicles", description: "Vehicles are maintained and prepared with everyday reliability in mind, whether you need a car, van, minibus or truck.", icon: ShieldCheck },
    { title: "Convenient service", description: "Free delivery and collection helps keep local bookings convenient, especially for home moves and business jobs.", icon: Star },
    { title: "Flexible hire terms", description: "Short and longer hire periods are available, so you can book around the job rather than forcing the job around the booking.", icon: Users },
  ];
  const featureStats = [
    { value: "Car Hire", label: "Van hire for moving jobs, delivery work and larger household collections." },
    { value: "Van Hire", label: "Car hire for daily transport, work trips and short-notice travel." },
    { value: "Minibus Hire", label: "Minibus hire for group outings, events and organised travel." },
    { value: "Truck Hire", label: "Truck hire for larger commercial loads and heavier-duty tasks." },
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
    { icon: BadgePoundSterling, title: "More suitable vehicle choices", description: "A broad fleet gives you suitable options for local travel, home projects, business use and larger transport tasks.", detail: "That means you can book a car, van, minibus or truck depending on what the day actually requires." },
    { icon: Clock3, title: "Flexible for changing plans", description: "Flexible hire terms are helpful for bookings that need to cover more than a single errand or journey.", detail: "It is a practical way to handle busy schedules, multi-stop jobs and temporary transport gaps." },
    { icon: CheckCircle2, title: "Straightforward from booking to return", description: "Maintained vehicles and service-led support help keep your booking simple and dependable.", detail: "We focus on getting customers into the right hire vehicle with as little fuss as possible." },
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
                <h1 className="text-5xl font-bold tracking-tight">{"Vehicle hire in Chandler's Ford made practical"}</h1>
                <p className="text-xl text-white">{"Flexible van, car, minibus and truck hire in Chandler's Ford with maintained vehicles and practical support from Southern Van Hire."}</p>
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
                  {"Easy hire across Chandler's Ford"}
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">{"Simple vehicle booking for Chandler's Ford"}</h2>
                <p className="mt-3 text-base leading-7 text-slate-600">{"For Chandler's Ford customers, we keep the booking process practical and clear. Whether you need a van for a weekend move or a car for business travel, we help arrange a hire vehicle that suits the journey and the timescale."}</p>
                <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-600">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                    <PhoneCall className="h-4 w-4 text-[#00B395]" />
                    {"Broad self-drive fleet"}
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                    <Clock3 className="h-4 w-4 text-[#00B395]" />
                    {"Short and longer hires available"}
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
            <h2 className="mb-4 text-4xl font-bold">{"Reliable hire support for Chandler's Ford"}</h2>
            <p className="text-lg text-muted-foreground">{"Customers in Chandler's Ford choose us for sensible vehicle choice, maintained vehicles and a service that keeps the booking process clear from start to finish."}</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3 md:auto-rows-fr">
            {trustCards.map((item) => (
              <Card key={item.title} className="flex h-full flex-col border border-slate-100 bg-white p-8 shadow-[0_20px_45px_-25px_rgba(15,23,42,0.22)]">
                <div className="mb-6 flex min-h-[5.5rem] w-full items-center gap-3 rounded-2xl bg-[#00B395]/10 px-4 py-4 text-left text-[#00B395]">
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
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Fleet options"}</p>
            <h2 className="max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">{"Hire vehicles for Chandler's Ford customers"}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{"Chandler's Ford customers often need flexible transport for both local roads and wider Hampshire journeys, so we offer a practical range of self-drive vehicles."}</p>
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
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Well placed for travel"}</p>
          <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Vehicle hire that suits Chandler's Ford life"}</h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-lg leading-8 text-slate-600">
            <p>{"Chandler's Ford is a busy base for both residential and business travel, with quick connections towards Eastleigh, Southampton, Winchester and the motorway network. That makes flexible vehicle hire especially useful for customers who need more space or temporary transport."}</p>
            <p>{"Chandler's Ford works well for both local jobs and longer journeys thanks to easy links towards Eastleigh, Southampton and Winchester. We help customers choose a vehicle that fits the task properly, whether that is a compact van for a few items or a larger vehicle for heavier loads."}</p>
            <p>{"A lot of hires in Chandler's Ford are for practical, time-sensitive jobs. That is why we keep the service clear and responsive, with flexible hire periods, maintained vehicles and straightforward advice for personal or business bookings."}</p>
            <p>{"From home moves and furniture collections to trade work, events and temporary fleet support, our Chandler's Ford hire service is designed to be useful rather than complicated. You get a reliable vehicle and a process that helps you stay on schedule."}</p>
          </div>
        </div>
      </section>

      <section id="benefits" className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white px-6 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,179,149,0.14),_transparent_55%)] pointer-events-none" />
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Why it helps"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"A useful fit for Chandler's Ford travel"}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{"Clear benefits for customers looking for practical, flexible vehicle hire around Chandler's Ford."}</p>
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
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{"Other areas we cover near Chandler's Ford"}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{"From Chandler's Ford, we also support hires across nearby towns and villages, giving you practical options if you are travelling locally or arranging transport across the wider area."}</p>
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
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Flexible vehicle hire"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Choose from practical rental vehicles for day hire, weekend use, longer bookings and business needs, with straightforward support from booking to return."}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Well-kept fleet"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Our cars, vans, minibuses and trucks are prepared for reliable everyday use, helping you get on with the job without unnecessary fuss."}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Practical local service"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Flexible booking options make it easier to arrange the right hire vehicle for short notice jobs, planned trips, business cover or longer transport needs around Chandler's Ford and beyond."}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Local Guide"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Driving around Chandler's Ford"}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{"Useful driving pointers for getting in and out of Chandler's Ford smoothly, whether you are hiring for local jobs, business travel or a longer run across Hampshire."}</p>
          </div>
          <div className="mx-auto mt-12 max-w-4xl space-y-6 text-left">
            <p className="text-base leading-8 text-slate-600">{"Chandler's Ford sits in a practical spot for self-drive hire, with straightforward access into the wider Eastleigh and Southampton area. For local trips, it helps to plan around the busier morning and late afternoon periods, especially if you are collecting furniture, making timed deliveries or heading to a work site with a larger vehicle."}</p>
            <p className="text-base leading-8 text-slate-600">{"If your journey takes you beyond town, the main local routes give good links across Hampshire, so Chandler's Ford works well as a starting point for home moves, trade jobs and business transport. Drivers hiring a van, car, minibus or truck often find it useful for both shorter local runs and longer cross-county journeys without needing to pass through more congested central areas first."}</p>
            <p className="text-base leading-8 text-slate-600">{"For practical stop planning, it is worth sorting fuel, refreshments and loading checks before you get too far into a busy day. Around Chandler's Ford and the surrounding Eastleigh area, there are plenty of everyday stop-off options for supplies and quick breaks, which is especially useful if you are travelling with passengers or managing a multi-drop schedule."}</p>
            <p className="text-base leading-8 text-slate-600">{"Chandler's Ford is also a sensible base if you need a hire vehicle for mixed use over the same booking, such as collecting stock, attending an event, then returning with equipment or passengers. A little route planning in advance usually makes things easier, particularly when using a larger vehicle on residential roads, at retail stops or when timing collection and return around the working day."}</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Chandler's Ford FAQs"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Common questions about Chandler's Ford hire"}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{"Helpful information for customers planning vehicle hire in Chandler's Ford."}</p>
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
          <h2 className="mb-4 text-4xl font-bold">{"Book a Chandler's Ford hire vehicle"}</h2>
          <p className="mb-8 text-lg text-white/85">{"Arrange practical self-drive vehicle hire in Chandler's Ford for personal journeys, moving tasks and business transport needs."}</p>
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




