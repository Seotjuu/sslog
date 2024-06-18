const FormContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <form
      className={`mobile:w-full tablet:w-3/4 laptop:w-6/12 desktop:w-2/5 py-3 mobile:px-[5%] tablet:px-[10%] laptop:px-[5%] desktop:px-[5%] ${className}`}
    >
      {children}
    </form>
  );
};

export default FormContainer;
