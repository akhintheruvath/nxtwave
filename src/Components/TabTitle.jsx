export const TabTitle = ({ currentTab, children }) => {
   return (
      <h2 className={`font-hkgrotesk font-semibold text-sm leading-6 text-customHeadingColor ${currentTab === children && 'text-white'}`}>{children}</h2>
   );
}