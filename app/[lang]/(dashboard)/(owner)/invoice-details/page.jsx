"use client"

import { SiteLogo } from "@/components/svg";
import { BreadcrumbItem, Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Icon } from "@iconify/react";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";

const InvoicePreview = () => {
  const columns = [
    {
      id: 1,
      label: "DESCRIPTION"
    },
    {
      id: 2,
      label: "QUANTITY"
    },
    {
      id: 3,
      label: "Rate"
    },
    {
      id: 4,
      label: "Total"
    },
  ]
  const data = [
    {
      id: 1,
      description: "Wireless Gaming Mouse & Keyboard Combo Pack",
      quantity: "3",
      rate: "421",
      amount: "1663.00"
    },
    {
      id: 2,
      description: "Wireless Gaming Mouse & Keyboard Combo Pack",
      quantity: "1",
      rate: "696",
      amount: "696.00"
    },
  ]
  return (
    <div>
      <Breadcrumbs>
        <BreadcrumbItem>Pages</BreadcrumbItem>
        <BreadcrumbItem>Utility</BreadcrumbItem>
        <BreadcrumbItem>Owner Details</BreadcrumbItem>
      </Breadcrumbs>
      <div className="grid grid-cols-12 gap-6 mt-6">
        <div className="col-span-12 ">
          <Card className="rounded-[20px]">
            <CardContent>

              <div className="flex gap-6 flex-col md:flex-row pt-8">
                <div className="flex-1">
                  <Link href="#" className="flex items-center gap-2">
                    <SiteLogo className="w-10 h-10 text-primary mb-2.5" />
                    <span className="text-3xl font-bold text-primary-600">WordpressSpeedy</span>
                  </Link>
                  <div className="mt-12">
                    <span className="mr-12 text-base font-semibold text-default-900">Registration Date:</span>
                    <span className="text-base font-medium text-default-600">August 26, 2024 08:52</span>
                  </div>
                </div>
                <div className="flex-none md:text-end">
                  <div className="text-4xl font-semibold text-default-900">Rishabh Saxena</div>
                  <Link className="mt-1.5 text-xl font-medium text-primary-700 text-default-600 underline"
                        href="mailto:rishabh@makkpress.com">
                          rishabh@makkpress.com
                  </Link>

                  {/* <div className="mt-1.5 text-sm font-medium text-default-600"># 993652</div> */}

                  <div className="mt-8">
                    <div className="mb-2.5">
                    </div>
                    <div>
                      <span className="mr-12 text-base font-semibold text-default-900">Due Date:</span>
                      <span className="text-base font-medium text-default-600">March 18, 2024 10:45</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 border border-default-300 rounded-[10px] bg-gray-100">
                <div className="p-5 flex gap-12 border-b border-gray-500 justify-between">
                  <span className="text-base text-m font-semibold text-default-900 text-primary">#93034</span>
                  <Link className="text-m font-semibold text-default-900 text-primary"
                        href="https://aromaticgardenessence.com">
                          aromaticgardenessence.com
                  </Link>
                </div>
                <div className="p-5 flex gap-12">
                  <div className="w-1/2 flex flex-col gap-3">
                    <div className="flex justify-between">
                      <span className="text-base text-s font-semibold text-default-900">Phone No:</span>
                      <Link className="text-base text-m font-semibold text-default-900 text-primary-900"
                        href="tel: +91 9313602647">
                          +91 9313602647
                      </Link>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-base text-s font-semibold text-default-900">Company Role:</span>
                      <span className="text-base text-s font-semibold text-primary-900">Owner/Founder</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-base text-s font-semibold text-default-900">Website Category:</span>
                      <span className="text-base text-s font-semibold text-primary-900">Non-ecommerce content website</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-base text-s font-semibold text-default-900">Industry Type:</span>
                      <span className="text-base text-s font-semibold text-primary-900">Software_development_company</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-base text-s font-semibold text-default-900">Source:</span>
                      <span className="text-base text-s font-semibold text-primary-900">Google</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-base text-s font-semibold text-default-900">Resend Code:</span>
                      <span className="text-base text-s font-semibold text-primary-900">3</span>
                    </div>
                  </div>
                  <hr/>
                  <div className="w-1/2 flex flex-col gap-3">
                    <div className="flex justify-between">
                      <span className="text-base text-s font-semibold text-default-900">Full Address:</span>
                      <span className="text-base text-s font-semibold text-primary-900 uppercase">vizag</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-base text-s font-semibold text-default-900">City:</span>
                      <span className="text-base text-s font-semibold text-primary-900">visakhapatanam</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-base text-s font-semibold text-default-900">Country:</span>
                      <span className="text-base text-s font-semibold text-primary-900">India</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-base text-s font-semibold text-default-900">ZipCode:</span>
                      <span className="text-base text-s font-semibold text-primary-900">530007</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-base text-s font-semibold text-default-900">Industry:</span>
                      <span className="text-base text-s font-semibold text-primary-900">Business_website</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-base text-s font-semibold text-default-900">Email Status:</span>
                      <span className="text-base text-s font-semibold text-primary-900">Subscribed</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-5 border border-default-300 rounded-[10px] bg-gray-100">
                  <div className="my-6 border border-default-300 rounded-[10px] bg-gray-200">
                    <div className="p-3 flex">
                      <div className="w-1/2 flex flex-col">
                        <span className="flex justify-between w-full"> <b>Current View: </b> 0/100 ( 0% ) </span>
                        <span className="pt-2 flex gap-2 justify-between items-center"> <b>Add More Views:</b>
                          <div className="flex gap-2 ">
                            <input 
                              type="number" 
                              className="ml-4 p-2 border border-gray-300 rounded-md" 
                              placeholder="Enter number of views"
                            />
                            <Button className="h-9"> Add Views </Button>
                          </div>
                        </span>
                        <span> (Don't increment the view count if the goal is only to regenerate the script.) </span>
                      </div>
                      <div className="w-1/2 text-end">
                        <Button className=""> Regenerate Script </Button>
                      </div>
                    </div>
                  </div>

                  <div className="my-6 border border-default-300 rounded-[10px] bg-white">
                    <div className="p-3 flex">
                      <div className="w-1/2 flex flex-col">
                        <span> <b>Website URL:</b> </span>
                        <span className="mt-4"> Platform </span>
                      </div>
                      <div className="w-1/2 text-end flex flex-col">
                        <Link href="https://aromaticgardenessence.com" className="flex justify-end gap-2 ">
                          <span className="font-bold text-primary-600">https://aromaticgardenessence.com</span>
                        </Link>
                        <span className="mt-4"> Wix </span>
                      </div>
                    </div>
                    <hr />
                    <div className="p-3 flex gap-12">
                      <div className="w-1/2 flex flex-col gap-5">
                        <div className="flex justify-between">
                          <span> <b>Desktop Speed Old</b> </span>
                          <span> <b>0/100</b> </span>
                        </div>
                        <div className="flex justify-between">
                          <span> <b>Mobile Speed Old</b> </span>
                          <span> <b>0/100</b> </span>
                        </div>
                      </div>
                      <div className="w-1/2 text-end flex flex-col gap-5">
                        <div className="flex justify-between">
                          <span> <b>Desktop Speed New</b> </span>
                          <span> <b>0/100</b> </span>
                        </div>
                        <div className="flex justify-between">
                          <span> <b>Mobile Speed New</b> </span>
                          <span> <b>0/100</b> </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="my-6 border border-default-300 rounded-[10px] bg-white">
                    <div className="p-3 flex">
                      <div className="w-1/2 flex flex-col">
                        <span> <b>Second Url</b> </span>
                      </div>
                      <div className="w-1/2 text-end flex flex-col">
                        <Link href="https://aromaticgardenessence.com/collections/age-all-products" className="flex justify-end gap-2 ">
                          <span className="font-bold text-primary-600">https://aromaticgardenessence.com/collections/age-all-products</span>
                        </Link>
                      </div>
                    </div>
                    <hr />
                    <div className="p-3 flex gap-12">
                      <div className="w-1/2 flex flex-col gap-5">
                        <div className="flex justify-between">
                          <span> <b>Desktop Speed Old</b> </span>
                          <span> <b>0/100</b> </span>
                        </div>
                        <div className="flex justify-between">
                          <span> <b>Mobile Speed Old</b> </span>
                          <span> <b>0/100</b> </span>
                        </div>
                      </div>
                      <div className="w-1/2 text-end flex flex-col gap-5">
                        <div className="flex justify-between">
                          <span> <b>Desktop Speed New</b> </span>
                          <span> <b>0/100</b> </span>
                        </div>
                        <div className="flex justify-between">
                          <span> <b>Mobile Speed New</b> </span>
                          <span> <b>0/100</b> </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="my-6 border border-default-300 rounded-[10px] bg-white">
                    <div className="p-3 flex">
                      <div className="w-1/2 flex flex-col">
                        <span> <b>Third Url</b> </span>
                      </div>
                      <div className="w-1/2 text-end flex flex-col">
                        <Link href="https://aromaticgardenessence.com/collections/offers" className="flex justify-end gap-2 ">
                          <span className="font-bold text-primary-600">https://aromaticgardenessence.com/collections/offers</span>
                        </Link>
                      </div>
                    </div>
                    <hr />
                    <div className="p-3 flex gap-12">
                      <div className="w-1/2 flex flex-col gap-5">
                        <div className="flex justify-between">
                          <span> <b>Desktop Speed Old</b> </span>
                          <span> <b>0/100</b> </span>
                        </div>
                        <div className="flex justify-between">
                          <span> <b>Mobile Speed Old</b> </span>
                          <span> <b>0/100</b> </span>
                        </div>
                      </div>
                      <div className="w-1/2 text-end flex flex-col gap-5">
                        <div className="flex justify-between">
                          <span> <b>Desktop Speed New</b> </span>
                          <span> <b>0/100</b> </span>
                        </div>
                        <div className="flex justify-between">
                          <span> <b>Mobile Speed New</b> </span>
                          <span> <b>0/100</b> </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="my-6 border border-default-300 rounded-[10px] bg-white">
                    <div className="p-3 flex gap-12">
                      <div className="w-1/2 flex flex-col gap-5">
                        <div className="flex justify-between">
                          <span> <b>Script Installed</b> </span>
                          <span> <b>No</b> </span>
                        </div>
                        <div className="flex justify-between">
                          <span> <b>Plan Name</b> </span>
                          <span> <b>Basic Plan</b> </span>
                        </div>
                        <div className="flex justify-between">
                          <span> <b>Subscription Id</b> </span>
                          <span> <b>4219</b> </span>
                        </div>
                        <div className="flex justify-between">
                          <span> <b>Subscription Status</b> </span>
                          <span> <b>Active</b> </span>
                        </div>
                      </div>
                      <div className="w-1/2 text-end flex flex-col gap-5">
                        <div className="flex justify-between">
                          <span> <b>Plan Id</b> </span>
                          <span> <b>30</b> </span>
                        </div>
                        <div className="flex justify-between">
                          <span> <b>Plan Type</b> </span>
                          <span> <b>Subscription</b> </span>
                        </div>
                        <div className="flex justify-between">
                          <span> <b>Last Update</b> </span>
                          <span> <b>August 27, 2024 05:03</b> </span>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>

            </CardContent>
          </Card>
          <div className="mt-8 flex gap-4 justify-end">
            <Button asChild variant="outline" className="text-xs font-semibold text-primary-500">
              <Link href="#">
                <Download className="w-3.5 h-3.5 ltr:mr-1.5 rtl:ml-1.5" />
                <span>Download PDF</span>
              </Link>
            </Button>
            <Button className="text-xs font-semibold ">
              <Icon icon="heroicons:printer" className="w-5 h-5 ltr:mr-1 rtl:ml-1" /> Print
            </Button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default InvoicePreview;