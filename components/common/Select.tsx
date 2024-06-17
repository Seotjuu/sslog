import React, { useEffect, useRef, useState } from "react";

import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

interface SelectProps {
  children: any;
  className?: string;
  selected: {
    label: string;
    value: string;
  };
}
interface OptionProps {
  children: React.ReactNode;
  value: string;
  onClick: (e: React.MouseEvent<HTMLLIElement>) => void;
}

const Option = ({ children, value, onClick }: OptionProps) => {
  return (
    <li
      className="w-full p-1 text-center hover:bg-gray-100"
      value={value}
      onClick={onClick}
    >
      {children}
    </li>
  );
};

const Select = ({ children, className, selected }: SelectProps) => {
  const [show, setShow] = useState<boolean>(false);

  const outsideRef = useRef<HTMLDivElement>(null);
  const clickHandler = () => {
    setShow(!show);
  };

  // outside click event
  useEffect(() => {
    document.addEventListener("mousedown", (e: any) => {
      if (outsideRef.current && !outsideRef.current.contains(e.target)) {
        setShow(false);
      }
    });
  }, []);

  useEffect(() => {
    setShow(false);
  }, [selected]);

  return (
    <div
      className={`relative border rounded-sm duration-100 ${className}`}
      ref={outsideRef}
    >
      <div
        className="flex gap-2 items-center py-1 px-2 cursor-pointer"
        onClick={clickHandler}
      >
        {selected.label}
        <div className="flex flex-col align-middle">
          <IoIosArrowUp size={10} />
          <IoIosArrowDown size={10} />
        </div>
      </div>
      <ul
        className={`w-full absolute border rounded-sm bg-white my-1 cursor-pointer ${
          !show && "hidden"
        }`}
      >
        {children}
      </ul>
    </div>
  );
};

Select.Option = Option;

export default Select;
