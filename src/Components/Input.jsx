export const Input = ({ inputRef, id, type }) => {
   return (
      <input
         id={id}
         type={type}
         ref={inputRef}
         className="p-2 mb-8 border border-greyBorder rounded focus:outline-none"
      />
   );
}