export const ResourceComponent = ({ icon_url, title, category, link, description }) => {
   return (
      <div className="px-6 pt-6 bg-white min-h-[192px] rounded-md border border-[#D7DFE9]">
         <div className="flex mb-5">
            <div className="rounded-md mr-4 border-2 p-2 border-[#D7DFE9]">
               <div className="relative h-5 w-5 overflow-hidden">
                  <img
                     src={icon_url}
                     alt="Logo"
                     className="absolute w-full h-full object-cover"
                  />
               </div>
            </div>
            <div>
               <h2 className="text-[#171F46] text-base font-medium font-hkgrotesk">{title}</h2>
               <h4 className="text-[#7E858E] text-[12px] leading-4 font-hkgrotesk">{category}</h4>
            </div>
         </div>
         <div className="mb-2">
            <a href={link} className="text-sm text-[#0B69FF] leading-6">{link}</a>
         </div>
         <p className="text-sm leading-6 text-[#7E858E]">{description}</p>
      </div>
   );
}