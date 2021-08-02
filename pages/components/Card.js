export const Card = ({ children, className }) => {
  return (
    <div
      className={
        `card shadow-lg border rounded-lg bg-white ${
          !className.includes('p-') && 'p-6'
        } space-y-3 transform hover:-translate-y-2 duration-300 ` + className
      }
    >
      {children}
    </div>
  );
};
