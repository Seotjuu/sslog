import Button from "@/components/Button";
import Link from "@/components/Link";
import { PanelBody, PanelContainer, PanelFooter } from "@/components/Panel";
import Container from "@/components/containers/Container";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center bg-black text-white py-3 mobile:px-5 tablet:px-[10%] laptop:px-[20%] desktop:px-[20%]">
      <h1 className="mobile:text-3xl tablet:text-4xl laptop:text-5xl desktop:text-4xl">
        SSLOG
      </h1>
      <div className="flex justify-center gap-2">
        <Button variant="light">
          <Link href={"/signin"}>로그인</Link>
        </Button>
        <Button variant="dark">
          <Link href={"/signup"}>회원가입</Link>
        </Button>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <Container fluid>
      <Navbar />

      <Container className="flex flex-wrap">
        <PanelContainer>
          <PanelBody title="게시물 제목1">게시물 내용</PanelBody>
          <PanelFooter author="작성자" date="2024-03-06" />
        </PanelContainer>
        <PanelContainer>
          <PanelBody title="게시물 제목2">게시물 내용</PanelBody>
          <PanelFooter author="작성자" date="2024-03-06" />
        </PanelContainer>
        <PanelContainer>
          <PanelBody title="게시물 제목3">게시물 내용</PanelBody>
          <PanelFooter author="작성자" date="2024-03-06" />
        </PanelContainer>
        <PanelContainer>
          <PanelBody title="게시물 제목4">게시물 내용</PanelBody>
          <PanelFooter author="작성자" date="2024-03-06" />
        </PanelContainer>
        <PanelContainer>
          <PanelBody title="게시물 제목5">게시물 내용</PanelBody>
          <PanelFooter author="작성자" date="2024-03-06" />
        </PanelContainer>
        <PanelContainer>
          <PanelBody title="게시물 제목6">게시물 내용</PanelBody>
          <PanelFooter author="작성자" date="2024-03-06" />
        </PanelContainer>
        <PanelContainer>
          <PanelBody title="게시물 제목7">게시물 내용</PanelBody>
          <PanelFooter author="작성자" date="2024-03-06" />
        </PanelContainer>
        <PanelContainer>
          <PanelBody title="게시물 제목8">게시물 내용</PanelBody>
          <PanelFooter author="작성자" date="2024-03-06" />
        </PanelContainer>
        <PanelContainer>
          <PanelBody title="게시물 제목9">게시물 내용</PanelBody>
          <PanelFooter author="작성자" date="2024-03-06" />
        </PanelContainer>
        <PanelContainer>
          <PanelBody title="게시물 제목10">게시물 내용</PanelBody>
          <PanelFooter author="작성자" date="2024-03-06" />
        </PanelContainer>
      </Container>
    </Container>
  );
};

export default Home;
