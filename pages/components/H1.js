import PropTypes from 'prop-types'

const H1 = ({ children, className }) => {
  return (
    <h1
      className={
        'text-center font-poppins text-xl font-bold text-gray-700 ' + className
      }
    >
      {children}
    </h1>
  );
};

H1.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default H1;
