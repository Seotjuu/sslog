"use client";

interface IPanelContainer {
  children: React.ReactNode;
}

interface IPanelBody {
  children: React.ReactNode;
  title: string;
}

interface IPanelFooter {
  author: string;
  date: string;
}

export const PanelContainer = ({ children }: IPanelContainer) => {
  return (
    <div className="mobile:w-full tablet:w-[50%] laptop:w-1/3 desktop:w-1/4 p-1">
      <div className="border border-neutral-400 rounded-md">{children}</div>
    </div>
  );
};

export const PanelBody = ({ children, title }: IPanelBody) => {
  return (
    <div className="flex flex-col gap-2 p-5">
      <h1>{title}</h1>
      <div>{children}</div>
    </div>
  );
};

export const PanelFooter = ({ author, date }: IPanelFooter) => {
  return (
    <div className="w-full flex justify-between border-t border-neutral-400 rounded-b-md bg-gray-100 text-gray-500 p-3">
      {author} <span>{date}</span>
    </div>
  );
};
