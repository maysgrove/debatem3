/* 
PRIMARY_1 #ffa500 | SECONDARY_1 #00ccff | PRIMARY_BG: #4a4ae7 
PRIMARY_2 #ff0055   #292929                      OLD_BG #40414b;
PRIMARY_3 #adff2f                         OLD_OVERLAY rgba(0, 0, 0, 0.404);
*/

import UniversalHeader from "../components/UniversalHeader";
import UniversalFooter from "../components/UniversalFooter";
import Sidebar from "../components/Sidebar";

import { FaBan } from "react-icons/fa6";
import { useState } from "react";

export const LandingPage = () => {
  //
  let counter = 0;
  let lastTimestamp: number | null = null;

  function generateUniqueId() {
    const timestamp = Date.now();

    if (timestamp === lastTimestamp) {
      counter++;
    } else {
      counter = 0;
      lastTimestamp = timestamp;
    }

    // Ensure the counter is always at least 4 digits
    const counterStr = counter.toString().padStart(4, "0");

    // Combine the timestamp and counter, taking the last 10 digits
    const uniqueId = (timestamp.toString() + counterStr).slice(-10);

    return uniqueId;
  }

  //States
  const [closeBanner, SetBanner] = useState(true);

  //Declares
  let userName = "Guest" + " " + "#" + generateUniqueId();
  let loggedIn = true;

  if (loggedIn)
    return (
      <>
        <div className="bg-[#353535] flex h-screen">
          <div className="bg-blue-400">
            <Sidebar />
          </div>
          <div className="w-full flex flex-col">
            <UniversalHeader />
            <div className="flex h-full">
              {closeBanner && (
                <ul
                  className="bg-green-100 border-l-4 fixed  left-[50%] top-[50%] transform translate-x-[-50%] 
                  translate-y-[-400%] border-green-500 text-green-700 p-4"
                  role="alert"
                >
                  <div className="flex justify-between">
                    <p className="font-bold">HI, {userName}</p>
                    <FaBan
                      onClick={() => SetBanner(!closeBanner)}
                      fill="black"
                    />
                  </div>
                  <p>This is a Simple Alert with Tailwind Snippets</p>
                </ul>
              )}
              <div>
                sssssssssssssssssssssssssssssssssssssssssssssssssssssssss
              </div>
            </div>
            <UniversalFooter />
          </div>
        </div>
      </>
    );
  else {
    return <div>my fault</div>;
  }
};
