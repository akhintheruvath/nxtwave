import { useNavigate } from "react-router-dom";
import { AddIcon } from "../Icons/AddIcon";
import { NxtwaveLogo } from "../Icons/NxtwaveLogo";
import { ProfileImage } from "./ProfileImage";

export const HeaderWithButton = () => {
   const navigate = useNavigate();
   const handleAdd = () => {
      navigate("/add-resource");
   }

   return (
      <div className="flex justify-between items-center py-4 px-12 border-b border-greyBorder bg-white fixed top-0 left-0 w-full z-10">
         <NxtwaveLogo />
         <div className="flex">
            <div
               className="flex bg-customBlue items-center px-5 py-2 rounded-md cursor-pointer"
               onClick={handleAdd}
            >
               <AddIcon />
               <button className="ml-2 font-hkgrotesk font-semibold text-sm leading-6 text-white">ADD</button>
            </div>
            <span className="ml-4"><ProfileImage /></span>
         </div>
      </div>
   );
}