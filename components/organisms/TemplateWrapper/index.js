import { BackgroundImageTemplate } from "@/components/atoms";
import Image from "next/image";

export const TemplateWrapper = ({
  children,
  backgroundImage,
  backgroundClasses = "",
  useFrame = false,
  wrapperClasses,
  noOverlay = false,
}) => {
  return (
    <section className="relative wow fadeIn">
      <BackgroundImageTemplate
        src={backgroundImage}
        className={backgroundClasses}
        noOverlay={noOverlay}
      />

      <div className="container w-full table min-h-screen p-6 pt-16">
        <div
          className={`table-cell align-middle text-center space-y-6 ${wrapperClasses}`}
        >
          {children}
        </div>
        {useFrame && (
          <div className="absolute top-0 left-0 w-full h-full -z-1">
            <div className="absolute w-full h-36">
              <Image
                layout="fill"
                src="/templates/1/embel/frame.png"
                alt="Frame"
                objectFit="contain"
              />
            </div>
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
    </section>
  );
};
