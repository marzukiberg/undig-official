import styles from "./index.module.css";
export const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-10 w-full h-full flex items-center justify-center bg-black bg-opacity-20">
      <div className={styles["lds-ripple"]}>
        <div />
        <div />
      </div>
    </div>
  );
};
