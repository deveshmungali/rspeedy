"use client"

import { SiteLogo } from "@/components/svg";
import React from "react";
import { Button } from "@/components/ui/button";
import { BreadcrumbItem, Breadcrumbs } from "@/components/ui/breadcrumbs";  
import Link from "next/link";

import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from '@/components/ui/textarea';


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
          <div className="flex gap-3 w-full">
            <div className="w-1/3 bg-white rounded-xl p-3">
              <Link href="www.peoniesandpetalsskincare.com" class="block text-primary-800 text-lg font-semibold mb-3"> www.peoniesandpetalsskincare.com </Link>
              <hr />
              <div className="flex flex-col gap-3 mt-3">
                <div className="flex justify-between">
                  <p className="capitalize text-lg font-semibold"> Platform </p>
                  <p className="capitalize text-lg"> Wix </p>
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
              <div className="flex justify-center gap-3 mt-3">
                <Button> View Details </Button>
                <Button> Edit Website </Button>
              </div>
            </div>

            <div className="w-1/3 bg-white rounded-xl p-3">
              <Link href="www.peoniesandpetalsskincare.com" class="block text-primary-800 text-lg font-semibold mb-3"> www.peoniesandpetalsskincare.com </Link>
              <hr />
              <div className="flex flex-col gap-3 mt-3">
                <div className="flex justify-between">
                  <p className="capitalize text-lg font-semibold"> Platform </p>
                  <p className="capitalize text-lg"> Wix </p>
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
              <div className="flex justify-center gap-3 mt-3">
                <Button> View Details </Button>
                <Button> Edit Website </Button>
              </div>
            </div>

            <div className="w-1/3 bg-white rounded-xl p-3">
              <div className="flex flex-col justify-center items-center w-full h-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 24 24" fill="none">
                  <path d="M12 11V14M12 14V17M12 14H15M12 14H9M6 7H18M8 5H16M6 9H18C19.1046 9 20 9.89543 20 11V17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17V11C4 9.89543 4.89543 9 6 9Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <Sheet>
                  <SheetTrigger asChild>
                    <Button color="primary-500"className="text-lg font-semibold text-primary-500">
                      Add New Website
                    </Button>
                  </SheetTrigger>
                  <SheetContent className="max-w-[736px]">
                    <SheetHeader>
                      <SheetTitle> Add Your New Website Through Here </SheetTitle>
                    </SheetHeader>
                    <div className="flex flex-col justify-between" style={{ height: "calc(100vh - 80px)" }}>
                      <div className="py-5">
                        <hr />
                        {/* form */}
                        <div className="flex flex-col gap-6 mt-6 space-y-6 md:space-y-0">
                          <div className="flex flex-col gap-3">
                            <h3 className="text-lg w-full font-semibold text-primary-500"> What is your website Platforms? </h3>
                            <RadioGroup defaultValue="shopify" >
                            <div className="flex flex-wrap gap-y-3 w-full">
                              <div className="w-1/3">
                                <RadioGroupItem value="shopify" id="r_1" color="default"> Shopify </RadioGroupItem>                            
                              </div>
                              <div className="w-1/3">
                                <RadioGroupItem value="bigcommerce" id="r_1" color="default"> Bigcommerce </RadioGroupItem>                            
                              </div>
                              <div className="w-1/3">
                                <RadioGroupItem value="wix" id="r_1" color="default"> Wix </RadioGroupItem>                            
                              </div>
                              <div className="w-1/3">
                                <RadioGroupItem value="squareSpace" id="r_1" color="default"> SquareSpace </RadioGroupItem>                            
                              </div>
                              <div className="w-1/3">
                                <RadioGroupItem value="shift4shop" id="r_1" color="default"> Shift4Shop </RadioGroupItem>                            
                              </div>
                              <div className="w-1/3">
                                <RadioGroupItem value="clickfunnels" id="r_1" color="default"> Clickfunnels </RadioGroupItem>                            
                              </div>
                              <div className="w-1/3">
                                <RadioGroupItem value="webflow" id="r_1" color="default"> Webflow </RadioGroupItem>                            
                              </div>
                              <div className="w-1/3">
                                <RadioGroupItem value="wordpress" id="r_1" color="default"> Wordpress </RadioGroupItem>                            
                              </div>
                              <div className="w-1/3">
                                <RadioGroupItem value="saas platform" id="r_1" color="default"> Saas Platform </RadioGroupItem>                            
                              </div>
                              <div className="w-1/3">
                                <RadioGroupItem value="custom_website" id="r_1" color="default"> Custom Website </RadioGroupItem>                            
                              </div>
                              <div className="w-1/3">
                                <RadioGroupItem value="other" id="r_1" color="default"> Other </RadioGroupItem>                            
                              </div>
                            </div>
                            </RadioGroup>
                          </div>

                          <div className="flex flex-col gap-3">
                            <h3 className="text-lg w-full font-semibold text-primary-500"> Add Website Name </h3>
                            <Input 
                              placeholder="Website Name"
                              type="text"></Input>
                          </div>

                          <div className="flex flex-col gap-3">
                            <h3 className="text-lg w-full font-semibold text-primary-500"> Add Website URL </h3>
                            <Input 
                              placeholder="https://abc.com"
                              type="url"></Input>
                            <p className="text-xs font-semibold">(eg. https://abc.com , http://xyz.com)</p>
                          </div>

                          <div className="flex flex-col gap-3">
                            <h3 className="text-lg w-full font-semibold text-primary-500"> Add shopify admin domain URL </h3>
                            <Input 
                              placeholder="https://admin.shopify.com/store/abc"
                              type="url"></Input>
                              <p className="text-xs font-semibold">(eg. https://admin.shopify.com/store/abc , https://abc.myshopify.com )</p>
                          </div>

                        </div>
                      </div>
                      <div className="space-x-4 rtl:space-x-reverse flex justify-center">
                        <Button variant="outline" size="xs">Cancel</Button>
                        <Button size="xs" color="primary">Submit</Button>
                      </div>
                    </div>

                    <SheetFooter>
                      <SheetClose asChild>footer content</SheetClose>
                    </SheetFooter>
                  </SheetContent>
                </Sheet>
              </div>



            </div>

          </div>
      </div>
    </div>
  );
};

export default InvoicePreview;