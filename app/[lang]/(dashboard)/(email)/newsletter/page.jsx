"use client"

import { SiteLogo } from "@/components/svg";
import React from "react";
import { Button } from "@/components/ui/button";
import { BreadcrumbItem, Breadcrumbs } from "@/components/ui/breadcrumbs";
import InputGroupsButton from "./input-groups-button";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { useState } from "react";

import rd1 from "@/public/images/all-img/rd-1.jpg";
import rd2 from "@/public/images/all-img/rd-2.png";
import rd3 from "@/public/images/all-img/rd-3.png";
import rd4 from "@/public/images/all-img/rd-4.png";
import rd5 from "@/public/images/all-img/rd-5.png";
import rd6 from "@/public/images/all-img/rd-6.png";
import Image from "next/image";


const Newsletter = () => {
  const [selected, setSelected] = useState("rdc_1");
  const handleValueChange = value => setSelected(value)

  return (
    <div>
      <Breadcrumbs>
        <BreadcrumbItem>Email</BreadcrumbItem>
        <BreadcrumbItem>Newsletter Template</BreadcrumbItem>
      </Breadcrumbs>

      <h2 className="flex justify-center mt-5 text-2xl font-bold"> Newsletter Template </h2>

      <div className="flex bg-background flex-col gap-4 w-full mt-3 p-5 rounded-xl">
        <div className="flex justify-between w-full items-center">
          <div>
            <InputGroupsButton />
          </div>
          <div>
            <Button> Create Template </Button>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-3">          
          <div className="flex flex-col py-3 gap-2 w-full bg-primary-100 border-primary-500 border-t-4 rounded-xl">
            <h4 className="text-md p-2 w-full font-semibold text-center"> Welcome </h4>
            <hr className="w-full" />

            <div className="flex flex-col gap-3">
              <RadioGroup
                defaultValue="rdc_1"
                onValueChange={handleValueChange}
                className="mx-2"
              >
              <div className="border-2 rounded-xl border-transparent hover:border-primary-400">
                <div className="bg-background rounded-xl">
                  <h4 className="text-sm font-semibold text-center pt-4"> Advance </h4>
                  <Label htmlFor="rdc_1">
                    <div className={cn("flex flex-col justify-center items-center rounded-md py-2 relative ", { "": selected === "rdc_1" })}>
                      <RadioGroupItem value="rdc_1" id="rdc_1" className={cn("absolute -top-8 right-3 opacity-0 invisible", {
                        "visible opacity-100": selected === "rdc_1"
                      })}> </RadioGroupItem>

                      <div>
                        <div className="h-auto w-full mb-2">
                          <Image src={rd1} className="w-full h-full object-cover rounded-t-sm" alt="" />
                        </div>
                        <div className="p-2">
                          <h4 className="text-sm font-semibold text-default-500">This is a banana. Banana is yellow</h4>
                          <p className="mt-2 text-xs text-default-500">A banana is a curved, yellow fruit with a thick skin and soft sweet flesh.</p>
                        </div>
                      </div>

                      <div className="flex gap-5 justify-between mx-3">
                        <Button variant="outline"> View </Button>
                        <Button> Send </Button>
                      </div>
                      
                    </div>
                  </Label>
                </div>
              </div>


              <div className="border-2 rounded-xl border-transparent hover:border-primary-400">
                <div className="bg-background rounded-xl">
                  <h4 className="text-sm font-semibold text-center pt-4"> Basic </h4>
                  <Label htmlFor="rdc_2">
                    <div className={cn("flex flex-col justify-center items-center rounded-md py-2 relative ", { "": selected === "rdc_2" })}>
                      <RadioGroupItem value="rdc_2" id="rdc_2" className={cn("absolute -top-8 right-3 opacity-0 invisible", {
                        "visible opacity-100": selected === "rdc_2"
                      })}> </RadioGroupItem>

                      <div>
                        <div className="h-auto w-full mb-2">
                          <Image src={rd2} className="w-full h-full object-cover rounded-t-sm" alt="" />
                        </div>
                        <div className="p-2">
                          <h4 className="text-sm font-semibold text-default-500">This is a banana. Banana is yellow</h4>
                          <p className="mt-2 text-xs text-default-500">A banana is a curved, yellow fruit with a thick skin and soft sweet flesh.</p>
                        </div>
                      </div>

                      <div className="flex gap-5 justify-between mx-3">
                        <Button variant="outline"> View </Button>
                        <Button> Send </Button>
                      </div>
                      
                    </div>
                  </Label>
                </div>
              </div>

              </RadioGroup>
            </div>

          </div>

          <div className="flex flex-col py-3 gap-2 w-full bg-primary-100 border-primary-500 border-t-4 rounded-xl">
            <h4 className="text-md p-2 w-full font-semibold text-center"> Agency </h4>
            <hr className="w-full" />

            <div className="flex flex-col gap-3">
              <RadioGroup
                defaultValue="rdc_3"
                onValueChange={handleValueChange}
                className="mx-2"
              >
              <div className="border-2 rounded-xl border-transparent hover:border-primary-400">
                <div className="bg-background rounded-xl">
                  <h4 className="text-sm font-semibold text-center pt-4"> Shop </h4>
                  <Label htmlFor="rdc_3">
                    <div className={cn("flex flex-col justify-center items-center rounded-md py-2 relative ", { "": selected === "rdc_3" })}>
                      <RadioGroupItem value="rdc_3" id="rdc_3" className={cn("absolute -top-8 right-3 opacity-0 invisible", {
                        "visible opacity-100": selected === "rdc_3"
                      })}> </RadioGroupItem>

                      <div>
                        <div className="h-auto w-full mb-2">
                          <Image src={rd3} className="w-full h-full object-cover rounded-t-sm" alt="" />
                        </div>
                        <div className="p-2">
                          <h4 className="text-sm font-semibold text-default-500">This is a banana. Banana is yellow</h4>
                          <p className="mt-2 text-xs text-default-500">A banana is a curved, yellow fruit with a thick skin and soft sweet flesh.</p>
                        </div>
                      </div>

                      <div className="flex gap-5 justify-between mx-3">
                        <Button variant="outline"> View </Button>
                        <Button> Send </Button>
                      </div>
                      
                    </div>
                  </Label>
                </div>
              </div>

              <div className="border-2 rounded-xl border-transparent hover:border-primary-400">
                <div className="bg-background rounded-xl">
                  <h4 className="text-sm font-semibold text-center pt-4"> Shopping Cart </h4>
                  <Label htmlFor="rdc_4">
                    <div className={cn("flex flex-col justify-center items-center rounded-md py-2 relative ", { "": selected === "rdc_4" })}>
                      <RadioGroupItem value="rdc_4" id="rdc_4" className={cn("absolute -top-8 right-3 opacity-0 invisible", {
                        "visible opacity-100": selected === "rdc_4"
                      })}> </RadioGroupItem>

                      <div>
                        <div className="h-auto w-full mb-2">
                          <Image src={rd1} className="w-full h-full object-cover rounded-t-sm" alt="" />
                        </div>
                        <div className="p-2">
                          <h4 className="text-sm font-semibold text-default-500">This is a banana. Banana is yellow</h4>
                          <p className="mt-2 text-xs text-default-500">A banana is a curved, yellow fruit with a thick skin and soft sweet flesh.</p>
                        </div>
                      </div>

                      <div className="flex gap-5 justify-between mx-3">
                        <Button variant="outline"> View </Button>
                        <Button> Send </Button>
                      </div>
                      
                    </div>
                  </Label>
                </div>
              </div>

              </RadioGroup>
            </div>

          </div>

          <div className="flex flex-col py-3 gap-2 w-full bg-primary-100 border-primary-500 border-t-4 rounded-xl">
            <h4 className="text-md p-2 w-full font-semibold text-center"> Corporate </h4>
            <hr className="w-full" />

            <div className="flex flex-col gap-3">
              <RadioGroup
                defaultValue="rdc_1"
                onValueChange={handleValueChange}
                className="mx-2"
              >
              <div className="border-2 rounded-xl border-transparent hover:border-primary-400">
                <div className="bg-background rounded-xl">
                  <h4 className="text-sm font-semibold text-center pt-4"> Advance </h4>
                  <Label htmlFor="rdc_1">
                    <div className={cn("flex flex-col justify-center items-center rounded-md py-2 relative ", { "": selected === "rdc_1" })}>
                      <RadioGroupItem value="rdc_1" id="rdc_1" className={cn("absolute -top-8 right-3 opacity-0 invisible", {
                        "visible opacity-100": selected === "rdc_1"
                      })}> </RadioGroupItem>

                      <div>
                        <div className="h-auto w-full mb-2">
                          <Image src={rd1} className="w-full h-full object-cover rounded-t-sm" alt="" />
                        </div>
                        <div className="p-2">
                          <h4 className="text-sm font-semibold text-default-500">This is a banana. Banana is yellow</h4>
                          <p className="mt-2 text-xs text-default-500">A banana is a curved, yellow fruit with a thick skin and soft sweet flesh.</p>
                        </div>
                      </div>

                      <div className="flex gap-5 justify-between mx-3">
                        <Button variant="outline"> View </Button>
                        <Button> Send </Button>
                      </div>
                      
                    </div>
                  </Label>
                </div>
              </div>

              </RadioGroup>
            </div>

          </div>

          <div className="flex flex-col py-3 gap-2 w-full bg-primary-100 border-primary-500 border-t-4 rounded-xl">
            <h4 className="text-md p-2 w-full font-semibold text-center"> Blog </h4>
            <hr className="w-full" />

            <div className="flex flex-col gap-3">
              <RadioGroup
                defaultValue="rdc_1"
                onValueChange={handleValueChange}
                className="mx-2"
              >
              <div className="border-2 rounded-xl border-transparent hover:border-primary-400">
                <div className="bg-background rounded-xl">
                  <h4 className="text-sm font-semibold text-center pt-4"> Advance </h4>
                  <Label htmlFor="rdc_1">
                    <div className={cn("flex flex-col justify-center items-center rounded-md py-2 relative ", { "": selected === "rdc_1" })}>
                      <RadioGroupItem value="rdc_1" id="rdc_1" className={cn("absolute -top-8 right-3 opacity-0 invisible", {
                        "visible opacity-100": selected === "rdc_1"
                      })}> </RadioGroupItem>

                      <div>
                        <div className="h-auto w-full mb-2">
                          <Image src={rd1} className="w-full h-full object-cover rounded-t-sm" alt="" />
                        </div>
                        <div className="p-2">
                          <h4 className="text-sm font-semibold text-default-500">This is a banana. Banana is yellow</h4>
                          <p className="mt-2 text-xs text-default-500">A banana is a curved, yellow fruit with a thick skin and soft sweet flesh.</p>
                        </div>
                      </div>

                      <div className="flex gap-5 justify-between mx-3">
                        <Button variant="outline"> View </Button>
                        <Button> Send </Button>
                      </div>
                      
                    </div>
                  </Label>
                </div>
              </div>


              <div className="border-2 rounded-xl border-transparent hover:border-primary-400">
                <div className="bg-background rounded-xl">
                  <h4 className="text-sm font-semibold text-center pt-4"> Basic </h4>
                  <Label htmlFor="rdc_2">
                    <div className={cn("flex flex-col justify-center items-center rounded-md py-2 relative ", { "": selected === "rdc_2" })}>
                      <RadioGroupItem value="rdc_2" id="rdc_2" className={cn("absolute -top-8 right-3 opacity-0 invisible", {
                        "visible opacity-100": selected === "rdc_2"
                      })}> </RadioGroupItem>

                      <div>
                        <div className="h-auto w-full mb-2">
                          <Image src={rd2} className="w-full h-full object-cover rounded-t-sm" alt="" />
                        </div>
                        <div className="p-2">
                          <h4 className="text-sm font-semibold text-default-500">This is a banana. Banana is yellow</h4>
                          <p className="mt-2 text-xs text-default-500">A banana is a curved, yellow fruit with a thick skin and soft sweet flesh.</p>
                        </div>
                      </div>

                      <div className="flex gap-5 justify-between mx-3">
                        <Button variant="outline"> View </Button>
                        <Button> Send </Button>
                      </div>
                      
                    </div>
                  </Label>
                </div>
              </div>

              </RadioGroup>
            </div>

          </div>

          <div className="flex flex-col py-3 gap-2 w-full bg-primary-100 border-primary-500 border-t-4 rounded-xl">
            <h4 className="text-md p-2 w-full font-semibold text-center"> Photography </h4>
            <hr className="w-full" />

            <div className="flex flex-col gap-3">
              <RadioGroup
                defaultValue="rdc_1"
                onValueChange={handleValueChange}
                className="mx-2"
              >
              <div className="border-2 rounded-xl border-transparent hover:border-primary-400">
                <div className="bg-background rounded-xl">
                  <h4 className="text-sm font-semibold text-center pt-4"> Advance </h4>
                  <Label htmlFor="rdc_1">
                    <div className={cn("flex flex-col justify-center items-center rounded-md py-2 relative ", { "": selected === "rdc_1" })}>
                      <RadioGroupItem value="rdc_1" id="rdc_1" className={cn("absolute -top-8 right-3 opacity-0 invisible", {
                        "visible opacity-100": selected === "rdc_1"
                      })}> </RadioGroupItem>

                      <div>
                        <div className="h-auto w-full mb-2">
                          <Image src={rd1} className="w-full h-full object-cover rounded-t-sm" alt="" />
                        </div>
                        <div className="p-2">
                          <h4 className="text-sm font-semibold text-default-500">This is a banana. Banana is yellow</h4>
                          <p className="mt-2 text-xs text-default-500">A banana is a curved, yellow fruit with a thick skin and soft sweet flesh.</p>
                        </div>
                      </div>

                      <div className="flex gap-5 justify-between mx-3">
                        <Button variant="outline"> View </Button>
                        <Button> Send </Button>
                      </div>
                      
                    </div>
                  </Label>
                </div>
              </div>


              <div className="border-2 rounded-xl border-transparent hover:border-primary-400">
                <div className="bg-background rounded-xl">
                  <h4 className="text-sm font-semibold text-center pt-4"> Basic </h4>
                  <Label htmlFor="rdc_2">
                    <div className={cn("flex flex-col justify-center items-center rounded-md py-2 relative ", { "": selected === "rdc_2" })}>
                      <RadioGroupItem value="rdc_2" id="rdc_2" className={cn("absolute -top-8 right-3 opacity-0 invisible", {
                        "visible opacity-100": selected === "rdc_2"
                      })}> </RadioGroupItem>

                      <div>
                        <div className="h-auto w-full mb-2">
                          <Image src={rd2} className="w-full h-full object-cover rounded-t-sm" alt="" />
                        </div>
                        <div className="p-2">
                          <h4 className="text-sm font-semibold text-default-500">This is a banana. Banana is yellow</h4>
                          <p className="mt-2 text-xs text-default-500">A banana is a curved, yellow fruit with a thick skin and soft sweet flesh.</p>
                        </div>
                      </div>

                      <div className="flex gap-5 justify-between mx-3">
                        <Button variant="outline"> View </Button>
                        <Button> Send </Button>
                      </div>
                      
                    </div>
                  </Label>
                </div>
              </div>

              </RadioGroup>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;