/* 
PRIMARY_1 #ffa500 | SECONDARY_1 #00ccff | PRIMARY_BG: #4a4ae7 
PRIMARY_2 #ff0055   #292929                      OLD_BG #40414b;
PRIMARY_3 #adff2f                         OLD_OVERLAY rgba(0, 0, 0, 0.404);
*/

import UniversalHeader from "../components/UniversalHeader";
import UniversalFooter from "../components/UniversalFooter";
import Sidebar from "../components/Sidebar";


export const LandingPage = () => {

  let loggedIn = true;

  if (loggedIn)
    return (
      <>
      <div className="bg-[#d3d3d3] flex h-screen">
        <div className="bg-blue-400">
          <Sidebar />
        </div>

        <div className="w-full flex flex-col">
          <UniversalHeader />
          <div className="flex h-full">
            asdasdasd
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

