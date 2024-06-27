import { TabTitle } from "./TabTitle";

export const Tabs = ({ currentTab, setCurrentTab }) => {
   const RESOURCES = "Resources";
   const REQUESTS = "Requests";
   const USERS = "Users";
   return (
      <div className="flex bg-[#d7dfe93d] w-1/2 rounded-md">
         <div
            className={`w-1/3 flex justify-center items-center py-2 cursor-pointer border-y border-l border-greyBorder rounded-l-md ${currentTab === RESOURCES && 'bg-customBlue'}`}
            onClick={() => setCurrentTab(RESOURCES)}
         >
            <TabTitle currentTab={currentTab}>{RESOURCES}</TabTitle>
         </div>
         <div
            className={`w-1/3 flex justify-center items-center py-2 cursor-pointer border border-greyBorder ${currentTab === REQUESTS && 'bg-customBlue'}`}
            onClick={() => setCurrentTab(REQUESTS)}
         >
            <TabTitle currentTab={currentTab}>{REQUESTS}</TabTitle>
         </div>
         <div
            className={`w-1/3 flex justify-center items-center py-2 cursor-pointer border-y border-r border-greyBorder rounded-r-md ${currentTab === USERS && 'bg-customBlue'}`}
            onClick={() => setCurrentTab(USERS)}
         >
            <TabTitle currentTab={currentTab}>{USERS}</TabTitle>
         </div>
      </div>
   );
}