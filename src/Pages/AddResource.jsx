import { useRef, useState } from "react";
import validator from 'validator';
import { Header } from "../Components/Header";
import { LeftArrow } from "../Icons/LeftArrow";
import { Label } from "../Components/Label";
import { Input } from "../Components/Input";
import { useNavigate } from "react-router-dom";
import { UploadIcon } from "../Icons/UploadIcon";
import { CommonButton } from "../Components/CommonButton";
import axios from "axios";
import { toast } from "react-toastify";

export const AddResource = () => {
   const navigate = useNavigate();
   const nameRef = useRef("");
   const linkRef = useRef("");
   const [invalidName, setInvalidName] = useState(null);
   const [invalidUrl, setInvalidUrl] = useState(null);
   const [invalidDescription, setInvalidDescription] = useState(null);
   const descriptionRef = useRef("");
   const [selectedImage, setSelectedImage] = useState(null);
   const imageInputRef = useRef(null);

   const handleDivClick = () => {
      imageInputRef.current.click();
   };

   const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
         const reader = new FileReader();
         reader.onloadend = () => {
            setSelectedImage(reader.result);
         };
         reader.readAsDataURL(file);   
      }
   };

   const handleCreate = async () => {
      const name = nameRef.current.value;
      const link = linkRef.current.value;
      const description = descriptionRef.current.value;
   
      let hasInvalidFields = false;
   
      if(name.length < 3) {
         setInvalidName(true);
         hasInvalidFields = true;
      } else {
         setInvalidName(false);
      }
   
      if(!validator.isURL(link)) {
         setInvalidUrl(true);
         hasInvalidFields = true;
      } else {
         setInvalidUrl(false);
      }
   
      if(description.length < 3) {
         setInvalidDescription(true);
         hasInvalidFields = true;
      } else {
         setInvalidDescription(false);
      }
      
      if(!hasInvalidFields) {
         try {
            // this is just a sample api
            const response = await axios.get("https://media-content.ccbp.in/website/react-assignment/add_resource.json");
            if(response.status === 200) {
               toast.success("Added Successfully", {
                  position: "bottom-center",
               });
            }
         } catch (error) {
            toast.error("Something went wrong", {
               position: "bottom-center",
            });
         }
      }
   }

   return (
      <div className="min-h-screen">
         <Header />
         <div className="mt-16 pt-8 pb-11 px-5 md:px-12 bg-[#FBFBFB] min-h-screen flex">
            <div className="w-full md:w-1/2">
               <div>
                  <div
                     className="flex font-hkgrotesk text-xs text-customGrey cursor-pointer w-14 hover:bg-white"
                     onClick={(e) => navigate("/")}
                  >
                     <span
                        className="mr-2"
                     >
                        <LeftArrow />
                     </span>
                     Users
                  </div>
               </div>
               <div className="flex justify-center items-center min-h-full w-full">
                  <div className="flex flex-col w-5/6 sm:w-2/3 lg:w-1/2">
                     <h2 className="font-rubik text-customHeadingColor flex justify-center mb-8 text-3xl">Add a Resource</h2>
                     <Label htmlFor="name">NAME</Label>
                     {
                        invalidName && (<p className="py-1 text-red-400">Name's length should be more than 2 characters</p>)
                     }
                     <Input id="name" type="text" inputRef={nameRef} />
                     <Label htmlFor="link">LINK</Label>
                     {
                        invalidUrl && (<p className="py-1 text-red-400">Provide a valid link</p>)
                     }
                     <Input id="link" type="url" inputRef={linkRef} />
                     <Label htmlFor="description">DESCRIPTION</Label>
                     {
                        invalidDescription && (<p className="py-1 text-red-400">Description should be more than 2 characters</p>)
                     }
                     <textarea
                        id="description"
                        type="text"
                        ref={descriptionRef}
                        className="p-2 mb-8 border border-greyBorder rounded resize-none min-h-16 focus:outline-none"
                     />
                     <div className="flex items-center mb-20">
                        <div className="w-16 h-16 border-2 border-greyBorder rounded-md mr-3">
                           {
                              selectedImage && (
                                 <img
                                    src={selectedImage}
                                    alt="selected preview"
                                    className="w-auto h-full"
                                 />
                              )
                           }
                        </div>
                        <div className="flex items-center cursor-pointer" onClick={handleDivClick}>
                           <UploadIcon /><span className="ml-2 font-hkgrotesk text-sm leading-6 text-customGrey">{selectedImage ? "Change photo" : "Upload photo"}</span>
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
                     <div className="flex justify-center">
                        <CommonButton
                           buttonText={"CREATE"}
                           handleClick={handleCreate}
                        />
                     </div>
                  </div>
               </div>
            </div>
            <div className="hidden md:block">Hello</div>
         </div>
      </div>
   );
}