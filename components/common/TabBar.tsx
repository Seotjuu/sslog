"use client";
import { useState } from "react";
import Button from "./Button";
import Select from "./Select";
import {
  ISelectLabelField,
  selectLabelField,
} from "@/constant/home/selectLabelField";

import { IoMdStar, IoIosList } from "react-icons/io";

const TabBar = () => {
  const [selected, setSelected] = useState<ISelectLabelField>(
    selectLabelField[0]
  );

  const handleChange = (e: React.MouseEvent<HTMLLIElement>) => {
    setSelected({
      value: e.currentTarget.getAttribute("value") as string,
      label: e.currentTarget.innerText,
    });
  };

  return (
    <div className="flex justify-between align-middle border-b py-4">
      <div className="flex gap-2">
        <Button variant="dark" className="flex gap-1">
          <IoMdStar size={20} /> 추천글
        </Button>
        <Button variant="light" className="flex gap-1">
          <IoIosList size={20} />
          전체글
        </Button>
      </div>
      <Select selected={selected}>
        {selectLabelField.map((label, index_st) => (
          <Select.Option
            key={index_st}
            value={label.value}
            onClick={handleChange}
          >
            {label.label}
          </Select.Option>
        ))}
      </Select>
    </div>
  );
};

export default TabBar;
