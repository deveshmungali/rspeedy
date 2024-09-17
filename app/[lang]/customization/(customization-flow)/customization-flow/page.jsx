"use client"
import Image from "next/image";
import lightImage from "@/public/images/error/light-401.png"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import {
    Stepper,
    Step,
    StepLabel,
    // StepDescription,
  } from "@/components/ui/steps";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
// import { useState } from "react";
const CustomizationPage = () => {
  const { theme } = useTheme();
  const[showsteps , setShowsteps]  = useState(false);
  const[showExtra , setShowExtra]  = useState(false);
  const steps = ["First Step", "Second Step"];
    const [countries, setCountries] = useState([]);
const [selectedCountry, setSelectedCountry] = useState("");
 useEffect(() => {
  fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
      // Sort the countries alphabetically by their common name
      const sortedCountries = data.sort((a, b) => a.name.common.localeCompare(b.name.common));
      setCountries(sortedCountries);
    })
    .catch(error => console.error('Error fetching countries:', error));
}, []);

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
       { !showsteps && (<div className="requirement-form bg-white mt-5 w-[800px] pt-[20px] pb-[20px] pr-[20px] pl-[20px]  rounded-xl mt-20">
      <div className="new-form-title text-center mb-2 flex gap-2 items-center">
      <div className="selc-dropdown w-[50%] text-left">
      <Label htmlFor="sub1" className="mb-3">
        Select Country
      </Label>
    


<Select className="w-[50%]" onValueChange={(value) => setSelectedCountry(value)}>
  <SelectTrigger>
    <SelectValue placeholder="Select a country" />
  </SelectTrigger>
  <SelectContent>
    {countries.map((country, index) => (
      <SelectItem key={index} value={country.cca2}>
        {country.name.common}
      </SelectItem>
    ))}
  </SelectContent>
</Select>

    </div>
    <div className="selc-dropdown w-[50%] text-left">
    <Label htmlFor="industry" className="mb-3">
  Industry Type:
</Label>
<Select className="w-[50%]">
  <SelectTrigger>
    <SelectValue placeholder="Select an industry type" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="technology">Technology</SelectItem>
    <SelectItem value="finance">Finance</SelectItem>
    <SelectItem value="healthcare">Healthcare</SelectItem>
    <SelectItem value="education">Education</SelectItem>
    <SelectItem value="manufacturing">Manufacturing</SelectItem>
    <SelectItem value="retail">Retail</SelectItem>
    <SelectItem value="consulting">Consulting</SelectItem>
    <SelectItem value="hospitality">Hospitality</SelectItem>
    <SelectItem value="media">Media & Entertainment</SelectItem>
    <SelectItem value="realestate">Real Estate</SelectItem>
  </SelectContent>
</Select>

    </div>
      </div>
      <div className="tectoverOptions mt-[20px]">
        <div className="formOption">
            <p className="mt-[20px] text-lg font-semibold">Which of The Following describes you/your company?</p>
            <div className="optionList mt-[20px] flex flex-wrap items-center gap-[20px]">
            <Checkbox radius="xl" color="success" id="circle_1">Ecommerce & retail website</Checkbox>
            <Checkbox radius="xl" color="success" id="circle_2">B2B Website</Checkbox>
            <Checkbox radius="xl" color="success" id="circle_3" >Agency</Checkbox>
            <Checkbox radius="xl" color="success" id="circle_4" >Consultant / Freelancer</Checkbox>
            <Checkbox radius="xl" color="success" id="circle_5" >Lead Generation website</Checkbox>
            <Checkbox radius="xl" color="success" id="circle_7" >Non-ecommerce content website</Checkbox>
            <Checkbox radius="xl" color="success" id="circle_7" >Directories /Portals/Blogs</Checkbox>
            <Checkbox radius="xl" color="success" id="circle_7" >Company / Enterprise</Checkbox>
            </div>
        </div>
        <div className="formOption">
            <p className="mt-[20px] text-lg font-semibold">What is your Role in your company?</p>
            <div className="optionList mt-[20px] flex flex-wrap items-center gap-[20px]">
            <Checkbox radius="xl" color="success" id="circle_1">Owner/Founder</Checkbox>
            <Checkbox radius="xl" color="success" id="circle_2">Developer</Checkbox>
            <Checkbox radius="xl" color="success" id="circle_3" >Marketing</Checkbox>
            <Checkbox radius="xl" color="success" id="circle_7" >Other</Checkbox>
            </div>
        </div>
       

  
    <div className="form-btns flex gap-[20px] justify-end">
    <Button asChild className="mt-9 md:min-w-[150px]" size="lg" onClick={() => setShowsteps(true)}>
    <a>Next</a>
  </Button>
    </div>
      </div>
      </div>)}
    
    { showsteps && (<div className="requirement-form2 bg-white mt-5 w-[800px] pt-[20px] pb-[20px] pr-[20px] pl-[20px]  rounded-xl mt-20">
  
      <div className="tectoverOptions mt-[20px]">
        <div className="formOption">
            <p className="mt-[20px] text-lg font-semibold">What is your website platforms</p>
            <div className="optionList mt-[20px] flex flex-wrap items-center gap-[20px]">
            <Checkbox radius="xl" color="success" id="circle_1">Woocommerce</Checkbox>
            <Checkbox radius="xl" color="success" id="circle_2">Elementor</Checkbox>
            <Checkbox radius="xl" color="success" id="circle_3" >Contact Form 7</Checkbox>
            <Checkbox radius="xl" color="success" id="circle_4" >Wp Bakery Builder</Checkbox>
            <Checkbox radius="xl" color="success" id="circle_5" >WordPress Speedy</Checkbox>
            <Checkbox radius="xl" color="success" id="circle_7" >Custom Plugins</Checkbox>
            <Checkbox 
  radius="xl" 
  color="success" 
  id="circle_7" 
  value={showExtra}
//   checked={showExtra} 
  onChange={() => setShowExtra(!showExtra)}
>
  Other
</Checkbox>


            </div>
        </div>
        { (<div><div className="formOption mt-[20px] mb-[10px] text-lg font-semibold">Other</div>
            <Input type="text" placeholder="other platform" /></div>)}
        <div className="formOption mt-[20px] mb-[10px] text-lg font-semibold">Add Website URL</div>
        <Input type="text" placeholder="Website Url" />

    <div className="detaildropdown">
    <p className="mt-[20px] text-lg font-semibold">How did you find Website Speedy?</p>
    <Select className="w-[100%]">
      <SelectTrigger>
        <SelectValue placeholder="Select a subject" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="english">English</SelectItem>
        <SelectItem value="mathmatics">Mathmatics</SelectItem>
        <SelectItem value="physics">Physics</SelectItem>
        <SelectItem value="chemistry">Chemistry</SelectItem>
        <SelectItem value="biology">Biology</SelectItem>
      </SelectContent>
    </Select>
    </div>
    <div className="form-btns flex gap-[20px] justify-end">
    <Button asChild className="mt-9 md:min-w-[150px]" size="lg" onClick={() => setShowsteps(!showsteps)}>
    <a>Previous</a>
  </Button>
          <Button asChild className="mt-9  md:min-w-[150px]" size="lg">
            <Link href="/dashboard">Submit</Link>
          </Button>
    </div>
      </div>    
      </div>)}
      </div>
    </div>
  );
};

export default CustomizationPage;