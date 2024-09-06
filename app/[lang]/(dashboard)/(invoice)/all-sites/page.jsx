"use client"

import { SiteLogo } from "@/components/svg";
import React from "react";
import { Button } from "@/components/ui/button";
import { BreadcrumbItem, Breadcrumbs } from "@/components/ui/breadcrumbs";  
import Link from "next/link";


const InvoicePreview = () => {

  return (
    <div>
      <Breadcrumbs>
        <BreadcrumbItem>Pages</BreadcrumbItem>
        <BreadcrumbItem>Website Owners</BreadcrumbItem>
        <BreadcrumbItem>Website Owners List</BreadcrumbItem>
        <BreadcrumbItem>All Sites</BreadcrumbItem>
      </Breadcrumbs>

      <div className="flex mt-6 flex-col gap-4">
        <div className="p-3 rounded-lg bg-green-300 border-2 border-green-600">
          <div className="flex justify-between items-center">
            <p> Need assistance with Website Speedy? Schedule a 15-minute meeting with one of our experts.</p>
            <Button className="bg-green-600"> Book An Appointment </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-6 gap-2 mb-5">
        <h3 className="text-2xl font-bold text-center uppercase"> All Sites </h3>
          <div className="flex flex-wrap gap-3 w-full">
            <div className="w-1/3 bg-white rounded-xl p-3">
              <Link href="www.peoniesandpetalsskincare.com" class="block text-primary-800 text-lg font-semibold mb-3"> www.peoniesandpetalsskincare.com </Link>
              <hr />
              <div className="flex flex-col gap-2 mt-3">
                <div className="flex justify-between">
                  <p className="capitalize text-m font-semibold"> Platform </p>
                  <p className="capitalize text-m"> Wix </p>
                </div>

                <div className="flex justify-between">
                  <p className="capitalize text-m font-semibold"> Desktop Speed </p>
                  <p className="capitalize text-m"> 89/100 </p>
                </div>

                <div className="flex justify-between">
                  <p className="capitalize text-m font-semibold"> Mobile Speed </p>
                  <p className="capitalize text-m"> 61/100 </p>
                </div>

                <div className="flex justify-between">
                  <p className="capitalize text-m font-semibold"> Pages View </p>
                  <p className="capitalize text-m"> 100/100 </p>
                </div>

                <div className="flex justify-between">
                  <p className="capitalize text-m font-semibold"> Consumed URL's </p>
                  <p className="capitalize text-m"> 3/3 </p>
                </div>

                <div className="flex justify-between items-center">
                  <p className="capitalize text-m font-semibold"> Last Updated </p>
                  <div className="flex flex-col">
                    <p className="capitalize text-m"> September 06, 2024 </p>
                    <p className="capitalize text-end"> 10:50 </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 mt-3">
                <Button> View Details </Button>
                <Button> Edit Website </Button>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default InvoicePreview;