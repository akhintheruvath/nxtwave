import { NxtwaveLogo } from "../Icons/NxtwaveLogo";
import { ProfileImage } from "./ProfileImage";

export const Header = () => {
   return (
      <div className="flex justify-between items-center py-4 px-12 border-b border-greyBorder bg-white fixed top-0 left-0 w-full z-10">
         <NxtwaveLogo />
         <ProfileImage />
      </div>
   );
}