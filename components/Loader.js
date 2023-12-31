const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full  absolute right-0 top-0 z-10">
      <div className="flex items-center justify-center h-screen w-full  backdrop-blur-sm  absolute right-0 top-0 z-10"></div>
      <div className="flex items-center">
        <div className="w-24 h-24 bg-blue-700 rounded-full animate-ping mr-2" style={{animationDuration:"0.5s"}}></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
