"use client"


const Settings = () => {
  const tabs = [
    {
      label: "Personal Details",
      value: "personal"
    },
    {
      label: "Change Password",
      value: "password"
    },
    {
      label: "Others",
      value: "others"
    }
  ]
  return (
    <div className="w-full text-center bg-primary-300 py-14 px-7 mt-3">
      <div className="flex flex-col">
        <h4 className="text-xl lg:text-2xl font-bold text-default-800"> The Perfect Plan For Your Needs </h4>
        <span className="text-m font-normal"> Websites That Load Faster Excel in SEO, Elevate User Experience, and Optimize Ad Spend: Transform Your Site's Performance Now! </span>
      </div>

      <div className="flex gap-5 mt-14">
        <div className="w-1/3 inset-0 bg-white bg-opacity-50 backdrop-blur-lg rounded-md p-3"> 1 </div>
        <div className="w-1/3 inset-0 bg-white bg-opacity-50 backdrop-blur-lg rounded-md p-3"> 2 </div>
        <div className="w-1/3 inset-0 bg-white bg-opacity-50 backdrop-blur-lg rounded-md p-3"> 3 </div>
      </div>
    </div>
  );
};

export default Settings;