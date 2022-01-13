import Image from "next/image";

export const CardLanding = (props) => {
  const { children, className } = props;
  return (
    <div
      className={
        `card shadow-lg border rounded-lg bg-white ${
          !className?.includes("p-") && "p-6"
        } space-y-3 transform hover:-translate-y-2 duration-300 ` + className
      }
    >
      {children}
    </div>
  );
};

export const CardMempelai = ({ name, img, parentLabel, parent, reverse }) => {
  return (
    <div
      className={`flex ${
        reverse ? "flex-row-reverse" : ""
      } gap-x-3 rounded-xl  bg-white shadow-lg border group wow fadeInUp`}
    >
      <div
        className="w-32 h-52 rounded-xl shadow-lg
      transform group-hover:-translate-y-3 duration-300 overflow-hidden"
      >
        <Image layout="fill" src={img} objectFit="cover" />
      </div>
      <div className="text-center space-y-2 p-2 flex-grow">
        <h2 className="text-xl text-yellow-400 font-salsa">{name}</h2>
        <Image
          width={100}
          height={4}
          layout="responsive"
          objectFit="contain"
          src="/templates/1/embel/underline-nama-mempelai.png"
          className="underline w-full"
        />
        <div className="space-y-0 font-quicksand">
          <p className="font-bold">{parentLabel}</p>
          {parent.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
