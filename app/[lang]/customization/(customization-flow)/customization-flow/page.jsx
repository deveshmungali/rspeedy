"use client"
import Image from "next/image";
import lightImage from "@/public/images/error/light-401.png"
import darkImage from "@/public/images/error/dark-401.png"
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import {
    Stepper,
    Step,
    StepLabel,
    // StepDescription,
  } from "@/components/ui/steps";
import { useTheme } from "next-themes";
const CustomizationPage = () => {
  const { theme } = useTheme();
  const steps = ["First Step", "Second Step"];
  return (
    <div className='min-h-screen  overflow-y-auto flex justify-center items-center p-5'>
      <div className='w-full flex flex-col items-center'>
       <div className="customization-title text-center mb-2">
        <p className="maiTitle text-2xl md:text-3xl lg:text-4xl font-semibold text-default-900">Let's Speed Up Your Website</p>
        <p className="subTitle text-base md:text-lg lg:text-xl font-semibold text-default-700">
            Let WebsiteSpeedy Understand Your Requirements For Tailored Results!
        </p>
       </div>
       <div className="customization-steps bg-white mt-5 w-[800px] pt-[20px] pb-[20px] rounded-xl">
       <div className="max-w-[300px] mx-auto">
        <Stepper current={1} alternativeLabel>
          {steps?.map((label, i) => (
            <Step key={label}>
              <StepLabel >
                {label}
              </StepLabel>
              {/* <StepDescription>Paragraph Text</StepDescription> */}
            </Step>
          ))}
        </Stepper>
      </div>
       
       </div>
       
      <div className="requirement-form bg-white mt-5 w-[800px] pt-[20px] pb-[20px] pr-[20px] pl-[20px]  rounded-xl mt-20">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="w-[100%] flex justify-between items-center ">
          Select Country
            <Icon icon="heroicons:chevron-down" className=" h-5 w-5 ml-2 " />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[99%]" align="start">
          <DropdownMenuLabel>Select Country</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      </div>
        <div className="mt-16 text-center">
          <div className="text-2xl md:text-4xl lg:text-5xl font-semibold text-default-900">You are not Authorized</div>
          <div className="mt-3 text-default-600 text-sm md:text-base">
            You are missing the required rights to be able to access <br /> this page
          </div>
          <Button asChild className="mt-9  md:min-w-[300px]" size="lg">
            <Link href="/dashboard">Go to Homepage</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CustomizationPage;