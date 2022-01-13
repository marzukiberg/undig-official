import PropTypes from 'prop-types'

const Container = (props) => {
  const { children, className } = props;
  
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
Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}
export default Container;
