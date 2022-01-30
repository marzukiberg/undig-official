import Scrollbar from "react-scrollbars-custom";

export const CustomScrollbar = ({ children, bgTrackY, bgThumbY }) => {
  return (
    <Scrollbar
      className="max-w-sm mx-auto min-h-screen overflow-x-hidden shadow-xl"
      trackYProps={{
        renderer: (props) => {
          const { elementRef, ...restProps } = props;
          return (
            <span
              {...restProps}
              ref={elementRef}
              className={`trackY ${bgTrackY}`}
            />
          );
        },
      }}
      thumbYProps={{
        renderer: (props) => {
          const { elementRef, ...restProps } = props;
          return (
            <span
              {...restProps}
              ref={elementRef}
              className={`thumbY ${bgThumbY}`}
            />
          );
        },
      }}
    >
      {children}
    </Scrollbar>
  );
};
