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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import BasicTabs from "./basic-tabs";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Icon } from "@iconify/react";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import BasicWizard from "./basic-wizard"; // Import BasicWizard
import FormGrid from "./form-grid";
import BasicAccordion from "./basic-accordion";

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
            <Tabs defaultValue="account" className="flex w-full flex-col">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="account">Self Installation</TabsTrigger>
                <TabsTrigger value="password">Request Installation By The Website Speedy Team</TabsTrigger>
              </TabsList>
              <TabsContent value="account">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg py-3" >Please follow the Steps Below to improve your website Speed Score -</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {/* Insert BasicWizard here */}
                    <div className="mt-8">
                      <BasicWizard />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" defaultValue="Pedro Duarte" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="username">Username</Label>
                      <Input id="username" defaultValue="@peduarte" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Save changes</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="password">
                <Card>
                  <CardHeader>
                  </CardHeader>
                  <div className="mt-8 px-5">
                    <FormGrid />
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
            
          </div>
          <div className="flex-1 lg:w-1/3 overflow-hidden rounded-2xl border">
              <h3 className="font-bold bg-indigo-200 text-lg py-4 px-4">FAQ's</h3>
              <BasicAccordion />
            </div>
        </div>
      </div>
    </div>
  );
};

export default InvoicePreview;