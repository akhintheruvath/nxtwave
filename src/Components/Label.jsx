export const Label = ({ htmlFor, children }) => {
   return (
      <label htmlFor={htmlFor} className="font-hkgrotesk text-customGrey font-semibold text-xs mb-2">
         {children}
      </label>
   );
};