"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

import { X } from "lucide-react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import thumbnail from "@/public/images/all-img/thumbnail.png";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
const AddBlock = ({
  className,
  image = thumbnail,
  title = "Basic Plan",
  desc = " You have choose a Basic Plan",
}) => {
  const [openVideo, setOpenVideo] = useState(false);
  return (
    <>
      <div
        className={cn(
          "bg-primary dark:bg-default-400 text-primary-foreground pt-5 pb-4 px-4 mt-3 rounded  mx-3 hidden xl:block",
          className
        )}
      >
        <div className={cn("text-base font-semibold flex items-center justify-between text-primary-foreground")}>
          {" "}
          {title}
          <div className="relative">
            <Button
              size="icon"
              type="button"
              color="secondary"
              className="rounded-full opacity-60"
              onClick={() => setOpenVideo(true)}
            >
              <Icon
                icon="heroicons:play-16-solid"
                className="w-5 h-5 text-black"
              />
            </Button>
          </div>
        </div>
        <div className={cn(" text-xs text-primary-foreground mt-2")}>{desc}</div>
        
        {/* <div className="text-sm font-semibold  text-primary-foreground flex items-center gap-2 mt-4">
          Upgrade Now
          <Icon icon="heroicons:arrow-long-right" className="w-5 h-5" />{" "}
        </div> */}
      </div>
      <Dialog open={openVideo}>
        <DialogContent size="lg" className="p-0" hiddenCloseIcon>
          <Button
            size="icon"
            onClick={() => setOpenVideo(false)}
            className="absolute -top-4 -right-4 bg-default-900"
          >
            <X className="w-6 h-6" />
          </Button>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/xznnxfg1srQ?si=4k40kPbo66Q4onvC&autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen 
          ></iframe>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddBlock;




