"use client"

import { SiteLogo } from "@/components/svg";
import React from "react";
import { BreadcrumbItem, Breadcrumbs } from "@/components/ui/breadcrumbs";  
import Link from "next/link";


const InvoicePreview = () => {

  return (
    <div>
      <Breadcrumbs>
        <BreadcrumbItem>Pages</BreadcrumbItem>
        <BreadcrumbItem>Website Owners</BreadcrumbItem>
        <BreadcrumbItem>Website Owners List</BreadcrumbItem>
        <BreadcrumbItem>Dashboard</BreadcrumbItem>
      </Breadcrumbs>

        <div className="flex flex-col items-center mt-6 gap-2 mb-5">
          <h3 className="text-2xl font-bold text-center uppercase"> Dashboard </h3>
            <div className="flex w-full">
              <div className="border-green-400 border-2 flex flex-col gap-1 w-1/2 items-center rounded-xl p-4 m-3">
                <div className="flex items-center gap-2 justify-center">
                  <h4 className="text-sm font-bold"> Boosted Speed URL1 -  </h4>
                  <Link class="text-lg font-bold text-primary-500" href="https://www.peoniesandpetalsskincare.com"> https://www.peoniesandpetalsskincare.com </Link>
                </div>
                <h4 className="text-lg font-bold"> With website speedy: </h4>

                <div className="w-full">
                  <div className="rounded-xl shadow-sm flex flex-col overflow-hidden">
                    <div className="flex py-2 px-2 bg-primary-200 border-b border-white">
                      <h3 className="uppercase text-m text-center border-r border-white font-semibold w-1/4"> Page Speed </h3>
                      <h3 className="uppercase text-m text-center font-semibold w-3/4 pl-2"> Core Web Vital </h3>
                    </div>
                    <div className="flex py-2 px-2 bg-primary-200">
                      <h3 className="uppercase text-m text-center border-r border-white font-semibold w-1/4"> Performance </h3>
                      <div className="flex w-3/4 pl-2">
                        <h3 className="w-1/5 text-center uppercase text-m font-semibold"> FCP </h3>
                        <h3 className="w-1/5 text-center uppercase text-m font-semibold"> LCP </h3>
                        <h3 className="w-1/5 text-center uppercase text-m font-semibold"> CLS </h3>
                        <h3 className="w-1/5 text-center uppercase text-m font-semibold"> TBT </h3>
                        <h3 className="w-1/5 text-center uppercase text-m font-semibold"> SI </h3>
                      </div>
                    </div>
                    <div className="flex py-2 px-2">
                      <h3 className="uppercase text-m text-center border-r border-white font-semibold w-1/4"> 89/100 </h3>
                      <div className="flex w-3/4 pl-2">
                        <h3 className="w-1/5 text-center uppercase text-m font-semibold"> 775.80 </h3>
                        <h3 className="w-1/5 text-center uppercase text-m font-semibold"> 1713.03 </h3>
                        <h3 className="w-1/5 text-center uppercase text-m font-semibold"> 0.05 </h3>
                        <h3 className="w-1/5 text-center uppercase text-m font-semibold"> 0.00 </h3>
                        <h3 className="w-1/5 text-center uppercase text-m font-semibold"> 1.9s </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-red-400 border-2 flex flex-col gap-1 w-1/2 items-center rounded-xl p-4 m-3">
                <div className="flex items-center gap-2 justify-center">
                  <h4 className="text-sm font-bold"> Old Speed Score URL1 - </h4>
                  <Link class="text-lg font-bold text-primary-500" href="https://www.peoniesandpetalsskincare.com"> https://www.peoniesandpetalsskincare.com </Link>
                </div>
                <h4 className="text-lg font-bold"> Without website speedy: </h4>

                <div className="w-full">
                  <div className="rounded-xl shadow-sm flex flex-col overflow-hidden">
                    <div className="flex py-2 px-2 bg-primary-200 border-b border-white">
                      <h3 className="uppercase text-m text-center border-r border-white font-semibold w-1/4"> Page Speed </h3>
                      <h3 className="uppercase text-m text-center font-semibold w-3/4 pl-2"> Core Web Vital </h3>
                    </div>
                    <div className="flex py-2 px-2 bg-primary-200">
                      <h3 className="uppercase text-m text-center border-r border-white font-semibold w-1/4"> Performance </h3>
                      <div className="flex w-3/4 pl-2">
                        <h3 className="w-1/5 text-center uppercase text-m font-semibold"> FCP </h3>
                        <h3 className="w-1/5 text-center uppercase text-m font-semibold"> LCP </h3>
                        <h3 className="w-1/5 text-center uppercase text-m font-semibold"> CLS </h3>
                        <h3 className="w-1/5 text-center uppercase text-m font-semibold"> TBT </h3>
                        <h3 className="w-1/5 text-center uppercase text-m font-semibold"> SI </h3>
                      </div>
                    </div>
                    <div className="flex py-2 px-2">
                      <h3 className="uppercase text-m text-center border-r border-white font-semibold w-1/4"> 89/100 </h3>
                      <div className="flex w-3/4 pl-2">
                        <h3 className="w-1/5 text-center uppercase text-m font-semibold"> 775.80 </h3>
                        <h3 className="w-1/5 text-center uppercase text-m font-semibold"> 1713.03 </h3>
                        <h3 className="w-1/5 text-center uppercase text-m font-semibold"> 0.05 </h3>
                        <h3 className="w-1/5 text-center uppercase text-m font-semibold"> 0.00 </h3>
                        <h3 className="w-1/5 text-center uppercase text-m font-semibold"> 1.9s </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr />

            <div className="flex w-full">
              <div className="border-green-400 border-2 flex flex-col gap-1 w-1/2 items-center rounded-xl p-4 m-3">
                <div className="flex gap-2 items-center justify-center">
                  <h4 className="text-sm font-bold"> Boosted Speed URL2 -  </h4>
                  <Link class="text-lg font-bold text-primary-500" href="https://www.peoniesandpetalsskincare.com"> https://www.peoniesandpetalsskincare.com </Link>
                </div>
                <h4 className="text-lg font-bold"> With website speedy: </h4>

                <div className="w-full">
                  <div className="rounded-xl shadow-sm flex flex-col overflow-hidden">
                    <div className="flex py-2 px-2 bg-primary-200 border-b border-white">
                      <h3 className="uppercase text-m text-center border-r border-white font-semibold w-1/4"> Page Speed </h3>
                      <h3 className="uppercase text-m text-center font-semibold w-3/4 pl-2"> Core Web Vital </h3>
                    </div>
                    <div className="flex py-2 px-2 bg-primary-200">
                      <h3 className="uppercase text-m text-center border-r border-white font-semibold w-1/4"> Performance </h3>
                      <div className="flex w-3/4 pl-2">
                        <h3 className="w-1/5 text-center uppercase text-m font-semibold"> FCP </h3>
                        <h3 className="w-1/5 text-center uppercase text-m font-semibold"> LCP </h3>
                        <h3 className="w-1/5 text-center uppercase text-m font-semibold"> CLS </h3>
                        <h3 className="w-1/5 text-center uppercase text-m font-semibold"> TBT </h3>
                        <h3 className="w-1/5 text-center uppercase text-m font-semibold"> SI </h3>
                      </div>
                    </div>
                    <div className="flex py-2 px-2">
                      <h3 className="uppercase text-m text-center border-r border-white font-semibold w-1/4"> 89/100 </h3>
                      <div className="flex w-3/4 pl-2">
                        <h3 className="w-1/5 text-center uppercase text-m font-semibold"> 775.80 </h3>
                        <h3 className="w-1/5 text-center uppercase text-m font-semibold"> 1713.03 </h3>
                        <h3 className="w-1/5 text-center uppercase text-m font-semibold"> 0.05 </h3>
                        <h3 className="w-1/5 text-center uppercase text-m font-semibold"> 0.00 </h3>
                        <h3 className="w-1/5 text-center uppercase text-m font-semibold"> 1.9s </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-red-400 border-2 flex flex-col gap-1 w-1/2 items-center rounded-xl p-4 m-3">
                <div className="flex gap-2 items-center justify-center">
                  <h4 className="text-sm font-bold"> Old Speed Score URL2 - </h4>
                  <Link class="text-lg font-bold text-primary-500" href="https://www.peoniesandpetalsskincare.com"> https://www.peoniesandpetalsskincare.com </Link>
                </div>
                <h4 className="text-lg font-bold"> Without website speedy: </h4>

                <div className="w-full">
                  <div className="rounded-xl shadow-sm flex flex-col overflow-hidden">
                    <div className="flex py-2 px-2 bg-primary-200 border-b border-white">
                      <h3 className="uppercase text-m text-center border-r border-white font-semibold w-1/4"> Page Speed </h3>
                      <h3 className="uppercase text-m text-center font-semibold w-3/4 pl-2"> Core Web Vital </h3>
                    </div>
                    <div className="flex py-2 px-2 bg-primary-200">
                      <h3 className="uppercase text-m text-center border-r border-white font-semibold w-1/4"> Performance </h3>
                      <div className="flex w-3/4 pl-2">
                        <h3 className="w-1/5 text-center uppercase text-m font-semibold"> FCP </h3>
                        <h3 className="w-1/5 text-center uppercase text-m font-semibold"> LCP </h3>
                        <h3 className="w-1/5 text-center uppercase text-m font-semibold"> CLS </h3>
                        <h3 className="w-1/5 text-center uppercase text-m font-semibold"> TBT </h3>
                        <h3 className="w-1/5 text-center uppercase text-m font-semibold"> SI </h3>
                      </div>
                    </div>
                    <div className="flex py-2 px-2">
                      <h3 className="uppercase text-m text-center border-r border-white font-semibold w-1/4"> 89/100 </h3>
                      <div className="flex w-3/4 pl-2">
                        <h3 className="w-1/5 text-center uppercase text-m font-semibold"> 775.80 </h3>
                        <h3 className="w-1/5 text-center uppercase text-m font-semibold"> 1713.03 </h3>
                        <h3 className="w-1/5 text-center uppercase text-m font-semibold"> 0.05 </h3>
                        <h3 className="w-1/5 text-center uppercase text-m font-semibold"> 0.00 </h3>
                        <h3 className="w-1/5 text-center uppercase text-m font-semibold"> 1.9s </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr />

            <div className="flex w-full">
              <div className="border-green-400 border-2 flex flex-col gap-1 w-1/2 items-center rounded-xl p-4 m-3">
                <div className="flex gap-2 items-center justify-center">
                  <h4 className="text-sm font-bold"> Boosted Speed URL3 - </h4>
                  <Link class="text-lg font-bold text-primary-500" href="https://www.peoniesandpetalsskincare.com"> https://www.peoniesandpetalsskincare.com </Link>
                </div>
                <h4 className="text-lg font-bold"> With website speedy: </h4>

                <div className="w-full">
                  <div className="rounded-xl shadow-sm flex flex-col overflow-hidden">
                    <div className="flex py-2 px-2 bg-primary-200 border-b border-white">
                      <h3 className="uppercase text-m text-center border-r border-white font-semibold w-1/4"> Page Speed </h3>
                      <h3 className="uppercase text-m text-center font-semibold w-3/4 pl-2"> Core Web Vital </h3>
                    </div>
                    <div className="flex py-2 px-2 bg-primary-200">
                      <h3 className="uppercase text-m text-center border-r border-white font-semibold w-1/4"> Performance </h3>
                      <div className="flex w-3/4 pl-2">
                        <h3 className="w-1/5 text-center uppercase text-m font-semibold"> FCP </h3>
                        <h3 className="w-1/5 text-center uppercase text-m font-semibold"> LCP </h3>
                        <h3 className="w-1/5 text-center uppercase text-m font-semibold"> CLS </h3>
                        <h3 className="w-1/5 text-center uppercase text-m font-semibold"> TBT </h3>
                        <h3 className="w-1/5 text-center uppercase text-m font-semibold"> SI </h3>
                      </div>
                    </div>
                    <div className="flex py-2 px-2">
                      <h3 className="uppercase text-m text-center border-r border-white font-semibold w-1/4"> 89/100 </h3>
                      <div className="flex w-3/4 pl-2">
                        <h3 className="w-1/5 text-center uppercase text-m font-semibold"> 775.80 </h3>
                        <h3 className="w-1/5 text-center uppercase text-m font-semibold"> 1713.03 </h3>
                        <h3 className="w-1/5 text-center uppercase text-m font-semibold"> 0.05 </h3>
                        <h3 className="w-1/5 text-center uppercase text-m font-semibold"> 0.00 </h3>
                        <h3 className="w-1/5 text-center uppercase text-m font-semibold"> 1.9s </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-red-400 border-2 flex flex-col gap-1 w-1/2 items-center rounded-xl p-4 m-3">
                <div className="flex gap-2 items-center justify-center">
                  <h4 className="text-sm font-bold"> Old Speed Score URL3 - </h4>
                  <Link class="text-lg font-bold text-primary-500" href="https://www.peoniesandpetalsskincare.com"> https://www.peoniesandpetalsskincare.com </Link>
                </div>
                <h4 className="text-lg font-bold"> Without website speedy: </h4>

                <div className="w-full">
                  <div className="rounded-xl shadow-sm flex flex-col overflow-hidden">
                    <div className="flex py-2 px-2 bg-primary-200 border-b border-white">
                      <h3 className="uppercase text-m text-center border-r border-white font-semibold w-1/4"> Page Speed </h3>
                      <h3 className="uppercase text-m text-center font-semibold w-3/4 pl-2"> Core Web Vital </h3>
                    </div>
                    <div className="flex py-2 px-2 bg-primary-200">
                      <h3 className="uppercase text-m text-center border-r border-white font-semibold w-1/4"> Performance </h3>
                      <div className="flex w-3/4 pl-2">
                        <h3 className="w-1/5 text-center uppercase text-m font-semibold"> FCP </h3>
                        <h3 className="w-1/5 text-center uppercase text-m font-semibold"> LCP </h3>
                        <h3 className="w-1/5 text-center uppercase text-m font-semibold"> CLS </h3>
                        <h3 className="w-1/5 text-center uppercase text-m font-semibold"> TBT </h3>
                        <h3 className="w-1/5 text-center uppercase text-m font-semibold"> SI </h3>
                      </div>
                    </div>
                    <div className="flex py-2 px-2">
                      <h3 className="uppercase text-m text-center border-r border-white font-semibold w-1/4"> 89/100 </h3>
                      <div className="flex w-3/4 pl-2">
                        <h3 className="w-1/5 text-center uppercase text-m font-semibold"> 775.80 </h3>
                        <h3 className="w-1/5 text-center uppercase text-m font-semibold"> 1713.03 </h3>
                        <h3 className="w-1/5 text-center uppercase text-m font-semibold"> 0.05 </h3>
                        <h3 className="w-1/5 text-center uppercase text-m font-semibold"> 0.00 </h3>
                        <h3 className="w-1/5 text-center uppercase text-m font-semibold"> 1.9s </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  );
};

export default InvoicePreview;