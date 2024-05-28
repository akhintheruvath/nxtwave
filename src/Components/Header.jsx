import { NxtwaveLogo } from "../Icons/NxtwaveLogo";
import { ProfileImage } from "./ProfileImage";

export const Header = () => {
   return (
      <div className="flex justify-between items-center py-4 px-12">
         <NxtwaveLogo />
         <ProfileImage />
      </div>
   );
}