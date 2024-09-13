"use client"

import { SiteLogo } from "@/components/svg";
import React from "react";
import { Button } from "@/components/ui/button";
import { BreadcrumbItem, Breadcrumbs } from "@/components/ui/breadcrumbs";  
import Link from "next/link";

import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";


const Bunnycdn = () => {

  return (
    <div>
      <Breadcrumbs>
        <BreadcrumbItem>Pages</BreadcrumbItem>
        <BreadcrumbItem>Wordpress Speedy DashBoard</BreadcrumbItem>
        <BreadcrumbItem>Bunny CDN</BreadcrumbItem>
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

      <div className="flex flex-col items-center mt-6 gap-2">
        <h3 className="text-2xl font-bold uppercase"> Bunny CDN </h3>
          
      </div>
    </div>
  );
};

export default Bunnycdn;