type ProgressBarProps = {
  totalPages?: number;
  currentPage?: number;
  completionRate?: number;
};

export default function ProgressBar({
  totalPages,
  currentPage,
  completionRate,
}: ProgressBarProps) {
  if (totalPages === 0) {
    return <div>Total de páginas não pode ser zero.</div>;
  }

  if (!completionRate && currentPage && totalPages) {
    const result = Math.floor((100 * currentPage) / totalPages);
    return (
      <div className="bg-gray-200 w-full sm:h-14 rounded overflow-hidden relative h-10">
        <div className="bg-green-500 h-full " style={{ width: `${result}%` }}>
          <p className="absolute top-[15%] left-[45%] font-title text-gray-700 sm:text-4xl text-2xl">
            {result}%
          </p>
        </div>
      </div>
    );
  } else if (completionRate) {
    return (
      <div className="bg-gray-200 w-full sm:h-14 rounded overflow-hidden relative h-10">
        <div
          className="bg-green-500 h-full "
          style={{ width: `${completionRate}%` }}
        >
          <p className="absolute top-[15%] left-[45%] font-title text-gray-700 sm:text-4xl text-2xl">
            {completionRate}%
          </p>
        </div>
      </div>
    );
  }
}
