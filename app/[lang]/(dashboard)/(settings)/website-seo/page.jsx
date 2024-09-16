"use client"

import React from "react";
import { Button } from "@/components/ui/button";
import { BreadcrumbItem, Breadcrumbs } from "@/components/ui/breadcrumbs"; 
import Link from "next/link";
import { CircularProgress} from "./progress";

import { Switch } from "@/components/ui/switch";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";


const WebsiteSeo = () => {

  return (
    <div>
      <Breadcrumbs>
        <BreadcrumbItem>Settings</BreadcrumbItem>
        <BreadcrumbItem>Website SEO</BreadcrumbItem>
      </Breadcrumbs>

      <div className="flex mt-6 flex-col gap-4">
        <div className="p-3 rounded-lg bg-green-300 border-2 border-green-600">
          <div className="flex justify-between items-center">
            <p> Need assistance with Website Speedy? Schedule a 15-minute meeting with one of our experts.</p>
            <Button className="bg-green-600"> Book An Appointment </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-6 gap-2 p-3">
        <h3 className="text-2xl font-bold uppercase mb-3"> Website SEO </h3>

        <div className="rounded-xl border-2 p-5 w-full bg-background">
          <div className="flex justify-between items-center mb-3">
            <div>
              <h3 className="text-sm font-semibold"> SEO Analysis for </h3>
              <div className="flex gap-4 items-center">
                <Link href="google.com" className="text-lg font-bold"> Wordpressspeedy.com </Link>
                <a 
                  href="google.com"
                  className="text-primary-500"
                > Restart SEO Analyzer </a>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline"> Print </Button>
              <Button> Download </Button>
            </div>
          </div>

          <hr />

          <div className="flex mt-3 gap-3">
            <div className="flex w-1/2 gap-4 items-center">
             <CircularProgress value="80" showValue />
             <div className="flex flex-col w-full gap-2 p-5 rounded-xl bg-primary-200">

             </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl border-2 p-5 w-full bg-background">
          <div className="flex justify-between items-center mb-3">
            <div>
              <h3 className="text-lg font-bold"> Enhancement Modes </h3>
              <p className="text-md"> Select from our wide range of predefined optimization modes to boost your site's rankings. </p>
            </div>
            <a className="text-primary-800" href=""> See modes comparison </a>
          </div>

          <hr />

          <div className="flex mt-3 gap-3">
            <div className="w-1/4 hover:bg-primary-200 hover:border-primary-600 rounded-xl flex flex-col gap-4 border-2 p-3">
              <h3 className="font-bold text-lg"> Basic </h3>
              <p> Standard optimization features enabled for your site. Ideal choice for maximum stability. </p>
              <Button variant="outline"> Select Mode</Button>
            </div>

            <div className="w-1/4 hover:bg-primary-200 hover:border-primary-600 rounded-xl flex flex-col gap-4 border-2 p-3">
              <h3 className="font-bold text-lg"> Advance </h3>
              <p> Standard optimization features enabled for your site. Ideal choice for maximum stability. </p>
              <Button variant="outline"> Select Mode</Button>
            </div>

            <div className="w-1/4 hover:bg-primary-200 hover:border-primary-600 rounded-xl flex flex-col gap-4 border-2 p-3">
              <h3 className="font-bold text-lg"> Custom </h3>
              <p> Standard optimization features enabled for your site. Ideal choice for maximum stability. </p>
              <Button variant="outline"> Select Mode</Button>
            </div>

            <div className="w-1/4 hover:bg-primary-200 hover:border-primary-600 rounded-xl flex flex-col gap-4 border-2 p-3">
              <h3 className="font-bold text-lg"> Custom </h3>
              <p> Standard optimization features enabled for your site. Ideal choice for maximum stability. </p>
              <Button variant="outline"> Select Mode</Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WebsiteSeo;