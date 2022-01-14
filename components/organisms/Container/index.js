import Image from "next/image";

export const Container = ({ children, className, useFrame = false }) => {
  return (
    <div
      className={
        "container mx-auto p-6 min-h-screen flex items-center justify-center " +
        className
      }
    >
      <div>{children}</div>
      {useFrame && (
        <div className="absolute top-0 left-0 w-full h-full -z-1">
          <Image
            layout="fill"
            objectFit="contain"
            src="/templates/1/embel/frame.png"
            alt="Frame"
            className="absolute"
          />
          <div className="mx-auto h-full p-3 pt-12">
            <div
              className="w-full min-h-full rounded-t-xl"
              style={{
                boxShadow: "inset 0 4px 4px rgba(0,0,0,0.2)",
              }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export const ContainerTemplate = ({
  children,
  className,
  useFrame = false,
}) => {
  return (
    <>
      <div className="container w-full table min-h-screen p-6 pt-16">
        <div
          className={`table-cell align-middle text-center space-y-6 ${className}`}
        >
          {children}
        </div>
        {useFrame && (
          <div className="absolute top-0 left-0 w-full h-full -z-1">
            <img
              src="/templates/1/embel/frame.png"
              alt="Frame"
              className="absolute"
            />
            <div className="mx-auto h-full p-3 pt-12">
              <div
                className="w-full min-h-full rounded-t-xl"
                style={{
                  boxShadow: "inset 0 4px 4px rgba(0,0,0,0.2)",
                }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
