export const CommonButton = ({ handleClick, buttonText }) => {
   return (
      <button
         onClick={handleClick}
         className="bg-customBlue px-5 py-2 font-bold text-sm leading-6 text-white font-hkgrotesk rounded-md"
      >
         {buttonText}
      </button>
   );
}