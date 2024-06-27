export const PaginationPages = ({ numberOfPages, currentPage, setCurrentPage }) => {
  const pages = Array.from({ length: numberOfPages }, (_, index) => index + 1);

  return (
    <div className="bg-white flex border-y border-l border-greyBorder rounded-sm">
      {pages.map(page => (
        <div
          key={page}
          className={`flex justify-center text-customHeadingColor border border-r-greyBorder cursor-pointer w-11 py-1 ${page === currentPage && 'bg-customBlue text-white'}`}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </div>
      ))}
    </div>
  );
};