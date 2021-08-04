import PropTypes from 'prop-types';

const BackgroundImage = (props) => {
  const {src, className, noOverlay} = props;
  return (
    <div>
      <img
        src={src}
        alt="background"
        className={
          'background absolute left-0 top-0 w-full h-full object-cover -z-1 ' +
          className
        }
      />
      {!noOverlay && (
        <div className="background-opacity absolute left-0 top-0 w-full min-h-full -z-1 bg-white bg-opacity-50"></div>
      )}
    </div>
  );
};

BackgroundImage.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
  noOverlay: PropTypes.bool,
};
BackgroundImage.defaultProps = {
  noOverlay: false,
};

export default BackgroundImage;
