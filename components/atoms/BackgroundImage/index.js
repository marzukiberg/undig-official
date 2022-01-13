import Image from "next/image";

export const BackgroundImageTemplate = (props) => {
  const { src, className, noOverlay } = props;
  return (
    <>
      <div
        className={
          "background absolute left-0 top-0 w-full h-full object-cover -z-1 " +
          className
        }
      >
        <Image
          src={src}
          layout="fill"
          alt="background"
          quality={100}
          objectFit="cover"
        />
      </div>
      {!noOverlay && (
        <div className="background-opacity absolute left-0 top-0 w-full min-h-full -z-1 bg-white bg-opacity-50"></div>
      )}
    </>
  );
};
