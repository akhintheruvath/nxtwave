import { useRef } from "react";
import { Header } from "../Components/Header";
import { LeftArrow } from "../Icons/LeftArrow";
import { Label } from "../Components/Label";
import { Input } from "../Components/Input";

export const AddResource = () => {
   const nameRef = useRef("");
   const linkRef = useRef("");
   const descriptionRef = useRef("");
   return (
      <div className="min-h-screen">
         <Header />
         <div className="mt-16 pt-8 pb-11 px-36 bg-[#FBFBFB] min-h-screen flex">
            <div className="w-1/2">
               <div className="flex font-hkgrotesk text-xs text-customGrey">
                  <span className="mr-2"><LeftArrow /></span>Users
               </div>
               <div className="flex justify-center items-center min-h-full w-full">
                  <div className="flex flex-col w-1/2">
                     <h2 className="font-rubik text-customHeadingColor flex justify-center mb-8 text-3xl">Add a Resource</h2>
                     <Label htmlFor="name">NAME</Label>
                     <Input id="name" type="text" />
                     <Label htmlFor="link">LINK</Label>
                     <Input id="link" type="url" />
                     <Label htmlFor="description">DESCRIPTION</Label>
                     <textarea
                        id="description"
                        type="text"
                        className="p-2 mb-8 border border-greyBorder rounded resize-none min-h-16"
                     />
                  </div>
               </div>
            </div>
            <div>Hello</div>
         </div>
      </div>
   );
}