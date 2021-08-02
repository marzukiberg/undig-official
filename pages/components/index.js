const MainContainer = ({ customClasses, children }) => {
  return (
    <section
      className={`${customClasses} d-flex flex-column justify-content-center align-items-center`}
    >
      {children}
    </section>
  );
};

const ContainerWithHolder = ({ children, id, customClasses }) => (
  <section
    id={id}
    className={`${customClasses} mempelai with_frame d-flex flex-column pb-5`}
  >
    {children}
  </section>
);
export { MainContainer, ContainerWithHolder };
