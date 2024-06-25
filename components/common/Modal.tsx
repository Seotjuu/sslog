import { IoClose } from "react-icons/io5";

interface IModalProps {
  children: React.ReactNode;
  className?: string;
  size: "sm" | "md" | "lg" | "full";
  isOpen: boolean;
  modalButton: React.ReactNode;
}

const ModalHeader = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<SVGElement>;
}) => {
  return (
    <div className="flex justify-between items-center px-5 py-3 text-xl">
      <div className="font-bold">{children}</div>
      <button
        type="button"
        className="text-gray-500 hover:bg-gray-200 hover:rounded-lg transition-all duration-300"
      >
        <IoClose size={30} onClick={onClick} />
      </button>
    </div>
  );
};

const ModalBody = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col border-y w-full mobile:px-[5%] tablet:px-[10%] laptop:px-[5%] desktop:px-[10%]">
      {children}
    </div>
  );
};

const ModalFooter = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-end">
      <div className="flex gap-2 px-5 py-3">{children}</div>
    </div>
  );
};

const Modal = ({ children, size, isOpen, modalButton }: IModalProps) => {
  let sizeStyle = "";
  switch (size) {
    case "sm":
      sizeStyle = "mobile:w-3/4 tablet:w-4/12 laptop:w-3/12 desktop:w-1/5";
      break;
    case "md":
      sizeStyle = "mobile:w-11/12 tablet:w-7/12 laptop:w-5/12 desktop:w-1/4";
      break;
    case "lg":
      sizeStyle = "mobile:w-11/12 tablet:w-9/12 laptop:w-7/12 desktop:w-1/3";
      break;
    case "full":
      sizeStyle = "w-11/12";
      break;
  }

  return (
    <div>
      {modalButton}
      <div
        className={`top-0 left-0 absolute w-full h-full flex justify-center items-center bg-[#0006] ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } transition-all duration-300`}
      >
        {/* modal container */}
        <div className={`${sizeStyle} bg-white`}>{children}</div>
      </div>
    </div>
  );
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
