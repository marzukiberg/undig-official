import Image from "next/image";
import styles from "./index.module.css";

export const FrameNama = ({ type = 1, maleName, femaleName }) => {
  const FrameImage = () => {
    if (type === 2) {
      return (
        <Image
          src="/templates/2/embel/frame-nama.png"
          layout="fill"
          alt="Frame Nama"
          objectFit="contain"
        />
      );
    }
    if (type === 3) {
      return (
        <Image
          src="/templates/3/embel/frame-nama.png"
          layout="fill"
          alt="Frame Nama"
          objectFit="contain"
        />
      );
    }

    return (
      <Image
        width={300}
        height={300}
        src="/templates/1/embel/frame-nama.png"
        alt="Frame Nama"
      />
    );
  };

  const textColor = () => {
    switch (type) {
      case 2:
        return "text-green300";
      case 3:
        return "text-indigo300";
      default:
        return "text-pink-500";
    }
  };

  const nameColor = () => {
    switch (type) {
      case 2:
        return styles.content__name_2;
      case 3:
        return styles.content__name_3;
      default:
        return "";
    }
  };

  return (
    <div className="content__names-holder relative text-center wow fadeInUp">
      <div className="w-full h-80 flex justify-center items-center">
        <FrameImage />
      </div>
      <div
        className={`content__names text-center w-full text-4xl ${textColor()} absolute top-1/2 left-0 transform -translate-y-1/2 font-salsa font-bold`}
      >
        <div className={nameColor()}>{maleName}</div>
        <div>&</div>
        <div className={nameColor()}>{femaleName}</div>
      </div>
    </div>
  );
};
