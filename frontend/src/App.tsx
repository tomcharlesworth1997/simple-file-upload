import FileUploader from "./components/FileUploader";
import PageContainer from "./components/PageContainer";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-blue">
      <PageContainer>
        <FileUploader />
      </PageContainer>
      <Footer />
    </div>
  );
}
