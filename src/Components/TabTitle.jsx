export const TabTitle = ({ currentTab, children }) => {
   return (
      <h2 className={`font-hkgrotesk font-semibold text-sm leading-6 text-[#171F46] ${currentTab === children && 'text-white'}`}>{children}</h2>
   );
}