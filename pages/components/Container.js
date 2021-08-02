export default Container = ({ children, className }) => {
  return (
    <div
      className={
        'container mx-auto p-6 max-w-6xl lg:min-h-screen table ' + className
      }
    >
      <div className="table-cell align-middle">{children}</div>
    </div>
  );
};
