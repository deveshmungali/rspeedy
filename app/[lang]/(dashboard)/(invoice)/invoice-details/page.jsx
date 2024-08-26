"use client"

import { SiteLogo } from "@/components/svg";
import { BreadcrumbItem, Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
                      <span className="text-base font-medium text-default-600">2024-03-18</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 border border-default-300 rounded-[10px] bg-gray-100">
                <div className="p-5 flex gap-12 border-b border-gray-500 justify-between">
                  <span className="text-base text-m font-semibold text-default-900">#93034</span>
                  <Link className="text-m font-semibold text-default-900"
                        href="mailto:rishabh@makkpress.com">
                          rishabh@makkpress.com
                  </Link>
                </div>
                <div className="p-5 flex gap-12">
                  <div className="w-1/2 flex flex-col gap-3">
                    <div className="flex justify-between">
                      <span className="text-base text-s font-semibold text-default-900">Phone No:</span>
                      <span className="text-base text-s  font-semibold text-primary-900">+91 9313602647</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-base text-s font-semibold text-default-900">Company Role:</span>
                      <span className="text-base text-s font-semibold text-primary-900">owner/Founder</span>
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
                    <div className="flex flex-col">
                      <div className="w-1/2"></div>
                      <div className="w-1/2"></div>
                    </div>
                  </div>
                <div className="flex gap-12">
                  <div className="w-1/2 flex flex-col gap-3">
                    <div className="flex justify-between">
                      <span className="text-base text-s font-semibold text-default-900">Phone No:</span>
                      <span className="text-base text-s  font-semibold text-primary-900">+91 9313602647</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-base text-s font-semibold text-default-900">Company Role:</span>
                      <span className="text-base text-s font-semibold text-primary-900">owner/Founder</span>
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