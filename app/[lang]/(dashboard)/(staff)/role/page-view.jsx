"use client";

import WelcomeBlock from "./components/welcome-block";
import { Card } from "@/components/ui/card";
import DatePickerWithRange from "@/components/date-picker-with-range";
import RoleContributer from "./components/top-contributer";
import CustomImplementation from "./components/custom-implementation";

const RolePageView = ({ trans }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center flex-wrap justify-between gap-4">
        <div className="text-2xl font-medium text-default-800">
          Role Management
        </div>
        <DatePickerWithRange />
      </div>

      <div className="flex col-12 gap-6">
        <div className="flex flex-col w-1/2 md:col-span-6 mt-10 md:mt-0 gap-4">
            <WelcomeBlock />
          <div className="flex flex-wrap gap-[15px] bg-white p-3">
            <CustomImplementation />
          </div>
        </div>
        <div className="flex flex-col w-1/2 md:col-span-6 mt-10 md:mt-0 gap-4">
          <div className="col-span-12 lg:col-span-6 xl:col-span-7">
            <RoleContributer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RolePageView;
