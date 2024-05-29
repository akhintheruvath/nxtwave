import { AddIcon } from "../Icons/AddIcon";
import { NxtwaveLogo } from "../Icons/NxtwaveLogo";
import { ProfileImage } from "./ProfileImage";

export const HeaderWithButton = () => {
   return (
      <div className="flex justify-between items-center py-4 px-12 border-b border-[#D7DFE9] bg-white fixed top-0 left-0 w-full z-10">
         <NxtwaveLogo />
         <div className="flex">
            <div className="flex bg-[#0B69FF] items-center px-5 py-2 rounded-md cursor-pointer">
               <AddIcon />
               <button className="ml-2 font-hkgrotesk font-semibold text-sm leading-6 text-white">ADD</button>
            </div>
            <span className="ml-4"><ProfileImage /></span>
         </div>
      </div>
   );
}