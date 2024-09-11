"use client"

import { SiteLogo } from "@/components/svg";
import React from "react";
import { Button } from "@/components/ui/button";
import { BreadcrumbItem, Breadcrumbs } from "@/components/ui/breadcrumbs";  
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";

import FloatingBar from "./floating-bar";
import ComboChart from "./combo-chart";
import GradiantDonut from "./gradiant-donut";


const InvoicePreview = () => {

  return (
    <div>
      <Breadcrumbs>
        <BreadcrumbItem>Pages</BreadcrumbItem>
        <BreadcrumbItem>Website Owners</BreadcrumbItem>
        <BreadcrumbItem>Nitro Pack DashBoard</BreadcrumbItem>
      </Breadcrumbs>

      <div className="flex mt-6 flex-col gap-4">
        <div className="p-3 rounded-lg bg-green-300 border-2 bg-green-300">
          <div className="flex justify-between items-center">
            <p> Need assistance with Website Speedy? Schedule a 15-minute meeting with one of our experts.</p>
            <Button className="bg-green-600"> Book An Appointment </Button>
          </div>
        </div>
      </div>

      <div className="flex mt-6 flex-col gap-4">
        <div className="p-3 rounded-lg bg-primary-300 border-2 bg-primary-300">
          <div className="flex justify-between items-center">
            <p> Connect With Your NitroPack Plugin in Wordpress. </p>
            <a href="./dats.js" download>
              <Button className="bg-primary-600"> Connect </Button>
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-6">
        <h3 className="text-3xl font-bold text-primary-600 mb-3"> DashBoard </h3>

        <div className="flex gap-3">
          <div className="w-3/5 flex gap-3 flex-col">
            <div className="flex flex-col bg-background py-5 px-12 rounded-xl mt-2">
              <h3 className="text-lg font-semibold"> Service Results </h3>
              <hr />
              <div className="flex pt-5">
                <div className="flex w-1/3 gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  width="60"
                  height="60"
                  className="animated-target"
                >
                  <circle fill="currentColor" className="target-ring" cx="50" cy="50" r="45" />
                  <circle fill="white" className="target-ring" cx="50" cy="50" r="35" />
                  <circle fill="currentColor" className="target-ring" cx="50" cy="50" r="25" />
                  <circle fill="white" className="target-ring" cx="50" cy="50" r="15" />
                  <circle fill="currentColor" className="target-center" cx="50" cy="50" r="5" />
                </svg>
                  <div>
                    <h4 className="font-bold text-lg"> 38% </h4>
                    <p> Cache hit ratio </p>
                  </div>
                </div>
                <div className="flex w-1/3 gap-2 items-center">
                  <svg width="32" height="60" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.1953 6.71681C15.7765 7.96064 12.6424 8.84376 9.00001 8.84376C4.89177 8.84376 0.96353 7.53774 0.105882 6.13221L0 6.00783V11.8414C1.49294 16.6799 15.9565 16.8167 18 11.8414V5.78394C17.7975 6.16445 17.5219 6.48394 17.1953 6.71681Z" fill="currentColor"></path>
                    <path d="M17.1953 15.1997C15.7765 16.4436 12.6424 17.3142 9.00001 17.3142C4.89177 17.3142 0.96353 16.0704 0.105882 14.6027L0 14.4907V20.3243C1.49294 25.1504 15.9565 25.2996 18 20.3243V14.2793C17.7984 14.6574 17.5224 14.973 17.1953 15.1997Z" fill="currentColor"></path>
                    <path d="M9.00001 7.21418C13.9706 7.21418 18 5.59923 18 3.60709C18 1.61495 13.9706 0 9.00001 0C4.02944 0 0 1.61495 0 3.60709C0 5.59923 4.02944 7.21418 9.00001 7.21418Z" fill="currentColor"></path>
                  </svg>
                  <div>
                    <h4 className="font-bold text-lg"> 1000 KB </h4>
                    <p> Cache size </p>
                  </div>
                </div>
                <div className="flex w-1/3 gap-2 items-center">
                  <svg 
                    width="60" 
                    height="60" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C9.62663 0 7.30655 0.703788 5.33316 2.02236C3.35977 3.34094 1.8217 5.21508 0.913451 7.4078C0.00519935 9.60051 -0.232441 12.0133 0.230582 14.3411C0.693605 16.6688 1.83649 18.807 3.51472 20.4853C5.19295 22.1635 7.33115 23.3064 9.65892 23.7694C11.9867 24.2324 14.3995 23.9948 16.5922 23.0865C18.7849 22.1783 20.6591 20.6402 21.9776 18.6668C23.2962 16.6934 24 14.3734 24 12C24 8.8174 22.7357 5.76515 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0ZM18 14.6667C18 14.801 17.9466 14.9299 17.8516 15.0249C17.7566 15.1199 17.6277 15.1733 17.4933 15.1733H17.3333L11.2 13.48C11.0499 13.44 10.9184 13.3489 10.8283 13.2223C10.7383 13.0957 10.6952 12.9416 10.7067 12.7867L11.28 5.33333C11.2797 5.24111 11.2985 5.14983 11.3353 5.06526C11.3721 4.98069 11.4261 4.90468 11.4937 4.84202C11.5614 4.77936 11.6413 4.73143 11.7285 4.70125C11.8156 4.67106 11.9081 4.65929 12 4.66667H12.12C12.285 4.66876 12.4436 4.73078 12.5663 4.84117C12.6889 4.95156 12.7673 5.10279 12.7867 5.26666L13.3333 11.3333L17.6667 13.8133C17.7674 13.8715 17.8512 13.955 17.9097 14.0556C17.9682 14.1562 17.9993 14.2703 18 14.3867V14.6667Z" fill="currentColor">
                      </path>
                    </svg>
                  <div>
                    <h4 className="font-bold text-lg"> 3 days ago </h4>
                    <p> Last Purge </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-background rounded-xl py-5 px-12">
              <div className="flex justify-between items-center mb-3">
                <div>
                  <h3 className="text-lg font-semibold"> Quick Actions </h3>
                  <p> Cache hit Ratio </p>
                </div>
                <Button variant="outline"> See More </Button>
              </div>
              <hr />
              <FloatingBar />
            </div>
            <div className="bg-background rounded-xl py-5 px-12">
              <div className="flex justify-between items-center mb-3">
                <div>
                  <h3 className="text-lg font-semibold"> Quick Actions </h3>
                  <p> Cache hit Ratio </p>
                </div>
                <Button variant="outline"> See More </Button>
              </div>
              <hr />
              <ComboChart />
            </div>
          </div>
          
          <div className="w-2/5 flex flex-col gap-3">
            <div className="flex flex-col gap-3 bg-background p-3 rounded-xl">
              <h3 className="text-lg font-semibold"> Optimization Status </h3>
              <hr />
              <div className="flex justify-between rounded p-2 mt-2 bg-primary-200">
                <h6 className="text-md font-semibold"> Total pages found </h6>
                <p className="text-md font-semibold"> 27 </p>
              </div>
              <GradiantDonut />
              <div className="flex flex-col gap-3 rounded p-2 mt-2 bg-primary-200">
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <div className="px-3 py-2 rounded bg-blue-600"></div>
                    <h6 className="text-md font-semibold"> Optimization Complete </h6>
                  </div>
                  <p className="text-md font-semibold"> 7 </p>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <div className="px-3 py-2 rounded bg-pink-600"></div>
                    <h6 className="text-md font-semibold"> Scheduled for Optimization </h6>
                  </div>
                  <p className="text-md font-semibold"> 3 </p>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <div className="px-3 py-2 rounded bg-green-600"></div>
                    <h6 className="text-md font-semibold"> Not Eligible for Optimization </h6>
                  </div>
                  <p className="text-md font-semibold"> 12 </p>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <div className="px-3 py-2 rounded bg-red-600"></div>
                    <h6 className="text-md font-semibold"> Optimization Failed </h6>
                  </div>
                  <p className="text-md font-semibold"> 5 </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 bg-background p-3 rounded-xl">
              <h3 className="text-lg font-semibold"> Quick Actions </h3>
              <hr />
              <div className="flex gap-2 flex-col">
                <div className="flex gap-3 items-center justify-between">
                  <h6 className="text-lg font-semibold"> Cache warmup </h6>
                  <Switch defaultChecked />
                </div>

                <div className="flex gap-3 items-center justify-between">
                  <h6 className="text-lg font-semibold"> Test mode </h6>
                  <Switch defaultChecked />
                </div>

                <div className="flex gap-3 items-center justify-between">
                  <h6 className="text-lg font-semibold"> Optimization mode </h6>
                  <h6 className="text-lg font-semibold text-primary-400"> Standard </h6>
                </div>
              </div>
              <Button> Purge Cache </Button>
            </div>

            <div className="flex flex-col gap-3 bg-background p-3 rounded-xl">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-lg font-semibold"> Free Subscription </h3>
                  <a href="https://ausdigital.agency" target="_blank" className="text-sm"> (ausdigital.agency) </a>
                </div>
                <p> 1 website </p>
              </div>
              <hr />
              <div>
                <div className="flex p-2 mb-1">
                  <p className="flex text-lg w-1/3 font-semibold"> Page Views </p>
                  <p className="flex text-lg w-1/3 justify-center font-semibold text-primary-500"> 30 </p>
                  <p className="flex text-lg w-1/3 justify-end font-semibold"> 5000 </p>
                </div>
                  <Progress value={30} size="lg" />
              </div>

              <div>
                <div className="flex p-2 mb-1">
                  <p className="flex text-lg w-1/3 font-semibold"> CDN Bandwidth </p>
                  <p className="flex text-lg w-1/3 justify-center font-semibold text-primary-500"> 20.19 </p>
                  <p className="flex text-lg w-1/3 justify-end font-semibold"> 1GB </p>
                </div>
                  <Progress value={8.19} size="lg" />
              </div>

              <div className="flex p-2 mb-1">
                <p className="flex text-lg w-1/3 font-semibold text-primary-500"> Next Reset </p>
                <p className="flex text-lg w-1/3 justify-center font-semibold text-primary-800"> Sept 9, 2024 </p>
                <p className="flex text-lg w-1/3 justify-end font-semibold text-primary-500"> Next Month </p>
              </div>

              <Button> Subscription </Button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default InvoicePreview;