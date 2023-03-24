import Nav from "./components/Nav/Nav";
import ArticleText from "./components/Article/ArticleText";
import ArticleImg from "./components/Article/ArticleImg";
import Testimonials from "./components/Testimonials/Testimonials";
import Photo from "./components/Photos";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="w-full min-h-screen">
      {/* Nav Component */}
      <Nav></Nav>

      {/* Article Component */}
      <div className="grid grid-rows-3 grid-cols-2 max-md:grid-cols-1">

        <ArticleImg img="bg-image-transform" visibility={"max-md:visible max-md:relative invisible absolute"} ></ArticleImg>
        <ArticleText title="Transform your brand" description="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."></ArticleText>
        <ArticleImg img="bg-image-transform" visibility={"max-md:invisible max-md:absolute"}></ArticleImg>

        <ArticleImg img="bg-image-stand-out"></ArticleImg>
        <ArticleText title="Stand out to the right audience" description="Using a collaborative formula of designer, researches, photographers, videographers, and coprywriters, we'll build and extend your brand in digital places."></ArticleText>

        <ArticleImg img="bg-imgDesign" title="Graphic Design" description="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients attenion." color="text-Primary-DesaturatedCyan" visibility={"h-[35rem]"}></ArticleImg>
        <ArticleImg img="bg-image-photography" title="Photography" description="increase your credibility by getting the most stunning, high-quaility photos that imprrove your business image." color="text-Primary-darkBlue" visibility={"h-[35rem]"}></ArticleImg>
      </div>



      {/* Testimonials Component */}
      <Testimonials></Testimonials>

      {/* Photos Components */}
      <div className="grid grid-cols-4 grid-rows-1 max-md:grid-cols-2">
        <Photo img="bg-imgMilk"></Photo>
        <Photo img="bg-imgOrange"></Photo>
        <Photo img="bg-imgCone"></Photo>
        <Photo img="bg-imgSugarCubes"></Photo>
      </div>

      {/* Footer Component */}
      <Footer></Footer>
    </div>
  )
}

export default App
