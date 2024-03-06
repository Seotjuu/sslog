const Container = ({
  children,
  fluid,
  className,
}: {
  children: React.ReactNode;
  fluid?: boolean;
  className?: string;
}) => {
  return fluid ? (
    <div className={`w-full h-full ${className}`}>{children}</div>
  ) : (
    <div
      className={`w-full h-full py-3 mobile:px-5 tablet:px-[10%] laptop:px-[20%] desktop:px-[20%] ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
