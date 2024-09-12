"use client"

import { SiteLogo } from "@/components/svg";
import React from "react";
import { Button } from "@/components/ui/button";
import { BreadcrumbItem, Breadcrumbs } from "@/components/ui/breadcrumbs";  

import { Checkbox } from "@/components/ui/checkbox";
import { Icon } from "@iconify/react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectSeparator } from "@radix-ui/react-select";
import LineColumnArea from "./line-column-area";
import BasicDataTable from "./basic-table";

const Bunnycdn = () => {

  return (
    <div>
      <Breadcrumbs>
        <BreadcrumbItem>Pages</BreadcrumbItem>
        <BreadcrumbItem>Reports</BreadcrumbItem>
        <BreadcrumbItem>Event History</BreadcrumbItem>
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
        <div className="p-3 rounded-lg bg-primary-300 border-2">
          <div className="flex justify-between items-center">
            <p> Connect With Your NitroPack Plugin in Wordpress. </p>
            <a href="./dats.js" download>
              <Button className="bg-primary-600"> Connect </Button>
            </a>
          </div>
        </div>
      </div>

      <div className="flex mt-6 rounded-lg bg-primary-300 border-2 hover:border-primary-600 p-4">
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col">
            <div className="flex gap-2 items-center">
              <Icon
                icon="heroicons:bell"
                className="text-primary-foreground h-[28px] w-[28px] -ml-1"
              />
              <h3 className="text-base font-semibold"> Cache purge required </h3>
            </div>
            <p className="text-sm"> After you are done fine-tuning your settings, to apply your new settings configuration immediately, you must purge all your cache. </p>
          </div>
          <div className="flex gap-3">
            <Button className="border-2 border-transparent hover:bg-transparent hover:border-2 hover:border-primary-600 hover:text-primary-600"> Purge Now </Button>
            <Button variant="outline"> Dismiss </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5">

        <div className="flex w-full justify-between items-center mt-6">
          <div className="flex flex-col p-2">
            <h3 className="font-bold text-xl">Events history</h3>
            <p>Track optimization requests sent to our service and executed API events.</p>
          </div>

          <div className="flex flex-col">
            <Select>
              <SelectTrigger>
                <SelectValue className="ml-2" placeholder="Select a subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today"> Today </SelectItem>
                <SelectItem value="yesterday"> Yesterday </SelectItem>
                <SelectItem value="7_days"> Last 7 Days </SelectItem>
                <SelectItem value="30_days"> Last 30 Days </SelectItem>
                <SelectItem value="last_month"> Last Month </SelectItem>
                <SelectSeparator />
                <SelectItem value="custom"> Custom Range </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <hr />

        <div className="flex gap-3 rounded-xl p-4 border-2 bg-white">
          <div className="w-1/4">
            <div className="flex flex-col gap-4">
              <div className=" border-2 border-primary-400 rounded-xl p-3 hover:bg-primary-600 justify-between hover:text-white">
                
                <div className="flex flex-col justify-between min-h-[80px]">
                  <div className="flex justify-between">
                    <h3 className="text-lg font-semibold"> Optimization Started </h3>
                    <Checkbox id="default_2"></Checkbox>
                  </div>
                  <h2 className="text-3xl font-bold"> 23 </h2>
                </div>

              </div>

              <div className=" border-2 border-primary-400 rounded-xl p-3 hover:bg-primary-600 justify-between hover:text-white">
                
                <div className="flex flex-col justify-between min-h-[80px]">
                  <div className="flex justify-between">
                    <h3 className="text-lg font-semibold"> Optimization failed </h3>
                    <Checkbox id="default_2"></Checkbox>
                  </div>
                  <h2 className="text-3xl font-bold"> 2 </h2>
                </div>
                
              </div>

              <div className=" border-2 border-primary-400 rounded-xl p-3 hover:bg-primary-600 justify-between hover:text-white">
                
                <div className="flex flex-col justify-between min-h-[80px]">
                  <div className="flex justify-between">
                    <h3 className="text-lg font-semibold"> Tag create events </h3>
                    <Checkbox id="default_2"></Checkbox>
                  </div>
                  <h2 className="text-3xl font-bold"> 0 </h2>
                </div>
                
              </div>

              <div className=" border-2 border-primary-400 rounded-xl p-3 hover:bg-primary-600 justify-between hover:text-white">
                
                <div className="flex flex-col justify-between min-h-[80px]">
                  <div className="flex justify-between">
                    <h3 className="text-lg font-semibold"> Purge & invalidate events </h3>
                    <Checkbox id="default_2"></Checkbox>
                  </div>
                  <h2 className="text-3xl font-bold"> 202 </h2>
                </div>
                
              </div>
            </div>
          </div>
          <div className="w-3/4">
            <LineColumnArea />
          </div>
        </div>

        <hr />

        <div className="flex flex-col gap-3 bg-white p-4 rounded-xl border-2">
          <BasicDataTable />
        </div>

        <hr />

        <div className="flex justify-between p-5 bg-white rounded-xl">
          <div className="flex flex-col">
            <h5 className="font-bold text-lg"> Download Log </h5>
            <p> Download usage for Last 30 days </p>
          </div>
          <a href="./data.csv" download>
            <Button variant="outline">
              <Icon
                  icon="heroicons:arrow-down"
                  className="text-primary-foreground h-[18px] w-[18px] -ml-1 mr-2"
                /> Log for current site (.csv)
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Bunnycdn;