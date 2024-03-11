const FormContainer = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <form
        className={`py-3 mobile:px-5 tablet:px-[10%] laptop:px-[20%] desktop:px-[20%] ${className}`}
      >
        {children}
      </form>
    );
  };
  
  export default FormContainer;
  