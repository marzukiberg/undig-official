export const H1Landing = ({ children, className }) => {
  return (
    <h1
      className={
        "text-center font-poppins text-xl font-bold text-gray-700 " + className
      }
    >
      {children}
    </h1>
  );
};
