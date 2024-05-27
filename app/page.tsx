import { PanelBody, PanelContainer, PanelFooter } from "@/components/Panel";
import TabBar from "@/components/TabBar";
import Container from "@/components/containers/Container";

const Home = () => {
  return (
    <Container fluid>
      <Container className="flex flex-col gap-2">
        <TabBar />

        <div className="flex flex-wrap">
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
        </div>
      </Container>
    </Container>
  );
};

export default Home;
