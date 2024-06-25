export const Input = ({ id, type }) => {
   return (
      <input
         id={id}
         type={type}
         className="p-2 mb-8 border border-greyBorder rounded focus:outline-none"
      />
   );
}