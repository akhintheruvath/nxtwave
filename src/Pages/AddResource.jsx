import { useRef } from "react";
import { Header } from "../Components/Header";
import { LeftArrow } from "../Icons/LeftArrow";
import { Label } from "../Components/Label";
import { Input } from "../Components/Input";
import { useNavigate } from "react-router-dom";
import { UploadIcon } from "../Icons/UploadIcon";

export const AddResource = () => {
   const navigate = useNavigate();
   const nameRef = useRef("");
   const linkRef = useRef("");
   const descriptionRef = useRef("");
   const imageInputRef = useRef(null);

   const handleDivClick = () => {
      imageInputRef.current.click();
   };

   const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
         console.log('Selected file:', file);
         // You can handle the selected file here (e.g., upload it, display a preview, etc.)
      }
   };

   return (
      <div className="min-h-screen">
         <Header />
         <div className="mt-16 pt-8 pb-11 px-5 lg:px-36 bg-[#FBFBFB] min-h-screen flex">
            <div className="w-full md:w-1/2">
               <div
                  className="flex font-hkgrotesk text-xs text-customGrey cursor-pointer"
                  onClick={(e) => navigate("/")}
               >
                  <span className="mr-2"><LeftArrow /></span>Users
               </div>
               <div className="flex justify-center items-center min-h-full w-full">
                  <div className="flex flex-col lg:w-2/3">
                     <h2 className="font-rubik text-customHeadingColor flex justify-center mb-8 text-3xl">Add a Resource</h2>
                     <Label htmlFor="name">NAME</Label>
                     <Input id="name" type="text" />
                     <Label htmlFor="link">LINK</Label>
                     <Input id="link" type="url" />
                     <Label htmlFor="description">DESCRIPTION</Label>
                     <textarea
                        id="description"
                        type="text"
                        className="p-2 mb-8 border border-greyBorder rounded resize-none min-h-16 focus:outline-none"
                     />
                     <div className="flex items-center">
                        <div className="w-16 h-16 border-2 border-greyBorder rounded-md mr-3">

                        </div>
                        <div className="flex items-center cursor-pointer" onClick={handleDivClick}>
                           <UploadIcon /><span className="ml-2 font-hkgrotesk text-sm leading-6 text-customGrey">Change photo</span>
                           <input
                              className="hidden"
                              id="imageInput"
                              type="file"
                              ref={imageInputRef}
                              onChange={handleFileChange}
                              accept="image"
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="hidden md:block">Hello</div>
         </div>
      </div>
   );
}