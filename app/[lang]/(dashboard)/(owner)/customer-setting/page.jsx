"use client"

import { SiteLogo } from "@/components/svg";
import React from "react";
import { Button } from "@/components/ui/button";
import { BreadcrumbItem, Breadcrumbs } from "@/components/ui/breadcrumbs";  

import ColumnSticky from "./invoice/column-sticky";
import TeamSticky from "./teams/column-sticky";
import PaymentSticky from "./payment/column-sticky";
import SubscriptionSticky from "./subscription/column-sticky";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Icon } from "@iconify/react";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import avatar from "@/public/images/avatar/avatar-3.jpg"
import Image from "next/image";


const InvoicePreview = () => {

  return (
    <div>
      <Breadcrumbs>
        <BreadcrumbItem>Pages</BreadcrumbItem>
        <BreadcrumbItem>Website Owners</BreadcrumbItem>
        <BreadcrumbItem> Customer Setting</BreadcrumbItem>
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
        <Tabs defaultValue="subscriptions" className="w-full inline-block flex flex-col justify-center">
          <TabsList className=" border bg-background justify-center">
            
            <TabsTrigger
              className="p-6 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              value="subscriptions"
            >
              <Icon icon="ph:house-line" className="h-5 w-5 mr-2 " /> My Subscriptions
            </TabsTrigger>

            <TabsTrigger
              className="p-6 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              value="account"
            >
              <Icon icon="ph:house-line" className="h-5 w-5  mr-2 " /> My Account
            </TabsTrigger>

            <TabsTrigger
              value="payment"
              className="p-6 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <Icon icon="ph:house-line" className="h-5 w-5  mr-2 " /> Payment Method
            </TabsTrigger>

            <TabsTrigger
              value="teams"
              className="p-6 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <Icon icon="ph:house-line" className="h-5 w-5  mr-2 " /> Teams
            </TabsTrigger>

            <TabsTrigger
              value="security"
              className="p-6 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <Icon icon="ph:house-line" className="h-5 w-5  mr-2 " /> Security
            </TabsTrigger>

            <TabsTrigger
              value="invoices"
              className="p-6 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <Icon icon="ph:house-line" className="h-5 w-5  mr-2 " /> Invoices
            </TabsTrigger>
          </TabsList>

          <TabsContent value="subscriptions">
            <div className="rounded-xl flex flex-col gap-4">
              <h3 className="bg-background p-4 text-center text-xl font-bold"> Your Payment Subscriptions </h3>

              <div className="flex gap-6">
                <div className="w-1/5 rounded-xl bg-background p-4">
                  <Card>
                    <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                      <div className="w-[124px] h-[124px] relative rounded-full">
                        <Image src={avatar} alt="avatar" className="w-full h-full object-cover rounded-full" />
                        <Button asChild
                          size="icon"
                          className="h-8 w-8 rounded-full cursor-pointer absolute bottom-0 right-0"
                        >
                          <Label
                            htmlFor="avatar"
                          >
                            <Icon className="w-5 h-5 text-primary-foreground" icon="heroicons:pencil-square" />
                          </Label>
                        </Button>
                        <Input type="file" className="hidden" id="avatar" />
                      </div>
                      <div className="mt-4 text-xl font-semibold text-default-900">Rishabh Saxena</div>
                      <div className="mt-1.5 text-sm font-medium text-default-500">Full Stack Developer</div>
                    </CardContent>
                  </Card>
                </div>

                <div className="w-4/5 rounded-xl bg-background p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-bold">  </h3>
                    <Button> Add New Website </Button>
                  </div>
                  <hr className="mt-2 mb-4" />

                  <SubscriptionSticky />
                </div>

              </div>
            </div>
          </TabsContent>

          <TabsContent value="account">
            <div className="rounded-xl flex flex-col gap-4">
              <h3 className="bg-background p-4 text-center text-xl font-bold"> Edit Profile </h3>

              <div className="flex gap-6">
                <div className="w-1/5 rounded-xl bg-background p-4">
                  <Card>
                    <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                      <div className="w-[124px] h-[124px] relative rounded-full">
                        <Image src={avatar} alt="avatar" className="w-full h-full object-cover rounded-full" />
                        <Button asChild
                          size="icon"
                          className="h-8 w-8 rounded-full cursor-pointer absolute bottom-0 right-0"
                        >
                          <Label
                            htmlFor="avatar"
                          >
                            <Icon className="w-5 h-5 text-primary-foreground" icon="heroicons:pencil-square" />
                          </Label>
                        </Button>
                        <Input type="file" className="hidden" id="avatar" />
                      </div>
                      <div className="mt-4 text-xl font-semibold text-default-900">Rishabh Saxena</div>
                      <div className="mt-1.5 text-sm font-medium text-default-500">Full Stack Developer</div>
                    </CardContent>
                  </Card>
                </div>
                <div className="w-4/5 rounded-xl bg-background p-4">
                  <form action="" method="post" className="flex flex-col gap-3">
                    <div className="flex gap-3">
                      <div className="w-1/2">
                        <h4> First Name </h4>
                        <Input
                          placeholder="First Name"
                          type="text"
                        ></Input>
                      </div>
                      <div className="w-1/2">
                        <h4> Last Name </h4>
                        <Input
                          placeholder="Last Name"
                          type="text"
                        ></Input>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="w-1/2">
                        <h4> Email </h4>
                        <Input
                          placeholder="Enter Your Email Address"
                          value= "rishabhsaxena042@gmail.com"
                          type="email"
                        ></Input>
                      </div>
                      <div className="w-1/2">
                        <h4> Phone Number </h4>
                        <Input
                          placeholder="Phone Number"
                          type="number"
                        ></Input>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="w-1/2">
                        <h4> Address Line 1 </h4>
                        <Input
                          placeholder="Enter Your Address"
                          type="text"
                        ></Input>
                      </div>
                      <div className="w-1/2">
                        <h4> Address Line 2 </h4>
                        <Input
                          placeholder=""
                          type="text"
                        ></Input>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="w-1/3">
                        <h4> Country </h4>
                        <Input
                          placeholder="Enter Your Country"
                          type="text"
                        ></Input>
                      </div>
                      <div className="w-1/3">
                        <h4> City </h4>
                        <Input
                          placeholder="Enter Your City"
                          type="text"
                        ></Input>
                      </div>
                      <div className="w-1/3">
                        <h4> Zip Code </h4>
                        <Input
                          placeholder=" Enter Your ZipCode"
                          type="number"
                          maxLength="10"
                        ></Input>
                      </div>
                    </div>

                    <div className="flex gap-3 justify-end mt-4">
                      <Button className="rounded"> Save Changes </Button>
                      <Button className="rounded" variant="outline"> Contact Us </Button>
                      <Button className="rounded" color="destructive"> Delete Your Account  </Button>
                    </div>
                  </form>
                </div>
              </div>

            </div>
          </TabsContent>

          <TabsContent value="payment">
            <div className="rounded-xl flex flex-col gap-4">
              <h3 className="bg-background p-4 text-center text-xl font-bold"> Manage Payment </h3>

              <div className="flex gap-6">
                <div className="w-1/5 rounded-xl bg-background p-4">
                  <Card>
                    <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                      <div className="w-[124px] h-[124px] relative rounded-full">
                        <Image src={avatar} alt="avatar" className="w-full h-full object-cover rounded-full" />
                        <Button asChild
                          size="icon"
                          className="h-8 w-8 rounded-full cursor-pointer absolute bottom-0 right-0"
                        >
                          <Label
                            htmlFor="avatar"
                          >
                            <Icon className="w-5 h-5 text-primary-foreground" icon="heroicons:pencil-square" />
                          </Label>
                        </Button>
                        <Input type="file" className="hidden" id="avatar" />
                      </div>
                      <div className="mt-4 text-xl font-semibold text-default-900">Rishabh Saxena</div>
                      <div className="mt-1.5 text-sm font-medium text-default-500">Full Stack Developer</div>
                    </CardContent>
                  </Card>
                </div>

                <div className="w-4/5 rounded-xl bg-background p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-bold"> 2024 </h3>
                    <Button> Add Member </Button>
                  </div>
                  <hr className="mt-2 mb-4" />

                  <PaymentSticky />
                </div>

              </div>
            </div>
          </TabsContent>

          <TabsContent value="teams">
            <div className="rounded-xl flex flex-col gap-4">
              <h3 className="bg-background p-4 text-center text-xl font-bold"> Add Members To Your Team </h3>

              <div className="flex gap-6">
                <div className="w-1/5 rounded-xl bg-background p-4">
                  <Card>
                    <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                      <div className="w-[124px] h-[124px] relative rounded-full">
                        <Image src={avatar} alt="avatar" className="w-full h-full object-cover rounded-full" />
                        <Button asChild
                          size="icon"
                          className="h-8 w-8 rounded-full cursor-pointer absolute bottom-0 right-0"
                        >
                          <Label
                            htmlFor="avatar"
                          >
                            <Icon className="w-5 h-5 text-primary-foreground" icon="heroicons:pencil-square" />
                          </Label>
                        </Button>
                        <Input type="file" className="hidden" id="avatar" />
                      </div>
                      <div className="mt-4 text-xl font-semibold text-default-900">Rishabh Saxena</div>
                      <div className="mt-1.5 text-sm font-medium text-default-500">Full Stack Developer</div>
                    </CardContent>
                  </Card>
                </div>

                <div className="w-4/5 rounded-xl bg-background p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-bold">  </h3>
                    <Button> Add Member </Button>
                  </div>
                  <hr className="mt-2 mb-4" />

                  <TeamSticky />
                </div>

              </div>
            </div>
          </TabsContent>

          <TabsContent value="security">
            <div className="rounded-xl flex flex-col gap-4">
              <h3 className="bg-background p-4 text-center text-xl font-bold"> Change Password </h3>

              <div className="flex gap-6">
                <div className="w-1/5 rounded-xl bg-background p-4">
                  <Card>
                    <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                      <div className="w-[124px] h-[124px] relative rounded-full">
                        <Image src={avatar} alt="avatar" className="w-full h-full object-cover rounded-full" />
                        <Button asChild
                          size="icon"
                          className="h-8 w-8 rounded-full cursor-pointer absolute bottom-0 right-0"
                        >
                          <Label
                            htmlFor="avatar"
                          >
                            <Icon className="w-5 h-5 text-primary-foreground" icon="heroicons:pencil-square" />
                          </Label>
                        </Button>
                        <Input type="file" className="hidden" id="avatar" />
                      </div>
                      <div className="mt-4 text-xl font-semibold text-default-900">Rishabh Saxena</div>
                      <div className="mt-1.5 text-sm font-medium text-default-500">Full Stack Developer</div>
                    </CardContent>
                  </Card>
                </div>
                <div className="w-4/5 rounded-xl bg-background p-4">
                  <form action="" method="post" className="flex flex-col gap-3 justify-center h-full">
                    <div className="flex flex-col gap-3">
                      <div className="w-full">
                        <h4> New Password </h4>
                        <Input
                          placeholder="New Password"
                          type="text"
                        ></Input>
                      </div>
                      <div className="w-full">
                        <h4> Confirm Password </h4>
                        <Input
                          placeholder="Confirm Password"
                          type="text"
                        ></Input>
                      </div>
                    </div>

                    <div className="flex gap-3 justify-end mt-4">
                      <Button className="rounded"> Change Password </Button>
                      <Button className="rounded" color="destructive"> Delete Your Account  </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="invoices">
            <div className="rounded-xl flex flex-col gap-4">
              <h3 className="bg-background p-4 text-center text-xl font-bold"> Download Your Invoices </h3>

              <div className="flex gap-6">
                <div className="w-1/5 rounded-xl bg-background p-4">
                  <Card>
                    <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                      <div className="w-[124px] h-[124px] relative rounded-full">
                        <Image src={avatar} alt="avatar" className="w-full h-full object-cover rounded-full" />
                        <Button asChild
                          size="icon"
                          className="h-8 w-8 rounded-full cursor-pointer absolute bottom-0 right-0"
                        >
                          <Label
                            htmlFor="avatar"
                          >
                            <Icon className="w-5 h-5 text-primary-foreground" icon="heroicons:pencil-square" />
                          </Label>
                        </Button>
                        <Input type="file" className="hidden" id="avatar" />
                      </div>
                      <div className="mt-4 text-xl font-semibold text-default-900">Rishabh Saxena</div>
                      <div className="mt-1.5 text-sm font-medium text-default-500">Full Stack Developer</div>
                    </CardContent>
                  </Card>
                </div>

                <div className="w-4/5 rounded-xl bg-background p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-bold"> 2024 </h3>
                    <Button> Download CSV </Button>
                  </div>
                  <hr className="mt-2 mb-4" />

                  <ColumnSticky />
                </div>

              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default InvoicePreview;