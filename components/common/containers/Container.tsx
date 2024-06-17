const Container = ({
  children,
  fluid,
  className,
  style,
}: {
  children: React.ReactNode;
  fluid?: boolean;
  className?: string;
  style?: React.CSSProperties;
}) => {
  return fluid ? (
    <div className={`w-full h-full py-3 ${className}`} style={style}>
      {children}
    </div>
  ) : (
    <div
      className={`${className} w-full h-full py-3 mobile:px-5 tablet:px-[10%] laptop:px-[20%] desktop:px-[20%]`}
      style={style}
    >
      {children}
    </div>
  );
};

export default Container;
