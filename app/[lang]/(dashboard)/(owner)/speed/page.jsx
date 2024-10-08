"use client"

import { SiteLogo } from "@/components/svg";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { BreadcrumbItem, Breadcrumbs } from "@/components/ui/breadcrumbs";  
import Link from "next/link";

import { Switch } from "@/components/ui/switch";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";


const Speed = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const cardData = [
    { title: "Basic", description: "Standard optimization features enabled for your site. Ideal choice for maximum stability." },
    { title: "Advance", description: "Standard optimization features enabled for your site. Ideal choice for maximum stability." },
    { title: "Custom", description: "Standard optimization features enabled for your site. Ideal choice for maximum stability." },
  ];

  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Toggle off if already active
    } else {
      setActiveIndex(index); // Set the active index
      console.log(`Selected plan: ${cardData[index].title}`); // Log the selected plan
      console.log(`Selected plan: ${[index]}`); // Log the selected plan
    }
  };

  return (
    <div>
      <Breadcrumbs>
        <BreadcrumbItem>Pages</BreadcrumbItem>
        <BreadcrumbItem>Wordpress DashBoard</BreadcrumbItem>
        <BreadcrumbItem>Speed Packages</BreadcrumbItem>
      </Breadcrumbs>

      <div className="flex mt-6 flex-col gap-4">
        <div className="p-3 rounded-lg bg-green-300 border-2 border-green-600">
          <div className="flex justify-between items-center">
            <p> Need assistance with Website Speedy? Schedule a 15-minute meeting with one of our experts.</p>
            <Button className="bg-green-600"> Book An Appointment </Button>
          </div>
        </div>
      </div>

      <div className="flex mt-6 flex-col gap-4">
        <div className="p-3 rounded-lg bg-primary-300 border-2 bg-primary-300">
          <div className="flex justify-between items-center">
            <p> Connect With Your WordPress Speedy Plugin in Wordpress. </p>
            <a href="./dats.js" download>
              <Button className="bg-primary-600"> Connect </Button>
            </a>
          </div>
        </div>
      </div>

      <div className="flex mt-6 flex-col gap-4">
        <div className="p-6 rounded-lg bg-primary-300 border-2 bg-primary-300">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <h3 className="font-bold"> Cache purge required </h3>
              <p> After you are done fine-tuning your settings, to apply your new settings configuration immediately, you must purge all your cache. </p>
            </div>
            <div className="flex gap-2">
              <Button> Purge Now </Button>
              <Button variant="outline"> Dismiss </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-6 gap-2 p-3">
        <h3 className="text-2xl font-bold uppercase mb-3"> WordPress Speed Package </h3>

        <div className="rounded-xl border-2 p-5 w-full bg-background">
          <div className="flex justify-between items-center mb-3">
            <div>
              <h3 className="text-lg font-bold"> Optimization Modes </h3>
              <p className="text-md"> Select from our range of predefined optimization modes to boost your site's performance. </p>
            </div>
            <a className="text-primary-800 text-end" href=""> See modes comparison </a>
          </div>

          <hr />

          <div className="flex mt-3 gap-3">
            <div className="flex gap-4">
              {cardData.map((card, index) => (
                <div
                  key={index}
                  onClick={() => handleToggle(index)} // Pass the index to toggle
                  className={`w-1/3 rounded-xl flex flex-col gap-4 border-2 p-3 ${
                    activeIndex === index ? 'bg-primary-200 border-primary-600' : 'hover:bg-primary-200 hover:border-primary-600'
                  }`}
                >
                  <h3 className="font-bold text-lg">{card.title}</h3>
                  <p>{card.description}</p>
                  <Button
                    variant="outline"
                    className={`${
                      activeIndex === index ? 'bg-primary-600 text-white' : 'hover:bg-primary-200 hover:border-primary-600'
                    }`}
                  >
                    {activeIndex === index ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      "Select Mode"
                    )}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-xl border-2 p-5 w-full bg-background">
          <div className="flex justify-between items-center mb-6">
            <div className="flex flex-col">
              <h3 className="text-lg font-bold"> Speed Insiders </h3>
              <p className="text-md"> Sign up to be among the first to try new features before their public release.
                <a className="text-primary-400" href=""> Learn more about our Speed Insiders Program. </a>
              </p>
            </div>
            <Switch unChecked> </Switch>
          </div>

          <hr />

          <div className="flex justify-between items-center mt-6">
            <div className="flex flex-col">
              <div className="flex gap-4 items-center">
                <h3 className="text-lg font-bold"> Additional domains </h3>
                <h6 className="bg-cyan-300 text-xs rounded px-2 py-1"> NEW </h6>
              </div>
              <p className="text-md"> Specify additional domain names pointing to the same website.
                <a className="text-primary-400" href=""> Learn more </a>
              </p>
            </div>
            <Switch unChecked> </Switch>
          </div>
          
          <div className="mt-6 bg-cyan-200 p-3 rounded mb-6">
            <p> This feature is available on Scale subscription. 
              <a className="font-bold text-md text-primary-600" href=""> Upgrade Now </a>
            </p>
          </div>

          <hr />

          <div className="flex flex-col mt-6">
            <h3 className="text-lg font-bold"> WordPress Speedy badge </h3>
            <p className="text-md"> As a free plan user you get a WordPress Speedy badge in the footer of your site.</p>

            <div className="flex flex-col gap-3 mt-5">
              <p className="text-md"> Select badge theme: </p>
              <RadioGroup
                className="flex flex-col gap-6"
                defaultValue="disabled"
              >
                <RadioGroupItem value="light" id="light">
                  <div className="flex gap-6 items-center">
                    <p> Light </p>
                    <div className="flex gap-3 rounded-lg border-2 py-3 px-5 rounded">
                      <img src="" alt="" />
                      <hr />
                      <p> Automated page speed optimizations for fast site performance </p>
                    </div>
                  </div>
                </RadioGroupItem>
                <RadioGroupItem value="dark" id="dark">
                <div className="flex gap-6 items-center">
                    <p> Dark </p>
                    <div className="flex gap-3 bg-primary-600 text-white rounded-lg py-3 px-5 rounded">
                      <img src="" alt="" />
                      <hr />
                      <p> Automated page speed optimizations for fast site performance </p>
                    </div>
                  </div>
                </RadioGroupItem>
                <RadioGroupItem value="disabled" id="disabled"> Disabled </RadioGroupItem>
              </RadioGroup>
            </div>
          </div>

          <Button className="mt-6"> Save </Button>

        </div>  
      </div>
    </div>
  );
};

export default Speed;