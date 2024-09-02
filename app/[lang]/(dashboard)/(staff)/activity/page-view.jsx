"use client";

import { Button } from "@/components/ui/button";
import DatePickerWithRange from "@/components/date-picker-with-range";
import ActivityTimeline from "./components/activity-timeline";
import CustomImplementation from "./components/custom-implementation";
import { Plus } from "lucide-react"

const ActivityLogView = ({ trans }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center flex-wrap justify-between gap-4">
        <div className="text-2xl font-medium text-default-800">
          Activity Logs
        </div>
        <DatePickerWithRange />
      </div>

      <div className="flex col-12 gap-6">
        <div className="flex flex-col w-1/2 md:col-span-6 mt-10 md:mt-0 gap-4">
            
          <div className="flex flex-wrap gap-[15px] bg-white p-3">
            <CustomImplementation />
          </div>
        </div>
        <div className="flex flex-col w-1/2 md:col-span-6 mt-10 md:mt-0 gap-4">
          <div className="col-span-12 lg:col-span-6 xl:col-span-7">
          <ActivityTimeline />
          <div className="flex justify-center mt-9">
            <Button
              color="secondary"
            >
              <Plus className="h-4 w-4 ltr:mr-1 rtl:ml-1" /> Load More
            </Button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityLogView;
