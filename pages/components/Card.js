import PropTypes from 'prop-types'

const Card = (props) => {
  const { children, className } = props
  return (
    <div
      className={
        `card shadow-lg border rounded-lg bg-white ${
          !className?.includes('p-') && 'p-6'
        } space-y-3 transform hover:-translate-y-2 duration-300 ` + className
      }
    >
      {children}
    </div>
  );
};
Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}
export default Card;