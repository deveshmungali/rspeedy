"use client"
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from '@/components/ui/button';

const FormGrid = () => {
  return (
    <form>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 lg:col-span-1">
          <Label htmlFor="countryCode" className="text-base font-normal">Country Code</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select Country" />
            </SelectTrigger>
            <SelectContent className="max-h-48 overflow-y-auto">
            <SelectItem value="+93">Afghanistan +93</SelectItem>
              <SelectItem value="+355">Albania +355</SelectItem>
              <SelectItem value="+213">Algeria +213</SelectItem>
              <SelectItem value="+1684">American Samoa +1684</SelectItem>
              <SelectItem value="+376">Andorra +376</SelectItem>
              <SelectItem value="+244">Angola +244</SelectItem>
              <SelectItem value="+1264">Anguilla +1264</SelectItem>
              <SelectItem value="+0">Antarctica +0</SelectItem>
              <SelectItem value="+1268">Antigua And Barbuda +1268</SelectItem>
              <SelectItem value="+54">Argentina +54</SelectItem>
              <SelectItem value="+374">Armenia +374</SelectItem>
              <SelectItem value="+297">Aruba +297</SelectItem>
              <SelectItem value="+61">Australia +61</SelectItem>
              <SelectItem value="+43">Austria +43</SelectItem>
              <SelectItem value="+994">Azerbaijan +994</SelectItem>
              <SelectItem value="+1242">Bahamas The +1242</SelectItem>
              <SelectItem value="+973">Bahrain +973</SelectItem>
              <SelectItem value="+880">Bangladesh +880</SelectItem>
              <SelectItem value="+1246">Barbados +1246</SelectItem>
              <SelectItem value="+375">Belarus +375</SelectItem>
              <SelectItem value="+32">Belgium +32</SelectItem>
              <SelectItem value="+501">Belize +501</SelectItem>
              <SelectItem value="+229">Benin +229</SelectItem>
              <SelectItem value="+1441">Bermuda +1441</SelectItem>
              <SelectItem value="+975">Bhutan +975</SelectItem>
              <SelectItem value="+591">Bolivia +591</SelectItem>
              <SelectItem value="+387">Bosnia and Herzegovina +387</SelectItem>
              <SelectItem value="+267">Botswana +267</SelectItem>
              <SelectItem value="+55">Brazil +55</SelectItem>
              <SelectItem value="+246">British Indian Ocean Territory +246</SelectItem>
              <SelectItem value="+673">Brunei +673</SelectItem>
              <SelectItem value="+359">Bulgaria +359</SelectItem>
              <SelectItem value="+226">Burkina Faso +226</SelectItem>
              <SelectItem value="+257">Burundi +257</SelectItem>
              <SelectItem value="+855">Cambodia +855</SelectItem>
              <SelectItem value="+237">Cameroon +237</SelectItem>
              <SelectItem value="+1">Canada +1</SelectItem>
              <SelectItem value="+238">Cape Verde +238</SelectItem>
              {/* Continue with the rest of the countries */}
            </SelectContent>
          </Select>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <Label htmlFor="contactNumber" className="text-base font-normal">Contact Number</Label>
          <Input type="text" id="contactNumber" placeholder="9876543210" />
        </div>
        <div className="col-span-2">
          <Label htmlFor="email" className="text-base font-normal">Email</Label>
          <Input type="email" id="email" placeholder="demo@gmail.com" />
        </div>
        <div className="col-span-2">
          <Label htmlFor="timeZone" className="text-base font-normal">Time Zone</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="(GMT -12:00) Eniwetok, Kwajalein" />
            </SelectTrigger>
            <SelectContent className="max-h-48 overflow-y-auto"> {/* Add max height and overflow */}
              <SelectItem value="-12">(GMT -12:00) Eniwetok, Kwajalein</SelectItem>
              <SelectItem value="-11">(GMT -11:00) Midway Island, Samoa</SelectItem>
              <SelectItem value="-10">(GMT -10:00) Hawaii</SelectItem>
              {/* Add more time zones as needed */}
            </SelectContent>
          </Select>
        </div>
        <div className="col-span-2">
          <Label htmlFor="suitableTime" className="text-base font-normal">Suitable Time For Contact</Label>
          <Input type="date" id="suitableTime" />
        </div>
        <div className="col-span-2 flex gap-4">
          <div className="flex w-1/2 flex-col">
            <Label htmlFor="fromTime" className="text-base font-normal">From:</Label>
            <Input type="time" id="fromTime" />
          </div>
          <div className="flex w-1/2 flex-col">
            <Label htmlFor="toTime" className="text-base font-normal">To:</Label>
            <Input type="time" id="toTime" />
          </div>
        </div>
        <div className="col-span-2">
          <Button type="submit" className="w-full">Submit</Button>
        </div>
      </div>
    </form>
  );
};

export default FormGrid;
