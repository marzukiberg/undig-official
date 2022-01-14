export const LoveStoryBox = ({ left, right, year, children }) => {
  const getStyles = () => {
    switch (true) {
      case left:
        return {
          paddingBottom: "100%",
        };
      case right:
        return {
          paddingTop: "100%",
        };
      default:
        return {
          paddingBottom: "100%",
        };
        break;
    }
  };
  return (
    <div className="col-span-1" style={getStyles()}>
      <div className="bg-white py-6 px-3 w-full shadow-lg space-y-1 font-roboto box-border">
        <h2 className="font-poppins font-bold">{year}</h2>
        <p className="text-xs">{children}</p>
      </div>
    </div>
  );
};

export const LoveStoryVLine = ({ colorClass = "bg-pink-500" }) => {
  return (
    <div className="absolute h-full w-1 bg-gray-700 rounded-t-full left-1/2 transform -translate-x-1/2 z-10">
      <div
        className={`absolute w-4 h-12 rounded-full ${colorClass} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
      ></div>
    </div>
  );
};
