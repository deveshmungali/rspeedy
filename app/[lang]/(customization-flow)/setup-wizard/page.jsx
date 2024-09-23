"use client";
import Image from "next/image";
import lightImage from "@/public/images/error/light-401.png";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import { Checkbox } from "@/components/ui/checkbox";
// import { useSession } from "next-auth/react";
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
import axios from 'axios';
// import { useState } from 'react';
import { array } from "zod";
import { useSession } from "next-auth/react";



const CustomizationPage = () => {
  const { theme } = useTheme();
  const [showsteps, setShowsteps] = useState(false);
  const [showExtra, setShowExtra] = useState(false);
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [websiteName, setWebsiteName] = useState('');
  const steps = ["First Step", "Second Step"];

  const [country, setCountry] = useState([]);
  useEffect(() => {
    fetch("https://api.first.org/data/v1/countries")
      .then((res) => res.json())
      .then((data) => {
        setCountry(Object.values(data.data));
      });
  }, []);

  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (!session || !session.user) {
    return <p>You are not logged in</p>;
  }

  const userEmail = session.user.email;
  const selectedPlanId = session.user.selectedPlanId; 
  const selectedWebsite = session.user.website_1;
  console.log('user email', userEmail);
  console.log('plan ', selectedPlanId);


  

    const handleSubmit = async () => {
    // setLoadingSubmit(true); // Start loading state

    // Basic and Advanced plan settings
    const basicSettings = {
        EnableGeoZoneUS: true,
        EnableGeoZoneEU: true,
        BlockRootPathAccess: false,
        EnableCacheSlice: true,
        ZoneSecurityEnabled: false,
        CacheControlMaxAgeOverride: 3600,
        EnableAccessControlOriginHeader: true,
        EnableTLS1: true,
        VerifyOriginSSL: true,
        // EnableSmartCache: true,
        OptimizerEnabled: true,
        OptimizerImageQuality: 85,
        OptimizerEnableWebP: true,
        StorageType: 'Pull', // Use pull zones for storage
        DNSRecord: {
            type: 'CNAME',
            target: websiteUrl,
            ttl: 3600,
        },
    };

    const advancedSettings = {
        ...basicSettings,
        EnableImageOptimization: true,
        EnableMinification: true,
        EnableHTTP2: true,
        EnableSmartCache: true,
        CustomCacheRules: [
            {
                urlPattern: '/api/*',
                duration: 30,
            },
            {
                urlPattern: '/assets/*',
                duration: 60,
            },
        ],
        EnableContentCompression: true,
        EnableLogging: true,
        EnableAdvancedSecurity: true,
        EnableRealTimeAnalytics: true,
        StorageType: 'Storage', // Use storage zones for direct file storage
        DNSRecord: {
            type: 'CNAME',
            target: websiteUrl,
            ttl: 1800,
        },
        CustomDNSConfig: {
            useCustomDNS: true,
            primaryDNS: '1.1.1.1',
            secondaryDNS: '1.0.0.1',
        },
    };

    const settingsToUse = selectedPlanId === 1 ? basicSettings : advancedSettings;

    const postData = {
        OriginUrl: websiteUrl,
        Name: websiteName.trim(),
        ...settingsToUse, // Merge settings based on the selected plan
    };

    try {
        // Create Pull Zone
        const pullZoneResponse = await axios.post(
            'https://api.bunny.net/pullzone',
            postData,
            {
                headers: {
                    'AccessKey': 'dd348fd4-cd97-4d4a-92b8-cd4daedb9bbadce1d376-176c-4ab6-9406-8389bd522815', // Replace with your actual API key
                    'Content-Type': 'application/json',
                },
            }
        );
        console.log('Pull Zone Response:', pullZoneResponse.data);

        // Create Storage Zone if needed
        if (selectedPlanId === 2) { // Example: create a storage zone for advanced plan
            const storageZoneResponse = await axios.post(
                'https://api.bunny.net/storagezone',
                { name: websiteName.trim() },
                {
                    headers: {
                        'AccessKey': 'dd348fd4-cd97-4d4a-92b8-cd4daedb9bbadce1d376-176c-4ab6-9406-8389bd522815', // Replace with your actual API key
                        'Content-Type': 'application/json',
                    },
                }
            );
            console.log('Storage Zone Response:', storageZoneResponse.data);
        }

        // Handle success (navigate or show success message)
    } catch (error) {
        console.error('Error posting data:', error);
        
    } 
};

  return (
    <div className="min-h-screen  overflow-y-auto flex justify-center items-center p-5">
      <div className="w-full flex flex-col items-center">
        <div className="customization-title text-center mb-2">
          <p className="maiTitle text-2xl md:text-3xl lg:text-4xl font-semibold text-default-900">
            Let's Speed Up Your Website
          </p>
          <p className="subTitle text-base md:text-lg lg:text-xl font-semibold text-default-700">
            Let WebsiteSpeedy Understand Your Requirements For Tailored Results!
          </p>
        </div>
        <div className="customization-steps bg-white mt-5 w-[800px] pt-[20px] pb-[20px] rounded-xl">
          <div className="max-w-[300px] mx-auto">
            <Stepper current={1} alternativeLabel>
              {steps?.map((label, i) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                  {/* <StepDescription>Paragraph Text</StepDescription> */}
                </Step>
              ))}
            </Stepper>
          </div>
        </div>
        {!showsteps && (
          <div className="requirement-form bg-white mt-5 w-[800px] pt-[20px] pb-[20px] pr-[20px] pl-[20px]  rounded-xl mt-20">
            <div className="new-form-title text-center mb-2 flex gap-2 items-center">
              <div className="selc-dropdown w-[50%] text-left">
                <Label htmlFor="sub1" className="mb-3">
                  Select Country
                </Label>
                <Select className="w-[50%]">
                  <SelectTrigger>
                    <SelectValue placeholder="Select a Country" />
                  </SelectTrigger>

                  <SelectContent className="max-h-[200px] overflow-y-scroll">
                    {Array.isArray(country) &&
                      country.map((it) => (
                        <SelectItem key={it.country} value={it.country}>
                          {it.country}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="selc-dropdown w-[50%] text-left">
                <Label htmlFor="sub1" className="mb-3">
                  Industry Type:
                </Label>
                <Select className="w-[50%]">
                  <SelectTrigger>
                    <SelectValue placeholder="Select a subject" />
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
                <p className="mt-[20px] text-lg font-semibold">
                  Which of The Following describes you/your company?
                </p>
                <div className="optionList mt-[20px] flex flex-wrap items-center gap-[20px]">
                  <Checkbox radius="xl" color="success" id="circle_www1">
                    Ecommerce & retail website
                  </Checkbox>
                  <Checkbox radius="xl" color="success" id="circleueue2">
                    B2B Website
                  </Checkbox>
                  <Checkbox radius="xl" color="success" id="circle77373">
                    Agency
                  </Checkbox>
                  <Checkbox radius="xl" color="success" id="circle6737">
                    Consultant / Freelancer
                  </Checkbox>
                  <Checkbox radius="xl" color="success" id="circle667375">
                    Lead Generation website
                  </Checkbox>
                  <Checkbox radius="xl" color="success" id="circlehghjjj">
                    Non-ecommerce content website
                  </Checkbox>
                  <Checkbox radius="xl" color="success" id="circleggg">
                    Directories /Portals/Blogs
                  </Checkbox>
                  <Checkbox radius="xl" color="success" id="circledhhd">
                    Company / Enterprise
                  </Checkbox>
                </div>
              </div>
              <div className="formOption">
                <p className="mt-[20px] text-lg font-semibold">
                  What is your Role in your company?
                </p>
                <div className="optionList mt-[20px] flex flex-wrap items-center gap-[20px]">
                  <Checkbox radius="xl" color="success" id="circle_1dere">
                    Owner/Founder
                  </Checkbox>
                  <Checkbox radius="xl" color="success" id="circle2233">
                    Developer
                  </Checkbox>
                  <Checkbox radius="xl" color="success" id="circle6377e3">
                    Marketing
                  </Checkbox>
                  <Checkbox radius="xl" color="success" id="circle_ddff7">
                    Other
                  </Checkbox>
                </div>
              </div>

              <div className="form-btns flex gap-[20px] justify-end">
                <Button
                  asChild
                  className="mt-9 md:min-w-[150px]"
                  size="lg"
                  onClick={() => setShowsteps(true)}
                >
                  <a>Next</a>
                </Button>
              </div>
            </div>
          </div>
        )}

        {showsteps && (
          <div className="requirement-form2 bg-white mt-5 w-[800px] pt-[20px] pb-[20px] pr-[20px] pl-[20px]  rounded-xl mt-20">
            <div className="tectoverOptions mt-[20px]">
              <div className="formOption">
                <p className="mt-[20px] text-lg font-semibold">
                  What is your website platforms
                </p>
                <div className="optionList mt-[20px] flex flex-wrap items-center gap-[20px]">
                  <Checkbox radius="xl" color="success" id="circledd_1">
                    Woocommerce
                  </Checkbox>
                  <Checkbox radius="xl" color="success" id="circle_2">
                    Elementor
                  </Checkbox>
                  <Checkbox radius="xl" color="success" id="circle_3">
                    Contact Form 7
                  </Checkbox>
                  <Checkbox radius="xl" color="success" id="circle_4">
                    Wp Bakery Builder
                  </Checkbox>
                  <Checkbox radius="xl" color="success" id="circle_5">
                    WordPress Speedy
                  </Checkbox>
                  <Checkbox radius="xl" color="success" id="circle_dhghd7">
                    Custom Plugins
                  </Checkbox>
                  <Checkbox
                    radius="xl"
                    color="success"
                    id="circle_8"
                    value={showExtra}
                    //   checked={showExtra}
                    onChange={() => setShowExtra(!showExtra)}
                  >
                    Other
                  </Checkbox>
                </div>
              </div>
              {
                <div>
                  <div className="formOption mt-[20px] mb-[10px] text-lg font-semibold">
                    Other
                  </div>
                  <Input type="text" placeholder="other platform" />
                </div>
              }
               <div>
                  <div className="formOption mt-[20px] mb-[10px] text-lg font-semibold">
                     Name
                  </div>
                  <Input type="text" placeholder="website name " value={websiteName}
              onChange={(e) => setWebsiteName(e.target.value)} />
                </div>
              <div className="formOption mt-[20px] mb-[10px] text-lg font-semibold">
                Add Website URL
              </div>
              <Input 
              type="text" 
              placeholder="Website Url" 
              value={websiteUrl}
              onChange={(e) => setWebsiteUrl(e.target.value)}
            />


              <div className="detaildropdown">
                <p className="mt-[20px] text-lg font-semibold">
                  How did you find Website Speedy?
                </p>
                <Select className="w-[100%]">
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="google-search">Google Search</SelectItem>
                    <SelectItem value="social-media">Social Media</SelectItem>
                    <SelectItem value="friend-recommendation">
                      Recommended by a Friend
                    </SelectItem>
                    <SelectItem value="online-review">
                      Online Review/Blog
                    </SelectItem>
                    <SelectItem value="advertisement">
                      Through an Advertisement
                    </SelectItem>
                    <SelectItem value="colleague-referral">
                      Referral from a Colleague
                    </SelectItem>
                    <SelectItem value="web-forum">
                      Found on a Web Development Forum
                    </SelectItem>
                    <SelectItem value="email-newsletter">
                      Email Newsletter
                    </SelectItem>
                    <SelectItem value="other">
                      Other (please specify)
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="form-btns flex gap-[20px] justify-end">
                <Button
                  asChild
                  className="mt-9 md:min-w-[150px]"
                  size="lg"
                  onClick={() => setShowsteps(!showsteps)}
                >
                  <a>Previous</a>
                </Button>
                <Button asChild className="mt-9  md:min-w-[150px]" size="lg" onClick={handleSubmit}>
                  <Link href="/speed">Submit</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomizationPage;
