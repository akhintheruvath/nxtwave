import { LensIcon } from "../Icons/LensIcon";

export const Searchbar = () => {
   return (
      <div className="relative flex items-center">
         <div className="absolute left-4">
            <LensIcon />
         </div>
         <input
            type="text"
            placeholder="Search"
            className="w-1/2 border border-[#D7DFE9] pl-12 pr-3 h-10 font-hkgrotesk text-sm placeholder-text-[#7E858E99] placeholder-opacity-80 rounded-sm"
         />
      </div>
   );
}