"use client"

import { SiteLogo } from "@/components/svg";
import { BreadcrumbItem, Breadcrumbs } from "@/components/ui/breadcrumbs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import React from "react";
import { Stepper, Step, StepLabel } from "@/components/ui/steps";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

import FormGrid from "./form-grid";
import BasicAccordion from "./basic-accordion";

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
          <div className="w-2/3">
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
                      <div className="mt-2 mb-2 font-semibold text-center">
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
                              
                            </>
                          )}
                          {activeStep === 3 && (
                            <>
                              
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
          <div className="flex-1 lg:w-1/3 overflow-hidden rounded-2xl border min-h-fit">
              <h3 className="font-bold bg-primary-400 text-lg py-4 px-4">FAQ's</h3>
              <BasicAccordion />
            </div>
        </div>
      </div>
    </div>
  );
};

export default InvoicePreview;