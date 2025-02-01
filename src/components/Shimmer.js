const Shimmer = () => {
  return (
    <div className="bg-black bg-opacity-80 mt-2">
        <h1 className="text-white text-3xl font-semibold p-2 text-center">Loading.....</h1>
      <div className="p-6 bg-black flex gap-4 overflow-x-scroll mt-4">
        <div className="w-48 h-72 bg-gray-700 rounded-md animate-pulse"></div>
        <div className="w-48 h-72 bg-gray-700 rounded-md animate-pulse"></div>
        <div className="w-48 h-72 bg-gray-700 rounded-md animate-pulse"></div>
        <div className="w-48 h-72 bg-gray-700 rounded-md animate-pulse"></div>
        <div className="w-48 h-72 bg-gray-700 rounded-md animate-pulse"></div>
        <div className="w-48 h-72 bg-gray-700 rounded-md animate-pulse"></div>
        <div className="w-48 h-72 bg-gray-700 rounded-md animate-pulse"></div>
      </div>
      <div className="p-6 bg-black flex gap-4 overflow-x-scroll mt-4">
        <div className="w-48 h-72 bg-gray-700 rounded-md animate-pulse"></div>
        <div className="w-48 h-72 bg-gray-700 rounded-md animate-pulse"></div>
        <div className="w-48 h-72 bg-gray-700 rounded-md animate-pulse"></div>
        <div className="w-48 h-72 bg-gray-700 rounded-md animate-pulse"></div>
        <div className="w-48 h-72 bg-gray-700 rounded-md animate-pulse"></div>
        <div className="w-48 h-72 bg-gray-700 rounded-md animate-pulse"></div>
        <div className="w-48 h-72 bg-gray-700 rounded-md animate-pulse"></div>
      </div>
    </div>
  );
};
export default Shimmer;
