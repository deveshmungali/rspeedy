"use client"

import { SiteLogo } from "@/components/svg";
import { BreadcrumbItem, Breadcrumbs } from "@/components/ui/breadcrumbs";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import React from "react";
import { Stepper, Step, StepLabel } from "@/components/ui/steps";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

import FormGrid from "./form-grid";
import BasicAccordion from "./basic-accordion";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const InvoicePreview = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const steps = [
    {
      label: "First Step",
      content: "Confirm Current Page Speed",
    },
    {
      label: "Second Step",
      content: "Install Speed Enhancement Script",
    },
    {
      label: "Third Step",
      content: "Check Updated Speed Score",
    },
    {
      label: "Fourth Step",
      content: "Advance Optimization",
    },
  ];

  const isStepOptional = (step) => {
    return step === 1;
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const onSubmit = () => {
    toast({
      title: "You submitted the following values:",
      description: (
        <div className="mt-2 w-[340px] rounded-md bg-slate-950 p-4 top-0 right-0">
          <p className="text-primary-foreground">Done</p>
        </div>
      ),
    });
  };

  return (
    <div>
      <Breadcrumbs>
        <BreadcrumbItem>Pages</BreadcrumbItem>
        <BreadcrumbItem>Website Owners</BreadcrumbItem>
        <BreadcrumbItem>Website Owners List</BreadcrumbItem>
        <BreadcrumbItem>Login</BreadcrumbItem>
      </Breadcrumbs>

      <div className="flex w-full flex-col gap-5 mt-5">
        <div className="bg-primary-300 flex items-center justify-between rounded p-5">
          <div className="text-m font-semibold">
            Need assistance with Website Speedy? Schedule a 15-minute meeting with one of our experts. 
          </div>
          <Button className="">
            Book an Appointment
          </Button>
        </div>

        <div className="p-4 flex gap-5 bg-white rounded-xl">
          <div className="w-4/5">
            <div className="mb-5">
              <h2 className="font-bold text-2xl">
                Let's set up Website Speedy to automatically boost your website's loading speed.
              </h2>
              <p className="text-base py-3">
                  Website Speedy automatically fixes Core Web Vitals, enhances your website's DOM, and improves how your website is interpreted by different browsers, leading to lightning-fast loading speeds across all browsers and devices.
              </p>
            </div>
            
            <Tabs defaultValue="account" className="flex w-full flex-col border-2 rounded-xl overflow-hidden bg-grey-400">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="account">Self Installation</TabsTrigger>
                <TabsTrigger value="password">Request Installation By The Website Speedy Team</TabsTrigger>
              </TabsList>

              <TabsContent value="account">
              <div className="flex flex-col gap-5 p-5">
                <div className="xl:col-span-3 col-span-12 mr-5">
                  <Stepper current={activeStep} direction="horizontal">
                    {steps.map((label, index) => {
                      const stepProps = {};
                      const labelProps = {};
                      if (isStepOptional(index)) {
                        labelProps.optional = (
                          <StepLabel variant="caption">Optional</StepLabel>
                        );
                      }
                      return (
                        <Step key={label} {...stepProps}>
                          <StepLabel {...labelProps}>
                            <div className="flex flex-col">
                              <span className="text-xl font-bold"> {label.label}</span>
                              <span className="text-primary-500 text-m font-semibold"> {label.content}</span>
                            </div>
                          </StepLabel>
                        </Step>
                      );
                    })}
                  </Stepper>
                </div>
                <div className="col-span-12 xl:col-span-9">
                  {activeStep === steps.length ? (
                    <React.Fragment>
                      <div className="my-3 pt-2 text-lg font-semibold text-center">
                        All steps completed - you&apos;re finished
                      </div>
                      <div className="flex pt-2">
                        <div className=" flex-1" />
                        <Button
                          size="xs"
                          variant="outline"
                          color="destructive"
                          className="cursor-pointer"
                          onClick={handleReset}
                        >
                          Reset
                        </Button>
                      </div>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <form>
                        <div className="flex flex-col gap-4">
                          {activeStep === 0 && (
                            <>
                              <Card className="flex flex-col gap-3">
                                <CardHeader>
                                  <CardTitle className="text-lg py-3 px-5" >
                                    Please follow the Steps Below to improve your website Speed Score -
                                  </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                  <h2 className="text-xl font-bold"> Enter URLs of 3 important Pages from your Website </h2>
                                  <p className="text-m">WebsiteSpeedy Boosts the speed of Whole website i.e all page on your website, Please enter URLs of Homepage and 2 other most important pages from your website which will be used to display updated speed optimisation score.</p>

                                  <hr />

                                  <div className="flex flex-col gap-3">
                                    <div className="border-2 shadow-sm rounded p-5">
                                      <h4 className="text-xl"> URL 1 - HomePage </h4>
                                      <Link className="text-primary-500 text-m font-bold" href="https://caapiuk.wixstudio.io"> https://caapiuk.wixstudio.io </Link>
                                    </div>
                                    <div className="border-2 shadow-sm rounded p-5">
                                      <h4 className="text-xl"> URL 2 - HomePage </h4>
                                      <Link className="text-primary-500 text-m font-bold" href="https://caapiuk.wixstudio.io/my-site-1/science-and-research-1"> https://caapiuk.wixstudio.io/my-site-1/science-and-research-1 </Link>
                                    </div>
                                    <div className="border-2 shadow-sm rounded p-5">
                                      <h4 className="text-xl"> URL 3 - HomePage </h4>
                                      <Link className="text-primary-500 text-m font-bold" href="https://caapiuk.wixstudio.io/my-site-1/product-page/caapi-banisteriospis-caapi-liquid-extract-30ml"> https://caapiuk.wixstudio.io/my-site-1/product-page/caapi-banisteriospis-caapi-liquid-extract-30ml </Link>
                                    </div>
                                  </div>
                                </CardContent>
                                <CardFooter className="flex justify-end gap-5">
                                  <Button className="p-3 rounded-m"> Boost Speed Now</Button>
                                  <Button className="p-3 rounded-m"> Check Current Speed First</Button>
                                </CardFooter>
                              </Card>
                            </>
                          )}
                          {activeStep === 1 && (
                            <>
                              <div className="flex flex-col gap-3">
                                <p className="text-m"> Add this script code, before closing the <code>&lt;/head&gt;</code> tag in your website header.</p>

                                <div className="flex flex-col border text-red-500 p-3 rounded-xl gap-2">
                                  <p>
                                     &lt;!-- This Script is the exclusive property of Website Speedy, Copyright © 2024. All rights reserved. --&gt;
                                  </p>
                                  <p>
                                    &lt;script type='text/javascript' src="https://websitespeedycdn.b-cdn.net/speedyscripts/ecmrx_6972/ecmrx_6972_1.js"&gt;&lt;/script&gt;
                                  </p>
                                  <p>
                                    &lt;script type='text/javascript' src="https://websitespeedycdn.b-cdn.net/speedyscripts/ecmrx_6972/ecmrx_6972_2.js"&gt;&lt;/script&gt;
                                  </p>
                                  <p>
                                    &lt;script type='text/javascript' src="https://websitespeedycdn.b-cdn.net/speedyscripts/ecmrx_6972/ecmrx_6972_3.js"&gt;&lt;/script&gt;
                                  </p>
                                  <p>
                                    &lt;!-- This Script is the exclusive property of Website Speedy, Copyright © 2024. All rights reserved. --&gt;
                                  </p>
                                </div>

                                <p className="text-m pb-3">Please add the scripts above in the header section of your website as per the instructions below, Please Click the Verification button below once you have added the script.</p>

                                <div className="flex gap-3 justify-end">
                                  <Button className="capitalize">Verify and Go to Step 3</Button>
                                  <Button className="capitalize">Wix Instruction</Button>
                                  <Button className="capitalize">I need Help to Install the Script</Button>
                                </div>
                              </div>
                            </>
                          )}

                          {activeStep === 2 && (
                            <>
                              <div className="flex flex-col gap-3">
                                <div className="">
                                  <h3 className="text-m pb-5">
                                    Congratulations, You have successfully implemented the script for Automatic speed optimisation. our script works instantly, it’s still a good idea to give it 30 seconds to work efficiently, You can analyse updated speed score when the timer reaches 00:00. 
                                  </h3>
                                  <Button> Analyse Updated Speed </Button>
                                </div>

                                <hr />

                                <div className="flex flex-col items-center gap-6 mb-5">
                                  <h3 className="text-2xl font-bold text-center"> Congrats you can see the updated speed score below - </h3>
                                  <Tabs defaultValue="account" className="w-full border-2 rounded-xl overflow-hidden">
                                    <TabsList className="grid w-full grid-cols-2">
                                      <TabsTrigger value="desktop">Desktop</TabsTrigger>
                                      <TabsTrigger value="mobile">Mobile</TabsTrigger>
                                    </TabsList>
                                    <TabsContent value="desktop">

                                      <div className="flex">
                                        <div className="border-green-400 border-2 flex flex-col gap-1 w-1/2 items-center rounded-xl p-3 m-3">
                                          <div className="flex flex-col items-center justify-center">
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

                                        <div className="border-red-400 border-2 flex flex-col gap-1 w-1/2 items-center rounded-xl p-3 m-3">
                                          <div className="flex flex-col items-center justify-center">
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

                                      <div className="flex">
                                        <div className="border-green-400 border-2 flex flex-col gap-1 w-1/2 items-center rounded-xl p-3 m-3">
                                          <div className="flex flex-col items-center justify-center">
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

                                        <div className="border-red-400 border-2 flex flex-col gap-1 w-1/2 items-center rounded-xl p-3 m-3">
                                          <div className="flex flex-col items-center justify-center">
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

                                      <div className="flex">
                                        <div className="border-green-400 border-2 flex flex-col gap-1 w-1/2 items-center rounded-xl p-3 m-3">
                                          <div className="flex flex-col items-center justify-center">
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

                                        <div className="border-red-400 border-2 flex flex-col gap-1 w-1/2 items-center rounded-xl p-3 m-3">
                                          <div className="flex flex-col items-center justify-center">
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

                                    </TabsContent>

                                    <TabsContent value="mobile">

                                      <div className="flex">
                                        <div className="border-green-400 border-2 flex flex-col gap-1 w-1/2 items-center rounded-xl p-3 m-3">
                                          <div className="flex flex-col items-center justify-center">
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

                                        <div className="border-red-400 border-2 flex flex-col gap-1 w-1/2 items-center rounded-xl p-3 m-3">
                                          <div className="flex flex-col items-center justify-center">
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

                                      <div className="flex">
                                        <div className="border-green-400 border-2 flex flex-col gap-1 w-1/2 items-center rounded-xl p-3 m-3">
                                          <div className="flex flex-col items-center justify-center">
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

                                        <div className="border-red-400 border-2 flex flex-col gap-1 w-1/2 items-center rounded-xl p-3 m-3">
                                          <div className="flex flex-col items-center justify-center">
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

                                      <div className="flex">
                                        <div className="border-green-400 border-2 flex flex-col gap-1 w-1/2 items-center rounded-xl p-3 m-3">
                                          <div className="flex flex-col items-center justify-center">
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

                                        <div className="border-red-400 border-2 flex flex-col gap-1 w-1/2 items-center rounded-xl p-3 m-3">
                                          <div className="flex flex-col items-center justify-center">
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

                                    </TabsContent>
                                  </Tabs>
                                </div>

                                <hr className="mb-5" />

                                <h3 className="text-m text-lg font-bold text-primary-500">
                                  Congrats! You have successfully set up Website Speedy.
                                </h3>
                                <p>To verify this data, you can visit <a className="text-primary-400" href="https://pagespeed.web.dev/">https://pagespeed.web.dev/</a>.There may be slight variations due to multiple factors, as explained by Google. Some of the significant factors include: Antivirus software, Browser extensions that inject JavaScript and alter network requests, Network firewalls, Server load, and DNS - Internet traffic routing changes. For more detailed information provided by Google, you can <a className="text-primary-400" href="https://developer.chrome.com/docs/lighthouse/performance/performance-scoring/#fluctuations">click here</a>.</p>

                                <div className="border-2 border-red-400 p-3 rounded-xl flex flex-col gap-5">
                                  <div className="flex gap-5">
                                    <Button> Upgrade Plan </Button>
                                    <Button> Activate Expert Optimization (Go to Step 4) </Button>
                                    <Button> Vibe Check? </Button>
                                  </div>
                                  <div className="flex">
                                    <div className="w-1/2 flex flex-col gap-2">
                                      <p>Your free plan will expire soon. </p>
                                      <p>
                                        <a className="text-primary-400 mr-1" href="./plans" target="_blank">Please update</a>
                                         for uninterrupted service. 
                                      </p>
                                    </div>
                                    <div className="w-1/2 flex flex-col gap-2">
                                      <p>Help more people find us.</p>
                                      <p>Leave a review and shape the future of our app!</p>
                                    </div>
                                  </div>
                                </div>

                              </div>
                            </>
                          )}
                          {activeStep === 3 && (
                            <>
                              <div className="flex flex-col gap-4">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p> Your Ticket is submitted. </p>
                                    <p> Your Ticket Number is - 1166, Our Experts will get in touch with you soon </p>
                                  </div>
                                  <div>
                                    <Button> View Ticket </Button>
                                  </div>
                                </div>

                                <div className="border-2 border-green-400 p-3 rounded-xl flex flex-col gap-5">
                                  <div className="flex gap-5 px-5">
                                    <Button> Request Submitted </Button>
                                    <Button> Access Requested </Button>
                                    <Button> Optimization in Progress </Button>
                                    <Button> Optimization Completed </Button>
                                  </div>
                                </div>

                                <div>
                                  <h3 className="text-lg font-bold py-4"> FAQ's </h3>
                                  <div className="flex flex-col gap-2">
                                    <p className="font-semibold"> 1. What needs to be audited and what kind of optimizations will you make? </p>
                                    <p> While website speedy Automatically improves loading time significantly. However, in some cases, it needs some updates are required depending on your website's platform, structure and code. Here are some samples - </p>
                                    <div className="flex flex-col gap-3 ml-3">
                                      <p className="font-semibold"> a) Adding parameters in code to meet latest performance standards - </p>
                                      <p> The following parameters will be added to your javascript & CSS links, it will be updated by adding the “preload”, “pre-connect” or “dns-prefetch” depending on the requirement. For external scripts such as GTM, Analytics and other we will add “data-src” will be added instead of “src” or “data-href” instead of “href” to help WebsiteSpeedy identify and load the parameters correctly. Below is a before and after look of these codes. </p>
                                      
                                      <div className="gap-0 flex flex-col">
                                        <p className="font-semibold capitalize"> Code before parameters update: </p>
                                        <p className="text-red-400"> &lt;link href="https://fonts.googleapis.com/css2"&gt;</p>
                                        <p className="text-red-400"> &lt;script async src="https://www.googletagmanager.com/gtag/js?id=AW-9289"&gt;&lt;script&gt;</p>
                                        <p className="text-red-400"> &lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font.min.css"&gt;</p>
                                      </div>

                                      <div className="gap-0 flex flex-col">
                                        <p className="font-semibold capitalize"> Code After parameters update: </p>
                                        <p className="text-green-400"> &lt;link rel="preconnect" href="https://fonts.googleapis.com/css2"&gt;</p>
                                        <p className="text-green-400"> &lt;script async data-src="https://www.googletagmanager.com/gtag/js?id=AW-9289"&gt;&lt;script&gt;</p>
                                        <p className="text-green-400"> &lt;link rel="stylesheet" data-href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font.min.css"&gt;</p>
                                      </div>

                                      <p className="font-semibold"> b) Review and update code for specific pages to make sure Specific pages or templates are not loading any scripts or code that is not required in that specific page. </p>
                                      <p> Example if you have a Hero slider on homepage but its scripts are loading on other important pages like product page or request a quote page, that might make it slow. Our team will fix this. </p>

                                      <p className="font-semibold"> c) Optimise any specific images, js or css that is not optimised automatically by our script. </p>

                                      <p className="font-semibold"> d) More optimisations specific to platforms, servers or other 3rd party tool you might be using like google tag manager, outside scripts etc </p>
                                    </div>

                                    <p className="font-semibold"> 2. How much page speed can I expect after these optimizations ? </p>
                                    <p> After completing step 4, you can achieve Google PageSpeed scores of 70 or higher on mobile and 90 or higher on desktop. The exact amount of speed improvement can vary depending on a variety of factors, including the size and complexity of your website, as well as your hosting environment. You can generally expect to see a significant improvement in your Google PageSpeed scores. For more information, click here (<a className="text-primary-400 font-semibold" href="https://websitespeedy.com/speed-guarantee.php"> https://websitespeedy.com/speed-guarantee.php</a>).</p>

                                    <p className="font-semibold"> 3. Will you take a backup? </p>
                                    <p> Yes, we will take a backup of your website. Our team will work on a duplicate theme if your platform allows it and we will connect with you before making changes live. This way, we can ensure that your website is backed up and that any changes we make are approved by you before going live.</p>

                                    <p className="font-semibold"> 4. Does Website Speedy support all platforms for speed optimization? </p>
                                    <p> Website Speedy is compatible with various popular platforms, including major CMS and e-commerce systems. Website Speedy currently does not work for WordPress and woocommerce. For other specific platform inquiries, please contact our support team. </p>
                                  </div>
                                </div>

                              </div>
                            </>
                          )}
                        </div>
                      </form>

                      <div className="flex pt-2 ">
                        <Button
                          size="xs"
                          variant="outline"
                          color="secondary"
                          className={cn("cursor-pointer", {
                            hidden: activeStep === 0,
                          })}
                          onClick={handleBack}
                          sx={{ mr: 1 }}
                        >
                          Back
                        </Button>
                        <div className="flex-1	gap-4 " />
                        <div className="flex	gap-2 ">
                          {activeStep === steps.length - 1 ? (
                            <Button
                              size="xs"
                              variant="outline"
                              color="success"
                              className="cursor-pointer"
                              onClick={() => {
                                if (onSubmit) onSubmit();
                                handleNext();
                              }}
                            >
                              Submit
                            </Button>
                          ) : (
                            <Button
                              size="xs"
                              variant="outline"
                              color="secondary"
                              className="cursor-pointer"
                              onClick={handleNext}
                            >
                              Next
                            </Button>
                          )}
                        </div>
                      </div>
                    </React.Fragment>
                  )}
                </div>
              </div>
              </TabsContent>

              <TabsContent className="p-3" value="password">
                <Card>
                  <CardHeader>
                  </CardHeader>
                  <div className="mt-2">
                    <FormGrid />
                  </div>
                </Card>
              </TabsContent>

            </Tabs>
            
          </div>
          <div className="flex-1 lg:w-1/5 overflow-hidden rounded-2xl border h-fit">
              <h3 className="font-bold bg-primary-400 text-lg py-4 px-4">FAQ's</h3>
              <BasicAccordion />
            </div>
        </div>
      </div>
    </div>
  );
};

export default InvoicePreview;