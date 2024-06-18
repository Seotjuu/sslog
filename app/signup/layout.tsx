export const metadata = {
  title: "SSLOG | 회원가입",
  description: "SSLOG : 부끄럽지만 가족같은 친구들의 쓸데없는 블로그, 쓸로그",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="bg-[#fcfcfc] border-[#eeeeee] border-b py-3 text-2xl mobile:px-5 tablet:px-[10%] laptop:px-[20%] desktop:px-[20%]">
        회원가입
      </div>
      {children}
    </div>
  );
};

export default layout;
