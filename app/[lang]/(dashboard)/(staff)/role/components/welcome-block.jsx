"use client"
import Image from "next/image";
import admin from "@/public/images/all-img/admin.png"
import { users } from "./data.js"

const WelcomeBlock = () => {
  const deta = [
    {
      title: "Today's Task",
      total: "123"
    },
    {
      title: "Overdue Task",
      total: "213"
    },
  ]
  return (
    <div className="w-full h-full bg-primary rounded-md  flex p-6 relative " >
      <div className="flex flex-col flex-1 justify-between ">
      {  
        // users.map((des, index) => (
          <div className="flex flex-col text-lg md:text-xl font-semibold text-primary-foreground mb-10">
            <p><span className="text-primary-200">Welcome Back </span> {users[0].name}!</p>
            <span className="text-sm md:text-m"> {users[0].title} </span>
          </div>
        // ))
      }

        <div className=" flex flex-col gap-4 sm:flex-row ">
          {
            deta.map((item, index) => (
              <div
                key={`welcome-text-${index}`}
                className="flex items-center w-full max-w-[130px] p-3 rounded bg-primary-foreground/10 shadow backdrop-blur-sm"
              >
                <div className="flex-1">
                  <div className="text-xs font-semibold text-primary-foreground/80">{item.title}</div>
                  <div className="text-lg font-semibold text-primary-foreground">{item.total}</div>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      <div className="absolute bottom-0 ltr:right-4 rtl:left-4 ltr:md:right-[30%] rtl:md:left-[30%] ltr:md:bottom-5 ltr:2xl:right-10 rtl:2xl:left-10 w-[100px] ">
        <Image src={admin} alt="user" className="w-full h-full object-cover" />
      </div>

    </div>
  );
};

export default WelcomeBlock;