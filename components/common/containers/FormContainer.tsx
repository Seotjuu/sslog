const FormContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <form
      className={`mobile:w-full tablet:w-3/4 labtop:w-full desktop:w-2/5 py-3 mobile:px-[10%] tablet:px-[15%] laptop:px-[15%] desktop:px-[5%] ${className}`}
    >
      {children}
    </form>
  );
};

export default FormContainer;
